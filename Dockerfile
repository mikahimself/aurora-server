FROM oven/bun:slim

WORKDIR /app

COPY . .
RUN bun install
RUN bun prisma generate

CMD ["bun", "run", "src/index.ts"]
