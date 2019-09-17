import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow, serve: boolean;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

function createWindow() {
  win = new BrowserWindow({
    width: 960,
    height: 700,
    backgroundColor: '#262A41',
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.removeMenu();

  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    });
    win.loadURL('http://localhost:4200');
    win.webContents.openDevTools();
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (win === null) createWindow();
});