# Snipit Social
A place for devs & designers to meet and share.

![GitHub language count](https://img.shields.io/github/languages/count/gloriousLoaf/Snipit-Social)
![GitHub top language](https://img.shields.io/github/languages/top/gloriousLoaf/Snipit-Social)

## Table of Contents
* [Description](#-description)
* [Installation](#-installation)
* [Usage](#-usage)
* [Images](#-images)
* [Future Development](#-future-development)
* [License](#-license)
* [Tools](#-tools)
* [Contributors](#-contributors)
* [Resources](#-qesources)
* [Questions](#-questions)
<p>&nbsp;</p>

## 📝 Description
Snipit Social is a lightweight social media web app that currently allows users to signup and login with encrypted authentication, create and edit a personal profile, author posts to share in a communal feed, and hop into chatrooms to share disappearing messages in real time. This app is designed as away for developers to connect in ways that widely-used services like GitHub do not offer, and allows for a focused way of collaborating without the all-issues nature of Twitter. No ads, no tracking or targeting, no bots. Future development and features are noted below.
<p>&nbsp;</p>

## 💾 Installation
This is a **MERN** full stack app. We built this app to store data using **MongoDB Atlas** cloud hosting. Please [see their docs for information](https://docs.atlas.mongodb.com/) regarding setting up a cluster for this app. To start your own instance, clone this repository and run ``` npm install ``` from the root directory. Then ``` cd client ``` and run another install to complete the dependencies.
**Local Instance:** To test and develop locally, open a **MongoDB** enabled terminal window, navigate to the root directory and run ``` mongod ``` to start the server listening. Unless altered, all data will hit your cloud database by default. Then in a new terminal, run ``` npm run dev ``` from the root. This script tells npm *Concurrently* to start both servers listening at ports 3000 and 5000 respectively. Launch your browser, navigate to ``` localhost:3000 ``` and begin using Snipit Social!
**Web Instance:** Connect your MongoDB cloud cluster to you preferred cloud platform for website hosting. We used **[Heroku](https://devcenter.heroku.com/)** to deploy this app, go here to checkout 👉 **[Snipit Social](https://snipit-social.herokuapp.com/)** in action.
<p>&nbsp;</p>

## 📲 Usage
Users start their experience at our landing page, where they may sign up for a new account or login to their existing account after signing in , users may use the navbar to travel around Snipit Social, making posts on the feed and viewing and updating their profile. They can also view others' profiles, follow or unfollow or hangout in the chatrooms. This app is a mobile-first **PWA** so users can install it on their devices and check in anytime to share new ideas.
<p>&nbsp;</p>

## 📷 Images
<img src="https://github.com/gloriousLoaf/Snipit-Social/blob/main/readme-imgs/snipit-feed.png" alt="Snipit Feed, making a post" height="225">
<p>&nbsp;</p>
<img src="https://github.com/gloriousLoaf/Snipit-Social/blob/main/readme-imgs/snipit-chat.png" alt="Snipit Feed, chat room" height="400">
<p>&nbsp;</p>

## 🔮 Future Development
* **More Login Methods** Google, Facebook, Twitter etc.
* **Direct Messaging** Right now, chat rooms are a non-sticky experience, while DM's will be persistant.
* **Sub-comments, Share, Report** To make things extra social.
* **Premium Tier** To access new features and buys us a cup of coffee for a couple dollars per month.

---
<p>&nbsp;</p>

## 👩‍⚖️ License
**MIT** • *(If you fork and recreate this, please be kind and rebrand your version!)*
<p>&nbsp;</p>

## 🤾‍♂️ Contributors
* [David Metcalf](https://github.com/gloriousLoaf) 
* [Eric Gip](https://github.com/EricGip)
* [Maurice Chouamou](https://github.com/mauricechouam)
* [Chase Johnson](https://github.com/chaseyb) 
<p>&nbsp;</p>

## 🔨 Tools 
* [React](https://reactjs.org/), [React-Redux](https://react-redux.js.org/) and [React-Bootstrap](https://react-bootstrap.github.io/)
* [MongoDDB](), [Express]() and [Node]()
* [Socket.io]() for our **chat rooms** and soon direct messaging.
* [Passport](http://www.passportjs.org/), [GitHub Oauth2](https://docs.github.com/en/developers/apps/authorizing-oauth-apps) and [bcryptjs](https://www.npmjs.com/package/bcryptjs) for authentication.

## 📚 Resources
Some helpful information that helped our development process:
* [React Router](https://reacttraining.com/react-router/)
* [Proxying API Requests in Development](https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development)
* [React Lifecycle Methods Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
* [Presentational vs. Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
<p>&nbsp;</p>

## ❔ Questions?
  * **David Metcalf**
  * **GitHub:** [gloriousLoaf](https://github.com/gloriousLoaf)
  * <hello@metcalf.dev>
  * Or hitup one of the contributors above!

<img src="https://github.com/gloriousLoaf.png" alt="GitHub Profile Pic" width="125" height="125">
<p>&nbsp;</p>

---

##### This markdown was created with [Readme Generator](https://github.com/gloriousLoaf/Readme-Generator)
