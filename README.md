# About

This is Zach Calvert's personal resume site.

# Technologies

This is built with npm and ReactJS.

# Build Steps

Run locally: ```npm install
npm start```

Build for S3: ```npm run build``` with output delivered to ```dist```.

# Build and push
```
npm run build 
aws s3 cp ./build/ s3://www.zachcalvert.com/ --recursive
```
