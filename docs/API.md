# API Documentation

## Base URL

```
http://localhost:3000/api
```

---

# Authentication Service

### Register User

```
POST /auth/register
```

Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

Response

```json
{
  "success": true,
  "message": "User registered successfully"
}
```

---

### Login

```
POST /auth/login
```

Request

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

Response

```json
{
  "success": true,
  "accessToken": "<JWT_TOKEN>"
}
```

---

# Product Service

### Get Products

```
GET /products
```

### Get Product

```
GET /products/:id
```

### Create Product

```
POST /products
```

### Update Product

```
PUT /products/:id
```

### Delete Product

```
DELETE /products/:id
```

---

# Order Service

### Create Order

```
POST /orders
```

### Get Orders

```
GET /orders
```

### Update Order Status

```
PATCH /orders/:id/status
```

### Cancel Order

```
DELETE /orders/:id
```

---

# Payment Service

### Create Payment

```
POST /payments
```

### Get Payment

```
GET /payments/:id
```

### Refund Payment

```
POST /payments/:id/refund
```

---

# Notification Service

### Send Notification

```
POST /notifications
```

### Get Notification Status

```
GET /notifications/:id
```

---

## Response Codes

| Code | Description |
|------|-------------|
|200|Success|
|201|Created|
|400|Bad Request|
|401|Unauthorized|
|404|Not Found|
|500|Internal Server Error|

---

## Authentication

Protected endpoints require

```
Authorization: Bearer <JWT_TOKEN>
```
