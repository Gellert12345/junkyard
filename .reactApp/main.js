import { app, BrowserWindow } from "electron";
import path from "path"; //ez arra jó hogy linux mac windwos ugyan ugy éréelje a file elérési utat
app.on("ready", () => {
    const mainWindow = new BrowserWindow({});
    mainWindow.loadFile(path.join(app.getAppPath() + "/dist-react/index.html"));
});
//fontos  a jsonba nem lehet kommentet irni!!!!!
