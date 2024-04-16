const {Client} = require("pg")
const client= new Client({
    host: "localhost",
    user:"postgres",
    port: 5432,
    password: "admin",
    database: "FDA_Approved_Resturants"
})

const express = require('express')
const app = express()
const port = 3000
client.connect();
var data;
var data1;
var data2;
client.query("Select i.inspection_id, i.business_id, b.business_name, i.inspection_date, i.inspection_score, i.inspection_type FROM inspections i, businesses b WHERE i.business_id = b.business_id limit 10;", (err,res)=>{
    // Select i.inspection_id, i.business_id, b.business_name, i.inspection_date, 
    // i.inspection_score, i.inspection_type 
    // FROM inspections i, businesses b 
    // WHERE i.business_id = b.business_id limit 10;
    if(!err){
        console.log(res.rows)
        data=res.rows
    }else{
        console.log(err.message)
    }
    client.end;
})
client.query("SELECT b.business_name, b.restaurant_type, f.cuisine, c.rating, a.business_city, a.business_state FROM businesses b, food_type f, address_info a, customer_rating c WHERE b.business_id = a.business_id and  b.business_id = c.business_id and b.business_name = f.business_name and c.rating > 3.5 limit 10;", (err,res)=>{
    // SELECT b.business_name, b.restaurant_type, f.cuisine, c.rating, a.business_city, a.business_state 
    // FROM businesses b, food_type f, address_info a, customer_rating c 
    // WHERE b.business_id = a.business_id and  b.business_id = c.business_id 
    // and b.business_name = f.business_name and c.rating > 3.5 limit 10;
    if(!err){
        console.log(res.rows)
        data1=res.rows
    }else{
        console.log(err.message)
    }
    client.end;
})

app.get('/inspector', (req, res) => {
  res.send(data)
})
app.get('/user', (req, res) => {
    res.send(data1)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
