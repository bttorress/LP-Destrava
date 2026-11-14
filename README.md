# Destrava — Landing Page

Landing page da **Destrava**, uma plataforma de acompanhamento de atividades físicas.
Mensagem central: *chega de começar e parar — comece de onde está, no seu ritmo, e acompanhe sua evolução.*

## Estrutura

```
LP-Destrava/
├── index.html        # marcação e conteúdo da página
├── css/styles.css    # estilos (mobile-first, responsivo, dark/light por seção)
├── js/main.js        # reveal no scroll + hook da VSL
└── README.md
```

## Seções

1. **Hero** — headline + subheadline + área da VSL (vertical 9:16) + CTA
2. **Identificação** — a dor de começar e parar
3. **Conheça o Destrava** — a proposta + CTA
4. **Recursos** — acompanhar, enxergar evolução, construir constância, respeitar o ritmo
5. **Momento** — "você não precisa esperar a segunda-feira" + CTA
6. **FAQ** — perguntas frequentes (acordeão nativo `<details>`)
7. **CTA final** — "destrave seu próximo passo"
8. **Rodapé** — marca, links legais, copyright

## Como visualizar

Abra o `index.html` no navegador, ou sirva localmente:

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Personalização

- **VSL:** no `index.html`, substitua o bloco `.vsl-placeholder` pelo embed do seu player
  (YouTube/Vimeo/VTurb etc.) mantendo o container `.vsl` com proporção 9:16.
- **CTAs:** os botões apontam para `#video`. Troque pelo link do checkout/cadastro quando houver.
- **Cores:** paleta oficial definida nos tokens do topo do `css/styles.css`
  — branco gelo `#F5F5F5`, laranja `#FF6B00`, grafite `#14181C` (mais tons
  neutros derivados para estados e legibilidade). Seções alternam claro/escuro.
- **Links legais:** atualize os `href="#"` de *Termos de Uso* e *Política de Privacidade* no rodapé.

## Notas

- Sem dependências de build — HTML, CSS e JS puros.
- Acessível: navegação por teclado, foco visível, `prefers-reduced-motion` respeitado.
- Fontes via Google Fonts (Sora + Inter).
