const text = 'Muhammad Sulthon Mufti';
const typedEl = document.getElementById('typedText');
const pauseAfterType = 2000;  // jeda setelah selesai diketik (ms)
const pauseAfterDelete = 600; // jeda sebelum mulai ketik lagi (ms)
const typeSpeed = 80;         // kecepatan mengetik (ms)
const deleteSpeed = 80;       // kecepatan menghapus (ms)

let ci = 0;
let isDeleting = false;

function typeLoop() {
  if (!isDeleting) {
    // Mengetik
    typedEl.textContent = text.slice(0, ++ci);

    if (ci === text.length) {
      // Selesai diketik, jeda lalu mulai hapus
      isDeleting = true;
      setTimeout(typeLoop, pauseAfterType);
      return;
    }
    setTimeout(typeLoop, typeSpeed);

  } else {
    // Menghapus
    typedEl.textContent = text.slice(0, --ci);

    if (ci === 0) {
      // Selesai dihapus, jeda lalu ketik lagi
      isDeleting = false;
      setTimeout(typeLoop, pauseAfterDelete);
      return;
    }
    setTimeout(typeLoop, deleteSpeed);
  }
}

typeLoop();