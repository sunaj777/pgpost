const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const port = 3001
const pg = require('pg')

app.use(cors())
app.use(bodyParser.json());


app.post('/', async (req, res) => {

  const client = new pg.Client({  
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "12345",
    port: 5432

  });
  await client.connect();

  const values = [req.body.id, req.body.name, req.body.age, req.body.place]
  await client.query("insert into new (id, name,age,place) values ($1,$2,$3,$4)", values);

  res.send("Saved")
}
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
