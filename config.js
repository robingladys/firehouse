// ============================================
// CONFIGURASI LINK CPA/AFFILIATE
// File: config.js - Pisahkan dari file HTML
// ============================================

const CPA_CONFIG = {
  // Domain utama (untuk redirect default)
  defaultRedirect: "https://dir3ct.blogspot.com",
  
  // Mapping ID → CPA Links
  links: {
    // Format: "id-produk": "full-affiliate-link"
    
    // Contoh: bisacuan.com/s/inicuan.mp4
    "alexa": "https://dir3ct.blogspot.com",
    
    // Contoh: bisacuan.com/s/promo1.mp4
    "halle": "https://dir3ct.blogspot.com",
    
    // Contoh: bisacuan.com/s/specialoffer.mp4
    "vera": "https://dir3ct.blogspot.com",
    
    // Contoh dengan dynamic ID
    "milla": "https://dir3ct.blogspot.com",
    
    // Tambahkan link baru di sini tanpa edit HTML utama
    "tabi": "https://dir3ct.blogspot.com",
    "vanessa": "https://dir3ct.blogspot.com",
    "nicole": "https://dir3ct.blogspot.com"
  },
  
  // Settings tambahan
  settings: {
    defaultDelay: 1200, // 1.2 detik
    enableAnalytics: true,
    allowManualRedirect: true,
    debugMode: false
  },
  
  // Fallback URLs jika link utama error
  fallbacks: {
    "inicuan": "https://backup-offer.com/alt1",
    "promo1": "https://backup-offer.com/alt2"
  }
};

// Export config untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CPA_CONFIG;
} else {
  window.CPA_CONFIG = CPA_CONFIG;
}