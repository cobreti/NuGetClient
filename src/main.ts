import {app, BrowserWindow} from "electron";


class MyApp {

    private _mainWindow: BrowserWindow;

    async run() {
        await app.whenReady();

        this._mainWindow = new BrowserWindow({
            width: 500,
            height: 500,
            webPreferences: {
                nodeIntegration: false
            }
        });

        await this._mainWindow.loadFile('src/UI/dist/index.html')
        this._mainWindow.webContents.openDevTools();
    }
}


let myApp = new MyApp();
myApp.run();
