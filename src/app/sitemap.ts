import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://misakdojo.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const locales = ['', '/en', '/ru'];

    const routes: MetadataRoute.Sitemap = [];

    // Головні сторінки
    locales.forEach((locale) => {
        routes.push({
            url: `${BASE_URL}${locale}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: locale === '' ? 1 : 0.9,
        });
    });

    // Інші статичні сторінки
    ['contract-offer', 'privacy-policy'].forEach((page) => {
        locales.forEach((locale) => {
            routes.push({
                url: `${BASE_URL}${locale}/${page}`,
                lastModified: new Date('2025-06-01'),
                changeFrequency: 'monthly',
                priority: 0.8,
            });
        });
    });

    // Новини
    const newsDir = path.join(
        process.cwd(),
        'src',
        'app',
        '[locale]',
        'news'
    );

    const newsPages = fs
        .readdirSync(newsDir, { withFileTypes: true })
        .filter((dirent) => {
            if (!dirent.isDirectory()) return false;

            const pageFile = path.join(
                newsDir,
                dirent.name,
                'page.tsx'
            );

            return fs.existsSync(pageFile);
        })
        .map((dirent) => dirent.name);

    newsPages.forEach((slug) => {
        locales.forEach((locale) => {
            routes.push({
                url: `${BASE_URL}${locale}/news/${slug}`,
                changeFrequency: 'yearly',
                priority: 0.6,
            });
        });
    });

    return routes;
}