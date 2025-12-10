// ===== I18N SYSTEM =====
class I18n {
    constructor() {
        this.currentLang = this.getStoredLanguage() || 'pt';
        this.translations = translations;
    }
    
    // Get stored language from localStorage
    getStoredLanguage() {
        try {
            return localStorage.getItem('cimbraf_language') || null;
        } catch (e) {
            return null;
        }
    }
    
    // Store language in localStorage
    storeLanguage(lang) {
        try {
            localStorage.setItem('cimbraf_language', lang);
        } catch (e) {
            console.warn('Could not store language preference');
        }
    }
    
    // Get translation for a key
    t(key, lang = null) {
        const language = lang || this.currentLang;
        const keys = key.split('.');
        let value = this.translations[language];
        
        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }
        
        return value || key;
    }
    
    // Change language
    setLanguage(lang) {
        if (!this.translations[lang]) {
            console.warn(`Language ${lang} not available`);
            return;
        }
        
        this.currentLang = lang;
        this.storeLanguage(lang);
        this.updatePage();
        this.updateLanguageSelector();
    }
    
    // Update all elements with data-i18n attribute
    updatePage() {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.type === 'submit' || element.type === 'button') {
                    element.value = translation;
                } else if (element.hasAttribute('placeholder')) {
                    element.placeholder = translation;
                } else {
                    // For other inputs, update value if it's a text input
                    if (element.type === 'text' || element.type === 'email' || element.type === 'tel') {
                        // Only update if the value matches a translation key (to avoid overwriting user input)
                        const currentValue = element.value;
                        if (!currentValue || this.isTranslationKey(currentValue)) {
                            element.value = translation;
                        }
                    }
                }
            } else if (element.tagName === 'OPTION') {
                element.textContent = translation;
            } else if (element.hasAttribute('data-i18n-html')) {
                // Allow HTML in translation
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Handle data-i18n-placeholder attributes
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });
        
        // Handle data-i18n-aria attributes
        const ariaElements = document.querySelectorAll('[data-i18n-aria]');
        ariaElements.forEach(element => {
            const key = element.getAttribute('data-i18n-aria');
            element.setAttribute('aria-label', this.t(key));
        });
        
        // Handle data-i18n-alt attributes
        const altElements = document.querySelectorAll('[data-i18n-alt]');
        altElements.forEach(element => {
            const key = element.getAttribute('data-i18n-alt');
            element.setAttribute('alt', this.t(key));
        });
        
        // Update page language attribute
        document.documentElement.lang = this.currentLang === 'pt' ? 'pt-BR' : this.currentLang;
        
        // Update language button text
        const langText = document.querySelector('.language-text');
        if (langText) {
            const langMap = { pt: 'PT', en: 'EN', es: 'ES', fr: 'FR' };
            langText.textContent = langMap[this.currentLang] || 'PT';
        }
    }
    
    // Check if a string is a translation key
    isTranslationKey(str) {
        return Object.values(this.translations[this.currentLang] || {}).includes(str);
    }
    
    // Update language selector active state
    updateLanguageSelector() {
        const options = document.querySelectorAll('.language-option');
        options.forEach(option => {
            const lang = option.getAttribute('data-lang');
            if (lang === this.currentLang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }
    
    // Initialize i18n system
    init() {
        // Load saved language or default to Portuguese
        this.currentLang = this.getStoredLanguage() || 'pt';
        
        // Update page on load
        this.updatePage();
        
        // Set up language selector event listeners
        this.setupLanguageSelector();
    }
    
    // Setup language selector
    setupLanguageSelector() {
        const languageOptions = document.querySelectorAll('.language-option');
        
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = option.getAttribute('data-lang');
                
                if (lang && this.translations[lang]) {
                    this.setLanguage(lang);
                    // Close dropdown
                    const languageSelector = document.getElementById('languageSelector');
                    if (languageSelector) {
                        languageSelector.classList.remove('active');
                    }
                }
            });
        });
    }
}

// Initialize i18n when DOM is ready
let i18n;
document.addEventListener('DOMContentLoaded', () => {
    i18n = new I18n();
    i18n.init();
});

// Make i18n available globally
window.i18n = i18n;

