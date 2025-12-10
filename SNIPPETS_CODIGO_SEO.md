# 📝 SNIPPETS DE CÓDIGO SEO - PRONTOS PARA USO

## 🎯 INSTRUÇÕES
- Substitua `{{PLACEHOLDER}}` pelos valores reais
- URLs devem ser absolutas (https://)
- Imagens OG devem ter pelo menos 1200x630px

---

## 1. META TAGS BÁSICAS (HEAD)

```html
<!-- Meta Tags Básicas -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="{{DESCRIPTION}}">
<title>{{TITLE}}</title>

<!-- Canonical -->
<link rel="canonical" href="{{URL}}">

<!-- Meta Robots -->
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<meta name="googlebot" content="index, follow">
```

**Placeholders:**
- `{{TITLE}}`: Título da página (50-60 caracteres)
- `{{DESCRIPTION}}`: Descrição (150-160 caracteres)
- `{{URL}}`: URL completa da página (https://www.cimbraf.org/pagina.html)

---

## 2. OPEN GRAPH (FACEBOOK, LINKEDIN, WHATSAPP)

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="{{URL}}">
<meta property="og:title" content="{{TITLE}}">
<meta property="og:description" content="{{DESCRIPTION}}">
<meta property="og:image" content="{{IMAGE}}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="{{IMAGE_ALT}}">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="CIMBRAF">
```

**Placeholders:**
- `{{URL}}`: URL completa
- `{{TITLE}}`: Título (mesmo do meta title)
- `{{DESCRIPTION}}`: Descrição (mesmo do meta description)
- `{{IMAGE}}`: URL completa da imagem (ex: https://www.cimbraf.org/assets/img/og-image.jpg)
- `{{IMAGE_ALT}}`: Descrição da imagem OG

**Exemplo para página de artigo:**
```html
<meta property="og:type" content="article">
<meta property="article:published_time" content="2025-01-27T10:00:00+00:00">
<meta property="article:author" content="CIMBRAF">
```

---

## 3. TWITTER CARD

```html
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="{{URL}}">
<meta name="twitter:title" content="{{TITLE}}">
<meta name="twitter:description" content="{{DESCRIPTION}}">
<meta name="twitter:image" content="{{IMAGE}}">
<meta name="twitter:image:alt" content="{{IMAGE_ALT}}">
```

**Tipos de card:**
- `summary_large_image`: Imagem grande (1200x630px) - **Recomendado**
- `summary`: Imagem pequena (120x120px)

---

## 4. HREFLANG (MULTILÍNGUE)

```html
<!-- Hreflang para versões multilíngue -->
<link rel="alternate" hreflang="pt-BR" href="https://www.cimbraf.org/">
<link rel="alternate" hreflang="en" href="https://www.cimbraf.org/english.html">
<link rel="alternate" hreflang="fr" href="https://www.cimbraf.org/french.html">
<link rel="alternate" hreflang="es" href="https://www.cimbraf.org/spanish.html">
<link rel="alternate" hreflang="x-default" href="https://www.cimbraf.org/">
```

**Nota:** `x-default` aponta para a versão padrão (geralmente pt-BR)

---

## 5. JSON-LD: ORGANIZATION

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "{{ORGANIZATION_NAME}}",
  "alternateName": "{{ALTERNATE_NAME}}",
  "url": "{{URL}}",
  "logo": "{{LOGO_URL}}",
  "description": "{{DESCRIPTION}}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{{STREET}}",
    "addressLocality": "{{CITY}}",
    "addressRegion": "{{STATE}}",
    "postalCode": "{{ZIP}}",
    "addressCountry": "{{COUNTRY_CODE}}"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "{{PHONE}}",
    "contactType": "customer service",
    "email": "{{EMAIL}}",
    "availableLanguage": ["Portuguese", "English", "French", "Spanish"]
  },
  "sameAs": [
    "{{SOCIAL_MEDIA_URL_1}}",
    "{{SOCIAL_MEDIA_URL_2}}"
  ],
  "areaServed": {
    "@type": "Place",
    "name": "{{AREA_SERVED}}"
  }
}
</script>
```

**Placeholders:**
- `{{ORGANIZATION_NAME}}`: CIMBRAF
- `{{ALTERNATE_NAME}}`: Comunidade Internacional de Negócios Brasil-África
- `{{URL}}`: https://www.cimbraf.org/
- `{{LOGO_URL}}`: https://www.cimbraf.org/assets/img/logo-png.png
- `{{DESCRIPTION}}`: Descrição da organização
- `{{STREET}}`: S C S Quadra 06 Bloco A - LOJA 246 - Asa Sul
- `{{CITY}}`: Brasília
- `{{STATE}}`: Distrito Federal
- `{{ZIP}}`: 70306-970
- `{{COUNTRY_CODE}}`: BR
- `{{PHONE}}`: +55-19-99613-5841
- `{{EMAIL}}`: contato@cimbraf.org
- `{{SOCIAL_MEDIA_URL_1}}`: https://www.instagram.com/umec_global/
- `{{AREA_SERVED}}`: Brasil e África

---

## 6. JSON-LD: ARTICLE (PARA BLOG)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{{ARTICLE_TITLE}}",
  "description": "{{ARTICLE_DESCRIPTION}}",
  "image": "{{ARTICLE_IMAGE}}",
  "datePublished": "{{PUBLISH_DATE}}",
  "dateModified": "{{MODIFIED_DATE}}",
  "author": {
    "@type": "Organization",
    "name": "CIMBRAF",
    "url": "https://www.cimbraf.org/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CIMBRAF",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.cimbraf.org/assets/img/logo-png.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "{{ARTICLE_URL}}"
  }
}
</script>
```

**Placeholders:**
- `{{ARTICLE_TITLE}}`: Título do artigo
- `{{ARTICLE_DESCRIPTION}}`: Descrição/resumo do artigo
- `{{ARTICLE_IMAGE}}`: URL da imagem principal do artigo
- `{{PUBLISH_DATE}}`: 2025-01-27T10:00:00+00:00 (formato ISO 8601)
- `{{MODIFIED_DATE}}`: 2025-01-27T10:00:00+00:00
- `{{ARTICLE_URL}}`: URL completa do artigo

---

## 7. JSON-LD: WEBSITE

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "{{SITE_NAME}}",
  "url": "{{SITE_URL}}",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "{{SITE_URL}}/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>
```

**Placeholders:**
- `{{SITE_NAME}}`: CIMBRAF
- `{{SITE_URL}}`: https://www.cimbraf.org/

---

## 8. LAZY LOADING DE IMAGENS

```html
<!-- Imagem com lazy loading -->
<img 
  src="{{IMAGE_URL}}" 
  alt="{{ALT_TEXT}}" 
  loading="lazy"
  width="{{WIDTH}}"
  height="{{HEIGHT}}"
  decoding="async">
```

**Exemplo:**
```html
<img 
  src="assets/img/galeria de fotos/1.jpeg" 
  alt="Evento CIMBRAF - Reunião de negócios Brasil-África em 2024" 
  loading="lazy"
  width="800"
  height="600"
  decoding="async">
```

**Nota:** Não use `loading="lazy"` em imagens acima da dobra (fold)

---

## 9. META ROBOTS (VARIAÇÕES)

### Página para indexar normalmente:
```html
<meta name="robots" content="index, follow">
```

### Página para NÃO indexar:
```html
<meta name="robots" content="noindex, nofollow">
```

### Página para indexar mas não seguir links:
```html
<meta name="robots" content="index, nofollow">
```

### Página para não indexar mas seguir links:
```html
<meta name="robots" content="noindex, follow">
```

---

## 10. EXEMPLO COMPLETO PARA PÁGINA DE ARTIGO

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Meta Tags Básicas -->
    <title>Como Investir no Mercado Africano - CIMBRAF</title>
    <meta name="description" content="Guia completo sobre oportunidades de investimento no continente africano. Descubra setores promissores e como a CIMBRAF pode ajudar.">
    
    <!-- Canonical -->
    <link rel="canonical" href="https://www.cimbraf.org/blog/como-investir-africa.html">
    
    <!-- Meta Robots -->
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://www.cimbraf.org/blog/como-investir-africa.html">
    <meta property="og:title" content="Como Investir no Mercado Africano - CIMBRAF">
    <meta property="og:description" content="Guia completo sobre oportunidades de investimento no continente africano.">
    <meta property="og:image" content="https://www.cimbraf.org/assets/img/blog/investir-africa.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:locale" content="pt_BR">
    <meta property="article:published_time" content="2025-01-27T10:00:00+00:00">
    <meta property="article:author" content="CIMBRAF">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Como Investir no Mercado Africano - CIMBRAF">
    <meta name="twitter:description" content="Guia completo sobre oportunidades de investimento no continente africano.">
    <meta name="twitter:image" content="https://www.cimbraf.org/assets/img/blog/investir-africa.jpg">
    
    <!-- JSON-LD: Article -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Como Investir no Mercado Africano",
      "description": "Guia completo sobre oportunidades de investimento no continente africano.",
      "image": "https://www.cimbraf.org/assets/img/blog/investir-africa.jpg",
      "datePublished": "2025-01-27T10:00:00+00:00",
      "dateModified": "2025-01-27T10:00:00+00:00",
      "author": {
        "@type": "Organization",
        "name": "CIMBRAF"
      },
      "publisher": {
        "@type": "Organization",
        "name": "CIMBRAF",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.cimbraf.org/assets/img/logo-png.png"
        }
      }
    }
    </script>
</head>
<body>
    <!-- Conteúdo da página -->
</body>
</html>
```

---

## 🔍 COMO VALIDAR

### 1. Meta Tags:
- **Ferramenta:** https://www.opengraph.xyz/
- **Teste:** Cole a URL e veja preview

### 2. JSON-LD:
- **Ferramenta:** https://validator.schema.org/
- **Teste:** Cole o JSON ou URL da página

### 3. Twitter Card:
- **Ferramenta:** https://cards-dev.twitter.com/validator
- **Teste:** Cole a URL

### 4. Facebook/OG:
- **Ferramenta:** https://developers.facebook.com/tools/debug/
- **Teste:** Cole a URL e clique em "Scrape Again"

---

## 📌 NOTAS IMPORTANTES

1. **URLs sempre absolutas:** Use `https://www.cimbraf.org/` nunca `/` ou `../`
2. **Imagens OG:** Mínimo 1200x630px, formato JPG ou PNG
3. **Títulos:** Máximo 60 caracteres (Google corta após)
4. **Descrições:** Máximo 160 caracteres (Google corta após)
5. **JSON-LD:** Sempre dentro de `<script type="application/ld+json">`
6. **Canonical:** Uma por página, sempre presente

---

**Última atualização:** 2025-01-27

