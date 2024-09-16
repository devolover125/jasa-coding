// Menampilkan loader saat halaman mulai dimuat
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Sembunyikan loader dan tampilkan konten setelah halaman dimuat
    setTimeout(function() {
        loader.style.display = 'none';  // Menghilangkan loader
        content.style.display = 'block'; // Menampilkan konten
    }, 1000);  // Memberi sedikit jeda waktu (1 detik) agar animasi lebih halus
});




// Mengirimkan form menggunakan fetch API
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman default formulir

    fetch(this.action, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        }),
    })
    .then(response => {
        if (response.ok) {
            alert("Pesan berhasil dikirim!");
            document.getElementById("contactForm").reset(); // Reset form setelah berhasil
        } else {
            alert("Terjadi kesalahan, silakan coba lagi.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Terjadi kesalahan, silakan coba lagi.");
    });
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    fetch("https://formspree.io/f/myzgavjj", { // Ganti dengan URL Formspree Anda
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert("Pesan berhasil dikirim!");
            document.getElementById("contactForm").reset(); // Reset form setelah berhasil
        } else {
            alert("Terjadi kesalahan, silakan coba lagi.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Terjadi kesalahan, silakan coba lagi.");
    });
});

