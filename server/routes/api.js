const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/blogs', (req, res) => {
    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
 
    console.log("all blogs!!");
    Blog.find({}, function(err, blogs) {
        if (err) {
            return res.status(500).json({ message: err.message });
        }

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed
        res.json({ blogs: blogs });
    });

    /*
    axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
    */


});


router.get('/viewblog/:id', (req, res) => {
    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    var id = req.params.id;

    console.log("ViewBlog!!");
    Blog.findById(id, function(err, view) {
        if (err) {
            return res.status(500).json({ message: err.message });
        }

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed
        res.json({ view: view });
    });



});


router.post('/addblog', (req, res) => {

    console.log("AddBlog!!");
    console.log(req.body);
  

    var blog = req.body;
    Blog.create(blog, function(err, blog) {
      if (err) {
        return res.status(500).json({ err: err.message });
      }
      res.json({ 'blog': blog, message: 'blog Created' });
    });


});

router.delete('/delblog/:id', function(req, res) {

   

    var id = req.params.id;
    console.log("DelBlog!!");
  

    Blog.findByIdAndRemove(id, function(err, result) {
        if (err) {
            return res.status(500).json({ err: err.message });
        }

        res.json({ message: 'Blog Deleted' });
    });

});


router.put('/updateblog/:id', function(req, res) {
    
    var id = req.params.id;
    var blog = req.body;

    Blog.findByIdAndUpdate(id, blog, {new: true},  function(err, blog) {
        
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        console.log("UpdateBlog!!");
        //res.setHeader('Access-Control-Allow-Origin', '*');
        //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
        //res.setHeader('Access-Control-Allow-Credentials', true); // If needed
        //res.json({ blog: blog });
    });

/*

  var id = req.params.id;
  var todo = req.body;
  if (todo && todo._id !== id) {
    return res.status(500).json({ err: "Ids don't match!" });
  }
  Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'todo': todo, message: 'Todo Updated' });
  });
*/


});



module.exports = router;