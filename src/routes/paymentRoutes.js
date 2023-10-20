const express = require('express');
const router = express.Router();

const key = 'sk_test_51O28RBGty9hvmDKbFhYsq2uW1VKqdA1lUXUJ6TL6dmlNE1CCDaxL1QUzTdwF2W3SZtCPdG4l8ktRBV3LqyniEEYI00OK4dF7qa'

const stripe = require('stripe')(key);

router.post('/intents', async (req, res) => {
    console.log(req.body.amount);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: 'zar',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.json({ paymentIntent: paymentIntent.client_secret });
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
});

module.exports = router;