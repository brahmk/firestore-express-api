import functions from "firebase-functions";
import express from 'express';
import { getFishes } from "./src/fish.js";


const app = express();

app.get('/test', (req, res) => {
    res.send('TEST SUCCESSFUL') 
})

app.get('/fish',  getFishes)

export const api = functions.https.onRequest(app); //replaces app.listen w port - google handles







// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
