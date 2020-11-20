const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./app/config/db.config');

const app = express();

const corsOptions = {
    origin: "http://localhost:4200/"
};
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
const db = require('./app/models');
const Role = db.roles;

db.mongoose
    .connect(dbConfig.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB");
        initial();
    })
    .catch((err) => {
        console.error("Connection error", err);
        process.exit();
    });

    function initial() {
        Role.estimatedDocumentCount((err, count) => {
            if (!err && count === 0) {
                new Role({
                    name: "user"
                }).save((err) => {
                    if (err) {
                        console.log("error", err);
                    }
    
                    console.log("added 'user' to roles connection");
                });
    
                new Role({
                    name: "admin"
                }).save((err) => {
                    if (err) {
                        console.log("error", err);
                    }
    
                    console.log("added 'admin' to roles connection");
                });
    
                new Role({
                    name: "owner"
                }).save((err) => {
                    if (err) {
                        console.log("error", err);
                    }
    
                    console.log("added 'owner' to roles connection");
                });
            }
        })
    };
