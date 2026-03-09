const { app, BrowserWindow } = require('electron');
app.whenReady().then (()=> {
    const window = new BrowserWindow()
    window.loadFile('public/index.html'); //mindig meg kell adni hogy mit töltösön be!
})