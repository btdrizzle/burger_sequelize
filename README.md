# SQL, Sequelize and Handlebars Burger App

There is much more than meets the eye with this simple-looking app.  This app connects with a SQL database hosted on Heroku.  The data is retrieved and posted to/from the database via API calls and is rendered with Handlebars.  Interactivity is all defined on the back-end rather than the front with a home-made API just for the APP.  

This app is the same as my other Burger app, but this one provides ORM functionality through the Sequelize package.

## Functionality

Simply type a burger name and hit "Add a burger" to add the burger.  The burger will show in the non-devoured burger table with a button option to devour.  Once devoured, the burger will show in the devoured list.  The burgers are stored in a SQL database with a table value assigned to "devoured."  Handlebars takes devoured burgers and places them in a div on the right, while un-devoured burgers are on the left with a button which when clicked changes the burger's devoured status to "true."  

## Links

[Burger App with Sequelize Git Repository](https://github.com/btdrizzle/burger_sequelize 'Click to view repository')

[Heroku Hosted App](https://btdrakeburgerv2.herokuapp.com/ 'Click to view hosted app on Heroku')