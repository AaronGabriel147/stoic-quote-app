# Step 2 Heroku and postgreSQL setup: 
https://bloomtech-1.wistia.com/medias/2625bl7sei
9:25 is when the actual follow along starts if you already have Heroku CLI and a repo set up.


Download Heroku CLI


Confirm DL in the terminal:
heroku --version


Log in to Heroku:
heroku login


______________________________________


# Go to Heroku.com:

Click 'new' / 'create new app'


Name the app anything you want.


COPY & PASTE into terminal to hook up Heroku to the repo:
heroku git:remote -a thestoics







____________________________

dot env example:

PORT = 5000
NODE_ENV = development
DEV_DATABASE_URL = 'postgres:postgres@localhost:5432/stoa'


___________________________











