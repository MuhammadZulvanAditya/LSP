// Memastikan transisi mulus untuk tautan navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animasi muncul (fade in & slide up) saat scroll
window.addEventListener('scroll', revealElements);

function revealElements() {
    let reveals = document.querySelectorAll('.project-card, .skill-card');

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 100; // Jarak dari bawah layar sebelum elemen muncul

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].style.opacity = "1";
            reveals[i].style.transform = "translateY(0)";
        }
    }
}

// Inisialisasi state awal elemen sebelum di-scroll
document.addEventListener("DOMContentLoaded", () => {
     let reveals = document.querySelectorAll('.project-card, .skill-card');
     reveals.forEach(el => {
         el.style.opacity = "0";
         el.style.transform = "translateY(30px)";
         el.style.transition = "all 0.6s ease-out";
     });
     
     // Panggil sekali agar elemen yang sudah ada di viewport langsung muncul
     revealElements(); 
});