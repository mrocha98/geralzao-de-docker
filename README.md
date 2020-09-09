<div align="center">
    <h1>Geralzão de Docker</h1>
    <img alt="Docker whale" src="https://cdn.iconscout.com/icon/free/png-512/docker-226091.png" />
</div>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/mrocha98/geralzao-de-docker?style=for-the-badge"/>

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/mrocha98/geralzao-de-docker?style=for-the-badge"/>

  <img alt="Repo size" src="https://img.shields.io/github/repo-size/mrocha98/geralzao-de-docker?style=for-the-badge"/>

  <img alt="License" src="https://img.shields.io/github/license/mrocha98/geralzao-de-docker?style=for-the-badge"/>
</p>

<div align="center">
  <a href="https://insomnia.rest/run/?label=Geralzao%20de%20Docker&uri=https%3A%2F%2Fgithub.com%2Fmrocha98%2Fgeralzao-de-docker%2Fblob%2Fmaster%2Finsomnia-example.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</div>

## 🎯 Objetivo

Apresentar a ferramenta na prática e discutir como ela será utilizada no projeto.

O roteiro e os links utilizados estão disponíveis nesse link: <https://www.notion.so/Geralz-o-de-Docker-5aa2dc103fa24bb59f1837be78839767>

## 📋 Requisitos

- [NodeJs](https://nodejs.org/en/download/) - recomendamos a versão LTS
- [Yarn](https://yarnpkg.com/)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## 🚀 Executando a aplicação

Clone o repositório no local de sua preferência

```bash
git clone https://github.com/mrocha98/geralzao-de-docker.git
```

Entre no diretório e instale as dependências

```bash
cd geralzao-de-docker
yarn install
```

Crie o arquivo .env e copie o conteúdo do arquivo .env.example para dentro dele

```bash
cp -r .env.example .env
```

Troque os valores que julgar necessário.

Inicie os containers
```bash
docker-compose pull # baixa as imagens
docker-compose up -d # inicia os containers
docker-compose logs -f # loga os registros (retire o -f se quiser continuar no mesmo terminal)
```

Assim que o banco estiver pronto para receber conexões, execute os comandos:

```bash
yarn knex:migrate # roda as migrations do banco
yarn start:dev # inicia a aplicação em modo de desenvolvimento
```

## 📝 Licença

Esse projeto foi desenvolvido sob a [licença BSL-1.0](https://github.com/mrocha98/geralzao-de-docker/blob/master/LICENSE).
