const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Mock inventory data
const inventory = [
    { sku: 'SKU123', name: 'Product A', image: 'http://example.com/imageA.jpg', quantity: 100 },
    { sku: 'SKU456', name: 'Product B', image: 'http://example.com/imageB.jpg', quantity: 50 },
    { sku: 'SKU789', name: 'Product C', image: 'http://example.com/imageC.jpg', quantity: 0 }
];

// Endpoint to fetch product catalog
app.get('/api/products', (req, res) => {
    res.json(inventory);
});

// Endpoint to fetch inventory details by SKU
app.get('/api/products/:sku', (req, res) => {
    const product = inventory.find(item => item.sku === req.params.sku);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Mock API server is running on http://localhost:${PORT}`);
});
