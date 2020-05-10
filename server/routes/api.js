import express from 'express';

const api = express.Router()

api.use(express.json());

api.use("/:param", (req,res,next) => {
    console.log(`API Call to: ${req.params.param}`)
    next();
})

api.get("/", (req,res) => {
    console.log('API Call to Home API Route');
    res.send('home api route');
})

api.get("/test", (req,res) => {
    res.send("Test API call");
})

api.get("/:param", (req,res) => {
    res.send(req.params.param);
})

api.post("/fen", (req,res) => {
    res.send(req.body.fen);
})

api.use("*", function(req,res) {
    console.log(`Failed API call to: ${req.originalUrl}`)
    res.send("API CALL FAILED");
});

export default api;