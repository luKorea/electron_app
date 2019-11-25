const { app, BrowserWindow, } = require('electron');

let parentWin, childWin;

createWindow = _ => {
    // 父窗口
    parentWin = new BrowserWindow({
        width: 600,
        height: 600
    });
    // 子窗口
    childWin = new BrowserWindow({width: 300, height: 300, parent: parentWin});
    // 加载index.html文件
    parentWin.loadFile('index.html');
    childWin.loadFile('child.html');

    // Mac中设置图片无效
    if (process.platform !== 'darwin') {
        parentWin.setIcon('../images/logo.ico');
        childWin.setIcon('../images/logo.ico');
    }
    // 当 window 被关闭，这个事件会被触发。
    parentWin.on('closed', _ => parentWin = null);
    childWin.on('closed', _ => childWin = null);
};

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow);

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (parentWin === null) {
        createWindow()
    }
});
