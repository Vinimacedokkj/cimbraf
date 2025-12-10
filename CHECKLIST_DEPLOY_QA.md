# ✅ CHECKLIST FINAL - DEPLOY E QA SEO

## 📋 ANTES DO DEPLOY

### 1. Validação de Código
- [ ] HTML válido (usar https://validator.w3.org/)
- [ ] CSS sem erros (usar https://jigsaw.w3.org/css-validator/)
- [ ] JavaScript sem erros no console
- [ ] Todas as imagens carregam corretamente
- [ ] Links internos funcionam
- [ ] Formulário de contato funciona

### 2. Meta Tags e SEO
- [ ] Meta title único e descritivo (50-60 caracteres)
- [ ] Meta description única (150-160 caracteres)
- [ ] Canonical tag presente em todas as páginas
- [ ] Meta robots configurado corretamente
- [ ] Open Graph completo (og:title, og:description, og:image, og:url)
- [ ] Twitter Card completo
- [ ] Hreflang implementado (se multilíngue)
- [ ] JSON-LD válido (testar em https://validator.schema.org/)

### 3. Arquivos de Configuração
- [ ] `robots.txt` criado e acessível em `/robots.txt`
- [ ] `sitemap.xml` criado e acessível em `/sitemap.xml`
- [ ] Sitemap referenciado no robots.txt
- [ ] URLs no sitemap são absolutas (https://)
- [ ] Lastmod atualizado no sitemap

### 4. Performance
- [ ] Imagens com lazy loading (exceto acima da dobra)
- [ ] Imagens com alt text descritivo e único
- [ ] CSS minificado (ou planejado para produção)
- [ ] JavaScript minificado (ou planejado para produção)
- [ ] Fontes com font-display: swap
- [ ] Imagens comprimidas/otimizadas

---

## 🔍 APÓS O DEPLOY

### 5. Google Search Console

#### Configuração Inicial:
- [ ] Site verificado no Google Search Console
- [ ] Sitemap enviado: `https://www.cimbraf.org/sitemap.xml`
- [ ] robots.txt testado (Ferramenta de teste do GSC)
- [ ] URL de inspeção testada (testar indexação)

#### Monitoramento (primeiras 48h):
- [ ] Verificar "Cobertura" - páginas indexadas
- [ ] Verificar "Melhorias" - erros ou avisos
- [ ] Verificar "Sitemaps" - status de processamento
- [ ] Solicitar indexação manual das páginas principais

#### Links:
- Google Search Console: https://search.google.com/search-console

---

### 6. Validação com Ferramentas

#### A. Rich Results Test (Google)
- [ ] Testar URL principal: https://search.google.com/test/rich-results
- [ ] Verificar se JSON-LD está sendo reconhecido
- [ ] Verificar se Organization schema aparece

#### B. Facebook Sharing Debugger
- [ ] Testar URL: https://developers.facebook.com/tools/debug/
- [ ] Verificar preview do Open Graph
- [ ] Limpar cache se necessário (botão "Scrape Again")

#### C. Twitter Card Validator
- [ ] Testar URL: https://cards-dev.twitter.com/validator
- [ ] Verificar preview do Twitter Card

#### D. LinkedIn Post Inspector
- [ ] Testar URL: https://www.linkedin.com/post-inspector/
- [ ] Verificar preview para LinkedIn

---

### 7. Lighthouse Audit

#### Executar no Chrome DevTools (F12 > Lighthouse):

**Performance:**
- [ ] Performance Score > 90
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1

**SEO:**
- [ ] SEO Score = 100
- [ ] Document tem meta description
- [ ] Links têm texto descritivo
- [ ] Imagens têm alt text
- [ ] Viewport configurado
- [ ] Fontes têm tamanho legível

**Best Practices:**
- [ ] Usa HTTPS
- [ ] Console sem erros
- [ ] Imagens têm aspect ratio

**Accessibility:**
- [ ] Acessibilidade Score > 90
- [ ] Contraste de cores adequado
- [ ] Elementos interativos acessíveis

---

### 8. Teste Mobile

#### Google Mobile-Friendly Test:
- [ ] Testar: https://search.google.com/test/mobile-friendly
- [ ] Site é mobile-friendly
- [ ] Texto legível sem zoom
- [ ] Botões/touch targets adequados

#### Teste Manual:
- [ ] Navegação funciona em mobile
- [ ] Menu hambúrguer funciona
- [ ] Formulário funciona em mobile
- [ ] Imagens carregam corretamente
- [ ] Texto não quebra layout

---

### 9. Validação de Estrutura

#### Schema.org Validator:
- [ ] Testar JSON-LD: https://validator.schema.org/
- [ ] Organization schema válido
- [ ] WebSite schema válido
- [ ] Sem erros de sintaxe

#### HTML Validator:
- [ ] Testar: https://validator.w3.org/
- [ ] Sem erros críticos
- [ ] Avisos mínimos (se houver)

---

### 10. Teste de Compartilhamento Social

#### Testar preview em:
- [ ] WhatsApp (compartilhar link)
- [ ] Facebook (compartilhar link)
- [ ] Twitter/X (compartilhar link)
- [ ] LinkedIn (compartilhar link)
- [ ] Telegram (compartilhar link)

**Verificar:**
- [ ] Título aparece corretamente
- [ ] Descrição aparece corretamente
- [ ] Imagem aparece (OG image)
- [ ] URL aparece corretamente

---

### 11. Verificação de Indexação

#### Google Search (primeiras 24-48h):
```bash
# Pesquisar no Google:
site:cimbraf.org
```

- [ ] Página principal indexada
- [ ] Páginas secundárias indexadas (se houver)
- [ ] Snippet aparece com meta description

#### Bing Webmaster Tools (opcional):
- [ ] Site verificado
- [ ] Sitemap enviado

---

### 12. Monitoramento Contínuo (Primeira Semana)

#### Google Search Console:
- [ ] Verificar "Desempenho" - impressões e cliques
- [ ] Verificar "Cobertura" - novas páginas indexadas
- [ ] Verificar "Links" - backlinks recebidos

#### Analytics (se configurado):
- [ ] Google Analytics funcionando
- [ ] Eventos de conversão configurados
- [ ] Filtros de spam configurados

---

## 🚨 PROBLEMAS COMUNS E SOLUÇÕES

### Problema: Sitemap não processado
**Solução:** 
- Verificar se sitemap.xml está acessível
- Verificar formato XML válido
- Aguardar 24-48h para processamento

### Problema: Página não indexada
**Solução:**
- Verificar robots.txt não está bloqueando
- Solicitar indexação manual no GSC
- Verificar se há canonical apontando para outra URL

### Problema: Preview social não aparece
**Solução:**
- Limpar cache do Facebook/Twitter
- Verificar se OG tags estão corretas
- Verificar se imagem OG está acessível (URL absoluta)

### Problema: Lighthouse score baixo
**Solução:**
- Minificar CSS/JS
- Comprimir imagens
- Implementar lazy loading
- Otimizar fontes

---

## 📊 MÉTRICAS DE SUCESSO (30 dias)

### Objetivos:
- [ ] 10+ páginas indexadas no Google
- [ ] 100+ impressões no Google Search
- [ ] CTR > 2% (cliques/impressões)
- [ ] Performance Score > 90 (Lighthouse)
- [ ] SEO Score = 100 (Lighthouse)
- [ ] 0 erros críticos no Google Search Console

---

## 🔗 LINKS ÚTEIS

- **Google Search Console:** https://search.google.com/search-console
- **Rich Results Test:** https://search.google.com/test/rich-results
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Schema Validator:** https://validator.schema.org/
- **HTML Validator:** https://validator.w3.org/
- **Facebook Debugger:** https://developers.facebook.com/tools/debug/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator

---

## ✅ CHECKLIST RÁPIDO PRÉ-DEPLOY

```
[ ] Meta tags completas (OG, Twitter, Canonical)
[ ] JSON-LD válido
[ ] robots.txt criado
[ ] sitemap.xml criado e válido
[ ] Imagens com lazy loading
[ ] Alt text em todas as imagens
[ ] HTML válido
[ ] Testado em mobile
[ ] Performance > 90 (Lighthouse)
[ ] SEO Score = 100 (Lighthouse)
```

---

**Última atualização:** 2025-01-27  
**Próxima revisão:** Após 30 dias de deploy

