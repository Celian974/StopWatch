const {app, BrowserWindow} = require('electron');

const createWindow = () => {
    const window = new BrowserWindow({
        width: 1920,
        height: 1080,
        resizable: false
    })
    window.loadFile('src/index.html')
};

app.whenReady().then(() => {
    createWindow()
});
