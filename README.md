# What you'll get?
### NodeJS empty project with installed:
**1. jQuery**

**2. Bootstrap**

**3. Javascript ES6 & ES7 support**

# Prerequisites
**1. nodejs & npm**

**2. webpack should be installed globally. To do it you can run:**
```sh
$ sudo npm install webpack -g
```

# Getting started with [webpack-starter-light](https://github.com/RomanPanchenko/webpack-starter-light)
**1. Clone the git repository to your local folder**
```sh
$ git clone https://github.com/RomanPanchenko/webpack-starter-light.git
```
**2. Go to directory with just downloaded repository**
```sh
$ cd webpack-starter-light
```
**3. Install node packages.**
```sh
$ npm i
```
**4. Run webpack. It builds js, css & sass and watch for their changes.**
```sh
$ webpack
```
# Possible problems & solutions
**1. You may have already installed some node moduled. To remove them locally please run**
```sh
$ rm -rf ./node_modules
```
**2. You may have already incorrect cached some node moduled. To remove them from local cache please run**
```sh
$ npm cache clean
```

# Project structure

**1. /public/dist - for built css & js**

**2. /public/js/entry.js - entry point for Webpack builder. You may require all js files in here, and they will be put into /public/dist/main.js**

**3. /public/scss/main.scss - file where you may include all css & scss files, and thay will be put into /public/dist/main.css**

**4. /public/index.html - base html file to run**

### That's it!


