const app = require('./app');

const port = 3003;

// initaing sever at port number
app.listen(port, () => {
   console.log(`Departed from http://localhost:${port} !`);
});
