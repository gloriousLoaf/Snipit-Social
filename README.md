# Coding-Society
A place for coders to share and create.

## Table of Contents ##
- [Team_Members](#Team_Members)
- [User_Story](#User_Story)
- [Technology Used](#Technology-Used)
- [Tasks](#Tasks)
- [Roles](#Roles)
- [Successes](#Successes)
- [Challenges](#Challenges)
- [Future-Development](#Future-Development)
- [Sources](#Resources)
- [Usage](#Usage)

## Team Members ##

* Eric Gip (https://github.com/EricGip)

* Chase Johnson (https://github.com/chaseyb) 

* David Metcalf (https://github.com/gloriousLoaf) 

* Kimya Fallah (https://github.com/kaishen33)

* Maurice Chouamou (https://github.com/mauricechouam)

## User Story ##
TBD....

## Technology Used

TBD...

## Tasks ##

* Groups / Live chat functionality
* A game room / way for people to relax or so 
* Viewing posts by topic (title) and by searching.
* Commenting on posts


## Roles ##

* Eric: ..
* David : ...
* Chase: ..
* Kimya:..
* Maurice : ...
 

## Successes ##

* Fully functional application.
TBD....

## Challenges ##

TBD...

## Future-Development ##

TBD...

## Sources ##
 [React Router](https://reacttraining.com/react-router/)
* [Proxying API Requests in Development](https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development)
* [React Lifecycle Methods Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
* [Presentational vs. Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
* TBD .....





## Usage:

inside base folder of coding society

$ npm i

$ cd client   
$ npm i   
 
 

(NPM WHEREVER YOU SEE A PACKAGE.JSON)

inside source folder `Coding-Society`

npm run dev will run both the server and react app.

$ `npm run dev`. 
   * this is because
   ```
     "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server/index.js",
    "backend": "nodemon server/index.js",
    "frontend": "npm run start --prefix client",
    "dev": "concurrently \"npm run backend\" \"npm run start --prefix client\""
   ```
Finally,  

`localhost:3001` instead of `localhost:3000`

----

look inside server/index.js for routes

DO ALL REACT STUFF / FRONT END INSIDE `CLIENT` FOLDER. 

DO ALL BACKEND / EXPRESS STUFF IN `SERVER`. 
