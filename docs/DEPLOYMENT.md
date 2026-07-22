# Deployment Guide

## Prerequisites

- Node.js 20+
- Docker
- Docker Compose
- PostgreSQL
- Redis
- RabbitMQ

---

## Clone Repository

```bash
git clone https://github.com/returnzerovicky/Distributed-E-Commerce-Backend-Microservices-.git
cd Distributed-E-Commerce-Backend-Microservices-
```

---

## Configure Environment

```bash
cp .env.example .env
```

Update the environment variables as required.

---

## Run with Docker

```bash
docker-compose up --build
```

---

## Services

| Service | Port |
|----------|------|
| API Gateway | 3000 |
| Auth Service | 4001 |
| Product Service | 4002 |
| Order Service | 4003 |
| Payment Service | 4004 |
| Notification Service | 4005 |
| PostgreSQL | 5432 |
| Redis | 6379 |
| RabbitMQ | 5672 |
| RabbitMQ Dashboard | 15672 |

---

## Health Check

```
GET http://localhost:3000/health
```

---

## Future Deployment Targets

- Docker Swarm
- Kubernetes
- AWS ECS
- Azure Container Apps
- Google Cloud Run
