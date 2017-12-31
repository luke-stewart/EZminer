const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 800, height: 700 })

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'app.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.



// Menu and MenuItem modules can be used to create custom native menus.

// There are two kinds of menus: the application (top) menu and context (right-click) menu.

// Open the full API documentation(opens in new window) in your browser.

// Create an application menu
// SUPPORTS: WIN, MACOS, LINUX | PROCESS: MAIN
// The Menu and MenuItem modules allow you to customize your application menu. If you don't set any menu, Electron will generate a minimal menu for your app by default.

// This app uses the code below to set the application menu. If you click the 'View' option in the application menu and then the 'App Menu Demo', you'll see an information box displayed.

// Main Process

const Menu = electron.Menu
// const app = electron.app

let template = [{
  label: 'File',
  submenu: [{
    label: 'EZ Miner Home',
    // accelerator: 'CmdOrCtrl+R',
    click: function createWindowConfig() {
      // and load the index.html of the app.
      mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'app.html'),
        protocol: 'file:',
        slashes: true
      }))

      // Emitted when the window is closed.
      mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
      })
    }

  }, {
  //   label: 'Redo',
  //   accelerator: 'Shift+CmdOrCtrl+Z',
  //   role: 'redo'
  // }, {
  //   type: 'separator'
  // }, {
  //   label: 'Cut',
  //   accelerator: 'CmdOrCtrl+X',
  //   role: 'cut'
  // }, {
  //   label: 'Copy',
  //   accelerator: 'CmdOrCtrl+C',
  //   role: 'copy'
  // }, {
  //   label: 'Paste',
  //   accelerator: 'CmdOrCtrl+V',
  //   role: 'paste'
  // }, {
  //   label: 'Select All',
  //   accelerator: 'CmdOrCtrl+A',
  //   role: 'selectall'
  }]
}, {
  label: 'Configure',
  submenu: [{
    label: 'Configure EZ Miner',
    // accelerator: 'CmdOrCtrl+R',
    click: function createWindowConfig() {
      // and load the index.html of the app.
      mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'configure.html'),
        protocol: 'file:',
        slashes: true
      }))

      // Emitted when the window is closed.
      mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
      })
    }

  }, {
  //   label: 'Toggle Full Screen',
  //   accelerator: (function () {
  //     if (process.platform === 'darwin') {
  //       return 'Ctrl+Command+F'
  //     } else {
  //       return 'F11'
  //     }
  //   })(),
  //   click: function (item, focusedWindow) {
  //     if (focusedWindow) {
  //       focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
  //     }
  //   }
  // }, {
    label: 'Toggle Developer Tools',
    accelerator: (function () {
      if (process.platform === 'darwin') {
        return 'Alt+Command+I'
      } else {
        return 'Ctrl+Shift+I'
      }
    })(),
  //   click: function (item, focusedWindow) {
  //     if (focusedWindow) {
  //       focusedWindow.toggleDevTools()
  //     }
  //   }
  // }, {
  //   type: 'separator'
  // }, {
  //   label: 'App Menu Demo',
  //   click: function (item, focusedWindow) {
  //     if (focusedWindow) {
  //       const options = {
  //         type: 'info',
  //         title: 'Application Menu Demo',
  //         buttons: ['Ok'],
  //         message: 'This demo is for the Menu section, showing how to create a clickable menu item in the application menu.'
  //       }
  //       electron.dialog.showMessageBox(focusedWindow, options, function () { })
  //     }
  //   }
  }]
}, {
  label: 'Window',
  role: 'window',
  submenu: [{
    label: 'Minimize',
    accelerator: 'CmdOrCtrl+M',
    role: 'minimize'
  }, {
    label: 'Close',
    accelerator: 'CmdOrCtrl+W',
    role: 'close'
  }, {
    type: 'separator'
  }, {
    label: 'Reopen Window',
    accelerator: 'CmdOrCtrl+Shift+T',
    enabled: false,
    key: 'reopenMenuItem',
    click: function () {
      app.emit('activate')
    }
  }]
}, {
  label: 'Help',
  role: 'help',
  submenu: [{
    label: 'Learn More',
    click: function () {
      electron.shell.openExternal('https://linkadinkadoo.github.io/EZminer/help')
    }
  }]
}]

function addUpdateMenuItems(items, position) {
  if (process.mas) return

  const version = electron.app.getVersion()
  let updateItems = [{
    label: `Version ${version}`,
    enabled: false
  }, {
    label: 'Checking for Update',
    enabled: false,
    key: 'checkingForUpdate'
  }, {
    label: 'Check for Update',
    visible: false,
    key: 'checkForUpdate',
    click: function () {
      require('electron').autoUpdater.checkForUpdates()
    }
  }, {
    label: 'Restart and Install Update',
    enabled: true,
    visible: false,
    key: 'restartToUpdate',
    click: function () {
      require('electron').autoUpdater.quitAndInstall()
    }
  }]

  items.splice.apply(items, [position, 0].concat(updateItems))
}

function findReopenMenuItem() {
  const menu = Menu.getApplicationMenu()
  if (!menu) return

  let reopenMenuItem
  menu.items.forEach(function (item) {
    if (item.submenu) {
      item.submenu.items.forEach(function (item) {
        if (item.key === 'reopenMenuItem') {
          reopenMenuItem = item
        }
      })
    }
  })
  return reopenMenuItem
}

if (process.platform === 'darwin') {
  const name = electron.app.getName()
  template.unshift({
    label: name,
    submenu: [{
      label: `About ${name}`,
      role: 'about'
    }, {
      type: 'separator'
    }, {
      label: 'Services',
      role: 'services',
      submenu: []
    }, {
      type: 'separator'
    }, {
      label: `Hide ${name}`,
      accelerator: 'Command+H',
      role: 'hide'
    }, {
      label: 'Hide Others',
      accelerator: 'Command+Alt+H',
      role: 'hideothers'
    }, {
      label: 'Show All',
      role: 'unhide'
    }, {
      type: 'separator'
    }, {
      label: 'Quit',
      accelerator: 'Command+Q',
      click: function () {
        app.quit()
      }
    }]
  })

  // Window menu.
  template[3].submenu.push({
    type: 'separator'
  }, {
      label: 'Bring All to Front',
      role: 'front'
    })

  addUpdateMenuItems(template[0].submenu, 1)
}

if (process.platform === 'win32') {
  const helpMenu = template[template.length - 1].submenu
  addUpdateMenuItems(helpMenu, 0)
}

app.on('ready', function () {
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
})

app.on('browser-window-created', function () {
  let reopenMenuItem = findReopenMenuItem()
  if (reopenMenuItem) reopenMenuItem.enabled = false
})

app.on('window-all-closed', function () {
  let reopenMenuItem = findReopenMenuItem()
  if (reopenMenuItem) reopenMenuItem.enabled = true
})

// ProTip
// Know operating system menu differences.
// When designing an app for multiple operating systems it's important to be mindful of the ways application menu conventions differ on each operating system.

// For instance, on Windows, accelerators are set with an &
