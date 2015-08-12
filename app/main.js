var app = require('app'); 
var ipc = require('ipc'); 
var BrowserWindow = require('browser-window');  

require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is GCed.
var mainWindow = null;

app.on('window-all-closed', function() {
  console.log("quitting... 2")
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.loadUrl('file://' + __dirname + '/index.html');

//  mainWindow.openDevTools();

  mainWindow.on('closed', function() {
    console.log("quitting...")
//    mainWindow = nil
    app.quit()
  });
});

ipc.on('online-status-changed',function(event) {
  event.sender.send('hola',1234)
  console.log("icp.on::" +event)
})

//ipc.send('hello','there')
