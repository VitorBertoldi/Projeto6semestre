# Use uma imagem base oficial do Node.js
FROM node:22.4.1

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json (se houver) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install --production

# Copie o restante do código da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta na qual sua aplicação vai rodar
EXPOSE 3000

# Defina o comando para rodar sua aplicação
CMD ["npm", "start"]
