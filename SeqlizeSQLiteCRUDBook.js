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
const restaurant = sequelize.define("restaurant", {
  restaurant_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nameres: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  opening_hours: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  additional_info: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const reservation = sequelize.define("reservation", {
  reservation_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  time: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  num_people: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const table = sequelize.define("table", {
  table_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  table_num: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// create the books table if it doesn't exist
sequelize.sync();

// route to get all
app.get("/restaurant", (req, res) => {
  restaurant.findAll().then((restaurant) => {
      res.json(restaurant);
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to get by id
app.get("/restaurant/:id", (req, res) => {
  restaurant.findByPk(req.params.id).then((restaurant) => {
      if (!restaurant) {
        res.status(404).send("restaurant not found");
      } else {
        res.json(restaurant);
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to create
app.post("/restaurant", (req, res) => {
  restaurant.create(req.body).then((restaurant) => {
      res.send(restaurant);
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to update
app.put("/restaurant/:id", (req, res) => {
  restaurant.findByPk(req.params.id).then((restaurant) => {
      if (!restaurant) {
        res.status(404).send("restaurant not found");
      } else {
        restaurant.update(req.body).then(() => {
            res.send(restaurant);
          }).catch((err) => {
            res.status(500).send(err);
          });
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to delete
app.delete("/restaurant/:id", (req, res) => {
  restaurant.findByPk(req.params.id).then((restaurant) => {
      if (!restaurant) {
        res.status(404).send("restaurant not found");
      } else {
        restaurant.destroy().then(() => {
            res.send({});
          }).catch((err) => {
            res.status(500).send(err);
          });
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to get all
app.get("/reservation", (req, res) => {
  reservation.findAll().then((reservation) => {
      res.json(reservation);
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to get a by id
app.get("/reservation/:id", (req, res) => {
  reservation.findByPk(req.params.id).then((reservation) => {
      if (!reservation) {
        res.status(404).send("reservation not found");
      } else {
        res.json(reservation);
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to create
app.post("/reservations", (req, res) => {
  reservation.create(req.body).then((reservation) => {
      res.send(reservation);
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to update
app.put("/reservation/:id", (req, res) => {
  reservation.findByPk(req.params.id).then((reservation) => {
      if (!reservation) {
        res.status(404).send("reservation not found");
      } else {
        reservation.update(req.body).then(() => {
            res.send(reservation);
          }).catch((err) => {
            res.status(500).send(err);
          });
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to delete
app.delete("/reservation/:id", (req, res) => {
  reservation.findByPk(req.params.id).then((reservation) => {
      if (!reservation) {
        res.status(404).send("reservation not found");
      } else {
        reservation.destroy().then(() => {
            res.send({});
          }).catch((err) => {
            res.status(500).send(err);
          });
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
});

app.get("/table", (req, res) => {
  table.findAll().then((table) => {
      res.json(table);
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to get by id
app.get("/table/:id", (req, res) => {
  table.findByPk(req.params.id).then((table) => {
      if (!table) {
        res.status(404).send("table not found");
      } else {
        res.json(table);
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to create
app.post("/table", (req, res) => {
  table.create(req.body).then((table) => {
      res.send(table);
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to update
app.put("/table/:id", (req, res) => {
  table.findByPk(req.params.id).then((table) => {
      if (!table) {
        res.status(404).send("table not found");
      } else {
        table.update(req.body).then(() => {
            res.send(table);
          }).catch((err) => {
            res.status(500).send(err);
          });
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
});

// route to delete
app.delete("/table/:id", (req, res) => {
  table.findByPk(req.params.id).then((table) => {
      if (!table) {
        res.status(404).send("table not found");
      } else {
        table.destroy().then(() => {
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