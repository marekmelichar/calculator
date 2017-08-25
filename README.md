### - this is a repo for a HARTMANN CombiSet CALCULATOR
```
git clone it
cd into project
npm install
npm start

for build:
npm run build
```

### - info about the production, because there should be a cache enabled to accomplish offline functionality:
#### - create a file - .htaccess in root
```
RewriteEngine on

RewriteOptions inherit
Addtype text/cache-manifest manifest
```
#### - create a file - manifest.appcache in root
```
CACHE MANIFEST

#version 1.0

CACHE:
index.html
style/own_library.css
style/print.css
style/style.css
scripts/config.js
scripts/main.js
images/logo.png

NETWORK:
*

FALLBACK:

```

#### - for production change also <html> tag to call the manifest.appcache file
```
<html manifest="manifest.appcache">
```

#### - for production change uncomment plugins section inside webpack.config.js :
```
plugins: [
    //for production
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: false
    })
  ]
```
