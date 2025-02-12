const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// فتح القائمة الجانبية
hamburger.addEventListener('click', () => {
    sidebar.classList.add('open');
});

// إغلاق القائمة الجانبية
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

// البحث في البطاقات
document.querySelectorAll('.search-box, .search-box2').forEach(function(searchBox) {
    searchBox.addEventListener('input', function() {
        let filter = this.value.toUpperCase();
        let cards = document.querySelectorAll('.card-list .card');
        let found = false; // علم إذا تم العثور على نتائج

        cards.forEach(function(card) {
            let cardKeywords = card.querySelector('.keywords').textContent.toUpperCase();
            if (cardKeywords.indexOf(filter) > -1) {
                card.style.display = "block"; // إظهار البطاقة إذا كانت هناك مطابقة
                found = true; // تم العثور على نتيجة
            } else {
                card.style.display = "none"; // إخفاء البطاقة إذا لم تكن هناك مطابقة
            }
        });

        // إغلاق القائمة الجانبية فقط إذا كان هناك نتائج
        if (found) {
            sidebar.classList.remove('open'); // إغلاق القائمة الجانبية إذا تم العثور على تطابق
        }
    });
});

// نصوص مرتبطة بأسماء class مختلفة
const texts = {
    hi: ["مرحبا بكم في", "Welcome to"],
    logo2: ["شركة الصفوة", "Al Safwa Company"],
    description: ["للبيع: حديد وصلب، أسمنت", "For sale: iron and steel, cement"],
    cardtitle: ["الحديد والصلب", "The iron and steel"],
    cardtitle3: ["الاسمنت", "The cement"],
    b2: ["!اشتري الآن", "Buy now!"],
    b1: ["!اشتري الآن", "Buy now!"],
    class2: ["", ""],
    class3: ["This is text item 3.", "Toggled text item 3."]
};

// دالة لتغيير النصوص وإغلاق القائمة الجانبية إذا كانت مفتوحة
function toggleTextAndCloseSidebar() {
    // تغيير النصوص
    Object.entries(texts).forEach(([className, [defaultText, toggledText]]) => {
        document.querySelectorAll(`.${className}`).forEach(element => {
            let currentText = element.textContent.trim();
            element.textContent = currentText === defaultText.trim() ? toggledText : defaultText;
        });
    });

    // إغلاق القائمة الجانبية إذا كانت مفتوحة
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
}

// ربط الحدث بأزرار تغيير النص
const changeTextButtonNavbar = document.getElementById("changeTextButtonNavbar");
const changeTextButtonSidebar = document.getElementById("changeTextButtonSidebar");

if (changeTextButtonNavbar) {
    changeTextButtonNavbar.addEventListener("click", toggleTextAndCloseSidebar);
}

if (changeTextButtonSidebar) {
    changeTextButtonSidebar.addEventListener("click", toggleTextAndCloseSidebar);
}
