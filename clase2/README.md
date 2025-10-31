# Clase 2 - Dockerización de Mi Aplicación

## 1. Descripción de la aplicación
**Lenguaje:** Node.js  
**Framework:** Express  
**Descripción:** API REST simple con 3 endpoints.

**Endpoints**
- `GET /` — Mensaje de bienvenida y uptime.
- `GET /health` — Estado de salud (JSON con hostname, pid).
- `POST /echo` — Devuelve el body enviado.

## 2. Dockerfile (multi-stage)
Archivo adjunto (ver archivo `Dockerfile` en la raíz)

```
# syntax=docker/dockerfile:1.4

############################
# Stage 1 - build
############################
FROM node:18-alpine AS build

LABEL maintainer="Ariana Choque <choqueariana2912@gmail.com>"
LABEL org.opencontainers.image.source="https://github.com/HonorioNoemi/mi-app"

ENV NODE_ENV=production
ENV APP_DIR=/usr/src/app

WORKDIR $APP_DIR

COPY app/package*.json ./

RUN npm ci --only=production

COPY app/src ./src

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

############################
# Stage 2 - runtime
############################
FROM node:18-alpine AS runtime

LABEL org.opencontainers.image.licenses="MIT"

ENV NODE_ENV=production

ENV APP_DIR=/usr/src/app
ENV PORT=3000

WORKDIR $APP_DIR

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/src ./src
COPY app/package*.json ./

RUN chown -R appuser:appgroup $APP_DIR

EXPOSE ${PORT}

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:${PORT}/health >/dev/null 2>&1 || exit 1

USER appuser

LABEL org.opencontainers.image.version="1.0.0"
LABEL org.opencontainers.image.title="mi-app"

CMD ["node", "src/index.js"]
```
