# System Architecture

## Overview

The Distributed E-Commerce Backend follows a **Microservices Architecture**, where each service is independently deployable, scalable, and communicates through REST APIs and asynchronous messaging.

---

## Architecture Diagram

```text
                    +----------------+
                    |     Client     |
                    +--------+-------+
                             |
                             v
                    +----------------+
                    |  API Gateway   |
                    +--------+-------+
                             |
      +----------------------+----------------------+
      |           |            |           |         |
      v           v            v           v         v
+-----------+ +-----------+ +----------+ +---------+ +----------------+
|   Auth    | |  Product  | |  Order   | | Payment | | Notification   |
|  Service  | |  Service  | | Service  | | Service | |    Service     |
+-----------+ +-----------+ +----------+ +---------+ +----------------+
      \           |             |            |             /
       \          |             |            |            /
        +-----------------------------------------------+
                        RabbitMQ Event Bus
                               |
                      +------------------+
                      |      Redis       |
                      +------------------+
                               |
                      +------------------+
                      |    PostgreSQL    |
                      +------------------+
```

---

## Services

### API Gateway

- Entry point for all client requests
- Routes traffic to individual microservices
- Handles request forwarding

---

### Authentication Service

Responsibilities:

- User Registration
- User Login
- JWT Authentication
- Password Hashing

---

### Product Service

Responsibilities:

- Product CRUD
- Product Search
- Inventory Management
- Category Management

---

### Order Service

Responsibilities:

- Create Orders
- Update Order Status
- Order Tracking
- Order History

---

### Payment Service

Responsibilities:

- Payment Processing
- Refund Handling
- Payment Status Tracking

---

### Notification Service

Responsibilities:

- Email Notifications
- Order Updates
- Payment Notifications

---

## Infrastructure

- Node.js + Express.js
- PostgreSQL
- Redis
- RabbitMQ
- Docker
- GitHub Actions

---

## Scalability

The architecture supports:

- Horizontal Scaling
- Independent Deployment
- Stateless Services
- Event-Driven Communication
- Load Balancing
- Containerized Deployment

---

## Future Improvements

- Kubernetes Deployment
- Service Discovery
- Distributed Tracing
- API Rate Limiting
- Prometheus & Grafana Monitoring
- OpenTelemetry
- Circuit Breaker Pattern
- Centralized Logging (ELK Stack)
