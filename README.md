# Aure Parfum — Consultoria de Fragrâncias

Site institucional de uma página desenvolvido para consultoria personalizada de fragrâncias. O projeto foi construído com foco em elegância visual, performance e boas práticas de SEO e segurança.

---

## Tecnologias

- **HTML5** semântico, sem frameworks
- **CSS3** puro com variáveis no `:root` — sem Tailwind
- **JavaScript** vanilla + GSAP para animações
- **GSAP plugins:** ScrollTrigger, ScrollSmoother, SplitText
- **Lucide Icons** para ícones SVG

---

## Estrutura de arquivos

```
aure-parfum/
├── index.html          # estrutura e conteúdo
├── style.css           # todo o visual, organizado por seção
├── script.js           # animações e interações
├── robots.txt          # instruções para crawlers
├── sitemap.xml         # mapa do site para o Google
├── vercel.json         # configuração de deploy e headers de segurança
└── assets/
    ├── perfume.jpg     # imagem gerada por IA (DALL-E 3)
    └── vetor-logo.svg  # logo como marca d'água
```

---

## Animações

Todas as animações foram declaradas individualmente por elemento — nunca em grupo — para facilitar ajustes futuros sem efeitos colaterais.

- **Hero:** reveal por máscara com SplitText (chars) + partículas douradas em canvas
- **Seções:** elementos entram com fade + translateY via ScrollTrigger
- **Sobre:** título e parágrafo revelados em sincronia com o scroll (scrub)
- **Menu mobile:** abertura com fade/scale + links entram do eixo X via GSAP
- **ScrollSmoother:** scroll com inércia suave em todo o site

---

## SEO

- Meta tags completas: description, Open Graph, Twitter Card
- Schema JSON-LD do tipo `LocalBusiness` com serviços mapeados
- `robots.txt` e `sitemap.xml` na raiz
- Tag `canonical` configurada
- Imagem com `loading="lazy"` e `alt` descritivo

---

## Segurança

Headers HTTP configurados via `vercel.json`:

| Header | Proteção |
|---|---|
| `X-Frame-Options` | Clickjacking |
| `X-Content-Type-Options` | MIME sniffing |
| `Referrer-Policy` | Vazamento de URL |
| `Permissions-Policy` | Câmera, microfone, GPS |
| `Strict-Transport-Security` | Força HTTPS |
| `Content-Security-Policy` | XSS e scripts não autorizados |

---

## Deploy


Após publicar, submeter o `sitemap.xml` no [Google Search Console](https://search.google.com/search-console).
