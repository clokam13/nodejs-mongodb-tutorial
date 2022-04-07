# Node JS and Express JS REST API with Mongo DB(NoSQL) | Tutorial and Sample Code

You can view this tutorial at my [**Youtube Channel**](https://youtube.com).

In this repository you will find the source for the Node JS and Express JS REST API that manages the data of dogs using Mongo DB as the data storage layer. 

## What will you learn?

- Setup your Database, Collections and Data in Mongo DB from command line
- Connect Node JS and Express JS to Mongo DB 
- Create controllers to access data in Mongo DB 
- Consume the controllers in your Express routes 
- Testing the API with Postman

## Setting up this repository 

You can start off by cloning [**this repository**](https://github.com/clokam13/nodejs-api-tutorial) using `git clone`. 

The next step will be to create your Database and Collection in Mongo DB. 

You can follow the steps [**here**](https://www.mongodb.com/docs/manual/administration/install-community/) to install Mongo DB Community.

Once you have Mongo DB setup, you can access the Mongo Shell and then execute the following commands. 

```javascript
mongosh

use demo_db

db.createCollection("dogs")

db.dogs.insertOne({name:"Happy", breed:"Golden Retriever"})
```

Once you have done the above, you can see your records by using, 

```javascript
db.dogs.find()
```

After this, you will have a **dogs** collection with some sample documents inserted into it. 

The next step will be to create a **.env** file that will have your database credentials. 

```shell
touch .env
```

You can create a separate user to access the database. 

```javascript
db.createUser({
  user:"clokam",
  pwd: passwordPrompt(),
  roles: [{role: "userAdmin", db: "demo_db"}]
})
```

Add the following contents to the **.env** file. Update the values with your own database user. 

```
DB_USER=your_db_username
DB_PASSWORD=your_db_password
DATABASE=demo_db
```

Once you have all of these setup, you can install your Node JS dependencies and then run your project. 

```shell 
npm install 

npm start
```
You can then test the API routes for the application using Postman, cURL (or) your browser. 



