# Just Another Text Editor: A Progressive Web Application

![Screenshot 2023-06-19 130733](https://github.com/mathminx/Text-Editor/assets/122234007/b0880b9a-959d-47f5-8a71-22e4ee354dab)


## Description

This text editor is a single-page application that allows users to create notes or code snippets that can be retrieved for later use. This PWA evolved from an existing application to which data retrieval and storage methods were added. It automatically saves content inside the text editor when the DOM window is unfocused. The application meets the criteria for a progressive web application (PWA):  It can be run in a browser, but can also be installed on a user's device where it functions without an internet connection (i.e. offline). 

Data is stored in an IndexedDB database augmented by `idb`, a lightweight wrapper around the IndexedDB API that features a number of useful methods for data handling. The code was bundled with webpack, and includes both a service worker (created with workbox) that caches static assets, and a `manifest.json` generated using the `WebpackPwaManifest` plug-in. The application also uses Babel, a JavaScript compiler that takes code written in the latest version(s) of JavaScript and transpiles it for down-compatability with most browsers.

---

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

---

## Installation

The application is deployed to Heroku at the following URL: 

https://afternoon-peak-85949-3ff0e5acd962.herokuapp.com/


To install the application locally, do the following:
  
* Run `npm install` to install the dependencies. 
* Run `npm start` to invoke the application.
* Navigate to `Localhost:3000` in a browser window.

---

The following image shows the application's `manifest.json` file:

![image](https://github.com/mathminx/Text-Editor/assets/122234007/3aeab8ed-b8f2-4023-ad36-9ae02d138713)

The following image shows the application's registered service worker:

![image](https://github.com/mathminx/Text-Editor/assets/122234007/bd5d7934-b9b9-4077-b66a-62defde26f05)

The following image shows the application's IndexedDB storage:

![image](https://github.com/mathminx/Text-Editor/assets/122234007/c0c93407-a244-4023-93f7-91411680e499)

---

## Usage

When you open the text editor for the first time, the application's single page is presented.

![image](https://github.com/mathminx/Text-Editor/assets/122234007/e8fc0fdf-ae52-4230-8c25-a60299a87aca)


You are able to see that IndexedDB immediately created database storage.  

![image](https://github.com/mathminx/Text-Editor/assets/122234007/cd748c83-e25c-4d0b-9a4b-72a7a56219b4)


When you enter content and subsequently click off of the DOM window, your note is saved with IndexedDB. When you reopen the text editor after closing it, your saved content is retrieved and displayed. 

![image](https://github.com/mathminx/Text-Editor/assets/122234007/9bac455a-b373-4abb-846c-2622eb833e77)


To install the application on your device, click on the `Install` button. 

![image](https://github.com/mathminx/Text-Editor/assets/122234007/5395b630-484d-4231-b098-ce6790875965)


Click the `Install` button in the alert to continue with the installation, or click cancel to return to the browser. 

![image](https://github.com/mathminx/Text-Editor/assets/122234007/656ff199-b667-4849-b13b-653e324895cd)


When the application is installed, an icon is created on your desktop.

![image](https://github.com/mathminx/Text-Editor/assets/122234007/8df86500-cdb4-4a0d-bd08-7bd147348204)


You can now use the text editor offline. 

---

## License

 This project is licensed under the terms of the MIT license.

 ![License: ](https://img.shields.io/badge/License-MIT-blueviolet.svg)

--- 

## Badges

![alt text](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)  ![alt text]( https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)  ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)  

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  ![edX](https://img.shields.io/badge/edX-%2302262B.svg?style=for-the-badge&logo=edX&logoColor=white)

