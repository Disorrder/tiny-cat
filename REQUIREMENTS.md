# Infrastructure Design Notes for tiny-cat Link Shortener

## Traffic Requirements

- Read operations: 100M/month (~38 requests/second)
- Write operations: 1M/month (~0.38 requests/second)
- Read-to-write ratio: 100:1

## Selected Tools

- Next.js frontend
- Nest.js backend
- PostgreSQL
- Redis
- Railway.app for Docker image and database deployment
- Vercel for frontend deployment and CDN

## Infrastructure Components

### Application Layer

- 2 application servers (with auto-scaling capability)
  - t3.small instances (2 vCPU, 2GB RAM)
  - Can handle ~500 req/sec each
  - Provides redundancy and high availability
  - Load balanced using Application Load Balancer (ALB)

### Database Layer (PostgreSQL)

- Primary instance:
  - db.t3.medium (2 vCPU, 4GB RAM)
  - Storage: 100GB gp3
- Read replica for scaling reads:
  - 1 read replica initially
  - Can be scaled based on read traffic

### Caching Layer

- Redis cache
  - cache.t3.micro (2 nodes for high availability)
  - 1GB memory each
  - Cache frequently accessed URLs
  - Cache hit ratio target: 80%

## Security Measures

1. Rate limiting per IP
2. Input validation for URLs
3. HTTPS only
4. WAF (Web Application Firewall) rules
5. Regular security audits

## Monitoring

1. Application metrics:
   - Request latency
   - Error rates
   - Success rates
2. Infrastructure metrics:
   - CPU utilization
   - Memory usage
   - Disk I/O
3. Database metrics:
   - Connection count
   - Query performance
   - Cache hit ratio
