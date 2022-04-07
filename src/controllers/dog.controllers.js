// Define Dog Breeds array
const client = require("../utils/db.util").getClient();

const retrieve = async (req, res) => {
  try {
    const collection = client.db("demo_db").collection("dogs");

    let dogs = await collection.find({}).toArray();

    res.status(200).send(dogs);
  } catch (error) {
    res.sendStatus(500);
  }
};

const retrieveByName = async (req, res) => {
  try {
  } catch (error) {
    res.sendStatus(500);
  }
  const collection = client.db("demo_db").collection("dogs");

  let dog = await collection.findOne({ name: req.params.name });

  if (dog) {
    res.status(200).send(dog);
  } else {
    res.sendStatus(404);
  }
};

const insert = async (req, res) => {
  try {
    let dog = { id: req.body.id, name: req.body.name, breed: req.body.breed };

    const collection = client.db("demo_db").collection("dogs");

    await collection.insertOne(dog);

    res.sendStatus(202);
  } catch (error) {
    res.sendStatus(500);
  }
};

const update = async (req, res) => {
  try {
    const collection = client.db("demo_db").collection("dogs");

    await collection.updateOne(
      { id: req.params.id },
      { $set: { name: req.body.name, breed: req.body.breed } },
      { upsert: true }
    );

    res.sendStatus(202);
  } catch (error) {
    res.sendStatus(500);
  }
};

const remove = async (req, res) => {
  try {
    const collection = client.db("demo_db").collection("dogs");

    await collection.deleteOne({ id: req.params.id });

    res.sendStatus(202);
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports.retrieve = retrieve;
module.exports.retrieveByName = retrieveByName;
module.exports.insert = insert;
module.exports.update = update;
module.exports.remove = remove;
