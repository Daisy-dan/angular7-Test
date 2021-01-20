# Angulardemo环境搭建

## 安装 nodejs 

node -v 查看node版本

## 安装 cnpm
npm 可能安装失败建议先用 npm 安装一下 cnpm 用淘宝镜像安装
npm install -g cnpm --registry=https://registry.npm.taobao.org

## 使用 npm/cnpm 命令安装 angular/cli

npm install -g @angular/cli 或者 cnpm install -g @angular/cli

ng v 查看各包版本
Angular CLI: 8.1.2
Node: 10.15.1
OS: darwin x64
Angular:
...


## Angular 创建项目
ng new angulardemo     

--skip-install 阻止自动安装 ng 包，只创建 ng 目录

## 运行项目
cd angulardemo
ng serve --open

## 工具安装angular插件
Angular 8 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout

Angular Language Service


## 创建组件
ng g component components/news
ng g service services/storage
ng g pipe pipe/welcome  --自定义管道


