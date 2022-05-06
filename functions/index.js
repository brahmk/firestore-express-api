const functions = require("firebase-functions");
const express = require('express');


const app = express();

app.get('/test', (req, res) => {
    res.send('TEST SUCCESSFUL') //send to html containers?
})
app.get('/', (req, res) => {
    res.send('🏚')
})


exports.app = functions.https.onRequest(app); //replaces app.listen w port - google handles







// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
