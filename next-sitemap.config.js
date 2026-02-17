/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://rstorage.in',
    generateRobotsTxt: true,
    // optional
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://rstorage.in/server-sitemap.xml', // if we add dynamic sitemap later
        ],
    },
}
