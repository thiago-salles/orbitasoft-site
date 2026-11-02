# MEMORY — Site Órbita Soft (orbitasoft.com.br)

Registro de pedidos e decisões do site de divulgação dos sistemas, sites e parceiros.

## Decisões
- **Marca-mãe:** Órbita Soft (`orbitasoft.com.br`; `.com.br` livre em 2026-11-02, `.com` ocupado).
- **Sistemas no site:** ENKI (loja/PDV/NF-e, projeto `loja_e-comerce`), Cardápio Digital, Painel Chatbot, GraficaERP. NEXORA foi descontinuado e fica de fora.
- **Stack:** Astro 5 + Tailwind 4, página única estática. Conteúdo em `src/data/site.ts`.

## Pedidos

### #001 — Criar o site de divulgação (Fase 1: fundação + página principal)
- **Data:** 2026-11-02
- **Status:** Entregue como rascunho, aguardando aprovação do visual.
- **Feito:** hero com órbitas animadas e mockup 3D, faixa rolante, números animados, bento de sistemas, como funciona, programa de parceiros, contato, botão flutuante de WhatsApp, SEO/Open Graph, responsivo, `prefers-reduced-motion`.
- **Pendências (TODO em `src/data/site.ts`):** WhatsApp, e-mail e redes reais; números reais; descrições finais dos sistemas; prints reais de cada sistema; logotipo definitivo da Órbita (hoje um ícone provisório em `public/favicon.svg`).
- **Verificação:** `npm run build` OK. Conferência visual no navegador ainda não feita.
- **Comandos:** `npm run dev` (prévia em http://localhost:4321), `npm run build` (gera `dist/`).
- **Observação:** `npm audit` aponta falhas no Astro (XSS em `define:vars` e MDX), recursos que o site não usa. Atualizar o Astro antes de publicar.
