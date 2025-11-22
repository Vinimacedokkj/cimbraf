// ===== NAVEGAÇÃO E HEADER =====
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

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
        !mobileMenuBtn.contains(e.target)) {
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
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Delay escalonado para elementos múltiplos
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

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
const galleryItems = document.querySelectorAll('.gallery-item');
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
    // Por enquanto, mostra placeholder. Substituir por imagens reais
    lightboxImage.src = `https://via.placeholder.com/800x600/103E28/A06A1A?text=Imagem+${index + 1}`;
    lightboxImage.alt = `Imagem ${index + 1}`;
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
                item.style.transform = 'translateY(30px) scale(0.9)';
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px) scale(0.95)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
        
        // Anima itens visíveis com delay escalonado
        visibleItems.forEach(({ item, index }) => {
            setTimeout(() => {
                item.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
        });
    });
});

// ===== FORMULÁRIOS =====
const consultoriaForm = document.getElementById('consultoriaForm');
const filieForm = document.getElementById('filie-form');

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

consultoriaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = consultoriaForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Enviando...';
    submitBtn.style.opacity = '0.7';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = '✓ Enviado!';
        submitBtn.style.background = '#28a745';
        alert('Obrigado pelo seu interesse! Entraremos em contato em breve.');
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.style.opacity = '1';
            submitBtn.disabled = false;
            consultoriaForm.reset();
        }, 2000);
    }, 1000);
});

filieForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = filieForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Enviando...';
    submitBtn.style.opacity = '0.7';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = '✓ Enviado!';
        submitBtn.style.background = '#28a745';
        alert('Sua solicitação de filiação foi enviada com sucesso! Entraremos em contato em breve.');
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.style.opacity = '1';
            submitBtn.disabled = false;
            filieForm.reset();
        }, 2000);
    }, 1000);
});


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