# Migrations and Seeds:    


- https://bloomtech-1.wistia.com/medias/2625bl7sei
- I am starting this video at the 28:00 mark, that is when migrations start. 




Custom scripts:
    
    "rollback": "knex migrate:rollback",
    "migrate": "knex migrate:latest",
    "seed": "knex seed:run",
    "rollbackh": "heroku run knex migrate:rollback -a NAMEofAPPonHEROKU",    
    "migrateh": "heroku run knex migrate:latest -a NAMEofAPPonHEROKU",
    "seedh": "heroku run knex seed:run -a NAMEofAPPonHEROKU",
    "databaseh": "heroku pg:psql -a NAMEofAPPonHEROKU",
    "deploy": "git push heroku main"