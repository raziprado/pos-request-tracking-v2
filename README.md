# POS Request — Protótipo Navegável

Protótipo navegável do fluxo de solicitação de maquininhas POS, construído com **React Native + Expo**.

## Pré-requisitos

- **Node.js** 18 ou superior — [nodejs.org](https://nodejs.org/)
- **Expo Go** instalado no celular (disponível na App Store / Google Play)
- **Xcode** (apenas se quiser usar o iOS Simulator no Mac)

## Instalação

```bash
git clone git@github.com:nu-design-org/pos-request-prototype.git
cd pos-request-prototype
npm install
```

## Como rodar

### Opção 1 — Celular físico (mesma rede Wi-Fi)

```bash
npx expo start
```

Abra o app **Expo Go** no celular e escaneie o QR code que aparece no terminal.
O celular precisa estar na mesma rede Wi-Fi do computador.

### Opção 2 — Celular físico (qualquer rede)

```bash
npx expo start --tunnel
```

Cria um URL público via tunnel. Qualquer pessoa, em qualquer rede, pode escanear o QR code.
Na primeira vez pode pedir para instalar `@expo/ngrok` — aceite a instalação.

### Opção 3 — iOS Simulator (Mac)

```bash
npx expo start
```

Pressione **i** no terminal para abrir no iOS Simulator (requer Xcode instalado).

### Opção 4 — Navegador web

```bash
npx expo start --web
```

Abre o protótipo no navegador. Útil para revisão rápida, mas a experiência é otimizada para mobile.

## Navegação do protótipo

O protótipo segue o fluxo completo de solicitação de POS:

1. **Telas 1.x** — Splash e boas-vindas
2. **Telas 2.x** — Cadastro de endereço
3. **Telas 3.x** — Seleção de modelo
4. **Telas 4.x** — Quantidade de maquininhas
5. **Telas 5.x** — Método de pagamento
6. **Telas 6.x** — Revisão e edição (endereço, entrega, pagamento)
7. **Telas 7.x** — Confirmação e compartilhamento

A navegação funciona por **toque nos elementos interativos** e **swipe para esquerda** em telas selecionadas.
