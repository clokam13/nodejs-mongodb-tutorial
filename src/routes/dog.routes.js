const express = require("express");
const dogs = require("../controllers/dog.controllers");

const router = express.Router();

// GET route for Dogs
router.get("/dogs", dogs.retrieve);

// GET route for Dog Breed Search
router.get("/dog/:name", dogs.retrieveByName);

// POST route to insert new dogs
router.post("/dog", dogs.insert);

// PUT route to update dogs
router.put("/dog/:id", dogs.update);

// DELETE route to delete dogs
router.delete("/dog/:id", dogs.remove);

module.exports = router;
