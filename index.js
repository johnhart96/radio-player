// Constents
const {
    app,
    Menu,
    shell,
    ipcMain,
    BrowserWindow,
    globalShortcut,
    dialog
} = require('electron');

const isMac = process.platform === 'darwin';

// Variables
let window;

// Window
app.on('ready', () => {
  window = new BrowserWindow({
    width: 600,
    height: 800,
    title: "Radio Player",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    icon: './icons/logo.png',
  });
  window.loadFile('static/index.html');
});


// Closing
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
});

// Menu
const template = [
    {
        label: app.name,
        submenu: [
            { role: 'about' },
            { role: 'hide' },
            { role: 'quit' }
        ]
    },
    {
      label: 'Stations',
      submenu: [
        {
          label: 'Global Player',
          click: function() {
            window.loadURL('https://www.globalplayer.com/');
          }
        },
        {
          label: 'Planet Radio',
          click: function() {
            window.loadURL('https://planetradio.co.uk/');
          }
        }
      ]
    }
];
if (process.env.DEBUG) {
    template.push({
      label: 'Debugging',
      submenu: [
        {
          label: 'Dev Tools',
          role: 'toggleDevTools'
        },
  
        { type: 'separator' },
        {
          role: 'reload',
          accelerator: 'Alt+R'
        }
      ]
    });
  }
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);