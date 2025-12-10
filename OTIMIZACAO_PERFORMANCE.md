# ⚡ GUIA DE OTIMIZAÇÃO DE PERFORMANCE - CIMBRAF

## 🎯 OBJETIVOS
- Reduzir CLS (Cumulative Layout Shift)
- Implementar Lazy Loading de imagens
- Minificar e comprimir CSS/JS
- Melhorar Core Web Vitals

---

## 1. LAZY LOADING DE IMAGENS

### Implementação no HTML

Adicione `loading="lazy"` em todas as imagens que não estão acima da dobra (fold):

```html
<!-- ANTES -->
<img src="assets/img/galeria de fotos/1.jpeg" alt="Galeria de Fotos">

<!-- DEPOIS -->
<img src="assets/img/galeria de fotos/1.jpeg" alt="Descrição específica da imagem" loading="lazy">
```

### Imagens que NÃO devem ter lazy loading (acima da dobra):
- Logo no header
- Imagem hero/principal
- Primeira imagem visível sem scroll

### Exemplo de implementação completa:

```html
<!-- Hero (sem lazy) -->
<img src="assets/img/logo-png.png" alt="CIMBRAF Logo" class="large-logo-img">

<!-- Galeria (com lazy) -->
<img src="assets/img/galeria de fotos/1.jpeg" alt="Evento CIMBRAF - Reunião de negócios Brasil-África" loading="lazy">
<img src="assets/img/galeria de fotos/2.jpeg" alt="Cerimônia de assinatura de parceria internacional" loading="lazy">
```

---

## 2. REDUZIR CLS (Cumulative Layout Shift)

### Problemas comuns e soluções:

#### A. Imagens sem dimensões definidas
```html
<!-- ❌ ERRADO -->
<img src="image.jpg" alt="Descrição">

<!-- ✅ CORRETO -->
<img src="image.jpg" alt="Descrição" width="800" height="600">
```

#### B. Fontes sem font-display
Adicione no CSS:
```css
@font-face {
  font-family: 'Montserrat';
  src: url('...');
  font-display: swap; /* ou optional */
}
```

#### C. Espaços reservados para imagens
```html
<div class="image-container" style="aspect-ratio: 16/9;">
  <img src="image.jpg" alt="..." loading="lazy">
</div>
```

---

## 3. MINIFICAÇÃO E COMPRESSÃO

### A. Minificar CSS e JavaScript

#### Opção 1: Ferramentas Online
- **CSS:** https://www.minifier.org/
- **JS:** https://www.minifier.org/

#### Opção 2: NPM (Recomendado para produção)

```bash
# Instalar ferramentas
npm install -g clean-css-cli terser

# Minificar CSS
cleancss -o style.min.css style.css

# Minificar JavaScript
terser script.js -o script.min.js --compress --mangle
```

#### Opção 3: Build Script (package.json)
```json
{
  "scripts": {
    "minify:css": "cleancss -o style.min.css style.css",
    "minify:js": "terser script.js -o script.min.js --compress --mangle",
    "build": "npm run minify:css && npm run minify:js"
  },
  "devDependencies": {
    "clean-css-cli": "^5.6.2",
    "terser": "^5.19.2"
  }
}
```

### B. Comprimir Imagens

#### Ferramentas Recomendadas:
1. **Squoosh** (online): https://squoosh.app/
2. **ImageOptim** (Mac): https://imageoptim.com/
3. **TinyPNG** (online): https://tinypng.com/

#### Comandos para otimização em lote (Node.js):

```bash
npm install -g imagemin-cli imagemin-mozjpeg imagemin-pngquant

# Comprimir imagens
imagemin assets/img/**/*.{jpg,jpeg,png} --out-dir=assets/img/optimized --plugin=imagemin-mozjpeg --plugin=imagemin-pngquant
```

#### Configuração recomendada:
- **JPEG:** Qualidade 80-85%, Progressive
- **PNG:** Usar PNG-8 quando possível, ou converter para WebP
- **WebP:** Formato moderno, reduz 25-35% do tamanho

---

## 4. OTIMIZAÇÃO DE FONTES

### Preload de fontes críticas:

```html
<!-- Adicionar no <head> -->
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" as="style">
<link rel="preload" href="https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXpsog.woff2" as="font" type="font/woff2" crossorigin>
```

### Font-display no CSS:
```css
@font-face {
  font-family: 'Montserrat';
  font-display: swap; /* ou optional para fontes não críticas */
}
```

---

## 5. COMPRESSÃO GZIP/BROTLI (Servidor)

### Se usar Netlify/Vercel:
- Automático! Não precisa configurar.

### Se usar Apache (.htaccess):
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

### Se usar Nginx:
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
gzip_min_length 1000;
```

---

## 6. CACHE DE RECURSOS

### Headers HTTP recomendados:

```
Cache-Control: public, max-age=31536000, immutable  # Para assets estáticos
Cache-Control: public, max-age=3600                 # Para HTML
```

### Netlify (_headers file na raiz):
```
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=3600
```

---

## 7. EXEMPLOS DE CÓDIGO OTIMIZADO

### HTML com lazy loading e dimensões:
```html
<!-- Galeria otimizada -->
<div class="gallery-item" data-image="1">
  <img 
    src="assets/img/galeria de fotos/1.jpeg" 
    alt="Evento CIMBRAF - Reunião de negócios Brasil-África em 2024" 
    loading="lazy"
    width="800"
    height="600"
    decoding="async">
</div>
```

### CSS com font-display:
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;600;700&display=swap');
```

---

## 8. COMANDOS RÁPIDOS

### Checklist de otimização:
```bash
# 1. Minificar CSS
cleancss -o style.min.css style.css

# 2. Minificar JS
terser script.js -o script.min.js --compress --mangle

# 3. Comprimir imagens (usar Squoosh.app ou TinyPNG manualmente)

# 4. Validar HTML
npx html-validate index.html

# 5. Testar performance
# Use Lighthouse no Chrome DevTools
```

---

## 9. MÉTRICAS ESPERADAS

### Antes vs Depois (objetivos):

| Métrica | Antes | Meta | Como Medir |
|---------|-------|------|------------|
| LCP | ~3.5s | <2.5s | Lighthouse |
| FID | ~100ms | <100ms | Lighthouse |
| CLS | ~0.15 | <0.1 | Lighthouse |
| Tamanho CSS | ~300KB | <150KB | DevTools |
| Tamanho JS | ~200KB | <100KB | DevTools |

---

## 10. FERRAMENTAS DE VALIDAÇÃO

1. **Lighthouse** (Chrome DevTools): F12 > Lighthouse
2. **PageSpeed Insights**: https://pagespeed.web.dev/
3. **WebPageTest**: https://www.webpagetest.org/
4. **GTmetrix**: https://gtmetrix.com/

---

## 📝 NOTAS IMPORTANTES

- **Sempre teste após minificar** - Verifique se não quebrou funcionalidades
- **Mantenha backups** - Guarde versões não minificadas
- **Atualize sitemap** - Após mudanças, atualize lastmod no sitemap.xml
- **Valide JSON-LD** - Use https://validator.schema.org/

