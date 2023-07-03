const { MongoClient } = require("mongodb");
const url = "mongodb+srv://bhargav:bhargav%40227@cluster0.r0cqany.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url);
const dbs = client.db("numbers")
const coll = dbs.collection("rollnumbers")
const express = require("express");
const app = express();
app.listen(3000, () => { console.log("listning on 3000!!") })

app.get("/", (req, res) => {
    async function search(str) {
        const result = await coll.findOne({ number: str }, { $project: { "_id": false } })
        res.send(result.number)
    }
    search("21kq1a0508");
})
