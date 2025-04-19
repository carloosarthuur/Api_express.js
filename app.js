import express, { json } from 'express'

const app = express().use(json())

const users = [
    {id: 1, nam: "carlos"},
    {id: 2, nam: "pedro"},
    {id: 3, nam: "lucas"},
]

app.get("/users", (req, res) => {res.status(201).json(users)})

app.put("/editusers", (req, res) => {
    const requestBody = req.body
})

app.listen(3000, () => console.log("Servidor Aberto"))
