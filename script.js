// تحديث سنة الحقوق
document.getElementById('year').textContent = new Date().getFullYear();

// قائمة المنتجات (يمكنك تغيير مسارات الصور بسهولة)
const products = {
marble: [
    { name: 'رخام', price: '0 دينار', desc: 'رخام', fullDesc: 'رخام', img: 'images/marble/imperador.jpg', features: ['مقاوم للحرارة', 'لمعان طبيعي', 'مناسب للأرضيات والجدران'] },
    { name: 'رخام', price: '0 دينار', desc: 'رخام', fullDesc: 'رخام', img: 'images/marble/imperador-light.jpg', features: ['درجة فاتحة', 'عروق ناعمة', 'عازل للصوت'] },
    { name: 'رخام', price: '0 دينار', desc: 'رخام', fullDesc: 'رخام', img: 'images/marble/carrara.jpg', features: ['إيطالي أصلي', 'أبيض ناصع', 'عروق طبيعية'] },
    { name: 'رخام', price: '0 دينار', desc: 'رخام', fullDesc: 'رخام', img: 'images/marble/omani.jpg', features: ['محلي', 'اقتصادي', 'متين'] },
    { name: 'رخام', price: '0 دينار', desc: 'رخام', fullDesc: 'رخام', img: 'images/marble/rosa.jpg', features: ['لون وردي', 'نادر', 'فاخر'] }
],
    granite: [
    { name: 'جرانيت', price: '0 دينار', desc: 'جرانيت', fullDesc: 'جرانيت', img: 'images/granite/galaxy.jpg', features: ['مقاوم للخدش', 'صلابة عالية', 'لمعة ذهبية'] },
    { name: 'جرانيت', price: '0 دينار', desc: 'جرانيت', fullDesc: 'جرانيت', img: 'images/granite/omani.jpg', features: ['محلي', 'صلب', 'يدوم طويلاً'] },
    { name: 'جرانيت', price: '0 دينار', desc: 'جرانيت', fullDesc: 'جرانيت', img: 'images/granite/nero.jpg', features: ['أسود صافي', 'عصري', 'لامع'] },
    { name: 'جرانيت', price: '0 دينار', desc: 'جرانيت', fullDesc: 'جرانيت', img: 'images/granite/rosa.jpg', features: ['لون وردي', 'صلب', 'مقاوم للبقع'] },
    { name: 'جرانيت', price: '0 دينار', desc: 'جرانيت', fullDesc: 'جرانيت', img: 'images/granite/grey.jpg', features: ['رمادي محايد', 'مقاوم للحرارة', 'سهل التنظيف'] }
],
stone: [
    { name: 'حجر', price: '0 دينار', desc: 'حجر', fullDesc: 'حجر', img: 'images/stone/industrial-cream.jpg', features: ['خفيف الوزن', 'سهل التركيب', 'عازل للحرارة'] },
    { name: 'حجر', price: '0 دينار', desc: 'حجر', fullDesc: 'حجر', img: 'images/stone/industrial-gradient.jpg', features: ['تدرجات لونية', 'مقاوم للعوامل الجوية', 'يدوم طويلاً'] },
    { name: 'حجر', price: '0 دينار', desc: 'حجر', fullDesc: 'حجر', img: 'images/stone/industrial-white.jpg', features: ['أبيض ناصع', 'عاكس للضوء', 'مناسب للديكورات'] },
    { name: 'حجر', price: '0 دينار', desc: 'حجر', fullDesc: 'حجر', img: 'images/stone/natural-jordanian.jpg', features: ['طبيعي', 'أردني', 'متين'] },
    { name: 'حجر', price: '0 دينار', desc: 'حجر', fullDesc: 'حجر', img: 'images/stone/natural-qudsi.jpg', features: ['ذهبي', 'تاريخي', 'فاخر'] }
],
tiles: [
    { name: 'بلاط', price: '0 دينار', desc: 'بلاط', fullDesc: 'بلاط', img: 'images/tiles/royal.jpg', features: ['كلاسيكي', 'فاخر', 'يدوم لعقود'] },
    { name: 'بلاط', price: '0 دينار', desc: 'بلاط', fullDesc: 'بلاط', img: 'images/tiles/modern.jpg', features: ['عصري', 'أنيق', 'سهل التنظيف'] },
    { name: 'بلاط', price: '0 دينار', desc: 'بلاط', fullDesc: 'بلاط', img: 'images/tiles/spanish.jpg', features: ['نقوش إسبانية', 'تراثي', 'ملون'] },
    { name: 'بلاط', price: '0 دينار', desc: 'بلاط', fullDesc: 'بلاط', img: 'images/tiles/marble-like.jpg', features: ['شكل رخام', 'خفيف الوزن', 'اقتصادي'] },
    { name: 'بلاط', price: '0 دينار', desc: 'بلاط', fullDesc: 'بلاط', img: 'images/tiles/turkish.jpg', features: ['تركي', 'عثماني', 'صلب'] },
    { name: 'بلاط', price: '0 دينار', desc: 'بلاط', fullDesc: 'بلاط', img: 'images/tiles/outdoor.jpg', features: ['مانع للانزلاق', 'مقاوم للحرارة', 'يدوم طويلاً'] },
    { name: 'بلاط', price: '0 دينار', desc: 'بلاط', fullDesc: 'بلاط', img: 'images/tiles/indoor.jpg', features: ['ناعم', 'عازل للصوت', 'ألوان متعددة'] },
    { name: 'بلاط', price: '0 دينار', desc: 'بلاط', fullDesc: 'بلاط', img: 'images/tiles/kitchen.jpg', features: ['مقاوم للبقع', 'لا يمتص الدهون', 'سهل التنظيف'] },
    { name: 'بلاط', price: '0 دينار', desc: 'بلاط', fullDesc: 'بلاط', img: 'images/tiles/bathroom.jpg', features: ['مقاوم للرطوبة', 'مانع للعفن', 'آمن'] },
    { name: 'بلاط', price: '0 دينار', desc: 'بلاط', fullDesc: 'بلاط', img: 'images/tiles/garden.jpg', features: ['مانع للانزلاق', 'مقاوم للأشعة', 'يدوم طويلاً'] }
]
};

// دالة إنشاء بطاقة المنتج - مع صورة فاضية بدون نص
function createProductCard(product) {
    return `
        <div class="product-card" onclick='showProductDetail(${JSON.stringify(product).replace(/'/g, "&#39;")})'>
            <img src="${product.img}" alt="${product.name}" onerror="this.src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22400%22%20height%3D%22500%22%20viewBox%3D%220%200%20400%20500%22%3E%3Crect%20width%3D%22400%22%20height%3D%22500%22%20fill%3D%22%231a1a1a%22%2F%3E%3C%2Fsvg%3E'">
            <div class="product-overlay">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price}</p>
            </div>
        </div>
    `;
}

// تحميل المنتجات
document.addEventListener('DOMContentLoaded', function() {
    // تحميل الرخام
    const marbleContainer = document.getElementById('marble-container');
    if (marbleContainer) {
        marbleContainer.innerHTML = products.marble.map(createProductCard).join('');
    }
    
    // تحميل الجرانيت
    const graniteContainer = document.getElementById('granite-container');
    if (graniteContainer) {
        graniteContainer.innerHTML = products.granite.map(createProductCard).join('');
    }
    
    // تحميل الحجر
    const stoneContainer = document.getElementById('stone-container');
    if (stoneContainer) {
        stoneContainer.innerHTML = products.stone.map(createProductCard).join('');
    }
    
    // تحميل البلاط
    const tilesContainer = document.getElementById('tiles-container');
    if (tilesContainer) {
        tilesContainer.innerHTML = products.tiles.map(createProductCard).join('');
    }
    
    // قائمة الجوال
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // إغلاق القائمة عند النقر على رابط
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
});

// عرض تفاصيل المنتج في النافذة المنبثقة
function showProductDetail(product) {
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modal-body');
    
    const featuresList = product.features ? product.features.map(f => 
        `<li><i class="fas fa-check-circle"></i> ${f}</li>`
    ).join('') : '';
    
    modalBody.innerHTML = `
        <img src="${product.img}" alt="${product.name}" onerror="this.src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22600%22%20viewBox%3D%220%200%20600%20600%22%3E%3Crect%20width%3D%22600%22%20height%3D%22600%22%20fill%3D%22%231a1a1a%22%2F%3E%3C%2Fsvg%3E'">
        <div class="modal-info">
            <h2>${product.name}</h2>
            <p class="modal-price"><span>السعر:</span> ${product.price}</p>
            <p class="modal-desc">${product.fullDesc || product.desc}</p>
            <ul class="modal-features">
                ${featuresList}
            </ul>
            <div class="modal-buttons">
                <a href="#contact" class="btn btn-primary" onclick="closeModal()">استفسر عن المنتج</a>
                <a href="https://wa.me/962796366816" target="_blank" class="btn btn-outline"><i class="fab fa-whatsapp"></i> واتساب</a>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
    
    // منع التمرير في الخلفية
    document.body.style.overflow = 'hidden';
}

// إغلاق النافذة المنبثقة
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// إغلاق النافذة عند النقر على X
document.querySelector('.close-modal')?.addEventListener('click', closeModal);

// إغلاق النافذة عند النقر خارجها
window.addEventListener('click', function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
});

// سكرول ناعم للروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});