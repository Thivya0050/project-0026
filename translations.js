// Complete Translation System for Ali, Muthu & Ah Hock Ken Mee Kiosk
// Supports: English, Malay, Tamil, Mandarin

const translations = {
    // English
    en: {
        // Index/Landing Page
        startOrder: "START ORDER",
        
        // Language Selection Page
        selectLanguage: "SELECT LANGUAGE",
        english: "ENGLISH",
        malay: "MALAY",
        tamil: "TAMIL",
        mandarin: "MANDARIN",
        
        // Dining Preference
        diningPreference: "DINING PREFERENCE",
        dineIn: "DINE IN",
        takeAway: "TAKE AWAY",
        
        // Common buttons
        back: "BACK",
        next: "NEXT",
        confirm: "CONFIRM",
        cancel: "CANCEL",
        payHere: "PAY HERE",
        
        // Menu related
        menu: "MENU",
        categories: "CATEGORIES",
        addToCart: "ADD TO CART",
        viewCart: "VIEW CART",
        checkout: "CHECKOUT",
        
        // Cart related
        cart: "CART",
        total: "TOTAL",
        subtotal: "SUBTOTAL",
        quantity: "QUANTITY",
        remove: "REMOVE",
        empty: "EMPTY",
        emptyCart: "Your cart is empty",
        customize: "CUSTOMIZE",
        each: "each",
        confirmRemove: "Remove this item from cart?",
        customizationOptions: "CUSTOMIZATION OPTIONS",
        saveAdd: "SAVE & ADD TO CART",
        
        // Payment
        payment: "PAYMENT",
        cash: "CASH",
        card: "CARD",
        
        // Messages
        thankYou: "THANK YOU",
        orderPlaced: "ORDER PLACED SUCCESSFULLY",
        orderNumber: "ORDER NUMBER",
        
        // Halal
        halal: "HALAL CERTIFIED"
    },
    
    // Malay
    ms: {
        // Index/Landing Page
        startOrder: "MULAKAN PESANAN",
        
        // Language Selection Page
        selectLanguage: "PILIH BAHASA",
        english: "BAHASA INGGERIS",
        malay: "BAHASA MELAYU",
        tamil: "BAHASA TAMIL",
        mandarin: "BAHASA MANDARIN",
        
        // Dining Preference
        diningPreference: "PILIHAN MAKAN",
        dineIn: "MAKAN DI SINI",
        takeAway: "BAWA BALIK",
        
        // Common buttons
        back: "KEMBALI",
        next: "SETERUSNYA",
        confirm: "SAH",
        cancel: "BATAL",
        payHere: "BAYAR DI SINI",
        
        // Menu related
        menu: "MENU",
        categories: "KATEGORI",
        addToCart: "TAMBAH KE TROLI",
        viewCart: "LIHAT TROLI",
        checkout: "BAYAR",
        
        // Cart related
        cart: "TROLI",
        total: "JUMLAH",
        subtotal: "SUBJUMLAH",
        quantity: "KUANTITI",
        remove: "BUANG",
        empty: "KOSONG",
        emptyCart: "Troli anda kosong",
        customize: "UBAHSUAI",
        each: "setiap",
        confirmRemove: "Buang item ini dari troli?",
        customizationOptions: "PILIHAN PENYESUAIAN",
        saveAdd: "SIMPAN & TAMBAH KE TROLI",
        
        // Payment
        payment: "BAYARAN",
        cash: "TUNAI",
        card: "KAD",
        
        // Messages
        thankYou: "TERIMA KASIH",
        orderPlaced: "PESANAN BERJAYA",
        orderNumber: "NOMBOR PESANAN",
        
        // Halal
        halal: "SIJIL HALAL"
    },
    
    // Tamil
    ta: {
        // Index/Landing Page
        startOrder: "ஆர்டர் தொடங்கவும்",
        
        // Language Selection Page
        selectLanguage: "மொழியைத் தேர்ந்தெடுக்கவும்",
        english: "ஆங்கிலம்",
        malay: "மலாய்",
        tamil: "தமிழ்",
        mandarin: "மாண்டரின்",
        
        // Dining Preference
        diningPreference: "சாப்பிடும் விருப்பம்",
        dineIn: "இங்கே சாப்பிடவும்",
        takeAway: "டேக் அவே",
        
        // Common buttons
        back: "பின்செல்",
        next: "அடுத்தது",
        confirm: "உறுதிப்படுத்து",
        cancel: "ரத்துசெய்",
        payHere: "இங்கே பணம் செலுத்துங்கள்",
        
        // Menu related
        menu: "மெனு",
        categories: "வகைகள்",
        addToCart: "கூடையில் சேர்",
        viewCart: "கூடையைப் பார்",
        checkout: "பணம் செலுத்து",
        
        // Cart related
        cart: "கூடை",
        total: "மொத்தம்",
        subtotal: "துணை மொத்தம்",
        quantity: "அளவு",
        remove: "அகற்று",
        empty: "வெறுமை",
        emptyCart: "உங்கள் கூடை காலியாக உள்ளது",
        customize: "தனிப்பயனாக்கு",
        each: "ஒவ்வொன்றும்",
        confirmRemove: "இந்த உருப்படியை கூடையிலிருந்து அகற்றவா?",
        customizationOptions: "தனிப்பயனாக்க விருப்பங்கள்",
        saveAdd: "சேமி & கூடையில் சேர்",
        
        // Payment
        payment: "பணம் செலுத்துதல்",
        cash: "பணம்",
        card: "அட்டை",
        
        // Messages
        thankYou: "நன்றி",
        orderPlaced: "ஆர்டர் வெற்றிகரமாக செய்யப்பட்டது",
        orderNumber: "ஆர்டர் எண்",
        
        // Halal
        halal: "ஹலால் சான்றிதழ்"
    },
    
    // Mandarin (Simplified Chinese)
    zh: {
        // Index/Landing Page
        startOrder: "开始订购",
        
        // Language Selection Page
        selectLanguage: "选择语言",
        english: "英语",
        malay: "马来语",
        tamil: "泰米尔语",
        mandarin: "华语",
        
        // Dining Preference
        diningPreference: "用餐选择",
        dineIn: "堂食",
        takeAway: "外带",
        
        // Common buttons
        back: "返回",
        next: "下一步",
        confirm: "确认",
        cancel: "取消",
        payHere: "在这里付款",
        
        // Menu related
        menu: "菜单",
        categories: "分类",
        addToCart: "加入购物车",
        viewCart: "查看购物车",
        checkout: "结账",
        
        // Cart related
        cart: "购物车",
        total: "总计",
        subtotal: "小计",
        quantity: "数量",
        remove: "删除",
        empty: "清空",
        emptyCart: "您的购物车是空的",
        customize: "定制",
        each: "每个",
        confirmRemove: "从购物车中删除此项目？",
        customizationOptions: "定制选项",
        saveAdd: "保存并添加到购物车",
        
        // Payment
        payment: "付款",
        cash: "现金",
        card: "银行卡",
        
        // Messages
        thankYou: "谢谢",
        orderPlaced: "订单成功",
        orderNumber: "订单号",
        
        // Halal
        halal: "清真认证"
    }
};

// Current language (default: English)
let currentLanguage = localStorage.getItem('kioskLanguage') || 'en';

// Get translation for a key
function t(key) {
    return translations[currentLanguage][key] || translations.en[key] || key;
}

// Set language
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('kioskLanguage', lang);
    updatePageTranslations();
}

// Update all translations on current page
function updatePageTranslations() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = t(key);
        } else {
            element.textContent = t(key);
        }
    });
}

// Initialize translations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language
    const savedLanguage = localStorage.getItem('kioskLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    
    // Update translations
    updatePageTranslations();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, t, setLanguage, updatePageTranslations };
}

