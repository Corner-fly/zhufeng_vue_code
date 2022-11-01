初始化 npm 
···
npm init -v
...

安装依赖

建议安装指定版本，否侧运行不起来
···
cnpm install rollup@2.61.1 rollup-plugin-babel@4.4.0 @babel/core@7.16.0 @babel/preset-env@7.16.4 --save-dev
···

启动

npm run dev

package.json 配置 script

"dev": "rollup -c"  //运行 rollup 指定的配置文件
"dev": "rollup -cw"  //运行 rollup 指定的配置文件 并 监听变化
