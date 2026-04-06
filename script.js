// Tugmani topib olamiz
const tugma = document.getElementById('mainBtn');
const yozuv = document.getElementById('message');

// Tugma bosilganda nima bo'lishini yozamiz
tugma.addEventListener('click', function() {
    yozuv.innerText = "Hozirda barcha krossovkalarga 20% chegirma! 🔥";
    yozuv.style.color = "red";
    tugma.style.display = "none"; // Tugmani yashirib qo'yadi
});