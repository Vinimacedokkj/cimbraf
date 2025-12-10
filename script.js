// ===== NAVEGAÇÃO E HEADER =====
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

// ===== SELETOR DE IDIOMA =====
const languageSelector = document.getElementById('languageSelector');
const languageBtn = document.getElementById('languageBtn');
const languageDropdown = document.getElementById('languageDropdown');
const languageOptions = document.querySelectorAll('.language-option');

// Toggle do dropdown de idioma
if (languageBtn && languageDropdown) {
    languageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageSelector.classList.toggle('active');
    });
    
    // Fechar dropdown ao clicar fora
    document.addEventListener('click', (e) => {
        if (!languageSelector.contains(e.target)) {
            languageSelector.classList.remove('active');
        }
    });
    
    // Language switching is now handled by i18n.js
    // The event listeners are set up in i18n.js
}

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !mobileMenuBtn.contains(e.target) &&
        !languageSelector.contains(e.target)) {
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function setActiveNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNavLink);


// ===== INTERSECTION OBSERVER PARA ANIMAÇÕES =====
// Configuração para detectar elementos mais cedo (quando estão chegando, não quando já estão no topo)
const observerOptions = {
    threshold: 0.01, // Detecta assim que qualquer parte do elemento aparecer
    rootMargin: '0px 0px 100px 0px' // Expande a área de detecção para baixo em 200px (detecta antes de chegar)
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Delay escalonado reduzido para elementos múltiplos
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 50);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todos os elementos com fade-in (incluindo a seção de oportunidades)
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ===== PARALLAX EFFECT =====
const parallaxElements = document.querySelectorAll('.parallax-element');
if (parallaxElements.length > 0) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        parallaxElements.forEach(element => {
            const rate = scrolled * 0.5;
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// ===== SMOOTH SCROLL ENHANCEMENT =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            // Adiciona animação suave com easing
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Fecha menu mobile se estiver aberto
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    });
});

// ===== GALERIA E LIGHTBOX =====
const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
const galleryImageElements = galleryItems.map(item => item.querySelector('img'));
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
let currentImageIndex = 0;

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentImageIndex = index;
        openLightbox(index);
    });
});

function openLightbox(index) {
    const selectedImage = galleryImageElements[index];
    if (!selectedImage) {
        return;
    }
    lightboxImage.src = selectedImage.src;
    lightboxImage.alt = selectedImage.alt || `Imagem ${index + 1}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);

lightboxPrev.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox(currentImageIndex);
});

lightboxNext.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
    openLightbox(currentImageIndex);
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') lightboxPrev.click();
        if (e.key === 'ArrowRight') lightboxNext.click();
    }
});

// ===== FILTROS DE OPORTUNIDADES =====
const filterButtons = document.querySelectorAll('.filter-btn');
const opportunityItems = document.querySelectorAll('.opportunity-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Animação do botão clicado
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Animação escalonada dos itens
        let visibleItems = [];
        opportunityItems.forEach((item, index) => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                visibleItems.push({ item, index });
            }
        });
        
        opportunityItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px) scale(0.98)';
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(10px) scale(0.98)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 150);
            }
        });
        
        // Anima itens visíveis com delay escalonado reduzido
        visibleItems.forEach(({ item, index }) => {
            setTimeout(() => {
                item.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0) scale(1)';
            }, index * 30);
        });
    });
});

// ===== CONTROLE DO CAMPO DE CURSOS NO FORMULÁRIO =====
document.addEventListener('DOMContentLoaded', function() {
    const solicitacaoTipo = document.getElementById('solicitacao-tipo');
    const cursoSelectGroup = document.getElementById('curso-select-group');
    const cursoSelecionado = document.getElementById('curso-selecionado');

    if (solicitacaoTipo && cursoSelectGroup && cursoSelecionado) {
        solicitacaoTipo.addEventListener('change', function() {
            if (this.value === 'cursos') {
                cursoSelectGroup.style.display = 'block';
                cursoSelecionado.setAttribute('required', 'required');
                // Força reflow para garantir que a animação funcione
                cursoSelectGroup.offsetHeight;
                // Animação suave ao aparecer
                setTimeout(() => {
                    cursoSelectGroup.style.opacity = '1';
                    cursoSelectGroup.style.transform = 'translateY(0)';
                }, 10);
            } else {
                cursoSelectGroup.style.opacity = '0';
                cursoSelectGroup.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    cursoSelectGroup.style.display = 'none';
                    cursoSelecionado.removeAttribute('required');
                    cursoSelecionado.value = ''; // Limpa a seleção
                }, 300);
            }
        });
    }
});

// ===== FORMULÁRIOS =====
const contatoForm = document.getElementById('contato-form');

// Animação de foco nos inputs
document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
        this.parentElement.style.transition = 'transform 0.3s ease';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Handler para formulário de contato (Netlify)
if (contatoForm) {
    contatoForm.addEventListener('submit', function(e) {
        const submitBtn = contatoForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        // Feedback visual durante o envio
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        submitBtn.style.cursor = 'not-allowed';
        
        // Verifica se estamos em desenvolvimento local
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            // Em desenvolvimento local, previne o envio (Netlify Forms só funciona no Netlify)
            e.preventDefault();
            setTimeout(function() {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Enviado! (Teste no Netlify)';
                submitBtn.style.background = '#28a745';
                alert('⚠️ Netlify Forms só funciona após o deploy no Netlify.\n\nEm desenvolvimento local, o formulário não pode ser enviado.\n\nFaça o deploy no Netlify para testar o envio real.');
                setTimeout(function() {
                    contatoForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.opacity = '1';
                    submitBtn.disabled = false;
                }, 3000);
            }, 1500);
        }
        // No Netlify, deixa o formulário ser enviado normalmente
        // O Netlify processará automaticamente e redirecionará para /success.html
        // conforme configurado no atributo action do formulário
    });
}


// ===== PERFORMANCE: LAZY LOADING =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Aqui você pode carregar imagens reais quando disponíveis
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}