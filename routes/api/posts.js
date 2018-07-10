const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Validation
const validatePostInput = require("../../validation/post");

// Post model
const Post = require("../../models/Post");

router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "No posts found" }));
});

router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ nopostfound: "No post found with that ID" })
    );
});

router.post("/", (req, res) => {
  const { errors, isValid } = validatePostInput(req.body);

  // // Check Validation
  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }

  const newPost = new Post({
    title: req.body.title,
    text: req.body.text,
    by: req.body.by
  });

  newPost.save().then(post => res.json(post));
});

module.exports = router;
