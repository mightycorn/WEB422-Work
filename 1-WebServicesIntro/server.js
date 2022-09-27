const express = require("express");
const app = express();

const NamesDB = require("./modules/namesDB");
const namesService = new NamesDB();
const HTTP_PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world!");
});

// CREATE

// non-async-await version

// app.post("/api/names", (req, res) => {
//     namesService.addName(req.body).then(() => {
//         res.json({message: `name created`})
//     });
// });

// async-await version

app.post("/api/names", async (req, res) => {
    await namesService.addName(req.body)
    res.json({message: `name created`})
});

// READ

// non-async-await version

// app.get("/api/names", (req, res) => {
//     namesService.getAllNames().then(data => {
//         res.json(data);
//     })
// });

// async-await version

// app.get("/api/names", async (req, res) => {
//     const data = await namesService.getAllNames()
//     res.json(data);
// });

app.get("/api/names", async (req, res) => {
    res.json({message: "hello"});
});

// non-async-await version

// app.get("/api/names/:id", (req, res) => {
//     namesService.getNamesById(req.params.id).then(data => {
//         res.json(data)
//     }).catch (err => {
//         res.status(404).json({message: err});
//     });
// });

// async-await version

app.get("/api/names/:id", async (req, res) => {
    try {
        const data = await namesService.getNamesById(req.params.id);
        res.json(data)
    } catch(err) {
        res.status(404).json({message: err});
    }
});

// UPDATE

// non-async-await version

// app.put("/api/names/:id", (req, res) => {
//     namesService.updateNameById(req.params.id, req.body).then(() => {
//         res.json({message: "name updated"});
//     }).catch(err => {
//         res.status(404).json({message: err});
//     });
// });

// async-await version

app.put("/api/names/:id", async (req, res) => {
    try {
        await namesService.updateNameById(req.params.id, req.body)
        res.json({message: "name updated"});
    } catch(err) {
        res.status(404).json({message: err});
    }
});

// non-async-await version

// app.delete("/api/names/:id", (req, res) => {
//     namesService.deleteNameById(req.params.id, req.body).then(() => {
//         res.json({message: "name deleted"});
//     }).catch(err => {
//         res.status(404).json({message: err});
//     });
// })

// async-await version

app.delete("/api/names/:id", async (req, res) => {
    try {
        await namesService.deleteNameById(req.params.id, req.body);
        res.json({message: "name deleted"});
    } catch(err) {
        res.status(404).json({message: err});
    }
})

app.listen(HTTP_PORT, () => {
    console.log(`server listening on: ${HTTP_PORT}`);
});