const { app, BrowserWindow } = require('electron')

function createWindow () {
  const MainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: "ProSpeak",
    icon: './assets/logo.ico',
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
    },
  })
  MainWindow.setMenuBarVisibility(false)
  MainWindow.loadFile('./renderer/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
