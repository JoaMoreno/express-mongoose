const mongoose = require("mongoose");
var db = mongoose.connection;

const URI = "mongodb://localhost:27017/";

mongoose.connect(URI,{
        dbName: "mydb",
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    // we're connected!
    console.log(" * DB is connected");
});

module.exports = mongoose;
