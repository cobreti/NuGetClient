import {app, BrowserWindow} from "electron";
import * as path from "path";
import * as url from "url";


class MyApp {

    private _mainWindow: BrowserWindow;

    async run() {
        await app.whenReady();

        this._mainWindow = new BrowserWindow({
            width: 500,
            height: 500,
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: true
            }
        });

        await this._mainWindow.loadFile('renderer/index.html');
        this._mainWindow.webContents.openDevTools();
    }
}


let myApp = new MyApp();
myApp.run();
