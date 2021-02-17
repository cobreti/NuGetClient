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

        this._mainWindow.loadURL('https://www.pathofexile.com');
    }
}


let myApp = new MyApp();
myApp.run();
