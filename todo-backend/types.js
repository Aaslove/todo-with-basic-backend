const zod = require("zod");

const firstSchema = zod.object({
    title: zod.string(),
    description: zod.string()
}
)

const secondSchema = zod.object({
    id: zod.string()
})

module.exports = {
    addTodo: firstSchema,
    updateTodo: secondSchema
}