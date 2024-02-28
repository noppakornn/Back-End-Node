// Description: Node Express REST API with Sequelize and SQLite CRUD Book
// npm install express sequelize sqlite3
// Run this file withh node SeqlizeSQLiteCRUDBook.js
// Test with Postman

const express = require("express");
const Sequelize = require("sequelize");
const app = express();

// parse incoming requests
app.use(express.json());

// create a connection to the database
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "sqlite",
  storage: "./Database/SQBooks.sqlite",
});

// define the Table model
const user = sequelize.define("user", {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  reservation_id: {
    type: Sequelize.STRING,
    foreignKey: false,
  },
});

const table = sequelize.define("table", {
  table_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  capacity: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const showtime = sequelize.define("showtime", {
  showtime_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  starttime: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  theater: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// create the books table if it doesn't exist
sequelize.sync();

// route to get all user
app.get("/user", (req, res) => {
  user.findAll().then((user) => {
      res.json(user);
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to get a user by id
app.get("/user/:id", (req, res) => {
  user.findByPk(req.params.id).then((user) => {
      if (!user) {
        res.status(404).send("user not found");
      } else {
        res.json(user);
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to create a new user
app.post("/user", (req, res) => {
  user.create(req.body).then((user) => {
      res.send(user);
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to update a user
app.put("/user/:id", (req, res) => {
  user.findByPk(req.params.id).then((user) => {
      if (!user) {
        res.status(404).send("user not found");
      } else {
        user.update(req.body).then(() => {
            res.send(user);
          }).catch((err) => {
            res.status(500).send(err);
          });
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to delete a user
app.delete("/user/:id", (req, res) => {
  user.findByPk(req.params.id).then((user) => {
      if (!user) {
        res.status(404).send("user not found");
      } else {
        user.destroy().then(() => {
            res.send({});
          }).catch((err) => {
            res.status(500).send(err);
          });
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to get all movie
app.get("/movie", (req, res) => {
  movie.findAll().then((movie) => {
      res.json(movie);
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to get a movie by id
app.get("/movie/:id", (req, res) => {
  movie.findByPk(req.params.id).then((movie) => {
      if (!movie) {
        res.status(404).send("movie not found");
      } else {
        res.json(movie);
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to create a new movie
app.post("/movie", (req, res) => {
  movie.create(req.body).then((movie) => {
      res.send(movie);
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to update a movie
app.put("/movie/:id", (req, res) => {
  movie.findByPk(req.params.id).then((movie) => {
      if (!movie) {
        res.status(404).send("movie not found");
      } else {
        movie.update(req.body).then(() => {
            res.send(movie);
          }).catch((err) => {
            res.status(500).send(err);
          });
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to delete a movie
app.delete("/movie/:id", (req, res) => {
  movie.findByPk(req.params.id).then((movie) => {
      if (!movie) {
        res.status(404).send("movie not found");
      } else {
        movie.destroy().then(() => {
            res.send({});
          }).catch((err) => {
            res.status(500).send(err);
          });
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to get all showtime
app.get("/showtime", (req, res) => {
  showtime.findAll().then((showtime) => {
      res.json(showtime);
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to get a showtime by id
app.get("/showtime/:id", (req, res) => {
  showtime.findByPk(req.params.id).then((showtime) => {
      if (!showtime) {
        res.status(404).send("showtime not found");
      } else {
        res.json(showtime);
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to create a new shoetime
app.post("/showtime", (req, res) => {
  showtime.create(req.body).then((showtime) => {
      res.send(showtime);
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to update a showtime
app.put("/showtime/:id", (req, res) => {
  showtime.findByPk(req.params.id).then((showtime) => {
      if (!showtime) {
        res.status(404).send("showtime not found");
      } else {
        showtime.update(req.body).then(() => {
            res.send(showtime);
          }).catch((err) => {
            res.status(500).send(err);
          });
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to delete a showtime
app.delete("/showtime/:id", (req, res) => {
  showtime.findByPk(req.params.id).then((showtime) => {
      if (!showtime) {
        res.status(404).send("showtime not found");
      } else {
        showtime.destroy().then(() => {
            res.send({});
          }).catch((err) => {
            res.status(500).send(err);
          });
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));