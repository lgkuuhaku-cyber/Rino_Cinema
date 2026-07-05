document.addEventListener("DOMContentLoaded", () => {
  // Check auth session to autofill
  const sessionRaw = localStorage.getItem('ryino_session');
  if (sessionRaw) {
    const session = JSON.parse(sessionRaw);
    const formName = document.getElementById("form-name");
    const formEmail = document.getElementById("form-email");
    if (formName) formName.value = session.name;
    if (formEmail) formEmail.value = session.email;
  }

  // Load Booking Data
  const bookingRaw = localStorage.getItem('ryino_booking_data');
  if (!bookingRaw) {
    alert("Data pesanan tidak ditemukan. Anda akan dialihkan ke halaman utama.");
    window.location.href = "index.html";
    return;
  }

  const bookingData = JSON.parse(bookingRaw);

  // Populate Summary
  const summaryPoster = document.getElementById("summary-poster");
  if (summaryPoster && bookingData.moviePoster) {
    summaryPoster.src = bookingData.moviePoster;
    summaryPoster.onerror = () => {
      summaryPoster.src = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=60';
    };
  }

  document.getElementById("summary-movie").textContent = bookingData.movieTitle;
  document.getElementById("summary-genre").textContent = bookingData.movieGenre;
  document.getElementById("summary-studio").textContent = bookingData.movieStudio;
  document.getElementById("summary-schedule").textContent = `${bookingData.date} | ${bookingData.time} WIB`;
  
  const seatsText = bookingData.seats && bookingData.seats.length > 0 
    ? bookingData.seats.join(', ') 
    : 'Dipilihkan Admin';
  document.getElementById("summary-seats").textContent = seatsText;
  document.getElementById("summary-ticket-count").textContent = `${bookingData.ticketCount}x`;
  document.getElementById("summary-ticket-price").textContent = `Rp ${(bookingData.ticketPrice * bookingData.ticketCount).toLocaleString("id-ID")}`;
  
  if (bookingData.hasSnackCombo) {
    document.getElementById("snack-summary-container").classList.remove("hidden");
    const snackPriceContainer = document.getElementById("snack-price-container");
    snackPriceContainer.classList.remove("hidden");
    snackPriceContainer.classList.add("flex");
    document.getElementById("summary-snack-price").textContent = `Rp ${(bookingData.comboPrice).toLocaleString("id-ID")}`;
  }

  document.getElementById("summary-grand-total").textContent = `Rp ${bookingData.grandTotal.toLocaleString("id-ID")}`;

  // Handle Form Submit
  const paymentForm = document.getElementById("payment-form");
  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("form-name").value.trim();
    const phone = document.getElementById("form-phone").value.trim();
    const email = document.getElementById("form-email").value.trim() || "-";
    const paymentMethod = document.getElementById("form-payment").value;

    // Generate random Booking ID
    const randStr = Math.random().toString(36).substring(2, 6).toUpperCase();
    const bookingId = `RYI-${Date.now().toString().slice(-4)}-${randStr}`;

    // Generate Invoice Timestamp
    const now = new Date();
    const invoiceDate = now.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const invoiceTime = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

    let msg = ``;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `🎬 *FAKTUR PEMESANAN TIKET*\n`;
    msg += `🍿 *RYINO CINEMA*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    msg += `📋 *No. Invoice :* ${bookingId}\n`;
    msg += `📅 *Tanggal     :* ${invoiceDate}\n`;
    msg += `⏰ *Waktu       :* ${invoiceTime} WIB\n\n`;

    msg += `───────────────────────────\n`;
    msg += `👤 *DATA PEMESAN*\n`;
    msg += `───────────────────────────\n`;
    msg += `Nama      : ${name}\n`;
    msg += `WhatsApp  : ${phone}\n`;
    msg += `Email     : ${email}\n\n`;

    msg += `───────────────────────────\n`;
    msg += `🎥 *DETAIL PESANAN*\n`;
    msg += `───────────────────────────\n`;
    msg += `Film      : *${bookingData.movieTitle}*\n`;
    msg += `Genre     : ${bookingData.movieGenre}\n`;
    msg += `Studio    : ${bookingData.movieStudio}\n`;
    msg += `Tanggal   : ${bookingData.date}\n`;
    msg += `Jam Tayang: ${bookingData.time} WIB\n`;
    msg += `Hari      : ${bookingData.dayType === 'weekend' ? '🔴 Weekend (Jum-Min)' : '🟢 Weekday (Sen-Kam)'}\n`;
    msg += `Kursi     : *${seatsText}*\n`;
    msg += `Jml Tiket : ${bookingData.ticketCount}x\n`;
    msg += `Snack     : ${bookingData.hasSnackCombo ? '✅ Ya (Combo Popcorn + Softdrink)' : '❌ Tidak'}\n\n`;

    msg += `───────────────────────────\n`;
    msg += `💰 *RINCIAN PEMBAYARAN*\n`;
    msg += `───────────────────────────\n`;
    msg += `Harga Tiket  : Rp ${bookingData.basePrice.toLocaleString("id-ID")} x ${bookingData.ticketCount}\n`;
    if (bookingData.surcharge > 0) {
      msg += `Surcharge WE : Rp ${bookingData.surcharge.toLocaleString("id-ID")} x ${bookingData.ticketCount}\n`;
    }
    const subtotalTicket = bookingData.ticketPrice * bookingData.ticketCount;
    msg += `Subtotal Tiket : Rp ${subtotalTicket.toLocaleString("id-ID")}\n`;
    if (bookingData.hasSnackCombo) {
      msg += `Combo Snack   : Rp 30.000 x ${bookingData.ticketCount}\n`;
      msg += `Subtotal Snack : Rp ${bookingData.comboPrice.toLocaleString("id-ID")}\n`;
    }
    msg += `                  ─────────\n`;
    msg += `*TOTAL BAYAR  : Rp ${bookingData.grandTotal.toLocaleString("id-ID")}*\n\n`;

    msg += `───────────────────────────\n`;
    msg += `💳 *METODE PEMBAYARAN*\n`;
    msg += `───────────────────────────\n`;
    msg += `Metode : *${paymentMethod}*\n\n`;

    if (paymentMethod.includes("BCA")) {
      msg += `🏦 Transfer ke:\n`;
      msg += `   Bank    : *BCA*\n`;
      msg += `   No. Rek : *8901234567*\n`;
      msg += `   A/N     : *Ryino Cinema*\n\n`;
    } else if (paymentMethod.includes("Mandiri")) {
      msg += `🏦 Transfer ke:\n`;
      msg += `   Bank    : *Mandiri*\n`;
      msg += `   No. Rek : *1370001234567*\n`;
      msg += `   A/N     : *Ryino Cinema*\n\n`;
    } else if (paymentMethod.includes("GoPay") || paymentMethod.includes("OVO")) {
      msg += `📱 Transfer E-Wallet ke:\n`;
      msg += `   Nomor   : *0895379272080*\n`;
      msg += `   A/N     : *Ryino Cinema*\n\n`;
    } else if (paymentMethod.includes("QRIS")) {
      msg += `📲 Admin akan segera mengirimkan kode QRIS untuk pembayaran.\n\n`;
    }

    msg += `⚠️ _Kirimkan bukti pembayaran ke chat ini setelah transfer._\n\n`;

    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `✅ *Status: MENUNGGU PEMBAYARAN*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    msg += `_Terima kasih telah memilih Ryino Cinema!_\n`;
    msg += `_E-Tiket akan dikirim setelah pembayaran diverifikasi._\n`;
    msg += `_© ${now.getFullYear()} Ryino Cinema - Digital Ticketing System_`;

    const adminWhatsAppNumber = "62895379272080";
    const encodedMsg = encodeURIComponent(msg);
    const waUrl = `https://api.whatsapp.com/send?phone=${adminWhatsAppNumber}&text=${encodedMsg}`;
    
    window.open(waUrl, '_blank');

    // Optional: Clear booking data after success
    // localStorage.removeItem('ryino_booking_data');
  });
});
