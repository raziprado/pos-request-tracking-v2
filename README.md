# POS Request-Tracking — Protótipo Navegável

Protótipo navegável do fluxo completo de **solicitação e acompanhamento de entrega de maquininhas POS**, construído com HTML/CSS/JS estático e servido via GitHub Pages.

## Visão geral

Este projeto unifica dois fluxos em uma experiência contínua:

1. **Request (Solicitação)** — O cliente solicita uma maquininha POS, escolhendo endereço, modelo, quantidade, forma de pagamento e configurações de entrega.
2. **Tracking (Acompanhamento)** — Após confirmar o pedido, o cliente acompanha o status da entrega em tempo real, desde o recebimento do pedido até a chegada da maquininha.

Os dados selecionados no fluxo de request (como endereço e preferência de código de entrega) são persistidos e refletidos automaticamente no fluxo de tracking.

## Como rodar localmente

```bash
git clone git@github.com:nu-design-org/pos-request-tracking.git
cd pos-request-tracking
python3 -m http.server 8081
```

Acesse `http://localhost:8081` no navegador.

## Navegação do protótipo

### Request (Solicitação)

1. **Telas 1.x** — Splash e boas-vindas
2. **Telas 2.x** — Seleção de endereço
3. **Telas 3.x** — Seleção de modelo
4. **Telas 4.x** — Quantidade de maquininhas
5. **Telas 5.x** — Método de pagamento
6. **Telas 6.x** — Revisão e edição (endereço, entrega, pagamento)
7. **Telas 7.x** — Confirmação e sucesso

### Tracking (Acompanhamento)

1. **Tela 1.1** — Pedido recebido (com código de entrega)
2. **Tela 1.2** — Pedido recebido (sem código de entrega)
3. **Telas 2.x–5.x** — Etapas de preparação e envio
4. **Telas 6.x–8.x** — Atualização de endereço e previsão de entrega
5. **Tela 9.x** — Entrega concluída

A navegação funciona por **toque nos elementos interativos** e **swipe lateral** entre telas sequenciais.

## Deploy

O projeto é publicado automaticamente via **GitHub Pages** ao fazer push no branch `master`. O workflow (`.github/workflows/deploy-pages.yml`) copia os arquivos HTML e assets para o site estático.
