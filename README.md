# Electron-APP
1. ## Electron 全局安装失败解决方案

   1. ###### Electron使用 npm 安装时，因为是国外的镜像源，所以速度会非常慢。而使用cnpm如下命令进行安装时，又会出现安装失败的问题：

      ```shell
      npm install electron -g
      execute post install 1 scripts...
      [1/1] scripts.postinstall electron@6.0.3 run "node install.js", root: "C:\\Users\\94012\\AppData\\Roaming\\npm\\node_modules\\electron"
      Downloading tmp-1428-0-electron-v6.0.3-win32-x64.zip
      Error: GET https://cdn.npm.taobao.org/dist/electron/6.0.3/electron-v6.0.3-win32-x64.zip returned 404
      C:\Users\94012\AppData\Roaming\npm\node_modules\electron\install.js:49
        throw err
        ^
        ......
      Error: Failed to find Electron v6.0.3 for win32-x64 at https://cdn.npm.taobao.org/dist/electron/6.0.3/electron-v6.0.3-win32-x64.zip
          at Request.<anonymous> 
        
      [npminstall:runscript:error] electron@6.0.3 scripts.postinstall run "node install.js" error: RunScriptError: Run "C:\Windows\system32\cmd.exe /d /s /c node install.js" error, exit code 1
      Install fail! RunScriptError: post install error, please remove node_modules before retry!
      Run "C:\Windows\system32\cmd.exe /d /s /c node install.js" error, exit code 1
      RunScriptError: post install error, please remove node_modules before retry!
      Run "C:\Windows\system32\cmd.exe /d /s /c node install.js" error, exit code 1
          at ChildProcess.proc.on.code 
       ......
      ```

      <hr>

   2. ###### 从报错原因上，发现是找不到这个版本的electron，然后返回404

      ```shell
      Downloading tmp-1428-0-electron-v6.0.3-win32-x64.zip
      Error: GET https://cdn.npm.taobao.org/dist/electron/6.0.3/electron-v6.0.3-win32-x64.zip returned 404
      ```

   3. ###### 所以找到原因就好说了，那就指定之前的版本安装即可，如：

      ```she
      cnpm install electron@^6.0.1 -g
      ```

2. ### 项目中安装并配置 Electron

   + 安装

     ```shell
     npm i electron@6.0.1 -S
     ```

   - 配置启动

     ```json
     {
         "script": {
             "start": "electron ."
         }
     }
     ```

3. ### Electron中的响应事件

   1. 原生事件
      - ready 
      - close 当前窗口关闭事件
      - window-all-closed 所有窗口关闭后触发的事件
      - activate  窗口激活后触发的事件
   2. 

4. ### Electron特性

   1. 支持多窗口应用，每一个窗口都会有自己独立的JavaScript上下文 
   2. 通过屏幕 API 整合桌面系统的特性，与本地开发语言编写的桌面应用的效果类似
   3. 支持阻止操作系统进入省电模式，对于一些演示文稿类的应用非常有用
   4. 支持创建托盘应用
   5. 支持创建菜单和菜单项
   6. 支持为应用增加全局键盘快捷键
   7. 支持获取计算机电源状态
   8. 支持热更新
   9. 支持汇报程序崩溃
   10. 支持自定义的 Dock 菜单项
   11. 支持操作系统通知
   12. 支持为应用程序创建启动安装器

5. ### 自动化脚本

   ```js
   // 自动化执行脚本
   let exec = require('child_process').exec;
   free = exec('election .');
   ```

   

6. 