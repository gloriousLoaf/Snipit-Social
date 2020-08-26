# Coding-Society
A place for coders to share and create.

# How to use:

inside base folder of coding society

$ npm i

$ cd client   
$ npm i   
 
 

(NPM WHEREVER YOU SEE A PACKAGE.JSON)

inside source folder `Coding-Society`

npm run dev will run both the server and react app.

$ npm run dev
   * this is because
   ```
     "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server/index.js",
    "backend": "nodemon server/index.js",
    "frontend": "npm run start --prefix client",
    "dev": "concurrently \"npm run backend\" \"npm run start --prefix client\""
   ```

----

look inside server/index.js for routes

DO ALL REACT STUFF / FRONT END INSIDE `CLIENT` FOLDER. 

DO ALL BACKEND / EXPRESS STUFF IN `SERVER`. 
