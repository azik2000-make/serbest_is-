// Sayfadakı bütün ".elan" sinifinə malik elanları seçirik
const elanlar = document.querySelectorAll('.elan');

// Hər bir elanın üzərindən keçirik
elanlar.forEach((elan, index) => {

// Yeni bir "button" elementi yaradırıq
const button = document.createElement('button');
button.innerText = "Ətraflı Məlumat"; // Düymənin üzərindəki yazı

// Yeni bir "a" (link) elementi yaradırıq
const link = document.createElement('a');

// Hər bir BMW modelinə uyğun linkləri saxlayan array
const modelLinks = [
"https://www.bmw.com.tr/tr/all-models/2-series.html",
"https://www.bmw.com.tr/tr/all-models/3-series.html",
"https://www.bmw.com.tr/tr/all-models/4-series.html",
"https://www.bmw.com.tr/tr/all-models/5-series.html",
"https://www.bmw.com.tr/tr/all-models/7-series.html",
"https://www.bmw.com.tr/tr/all-models/8-series.html",
"https://www.bmw.com.tr/tr/all-models/x1.html",
"https://www.bmw.com.tr/tr/all-models/x2.html",
"https://www.bmw.com.tr/tr/all-models/x3.html",
"https://www.bmw.com.tr/tr/all-models/x4.html",
"https://www.bmw.com.tr/tr/all-models/x5.html",
"https://www.bmw.com.tr/tr/all-models/x6.html",
"https://www.bmw.com.tr/tr/all-models/x7.html",
"https://www.bmw.com.tr/tr/all-models/xm.html",
"https://www.bmw.com.tr/tr/all-models/i4.html",
"https://www.bmw.com.tr/tr/all-models/i5.html",
"https://www.bmw.com.tr/tr/all-models/i7.html",
"https://www.bmw.com.tr/tr/all-models/ix1.html",
"https://www.bmw.com.tr/tr/all-models/ix3.html",
"https://www.bmw.com.tr/tr/all-models/ix.html",
"https://www.bmw.com.tr/tr/all-models/m2.html",
"https://www.bmw.com.tr/tr/all-models/m3.html",
"https://www.bmw.com.tr/tr/all-models/m4.html",
"https://www.bmw.com.tr/tr/all-models/m5.html",
"https://www.bmw.com.tr/tr/all-models/m8.html"
];

// Elan nömrəsinə uyğun linki təyin edirik (əgər yoxdursa "#" istifadə olunur)
link.href = modelLinks[index] || "#";

// Linkin üzərində görünəcək yazı
link.innerText = "Ətraflı bax";

// Link yeni səhifədə açılsın deyə `target="_blank"` təyin edilir
link.target = "_blank";

// Link əvvəlcədən görünməsin deyə `display: none` edilir
link.style.display = "none";

// Button və linki elan div-inə əlavə edirik
elan.appendChild(button);
elan.appendChild(link);

// Button kliklənəndə link görünür və avtomatik klik olunur
button.addEventListener('click', () => {
link.style.display = "inline"; // Link görünür olur
link.click(); // Avtomatik klik edilir (istifadəçini linkə yönləndirir)
});
});
 

document.getElementById("toggleTheme").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

  document.getElementById('ugurlarBtn').addEventListener('click', function() {
    const content = document.getElementById('ugurlarContent');
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        this.textContent = 'Bağla';
        content.style.position = 'fixed';
        content.style.top = '50%';
        content.style.right = '160px';
        content.style.transform = 'translateY(-50%)';
        content.style.width = '80%';
        content.style.maxWidth = '1200px';
        content.style.zIndex = '999';
    } else {
        content.classList.add('hidden');
        this.textContent = 'Uğurlarımız';
    }
});

function updateBakuClock() {
    const now = new Date();
    const bakuOffset = 4 * 60 * 60 * 1000; // UTC+4 (Azərbaycan vaxtı)
    const bakuTime = new Date(now.getTime() + bakuOffset);

    // **Əgər saatı 14:17 kimi sabit göstərmək istəyirsinizsə, aşağıdakı 2 sətri silin:**
    const hours = String(bakuTime.getUTCHours()).padStart(2, '0');
    const minutes = String(bakuTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(bakuTime.getUTCSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Tarix formatı (1 yanvar 2023)
    const dateString = bakuTime.toLocaleDateString('az-AZ', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    });

    // Vaxtı və tarixi yenilə
    document.getElementById('baku-time').textContent = timeString;
    document.getElementById('baku-date').textContent = dateString;
}

// Hər saniyə yenilə (sabit saat üçün bu sətri silin)
setInterval(updateBakuClock, 1000);
updateBakuClock(); // İlk dəfə işə sal




// Bütün düymələri və bölmələri əldə edirik
const buttons = document.querySelectorAll(".section-btn");
const sections = document.querySelectorAll(".content-section");

// Hər düyməyə klik hadisəsi əlavə edirik
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.section + "-content";

    // Bütün bölmələri gizlə
    sections.forEach(section => {
      section.style.display = "none";
    });

    // Seçilmiş bölməni göstər
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = "block";
    }
  });
});

// Səhifə açılan kimi avtomatik "Haqqında" bölməsi görünsün
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("about-content").style.display = "block";
});

