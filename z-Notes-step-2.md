# Step 2 Heroku and postgreSQL setup: 
https://bloomtech-1.wistia.com/medias/2625bl7sei
@ 9:25 is when the actual follow along starts if you already have Heroku CLI and a repo set up.
@ 18:00 The section on postgres starts
I left off at 24:40 Right when the .env file starts, before that was just kicking the tires. 

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


Click 'resources':


In the 'Add-on' section start typing 'Heroku Postgres and then click on it.



When we want to see the web app info like tables: while you are in resources, simply click the app name near the bottom. https://data.heroku.com/datastores/05c490ea-88fb-43e8-8690-234992160907#




_______________________________________________________





# Postgres set up 


Install postgres.


Inside Postgres / pgadmin:
Right click database and create a database, name it whatever you want and create a second database with the word 'test'  on it. This way we have two databases, one for testing and one for development. 






















____________________________

dot env example:

PORT = 5000
NODE_ENV = development
DEV_DATABASE_URL = 'postgres:postgres@localhost:5432/stoa'


___________________________



At the end he said to push, like 'git push heroku main' or w/e branch we are on.










