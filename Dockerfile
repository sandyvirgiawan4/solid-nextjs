# Stage 1: Install dependencies
FROM docker.io/library/node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Menyalin berkas package untuk instalasi
COPY package.json package-lock.json* ./
# Menggunakan --legacy-peer-deps untuk mengatasi konflik React 19
RUN npm ci --legacy-peer-deps

# Stage 2: Build aplikasi
FROM docker.io/library/node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# Stage 3: Runner (Production)
FROM docker.io/library/node:20-alpine AS runner
WORKDIR /app

# Menginstal curl agar Healthcheck Coolify berfungsi
RUN apk add --no-cache curl

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Menyalin berkas yang diperlukan dari stage builder
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000

# Menjalankan server Next.js (standalone)
CMD ["node", "server.js"]
