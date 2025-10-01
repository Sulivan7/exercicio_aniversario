# 🎉 Exercício Aniversário - Landing Page

Uma landing page elegante e interativa criada para convites de aniversário, desenvolvida com HTML5, SASS e JavaScript vanilla.

## 📋 Sobre o Projeto

Este projeto é uma página de convite para eventos de aniversário que apresenta:

- Contador regressivo em tempo real até a data do evento
- Seções informativas sobre o evento, cardápio e local
- Design responsivo e animações suaves
- Interface moderna e atrativa

## ✨ Funcionalidades

- **Contador Regressivo**: Exibe o tempo restante até o evento em dias, horas, minutos e segundos
- **Animações**: Utilizando a biblioteca AOS (Animate On Scroll) para transições suaves
- **Design Responsivo**: Adaptado para diferentes tamanhos de tela
- **Seções Informativas**: Detalhes sobre o evento, cardápio e localização
- **Otimização de Imagens**: Configuração do Sharp para melhor performance

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **SASS**
- **JavaScript ES6+**
- **Parcel**
- **AOS Library**
- **Sharp**

## 📂 Estrutura do Projeto

```
exercicio_aniversario/
├── src/
│   ├── index.html
│   ├── images/
│   │   ├── evento.png
│   │   ├── evento2.png
│   │   ├── fundo.jpg
│   │   ├── local.png
│   │   └── logo.png
│   ├── scripts/
│   │   └── main.js
│   └── styles/
│       ├── main.scss
│       ├── _event.scss
│       ├── _hero.scss
│       ├── _variables.scss
│       └── components/
│           ├── _buttons.scss
│           └── _infos_bar.scss
├── package.json
├── sharp.config.json
└── README.md
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js instalado na máquina
- npm ou yarn

### Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Sulivan7/exercicio_aniversario.git
   cd exercicio_aniversario
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

### Executando o projeto

1. **Modo de desenvolvimento**

   ```bash
   npm run dev
   ```

   O projeto será executado em `http://localhost:1234`

2. **Build para produção**
   ```bash
   npm run build
   ```
   Os arquivos compilados estarão na pasta `dist/`
