Used tutorials:
- https://www.freecodecamp.org/news/how-to-create-a-rails-project-with-a-react-and-redux-front-end-8b01e17a1db/
- https://medium.com/@bruno_boehm/reactjs-ruby-on-rails-api-heroku-app-2645c93f0814
- https://medium.com/@eth3rnit3/create-react-app-rails-6-0-custom-server-deployment-part-1-development-configuration-92ce11ea9c56


Starting the rails server:
```rails s```
-> http://localhost:3000/


Starting the react app:
```cd client && yarn start```
-> http://localhost:3001/


Some other helpful commands:
- bundle update
- rake db:migrate
- rake db:rollback
- rails s
- rails c
- dropdb iot-rex_development
- heroku pg:pull <postgresql-name> iot-rex_development --app iot-rex
- heroku pg:reset --app iot-rex-stage --confirm iot-rex-stage
- heroku pg:push iot-rex_development <postgresql-name> --app iot-rex-stage
- git push prod master
- heroku logs --tail --remote prod
- heroku run rake db:migrate --remote prod
- heroku run rails c --remote prod
- heroku restart --remote prod
