const puppeteer = require('puppeteer');
const path = require('path');

async function captureSlide() {
    const browser = await puppeteer.launch({
        headless: "new"
    });
    const page = await browser.newPage();
    
    // Set viewport to 720p HD
    await page.setViewport({
        width: 1280,
        height: 720,
        deviceScaleFactor: 2, // High DPI for crisp text
    });
    
    // Load local HTML file
    const filePath = `file://${path.resolve(__dirname, 'slide.html')}`;
    await page.goto(filePath, { waitUntil: 'networkidle0' });
    
    // Save as JPG
    const outputPath = path.resolve(__dirname, 'Proses_Integrasi.jpg');
    await page.screenshot({
        path: outputPath,
        type: 'jpeg',
        quality: 100
    });
    
    console.log(`Saved screenshot to ${outputPath}`);
    await browser.close();
}

captureSlide().catch(console.error);
