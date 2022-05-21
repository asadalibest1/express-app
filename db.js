const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';


MongoClient.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, client) => {
  if (err) {
    return console.log('err', err);
  }

  // Specify database you want to access
  // const db = client.db('myDataBase');

  console.log(`MongoDB Connected: ${url}`);
});


// try {
//   mongoose.connect("mongodb://localhost:27017/test", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
//   )
// } catch (error) {
//   console.log(error);
// }
