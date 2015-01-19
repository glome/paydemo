# Paydemo

## URLs

First change pointing url to correct one.

in /app/views/main.html

    ng-href="http://www.google.fi" -> ng-href="glome-server-url-what-ever"


"Callback" URL is:

    http://<server>/#/thankyou.html.


## Building

Install node, then:

    npm install -g bower
    npm install -g grunt
    npm install -g grunt-cli
    npm install
    bower install
    grunt build

This should deploy simple Angular app to dist/ folder.