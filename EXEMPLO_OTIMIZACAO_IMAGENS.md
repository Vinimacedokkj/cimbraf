# 🖼️ EXEMPLO PRÁTICO: OTIMIZAÇÃO DE IMAGENS

## 📝 ANTES E DEPOIS

### ❌ ANTES (Código Atual)
```html
<div class="gallery-item" data-image="1">
    <img src="assets/img/galeria de fotos/1.jpeg" alt="Galeria de Fotos">
</div>
<div class="gallery-item" data-image="2">
    <img src="assets/img/galeria de fotos/2.jpeg" alt="Galeria de Fotos">
</div>
```

**Problemas:**
- Sem lazy loading
- Alt text genérico (não ajuda SEO)
- Sem dimensões (causa CLS)

---

### ✅ DEPOIS (Código Otimizado)
```html
<div class="gallery-item" data-image="1">
    <img 
        src="assets/img/galeria de fotos/1.jpeg" 
        alt="Evento CIMBRAF - Reunião de negócios Brasil-África com empresários e investidores" 
        loading="lazy"
        width="800"
        height="600"
        decoding="async">
</div>
<div class="gallery-item" data-image="2">
    <img 
        src="assets/img/galeria de fotos/2.jpeg" 
        alt="Cerimônia de assinatura de parceria internacional CIMBRAF - Cooperação Brasil-África" 
        loading="lazy"
        width="800"
        height="600"
        decoding="async">
</div>
```

**Melhorias:**
- ✅ Lazy loading implementado
- ✅ Alt text descritivo e único
- ✅ Dimensões definidas (reduz CLS)
- ✅ decoding="async" (melhora performance)

---

## 🎯 COMO APLICAR

### Passo 1: Identificar dimensões das imagens
Use qualquer editor de imagem ou ferramenta online para descobrir:
- Largura (width)
- Altura (height)

**Ferramenta online:** https://www.iloveimg.com/resize-image

### Passo 2: Criar alt text descritivo
**Regras:**
- Descreva o que está na imagem
- Inclua palavras-chave relevantes (Brasil-África, CIMBRAF, negócios)
- Seja específico (não use "Galeria de Fotos" para todas)
- Máximo 125 caracteres

**Exemplos de alt text:**
```
✅ "Evento CIMBRAF - Reunião de negócios Brasil-África com empresários"
✅ "Cerimônia de assinatura de parceria internacional CIMBRAF"
✅ "Workshop CIMBRAF sobre investimentos em mercados africanos"
✅ "Diretoria CIMBRAF em encontro com representantes de países africanos"
```

### Passo 3: Aplicar no código
Substitua todas as imagens da galeria seguindo o padrão acima.

---

## 📋 CHECKLIST DE OTIMIZAÇÃO

Para cada imagem da galeria, verifique:

- [ ] `loading="lazy"` adicionado
- [ ] `width` e `height` definidos
- [ ] `decoding="async"` adicionado
- [ ] Alt text descritivo e único
- [ ] Alt text inclui palavras-chave relevantes
- [ ] Alt text tem menos de 125 caracteres

---

## 🔧 SCRIPT PARA APLICAÇÃO EM MASSA

Se você tiver muitas imagens, pode usar este padrão JavaScript para adicionar lazy loading automaticamente:

```javascript
// Adicionar lazy loading em todas as imagens (exceto as primeiras 3)
document.querySelectorAll('.gallery-item img').forEach((img, index) => {
    if (index > 2) { // Primeiras 3 sem lazy (acima da dobra)
        img.setAttribute('loading', 'lazy');
        img.setAttribute('decoding', 'async');
    }
});
```

**Nota:** Isso adiciona lazy loading, mas você ainda precisa:
- Adicionar alt text manualmente (cada imagem é única)
- Adicionar width/height manualmente (cada imagem pode ter tamanho diferente)

---

## 📊 IMPACTO ESPERADO

### Performance:
- ⚡ Redução de 30-50% no tempo de carregamento inicial
- ⚡ Melhoria no LCP (Largest Contentful Paint)
- ⚡ Redução do CLS (Cumulative Layout Shift)

### SEO:
- 📈 Melhor indexação de imagens no Google Images
- 📈 Aumento de tráfego orgânico via busca de imagens
- 📈 Melhor compreensão do conteúdo pelo Google

---

## 🎨 EXEMPLO COMPLETO PARA TODA A GALERIA

```html
<!-- Imagem 1 -->
<div class="gallery-item" data-image="1">
    <img 
        src="assets/img/galeria de fotos/1.jpeg" 
        alt="Evento CIMBRAF - Reunião de negócios Brasil-África" 
        loading="lazy"
        width="800"
        height="600"
        decoding="async">
</div>

<!-- Imagem 2 -->
<div class="gallery-item" data-image="2">
    <img 
        src="assets/img/galeria de fotos/2.jpeg" 
        alt="Cerimônia de assinatura de parceria internacional CIMBRAF" 
        loading="lazy"
        width="800"
        height="600"
        decoding="async">
</div>

<!-- ... continue para todas as 20 imagens ... -->
```

---

## ⚠️ IMPORTANTE

### Imagens que NÃO devem ter lazy loading:
- Logo no header (sempre visível)
- Imagem hero/principal (primeira imagem)
- Qualquer imagem acima da dobra (fold)

### Como descobrir dimensões:
1. Abra a imagem no navegador
2. Clique com botão direito > Inspecionar
3. Veja as dimensões naturais da imagem
4. Use essas dimensões no HTML

---

## 🚀 PRÓXIMOS PASSOS

1. ✅ Aplicar lazy loading em todas as imagens da galeria
2. ✅ Criar alt text descritivo para cada imagem
3. ✅ Adicionar width/height em todas as imagens
4. ✅ Testar no Lighthouse (deve melhorar Performance Score)

---

**Última atualização:** 2025-01-27

