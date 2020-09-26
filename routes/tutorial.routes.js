const express = require("express");
const PostMessage = require("../models/tutorial.model");
const multer = require ('multer');

var router = express.Router();
 
// image storage
const storage = multer.diskStorage({
  destination: function (req,file,cb){
    cb(null, '/public/uploads/');
  },
  filename: function(req, file, cb){
    cb(null, Date.now()+file.originalname);
  }
});

//image filter
const fileFilter = (req, res, cb) => {
  if (file.mimetype ==='image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
    cb(null, true);
  }
  else{
    cb(null, false);
  }
}

//multer upload
const upload = multer ({
  storage: storage,
  limits:{
    files:1024*1024*5
  },
  fileFilter:fileFilter
});

//send image
router.post("/uploadmulter", upload.single("imageData"), (req,res,next) => {
  res.send(req.files);
  
})



// Retrieve all Tutorials
router.get("/", (req,res) => {
  
  PostMessage.find()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
});

// Create a new Tutorial
router.post("/", (req, res) => {
 

  // Create a Tutorial
  const newRecord = new PostMessage({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // Save Tutorial in the database
  newRecord
    .save(newRecord)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
});

// Update a Tutorial with id
router.put("/:id", (req, res) => {
  if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    PostMessage.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        } else res.send({ message: "Tutorial was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
});

// Delete a Tutorial with id
router.delete("/:id",(req, res) => {
  const id = req.params.id;

  PostMessage.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
});

// Retrieve all published Tutorials
router.get("/published", (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  PostMessage.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
});

// Retrieve a single Tutorial with id
router.get("/:id", (req, res) => {
  const id = req.params.id;

  PostMessage.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
});


// Delete all tutorials from database
router.delete("/", (req, res) => {
  PostMessage.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
});

module.exports = router;