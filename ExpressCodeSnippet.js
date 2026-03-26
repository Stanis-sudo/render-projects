import express from 'express';

// to use express in ES6, we need to import it using the import statement. 
// We also need to set the "type" field in our package.json file to "module" to enable ES6 module support in Node.js.

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

// route for the home page
app.get('/', (req, res) => {
   res.send('Hello Express app!')
});

app.listen(3000, () => {
   console.log('server started');
});