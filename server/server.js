const express = require('express')
const app =express()

app.get("/api",(req,res) => {
  res.json({"users": ["usr1","usr2","usr3"]})
})

app.listen(5000, () => {console.log('server started on port 5000')})