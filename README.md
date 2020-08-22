# Coding-Society
A place for coders to share and create.

# How to use:

$ cd client   
$ npm i   
 
$ cd server. 
$ npm i. 

(NPM WHEREVER YOU SEE A PACKAGE.JSON)

inside source folder `Coding-Society`

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
