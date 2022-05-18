# Django Backend

#### Sources
* 
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