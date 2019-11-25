const remote = require('electron').remote;

/**
 * @method getSize
 * @description 动态获取屏幕尺寸坐标
 */
let getSize = () => {
    const win = remote.getCurrentWindow();
    let width = win.getSize()[0],
        height = win.getSize()[1],
        x = win.getPosition()[0],
        y = win.getPosition()[1];
    console.log("宽度高度为: ", width, height);
    console.log("坐标为: ", x, y);
};
