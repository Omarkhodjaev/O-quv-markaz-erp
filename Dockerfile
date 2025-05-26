# Node.js Alpine versiyasidan foydalanamiz
FROM node:18-alpine

# Ishchi papkani belgilaymiz
WORKDIR /app

# package.json va yarn.lock fayllarini nusxalaymiz
COPY package.json yarn.lock ./

# Kutubxonalarni o'rnatamiz
RUN yarn install --frozen-lockfile

# Barcha fayllarni konteynerga nusxalaymiz
COPY . .

# NestJS loyihasini build qilamiz
RUN yarn build

# 3000-portni ochamiz
EXPOSE 3000

# Loyihani ishga tushuramiz
CMD ["yarn", "start:prod"]
