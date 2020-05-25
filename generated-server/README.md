## Express Application Generator 
Instead of creating the application from scratch, we can use the express application generator to quickly create an application skeleton. 

you can install the application skeleton by using:
```
npm install express-generator
```
Then you can generate a express applicaion file structure using 
```
express --view=hbs myapp
```
You can change the view to your preffered template engine

This will generate the following app structure: 
```
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug
```


