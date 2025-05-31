// زر احجز الآن
document.getElementById("bookNowBtn").onclick = function() {
  alert("سيتم تحويلك الآن للتواصل عبر واتساب لحجز الشاليه 📱");
  window.open("https://wa.me/966554470394", "_blank");
};

// زر واتساب الثابت
document.getElementById("whatsappBtn").onclick = function() {
  window.open("https://wa.me/966554470394", "_blank");
};

let modal = document.getElementById("bookingModal");
let bookBtn = document.getElementById("bookNowBtn");
let closeBtn = document.querySelector(".closeBtn");
let sendBooking = document.getElementById("sendBooking");

bookBtn.onclick = function() {
  modal.style.display = "block";
};

closeBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

sendBooking.onclick = function() {
  let name = document.getElementById("clientName").value;
  let date = document.getElementById("bookingDate").value;
  let guests = document.getElementById("guestCount").value;

  if (!name || !date || !guests) {
    alert("يرجى ملء جميع الحقول");
    return;
  }

  let message = `مرحبًا، أنا ${name}%0Aأرغب بحجز شاليه بتاريخ: ${date}%0Aعدد الأشخاص: ${guests}`;
  let phoneNumber = "966554470394";

  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  modal.style.display = "none";
};

let bookingBtns = document.querySelectorAll(".bookingBtn");
bookingBtns.forEach(btn => {
  btn.onclick = function() {
    modal.style.display = "block";
  };
});

// معرض الصور
let mainImage = document.getElementById("mainImage");
let thumbnails = document.querySelectorAll(".thumb");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

// إنشاء مصفوفة الصور ديناميكيًا مع استثناء الصور التي تحتوي على فئة no-zoom
let images = Array.from(thumbnails)
  .filter(img => !img.classList.contains("no-zoom"))
  .map(img => img.src);
let currentIndex = 0;

function showImage(index) {
  // التأكد من أن الفهرس ضمن النطاق
  if (index >= images.length) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }
  currentIndex = index;
  mainImage.src = images[currentIndex];
  thumbnails.forEach(img => img.classList.remove("active"));
  thumbnails.forEach(img => {
    if (img.src === images[currentIndex]) {
      img.classList.add("active");
    }
  });
}

// إضافة حدث النقر لجميع الصور المصغرة باستثناء التي تحتوي على no-zoom
thumbnails.forEach((img, index) => {
  if (!img.classList.contains("no-zoom")) {
    img.onclick = () => {
      currentIndex = images.indexOf(img.src);
      showImage(currentIndex);
    };
  }
});

// أزرار التنقل
prevBtn.onclick = () => {
  showImage(currentIndex - 1);
};

nextBtn.onclick = () => {
  showImage(currentIndex + 1);
};

// تعيين الصورة الأولى كافتراضية
showImage(0);