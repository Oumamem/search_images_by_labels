# API NODEJS & EXPRESS

## Description

_Use this API to get matched labels with a keyword from image_

## Steps

1. IN .env file add:
   a. PORT = 3300
   b. ACCESS*KEY_UNSPLASH
   \_To get it you have tcreate an account on unsplash*
   c. GOOGLE*VISION_KEYS = link of your json file.
   \_To get it you have tcreate an account on Google Cloud vision (not free)*

2. npm install to install modules
3. POST a request to "/analyze" with a body request: "keyword" and "labels".
4. Run server ```npx nodemon ./src/api.ts
