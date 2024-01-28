const express = require("express");
var cors = require('cors')
const { addTodo, updateTodo } = require('./types')
const { todo } = require("./db")
const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())

app.post('/todo', async (req, res) => {
    const payload = req.body;
    const parsedData = addTodo.safeParse(payload);
    if (!parsedData.success) {
        res.status(411).json({
            "msg": "Inputs are incorrect."
        })
        return
    }
    await todo.create({
        title: payload.title,
        description: payload.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async (req, res) => {
    const todoslist = await todo.find()
    res.json({
        todoslist
    })
})


app.put("/completed", async (req, res) => {
    const payload = req.body;
    const parsedData = updateTodo.safeParse(payload);
    if (!parsedData.success) {
        res.status(411).json({
            "msg": "Inputs are incorrect."
        })
        return
    }
    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo has been marked as completed."
    })
})
app.listen(port);