var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var PEOPLE = "people";
var URI = 'mongodb://heroku_nqjh4jxf:4l4a11gdd9gquubkm2oo13adtt@ds027908.mlab.com:27908/heroku_nqjh4jxf'

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 3030, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// PEOPLE API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/people"
 *    GET: finds all people
 *    POST: creates a new person
 */

app.get("/people", function(req, res) {
  db.collection(PEOPLE).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get people.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/people", function(req, res) {
  var newPerson = req.body;
  newPerson.createDate = new Date();

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  }

  db.collection(PEOPLE).insertOne(newPerson, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new person.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*  "/people/:id"
 *    GET: find person by id
 *    PUT: update person by id
 *    DELETE: deletes person by id
 */

app.get("/people/:id", function(req, res) {
  db.collection(PEOPLE).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get person");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put("/people/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(PEOPLE).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update person");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.delete("/people/:id", function(req, res) {
  db.collection(PEOPLE).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete person");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});
