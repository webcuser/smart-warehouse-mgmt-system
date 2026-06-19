# API Documentation

This document provides details about the API endpoints available in the smart-warehouse-mgmt-system application. Below are the API details, covering available endpoints, expected responses, and integration examples.

## Endpoints

### 1. Get Product Catalog
- **URL:** `/api/products`
- **Method:** `GET`
- **Description:** Fetch the list of all products available in the inventory.
- **Response Example:**
  ```json
  [
    { "sku": "SKU123", "name": "Product A", "image": "http://example.com/imageA.jpg", "quantity": 100 },
    { "sku": "SKU456", "name": "Product B", "image": "http://example.com/imageB.jpg", "quantity": 50 },
    { "sku": "SKU789", "name": "Product C", "image": "http://example.com/imageC.jpg", "quantity": 0 }
  ]
  ```

### 2. Get Inventory Details by SKU
- **URL:** `/api/products/:sku`
- **Method:** `GET`
- **Description:** Fetch details of a product by specifying its SKU.
- **Parameters:**
  - `:sku` - The unique identifier of the product (e.g., 'SKU123').
- **Response Example (200 OK):**
  ```json
  { "sku": "SKU123", "name": "Product A", "image": "http://example.com/imageA.jpg", "quantity": 100 }
  ```
- **Response Example (404 Not Found):**
  ```json
  { "message": "Product not found" }
  ```

## Integration Examples

To integrate with this API, standard HTTP clients can be utilized. Here is a sample with `fetch` in JavaScript:

```javascript
fetch('http://localhost:3000/api/products')
  .then(response => response.json())
  .then(data => console.log(data));
```

Replace the endpoint URL as needed to target specific resources or filter results.