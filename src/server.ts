import express from 'express'

const app = express()

app.get("/", (request, response) => {
  return response.send({message: "Hello World!"})
})

app.post("/", (request, response) => {
  return response.json({message: "Os dados foram salvos com sucesso"})
})

const port = 8080
app.listen(port, () => console.log(`Server is running on port ${port}`))