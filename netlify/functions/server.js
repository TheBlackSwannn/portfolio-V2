import fs from 'node:fs/promises';
import express from 'express';
import process from 'node:process';
import dotenv from 'dotenv';
import serverless from 'serverless-http';

dotenv.config();

// Constants
const isProduction = process.env.MODE === 'production';
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

const app = express();

async function main() {
    let templateHtml = '';
    let ssrManifest = undefined;

    // Cached production assets
    if (isProduction) {
        templateHtml = await fs.readFile('./dist/client/index.html', 'utf-8');
        ssrManifest = await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8');
    }

    let vite;
    if (!isProduction) {
        const { createServer } = await import('vite');
        vite = await createServer({
            server: { middlewareMode: true },
            appType: 'custom',
            base
        });
        app.use(vite.middlewares);
    } else {
        const compression = (await import('compression')).default;
        const sirv = (await import('sirv')).default;
        app.use(compression());
        app.use(base, sirv('./dist/client', { extensions: [] }));
    }

    // Serve HTML
    app.use('*', async (req, res) => {
        try {
            const url = req.originalUrl.replace(base, '');
            let template, render;

            if (!isProduction) {
                // Always read fresh template in development
                template = await fs.readFile('./index.html', 'utf-8');
                template = await vite.transformIndexHtml(url, template);
                render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
            } else {
                template = templateHtml;
                render = (await import('../../dist/server/entry-server.js')).render;
            }

            const rendered = await render('/' + url, ssrManifest);
            const html = template.replace(`<!--app-html-->`, rendered);

            res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
        } catch (e) {
            vite?.ssrFixStacktrace(e);
            console.log(e.stack);
            res.status(500).end(e.stack);
        }
    });

    // Start http server
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
}

main().catch(err => console.error(err));

export const handler = serverless(app);
