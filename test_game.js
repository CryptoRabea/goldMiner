const { chromium } = require('playwright');
const path = require('path');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    const errors = [];
    page.on('console', msg => {
        if (msg.type() === 'error') {
            errors.push(msg.text());
        }
    });
    
    page.on('pageerror', err => {
        errors.push(err.message);
    });
    
    const filePath = 'file://' + path.resolve(__dirname, 'index.html');
    await page.goto(filePath);
    
    // Wait for page to load
    await page.waitForTimeout(2000);
    
    // Check if main menu is visible
    const menuVisible = await page.isVisible('#main-menu');
    console.log('Main menu visible:', menuVisible);
    
    // Check if canvas exists
    const canvasExists = await page.isVisible('#game-canvas');
    console.log('Canvas exists:', canvasExists);
    
    if (errors.length > 0) {
        console.log('Errors found:', errors);
        process.exit(1);
    } else {
        console.log('No errors found! Game loaded successfully.');
    }
    
    await browser.close();
})();
