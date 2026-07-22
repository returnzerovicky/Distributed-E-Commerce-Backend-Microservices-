# 🛒 Distributed E-Commerce Backend – Microservices Architecture

> A production-grade distributed backend for modern e-commerce platforms built using a scalable microservices architecture with Docker, RabbitMQ, Redis, PostgreSQL, JWT Authentication, and API Gateway.

<p align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![RabbitMQ](https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens)
![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

</p>

---

# 📖 Overview

Traditional monolithic applications become difficult to scale as traffic and business complexity increase.

This project demonstrates how a modern enterprise e-commerce backend can be designed using **Microservices Architecture**, where every business capability is isolated into an independent service.

The system supports:

- User Authentication
- Product Management
- Order Processing
- Payment Service
- Notification Service
- API Gateway
- Asynchronous Communication
- Distributed Caching
- Containerized Deployment

Designed with production-ready backend engineering practices.

---

# 🏗 Architecture

```
                    Client
                       │
               API Gateway
                       │
 ───────────────────────────────────────
 │        │         │        │         │
 │        │         │        │         │
Auth   Product    Order   Payment   Notification
Service Service   Service Service     Service
 │        │         │        │
 └────────┴─────────┴────────┘
            RabbitMQ
                 │
        Event Communication

        PostgreSQL Databases
               Redis Cache

```

---

# 🚀 Features

### Authentication Service

- JWT Authentication
- User Registration
- Login
- Authorization
- Password Encryption

---

### Product Service

- Product CRUD
- Category Management
- Inventory Management
- Product Search

---

### Order Service

- Create Orders
- Update Order Status
- Order Tracking
- Inventory Validation

---

### Payment Service

- Payment Processing
- Payment Verification
- Transaction Records

---

### Notification Service

- Order Notifications
- Payment Notifications
- Event-based Messaging

---

### API Gateway

- Centralized Routing
- Authentication Middleware
- Request Validation
- Service Discovery
- Load Distribution

---

# ⚡ Microservices Concepts Implemented

✅ API Gateway

✅ Service Isolation

✅ JWT Authentication

✅ Redis Caching

✅ RabbitMQ Messaging

✅ Docker Containerization

✅ PostgreSQL

✅ REST APIs

✅ Event Driven Architecture

✅ Environment Configuration

✅ Scalable Folder Structure

---

# 🛠 Tech Stack

| Category | Technologies |
|-----------|--------------|
| Backend | Node.js, Express.js |
| Database | PostgreSQL |
| Cache | Redis |
| Messaging | RabbitMQ |
| Authentication | JWT |
| DevOps | Docker |
| APIs | REST APIs |

---

# 📂 Project Structure

```
Distributed-E-Commerce-Backend/

│
├── api-gateway/
│
├── auth-service/
│
├── product-service/
│
├── order-service/
│
├── payment-service/
│
├── notification-service/
│
├── docker-compose.yml
│
└── README.md
```

---

# 🔄 System Workflow

```
User Login
      │
      ▼
API Gateway
      │
      ▼
Authentication Service
      │
 JWT Token
      │
      ▼
Product Service
      │
Create Order
      │
      ▼
RabbitMQ Event
      │
      ▼
Payment Service
      │
      ▼
Notification Service
```

---

# 📈 Scalability Features

- Independent deployment of services
- Horizontal scalability
- Distributed caching using Redis
- Asynchronous communication with RabbitMQ
- Containerized services using Docker
- Fault isolation
- Stateless APIs

---

# 🎯 Learning Outcomes

This project demonstrates practical experience with:

- Backend System Design
- Microservices Architecture
- Event Driven Systems
- Distributed Systems
- Docker
- API Gateway
- Authentication & Authorization
- Clean Architecture
- Scalable Backend Engineering

---

# 👨‍💻 Author

**Banoth Vikas**

- LinkedIn: https://linkedin.com/in/banoth-vikas-830b2428a
- GitHub: https://github.com/returnzerovicky

---

⭐ If you found this project useful, consider giving it a star!
