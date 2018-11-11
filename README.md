# PU_Mobile
Authors: Peter Mwesigwa
Authors: Vinay Ramesh

This is a new Princeton University mobile application, aimed to vitalize the experience in comparison to the current version. In the status quo, the design is evidently clunky and not aesthetically pleasing. Additionally, many of the end points take a long time to render in the current app. Our app is not only faster, but it is also looks much better, and will encourage the Princeton community to make the application an integral part of their experience. 

Because of the work we have been doing on this app, Princeton University has been speaking with us to see how we can take this app further, and eventually push it to production for the entire Princeton community.

# Preliminary Notes on App

We have retrieved an API endpoint from the IT department at Princeton, which gives us real dining hall menus from each residential college. This has been implemented to completion in this version of our application. There are several other endpoints we would have liked to receive, but they have not been supplied to us. 

In order to combat this situation, we created our own SQLite database, and stored dummy data as News Articles. This database was created in anticipation of what a real endpoint would return to us. Our database can be found in the RESTAPI folder. The code is in api.py and the database is in crud.sqlite. 

# Notes on running the app

You will need to "cd" into the RESTAPI directory, issue a "python api.py" command to initiate the server for the database with the dummy data on news. Once this server has started, then open up the ios folder in our repository, and run the XCode project within. This should create a simulator from which you should be able to use our application.

Additionally, you may build the application onto your mobile device, and test our application from your own device. If you chose to do this, you will have to change the "DATABASE_SERVER" variable in the '/utils/settings.js' to the server that the database is running on. If you run the project with XCode, the DATABASE_SERVER will automatically attempt to connect to localhost, so it will work.
