const fs = require('fs');
const path = require('path');

// Replace with your actual website URL
const baseURL = 'https://www.cdcfishing.com';

const pages = [
  '/',      // Home page
  '/about', // Example: Add other pages as needed
  '/contact',
];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => `<url><loc>${baseURL}${page}</loc></url>`)
    .join('\n')}
</urlset>`;

const outputPath = path.resolve(__dirname, 'public/sitemap.xml');

fs.writeFileSync(outputPath, sitemapContent);

console.log(`Sitemap generated at ${outputPath}`);