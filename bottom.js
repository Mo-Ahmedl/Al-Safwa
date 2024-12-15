const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
});


document.querySelector('.search-box').addEventListener('input', function() {
let filter = this.value.toUpperCase();
let cards = document.querySelectorAll('.card-list .card');

cards.forEach(function(card) {
    let cardKeywords = card.querySelector('.keywords').textContent.toUpperCase();
    if (cardKeywords.indexOf(filter) > -1) {
        card.style.display = "block"; // عرض البطاقات المطابقة
    } else {
        card.style.display = "none"; // إخفاء البطاقات غير المطابقة
    }
});
});






// تفعيل قائمة الـ "همبرغر"
document.querySelector('.hamburger').addEventListener('click', function() {
document.querySelector('.sidebar-nav-list').classList.toggle('active');
});

// تصفية البطاقات بناءً على البحث في مربع البحث داخل قائمة الهمبرغر وفي الوضع العادي
function filterCards() {
let filter = this.value.toUpperCase();
let cards = document.querySelectorAll('.card-list .card');

cards.forEach(function(card) {
    let cardKeywords = card.querySelector('.keywords').textContent.toUpperCase();
    if (cardKeywords.indexOf(filter) > -1) {
        card.style.display = "block"; // عرض البطاقات المطابقة
    } else {
        card.style.display = "none"; // إخفاء البطاقات غير المطابقة
    }
});
}

// ربط دالة تصفية البطاقات بمربعات البحث
document.querySelectorAll('.search-box').forEach(function(searchBox) {
searchBox.addEventListener('input', filterCards);
});



document.querySelectorAll('.search-box2').forEach(function(searchBox) {
searchBox.addEventListener('input', filterCards);
});










// Text toggle logic
const changeTextButton = document.getElementById("change-text-button")
// نصوص مرتبطة بأسماء class مختلفة
const texts = {
    hi: ["مرحبا بكم في", "Welcome to"],
    logo2: ["شركة الصفوة", "Al Safwa Company"],
    description: ["للبيع: حديد وصلب، أسمنت", "For sale: iron and steel, cement"],
    cardtitle: ["الحديد والصلب", "the iron and steel"],
    cardtitle3: ["الاسمنت", "the cement"],
    b2: ["!اشتري الآن", "Buy now!"],
    b1: ["!اشتري الآن", "Buy now!"],
  
    class2: ["", ""],
    class3: ["This is text item 3.", "Toggled text item 3."]
};




function toggleText() {
    for (const [className, [defaultText, toggledText]] of Object.entries(texts)) {
        const element = document.querySelector(`.${className}`);
        if (element) {
         const isDefault = element.textContent === defaultText;
            element.textContent = element.textContent === defaultText ? toggledText : defaultText;
        }
    }
}
// أزرار التغيير
const changeTextButtonNavbar = document.getElementById("changeTextButtonNavbar");
const changeTextButtonSidebar = document.getElementById("changeTextButtonSidebar");

changeTextButtonNavbar.addEventListener("click", toggleText);
changeTextButtonSidebar.addEventListener("click", toggleText);




