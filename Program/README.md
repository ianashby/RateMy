# Django Backend

#### Sources
* [tutorial](https://youtube.com/playlist?list=PLzMcBGfZo4-kCLWnGmK0jUBmGLaJxvi4j)
* 


#### Files and Extendsions to Install
* Django (both pip install and grab extension)
* djangorestframework (pip install)
* ES7+ React (extension)
* JavaScript (ES6) (extension)
* 


#### Terminal commands start ups
* django-admin startproject rateMyCourse (one time only but it's to activate it)
* cd backend\rateMyCourse
* django-admin startapp api (one time only, it's to start working on project)
* Go to settings in rateMyCourse in INSTALLED_APPS add api.apps.ApiConfig
* settings in rateMyCourse in INSTALLED_APPS add rest_framework

#### Storing into database 
* python .\manage.py makemigrations (only use when making change to model or make a change to database)
* python .\manage.py migrate

### Run the serve
* python .\manage.py runserver



### Setting up react
* [Watch this video](https://www.youtube.com/watch?v=eauREi0vwB0)
* Node extension pact
* npm i webpack webpack-cli --save-dev
* npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev 
* npm i react react-dom --save-dev
* npm install --save react@16.13.0 react-dom@16.13.0
* npm install @material-ui/core
* npm install @babel/plugin-proposal-class-properties (for async)
* npm install react-router-dom
* npm install @material-ui/icons