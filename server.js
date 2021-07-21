const express = require("express");
const knex = require("./knex.js");
const app = express();
app.use(express.json());


const port = 9999 || process.env.PORT;
app.listen(9999, () => {
    console.log(`🎉 Server running at https://localhost:${port}!`);
});

app.get("/api/environment", async (_, res) => {

    const selectEnviroment = await knex.select().from('environment')
    res.send(selectEnviroment)
});


app.get("/api/selectItems", async (_, res) => {

    const selectItems = await knex.select().from('itemstable')
    res.send(selectItems)
});

app.post("/api/selectItems", async (_, res) => {
    console.log("hello")
    try {
        await knex('itemsTable').insert({ items: "skirt", color: "red", material: "cotton" })
        res.status(201).send("added new item")
    } catch (error) {
        console.error(error)
    }

});//28ga atteirukakakuninnsuru tigattaranaosu 

