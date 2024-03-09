const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Endpoint for handling PayPal webhook events
app.post('/paypal-webhook', (req, res) => {
  // Handle PayPal webhook events here
  console.log('PayPal Webhook Event Received:', req.body);
  // Implement your logic to process the PayPal event

  res.status(200).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
