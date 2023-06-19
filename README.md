# Text Editor PWA

This text editor is a single-page application that allows users to create notes or code snippets that can be retrieved for later use. This PWA evolved from an existing application to which data retrieval and storage methods were added. It automatically saves content inside the text editor when the DOM window is unfocused. The application meets the criteria for a progressive web application (PWA):  It can be run in a browser, but can also be installed on a user's device where it functions without an internet connection (i.e. offline). 

Data is stored in an IndexedDB database augmented by `idb`, a lightweight wrapper around the IndexedDB API that features a number of useful methods for data handling. The code was bundled with webpack, and includes both a service worker (created with workbox) that caches static assets, and a `manifest.json` generated using the `WebpackPwaManifest` plug-in. The application also uses Babel, a JavaScript compiler that takes code written in the latest version(s) of JavaScript and transpiles it for down-compatability with most browsers.


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)


## Installation

The application is deployed to Herokuat the following URL: 

(https://afternoon-peak-85949-3ff0e5acd962.herokuapp.com/)


To install the application locally, do the following:
  
* Run `npm install` to install the dependencies. 
* Run `npm start` to invoke the application.
* Navigate to `Localhost:3000` in a browser window.


## Usage

open application in editor
see a client server folder structure
`npm run start` from the root directory
application starts up the backend and serves the client
run the text editor application from a terminal
JavaScript files have been bundled using webpack
run webpack plugins
have a generated HTML file, service worker, and a manifest file
use next-gen JavaScript in my application
text editor still functions in the browser without errors
open the text editor
IndexedDB has immediately creates a database storage
enter content and subsequently click off of the DOM window
content in the text editor has been saved with IndexedDB
reopen the text editor after closing it
the content in the text editor has been retrieved from IndexedDB
click on the Install button
ownload web application as an icon on desktop
load web application
have a registered service worker using workbox
register a service worker
static assets pre cached upon loading along with subsequent pages and static assets


## Mock-Up

The following animation demonstrates the application functionality:

![Demonstration of the finished Module 19 Challenge being used in the browser and then installed.](./Assets/00-demo.gif)

The following image shows the application's `manifest.json` file:

![Demonstration of the finished Module 19 Challenge with a manifest file in the browser.](./Assets/01-manifest.png)

The following image shows the application's registered service worker:

![Demonstration of the finished Module 19 Challenge with a registered service worker in the browser.](./Assets/02-service-worker.png)

The following image shows the application's IndexedDB storage:

![Demonstration of the finished Module 19 Challenge with a IndexedDB storage named 'jate' in the browser.](./Assets/03-idb-storage.png)


## License

 This project is licensed under the terms of the MIT license.

 ![License: ](https://img.shields.io/badge/License-MIT-blueviolet.svg)


## Badges

![alt text](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)  ![alt text]( https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)  ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)  ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)  ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)  ![Handlebars.js](https://a11ybadges.com/badge?logo=handlebarsdotjs)  ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  ![edX](https://img.shields.io/badge/edX-%2302262B.svg?style=for-the-badge&logo=edX&logoColor=white)

