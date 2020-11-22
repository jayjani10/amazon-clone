const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HoV48J6QmLNNPasTEFWOpEtY8esfj1agYfSHoia3a7kGwa3YPw5AdJKg0jJY4tBJGjoaNkAb9IgMs98ZE9hmX8f00NWrLIIOD');

// API

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get('/', (req, res) => res.status(200).send('Hello World'));

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('payment request received!! ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr'
    });

    // Ok - Created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})

// API Listen command
exports.api = functions.https.onRequest(app);