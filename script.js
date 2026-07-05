// Ryino Cinema Website Interactive Script

// 1. Movie Database (12 movies: 8 Now Showing, 4 Upcoming)
const movies = [
  {
    id: 1,
    title: "The Cyber Strike: Neo Jakarta",
    type: "now_showing",
    genre: "Aksi / Sci-Fi",
    duration: 124,
    rating: "R13+",
    ratingStars: 4.8,
    poster: "assets/posters/action.png",
    director: "Rendra Wijaya",
    cast: "Joe Taslim, Iko Uwais, Chelsea Islan",
    synopsis: "Di masa depan dystopian Jakarta tahun 2099, seorang mantan agen siber harus berhadapan dengan AI militer ilegal yang mengambil alih infrastruktur kota. Pertarungan teknologi dan bela diri yang menegangkan untuk menyelamatkan jutaan nyawa.",
    showtimes: ["12:30", "15:00", "17:30", "20:00"],
    studio: "Premium Prime",
    basePrice: 50000
  },
  {
    id: 2,
    title: "Whispers in the Dark",
    type: "now_showing",
    genre: "Horor / Misteri",
    duration: 105,
    rating: "D17+",
    ratingStars: 4.6,
    poster: "assets/posters/horror.png",
    director: "Joko Anwar",
    cast: "Tara Basro, Reza Rahadian, Christine Hakim",
    synopsis: "Sebuah keluarga warisan menempati rumah tua di lereng gunung berapi aktif. Ketika abu mulai turun, suara-suara aneh di kegelapan menuntut pengorbanan masa lalu yang terkubur rapat selama tiga generasi.",
    showtimes: ["13:00", "15:30", "18:00", "20:30", "22:00"],
    studio: "Reguler Studio",
    basePrice: 35000
  },
  {
    id: 3,
    title: "The Magic Forest: Petualangan Kiko",
    type: "now_showing",
    genre: "Animasi / Keluarga",
    duration: 92,
    rating: "SU",
    ratingStars: 4.9,
    poster: "assets/posters/family.png",
    director: "Aditya Pratama",
    cast: "Dubber Indonesia Pilihan, Iqbaal Ramadhan",
    synopsis: "Kiko dan teman-teman kecilnya tidak sengaja menemukan portal menuju hutan ajaib yang tersembunyi di balik bukit sekolah mereka. Bersama-sama, mereka harus menolong peri pohon untuk memulihkan mata air kehidupan sebelum dihancurkan oleh monster limbah.",
    showtimes: ["11:30", "13:30", "15:45", "18:00"],
    studio: "Reguler Studio",
    basePrice: 35000
  },
  {
    id: 4,
    title: "Lost in Nebula: Singgah di Alpha Centauri",
    type: "now_showing",
    genre: "Sci-Fi / Petualangan",
    duration: 142,
    rating: "SU",
    ratingStars: 4.7,
    poster: "assets/posters/scifi.png",
    director: "Christopher Nolan (Mock)",
    cast: "Nicholas Saputra, Adinia Wirasti",
    synopsis: "Ekspedisi luar angkasa pertama Indonesia menghadapi anomali gravitasi di nebula jauh. Kru kapal antariksa Nusantara-1 harus memutuskan antara menyelesaikan misi kolonisasi umat manusia atau menyelamatkan diri kembali ke Bumi yang sekarat.",
    showtimes: ["12:00", "14:45", "17:30", "20:15"],
    studio: "Velvet VIP Suite",
    basePrice: 100000
  },
  {
    id: 5,
    title: "Autumn Whispers: Janji yang Hilang",
    type: "now_showing",
    genre: "Drama / Romansa",
    duration: 118,
    rating: "R13+",
    ratingStars: 4.5,
    poster: "assets/posters/romance.png",
    director: "Monty Tiwa",
    cast: "Angga Yunanda, Maudy Ayunda",
    synopsis: "Dua mahasiswa kedokteran yang berjanji akan bertemu di Paris saat musim gugur dipisahkan oleh takdir dan perang keluarga. Bertahun-tahun kemudian, sebuah surat lama yang terselip di buku perpustakaan mempertemukan mereka kembali dalam situasi yang jauh berbeda.",
    showtimes: ["13:15", "15:45", "18:15", "20:45"],
    studio: "Premium Prime",
    basePrice: 50000
  },
  {
    id: 6,
    title: "The Cyber Strike 2: Blackout",
    type: "now_showing",
    genre: "Aksi / Thriller",
    duration: 130,
    rating: "D17+",
    ratingStars: 4.7,
    poster: "assets/posters/action.png",
    director: "Rendra Wijaya",
    cast: "Joe Taslim, Yayan Ruhian, Pevita Pearce",
    synopsis: "Kelanjutan dari misi Neo Jakarta. Kegelapan total melanda Asia Tenggara akibat serangan siber berskala global. Agen siber kembali beraksi untuk melacak dalang di balik pemadaman masal ini sebelum kekacauan total terjadi.",
    showtimes: ["14:00", "16:30", "19:00", "21:30"],
    studio: "Premium Prime",
    basePrice: 50000
  },
  {
    id: 7,
    title: "Jeritan Malam di Desa Penari",
    type: "now_showing",
    genre: "Horor / Cerita Rakyat",
    duration: 112,
    rating: "D17+",
    ratingStars: 4.4,
    poster: "assets/posters/horror.png",
    director: "Kimo Stamboel",
    cast: "Aulia Sarah, Aghniny Haque, Jourdy Pranata",
    synopsis: "Rombongan mahasiswa KKN di desa terpencil menemukan sesajen terlarang di dalam sumur tua. Satu per satu dari mereka mulai mengalami delusi tarian mistis yang memaksa mereka menari tanpa henti hingga ajal menjemput.",
    showtimes: ["12:45", "15:15", "17:45", "20:15", "22:30"],
    studio: "Reguler Studio",
    basePrice: 35000
  },
  {
    id: 8,
    title: "Petualangan Kiko 2: Pulau Harta Karun",
    type: "now_showing",
    genre: "Animasi / Komedi",
    duration: 88,
    rating: "SU",
    ratingStars: 4.8,
    poster: "assets/posters/family.png",
    director: "Aditya Pratama",
    cast: "Dubber Indonesia Pilihan",
    synopsis: "Setelah menyelamatkan hutan, Kiko dan kawan-kawan berlayar ke samudera selatan untuk mencari pulau tersembunyi yang menyimpan rahasia warisan bajak laut baik hati. Komedi menyegarkan dan penuh pesan moral keluarga.",
    showtimes: ["11:00", "13:00", "15:00", "17:00"],
    studio: "Reguler Studio",
    basePrice: 35000
  },
  // Upcoming Movies
  {
    id: 9,
    title: "Chronicles of Nebula: The Black Hole",
    type: "upcoming",
    genre: "Sci-Fi / Petualangan",
    duration: 155,
    rating: "SU",
    ratingStars: 0,
    poster: "assets/posters/scifi.png",
    director: "Mock Director SciFi",
    cast: "Reza Rahadian, Dian Sastrowardoyo",
    synopsis: "Prekuel epik dari Lost in Nebula. Menjelajahi masa lalu penciptaan gerbang perjalanan antar bintang pertama dan ekspedisi berbahaya menembus cakrawala peristiwa sebuah lubang hitam supermasif.",
    showtimes: [],
    studio: "Velvet VIP Suite",
    basePrice: 100000
  },
  {
    id: 10,
    title: "Gema Di Balik Kabut",
    type: "upcoming",
    genre: "Horor / Drama",
    duration: 98,
    rating: "R13+",
    ratingStars: 0,
    poster: "assets/posters/horror.png",
    director: "Yandy Laurens",
    cast: "Marsha Timothy, Vino G. Bastian",
    synopsis: "Seorang ibu yang berduka mendengar suara anaknya memanggil dari balik kabut tebal di pinggiran danau misterius. Misteri psikologis tentang duka mendalam dan makhluk gaib yang memanfaatkannya.",
    showtimes: [],
    studio: "Reguler Studio",
    basePrice: 35000
  },
  {
    id: 11,
    title: "The Cyber Strike: Cyberpunk City",
    type: "upcoming",
    genre: "Aksi / Sci-Fi",
    duration: 135,
    rating: "D17+",
    ratingStars: 0,
    poster: "assets/posters/action.png",
    director: "Rendra Wijaya",
    cast: "Joe Taslim, Pevita Pearce",
    synopsis: "Membawa petualangan ke skala global. Agen siber menembus markas korporasi raksasa di kota metropolitan terapung di atas Samudera Pasifik. Aksi menegangkan dengan persenjataan laser berteknologi tinggi.",
    showtimes: [],
    studio: "Premium Prime",
    basePrice: 50000
  },
  {
    id: 12,
    title: "Romansa Musim Gugur di Paris",
    type: "upcoming",
    genre: "Drama / Romansa",
    duration: 110,
    rating: "SU",
    ratingStars: 0,
    poster: "assets/posters/romance.png",
    director: "Monty Tiwa",
    cast: "Angga Yunanda, Maudy Ayunda, Vanesha Prescilla",
    synopsis: "Sekuel dari Autumn Whispers. Mengisahkan perjuangan kehidupan baru mereka di Paris, impian yang berbenturan dengan realita karir medis yang keras, serta orang ketiga yang menguji kesetiaan janji masa lalu.",
    showtimes: [],
    studio: "Premium Prime",
    basePrice: 50000
  }
];

// 2. Global State Management
let selectedMovie = null;
let selectedShowtime = "";
let selectedSeats = [];
let manualTariffCount = 0; // The decoupled ticket counter for the tariff section
let selectedDay = "weekday"; // "weekday" or "weekend"
let hasSnackCombo = false;

// Dom Elements
const movieGrid = document.getElementById("movie-grid");
const tabNowShowing = document.getElementById("tab-now-showing");
const tabUpcoming = document.getElementById("tab-upcoming");
const bookingModal = document.getElementById("booking-modal");
const modalClose = document.getElementById("modal-close");
const modalTitle = document.getElementById("modal-title");
const modalGenre = document.getElementById("modal-genre");
const modalRating = document.getElementById("modal-rating");
const modalDuration = document.getElementById("modal-duration");
const modalSynopsis = document.getElementById("modal-synopsis");
const modalDirector = document.getElementById("modal-director");
const modalCast = document.getElementById("modal-cast");
const modalPoster = document.getElementById("modal-poster");
const showtimeContainer = document.getElementById("showtime-container");
const showtimeTitle = document.getElementById("showtime-title");

// Seat Selection Section Elements
const seatSection = document.getElementById("seat-selection-section");
const seatGrid = document.getElementById("seat-grid");
const seatMovieTitle = document.getElementById("seat-movie-title");
const seatShowtime = document.getElementById("seat-showtime");
const selectedSeatsText = document.getElementById("selected-seats-text");
const totalSeatsCount = document.getElementById("total-seats-count");
const ticketBasePriceText = document.getElementById("ticket-base-price");
const ticketDayPriceText = document.getElementById("ticket-day-price");
const totalPriceText = document.getElementById("total-price");
const btnConfirmSeats = document.getElementById("btn-confirm-seats");

// Ticket Counter Elements
const btnMinusTicket = document.getElementById("btn-minus-ticket");
const btnPlusTicket = document.getElementById("btn-plus-ticket");
const displayTicketCount = document.getElementById("display-ticket-count");

// (Contact Form & Summary Modal references removed)

let currentBookingData = null;

// 3. Render Movie Catalog
function renderMovies(filterType = "now_showing") {
  movieGrid.innerHTML = "";
  const filtered = movies.filter(m => m.type === filterType);

  filtered.forEach(movie => {
    const isUpcoming = movie.type === "upcoming";
    const ratingBg = movie.rating === "D17+" ? "bg-red-900 text-red-200" : (movie.rating === "SU" ? "bg-green-900 text-green-200" : "bg-blue-900 text-blue-200");
    const starsHtml = !isUpcoming
      ? `<div class="flex items-center text-amber-400 gap-1 text-sm font-semibold">
           <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
           <span>${movie.ratingStars}</span>
         </div>`
      : `<span class="text-amber-500 font-semibold text-xs tracking-wider uppercase bg-amber-950 px-2 py-0.5 rounded border border-amber-800">Segera Hadir</span>`;

    const card = document.createElement("div");
    card.className = "card-glow bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group cursor-pointer flex flex-col justify-between";
    card.setAttribute("data-id", movie.id);

    card.innerHTML = `
      <div class="relative overflow-hidden aspect-[2/3] bg-slate-950">
        <img src="${movie.poster}" alt="${movie.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=60'">
        <div class="absolute top-3 right-3 ${ratingBg} px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">${movie.rating}</div>
        <div class="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-xs text-slate-300 font-medium">${movie.studio}</div>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div class="p-4 flex flex-col justify-between flex-grow">
        <div>
          <span class="text-xs text-slate-400 font-medium uppercase tracking-wider">${movie.genre}</span>
          <h3 class="font-bold text-lg text-white group-hover:text-amber-500 transition-colors leading-tight mt-1 line-clamp-2">${movie.title}</h3>
        </div>
        <div class="flex items-center justify-between mt-4 pt-3 border-t border-slate-800">
          <span class="text-xs text-slate-400">${movie.duration} Menit</span>
          ${starsHtml}
        </div>
      </div>
    `;

    card.addEventListener("click", () => openBookingModal(movie));
    movieGrid.appendChild(card);
  });
}

// 4. Tab Switching Logic
tabNowShowing.addEventListener("click", () => {
  tabNowShowing.className = "px-6 py-3 bg-amber-500 text-slate-950 rounded-full font-bold shadow-lg shadow-amber-500/20 transition-all cursor-pointer";
  tabUpcoming.className = "px-6 py-3 bg-slate-800 text-slate-400 hover:text-white rounded-full font-bold transition-all cursor-pointer";
  if (typeof countdownInterval !== 'undefined') clearInterval(countdownInterval);
  (window.renderMovies || renderMovies)("now_showing");
});

tabUpcoming.addEventListener("click", () => {
  tabUpcoming.className = "px-6 py-3 bg-amber-500 text-slate-950 rounded-full font-bold shadow-lg shadow-amber-500/20 transition-all cursor-pointer";
  tabNowShowing.className = "px-6 py-3 bg-slate-800 text-slate-400 hover:text-white rounded-full font-bold transition-all cursor-pointer";
  (window.renderMovies || renderMovies)("upcoming");
});

// 5. Booking Modal Logic (Sinopsis & Detail & Showtime Select)
function openBookingModal(movie) {
  selectedMovie = movie;
  selectedShowtime = "";
  selectedSeats = [];

  modalTitle.textContent = movie.title;
  modalGenre.textContent = movie.genre;
  modalRating.textContent = movie.rating;
  modalDuration.textContent = `${movie.duration} Menit`;
  modalSynopsis.textContent = movie.synopsis;
  modalDirector.textContent = movie.director;
  modalCast.textContent = movie.cast;
  modalPoster.src = movie.poster;
  modalPoster.onerror = () => { modalPoster.src = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=60'; };

  const ratingBg = movie.rating === "D17+" ? "bg-red-900 text-red-200" : (movie.rating === "SU" ? "bg-green-900 text-green-200" : "bg-blue-900 text-blue-200");
  modalRating.className = `px-2 py-0.5 rounded text-xs font-bold ${ratingBg}`;

  // Render Showtimes
  showtimeContainer.innerHTML = "";
  if (movie.type === "now_showing" && movie.showtimes.length > 0) {
    showtimeTitle.style.display = "block";
    movie.showtimes.forEach(time => {
      const btn = document.createElement("button");
      btn.className = "px-4 py-2 bg-slate-800 border border-slate-700 hover:border-amber-500 hover:text-amber-500 rounded-lg text-sm font-semibold transition-all";
      btn.textContent = time;
      btn.addEventListener("click", () => {
        selectedShowtime = time;
        bookingModal.classList.add("hidden");
        document.body.style.overflow = ""; // Re-enable scroll
        // Smooth scroll to seat selector
        initSeatSelector();
      });
      showtimeContainer.appendChild(btn);
    });
  } else {
    showtimeTitle.style.display = "none";
    const infoText = document.createElement("p");
    infoText.className = "text-sm text-amber-500 italic bg-amber-950/40 border border-amber-900/50 p-3 rounded-lg w-full text-center";
    infoText.textContent = "Film ini segera hadir di bioskop Ryino Cinema. Pembelian tiket belum tersedia untuk saat ini.";
    showtimeContainer.appendChild(infoText);
  }

  bookingModal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Disable scroll when modal open
}

function closeModal() {
  bookingModal.classList.add("hidden");
  document.body.style.overflow = ""; // Re-enable scroll
}

modalClose.addEventListener("click", closeModal);
bookingModal.addEventListener("click", (e) => {
  if (e.target === bookingModal) closeModal();
});

// 6. Interactive Seat Selector Builder & Pricing
function initSeatSelector() {
  if (!selectedMovie || !selectedShowtime) return;

  seatMovieTitle.textContent = selectedMovie.title;
  seatShowtime.textContent = `${selectedShowtime} WIB (${selectedMovie.studio})`;
  selectedSeats = [];
  updatePricing();

  // Create Seats Grid (10 rows: A - J, 10 columns: 1 - 10)
  seatGrid.innerHTML = "";

  // Set deterministic booked seats based on movie ID and showtime characters to feel realistic
  const seed = selectedMovie.id + selectedShowtime.charCodeAt(0) + selectedShowtime.charCodeAt(3);

  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K']; // standard cinema skips 'I'

  rows.forEach(row => {
    // Left row label
    const labelLeft = document.createElement("div");
    labelLeft.className = "flex items-center justify-center font-bold text-slate-500 text-sm md:text-base select-none";
    labelLeft.textContent = row;
    seatGrid.appendChild(labelLeft);

    for (let col = 1; col <= 10; col++) {
      // Add gap in the middle (between seat 5 and 6)
      if (col === 6) {
        const gap = document.createElement("div");
        gap.className = "col-span-1"; // Just empty space
        seatGrid.appendChild(gap);
      }

      const seatId = `${row}${col}`;
      const seat = document.createElement("div");

      // Seeded random booking status
      const seatSeed = seed + row.charCodeAt(0) * col;
      const isBooked = (seatSeed % 3 === 0); // ~33% occupied seats

      seat.className = `seat ${isBooked ? 'booked' : 'free'}`;
      seat.setAttribute("data-seat-id", seatId);

      if (!isBooked) {
        seat.addEventListener("click", () => toggleSeatSelection(seat, seatId));
      }

      // Add tooltip/small label for seat number
      const tooltip = document.createElement("span");
      tooltip.className = "absolute inset-0 flex items-center justify-center text-[8px] font-bold text-black/40 select-none pointer-events-none";
      tooltip.textContent = col;
      seat.appendChild(tooltip);

      seatGrid.appendChild(seat);
    }

    // Right row label
    const labelRight = document.createElement("div");
    labelRight.className = "flex items-center justify-center font-bold text-slate-500 text-sm md:text-base select-none";
    labelRight.textContent = row;
    seatGrid.appendChild(labelRight);
  });

  // Reveal the seat selector section with scroll
  seatSection.classList.remove("hidden");
  seatSection.scrollIntoView({ behavior: 'smooth' });
}

function toggleSeatSelection(seatElement, seatId) {
  if (selectedSeats.includes(seatId)) {
    // Unselect
    selectedSeats = selectedSeats.filter(s => s !== seatId);
    seatElement.classList.remove("selected");
    seatElement.classList.add("free");
  } else {
    // Select (limit to max 8 seats)
    if (selectedSeats.length >= 8) {
      alert("Maksimal pemesanan adalah 8 kursi per transaksi.");
      return;
    }
    selectedSeats.push(seatId);
    seatElement.classList.remove("free");
    seatElement.classList.add("selected");
  }

  // Sync manual counter
  manualTariffCount = selectedSeats.length;
  if (displayTicketCount) displayTicketCount.textContent = manualTariffCount;

  // Sort selected seats order
  selectedSeats.sort();
  selectedSeatsText.textContent = selectedSeats.length > 0 ? selectedSeats.join(", ") : "-";
  totalSeatsCount.textContent = manualTariffCount;

  updatePricing();
}

// 6.5 Tariff Ticket Counter Events
if (btnPlusTicket) {
  btnPlusTicket.addEventListener("click", () => {
    manualTariffCount = Math.min(20, manualTariffCount + 1);
    // If they manually use counter, clear specific seat selections
    selectedSeats = [];
    document.querySelectorAll(".seat.selected").forEach(s => {
      s.classList.remove("selected");
      s.classList.add("free");
    });
    selectedSeatsText.textContent = "Dipilihkan Admin";
    displayTicketCount.textContent = manualTariffCount;
    totalSeatsCount.textContent = manualTariffCount;
    updatePricing();
  });
}

if (btnMinusTicket) {
  btnMinusTicket.addEventListener("click", () => {
    manualTariffCount = Math.max(0, manualTariffCount - 1);
    selectedSeats = [];
    document.querySelectorAll(".seat.selected").forEach(s => {
      s.classList.remove("selected");
      s.classList.add("free");
    });
    selectedSeatsText.textContent = manualTariffCount === 0 ? "-" : "Dipilihkan Admin";
    displayTicketCount.textContent = manualTariffCount;
    totalSeatsCount.textContent = manualTariffCount;
    updatePricing();
  });
}

// 7. Dynamic Pricing Engine logic
function updatePricing() {
  if (!selectedMovie) return;

  const basePrice = selectedMovie.basePrice;
  const surcharge = selectedDay === "weekend" ? 15000 : 0;
  const ticketPrice = basePrice + surcharge;
  const numSeats = manualTariffCount; // use the synced counter

  let totalPrice = ticketPrice * numSeats;

  // Optional Snack Popcorn combo: +Rp30.000 per package
  if (hasSnackCombo) {
    totalPrice += 30000 * numSeats; // 1 combo per ticket
  }

  // Format Currency (Rupiah)
  ticketBasePriceText.textContent = `Rp ${basePrice.toLocaleString("id-ID")}`;
  ticketDayPriceText.textContent = `+ Rp ${surcharge.toLocaleString("id-ID")} (${selectedDay === 'weekend' ? 'Weekend' : 'Weekday'})`;
  totalPriceText.textContent = `Rp ${totalPrice.toLocaleString("id-ID")}`;

  // Toggle confirm button state
  if (numSeats > 0) {
    btnConfirmSeats.removeAttribute("disabled");
    btnConfirmSeats.className = "w-full py-4 bg-amber-500 text-slate-950 font-bold rounded-xl hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 text-center cursor-pointer";
    btnConfirmSeats.textContent = selectedSeats.length > 0 ? "Konfirmasi Kursi & Isi Form Pemesanan" : "Konfirmasi Pesanan & Isi Form";
  } else {
    btnConfirmSeats.setAttribute("disabled", "true");
    btnConfirmSeats.className = "w-full py-4 bg-slate-800 text-slate-500 font-bold rounded-xl cursor-not-allowed text-center";
    btnConfirmSeats.textContent = "Pilih Kursi / Tiket Dahulu";
  }
}

// Listeners for Pricing Engine Controls
document.getElementById("day-weekday").addEventListener("click", () => {
  selectedDay = "weekday";
  document.getElementById("day-weekday").className = "flex-1 py-2 px-3 bg-amber-500 text-slate-950 font-bold text-center text-xs md:text-sm rounded-lg transition-all cursor-pointer";
  document.getElementById("day-weekend").className = "flex-1 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-400 font-bold text-center text-xs md:text-sm rounded-lg transition-all cursor-pointer";
  updatePricing();
});

document.getElementById("day-weekend").addEventListener("click", () => {
  selectedDay = "weekend";
  document.getElementById("day-weekend").className = "flex-1 py-2 px-3 bg-amber-500 text-slate-950 font-bold text-center text-xs md:text-sm rounded-lg transition-all cursor-pointer";
  document.getElementById("day-weekday").className = "flex-1 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-400 font-bold text-center text-xs md:text-sm rounded-lg transition-all cursor-pointer";
  updatePricing();
});

document.getElementById("snack-combo").addEventListener("change", (e) => {
  hasSnackCombo = e.target.checked;
  updatePricing();
});

// 8. Confirm Seats & Sync to Form
btnConfirmSeats.addEventListener("click", () => {
  if (selectedSeats.length === 0 && manualTariffCount === 0) return;

  const today = new Date().toISOString().split('T')[0];
  const surcharge = selectedDay === "weekend" ? 15000 : 0;
  const ticketPrice = selectedMovie.basePrice + surcharge;
  const actualTicketCount = selectedSeats.length > 0 ? selectedSeats.length : manualTariffCount;
  const comboPrice = hasSnackCombo ? 30000 * actualTicketCount : 0;
  const grandTotal = (ticketPrice * actualTicketCount) + comboPrice;

  const bookingData = {
    movieTitle: selectedMovie.title,
    movieGenre: selectedMovie.genre,
    movieStudio: selectedMovie.studio,
    moviePoster: selectedMovie.poster,
    date: today,
    time: selectedShowtime || '-',
    dayType: selectedDay,
    seats: selectedSeats,
    ticketCount: actualTicketCount,
    hasSnackCombo: hasSnackCombo,
    basePrice: selectedMovie.basePrice,
    surcharge: surcharge,
    ticketPrice: ticketPrice,
    comboPrice: comboPrice,
    grandTotal: grandTotal
  };

  localStorage.setItem('ryino_booking_data', JSON.stringify(bookingData));

  btnConfirmSeats.textContent = "Mengalihkan ke Pembayaran...";
  setTimeout(() => {
    window.location.href = 'payment.html';
  }, 500);
});

// // (Form and Summary Modal logics have been removed as payment is now handled on a separate page)───────────\n`;

// 10. Accordion FAQ interactivity
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(item => {
  const trigger = item.querySelector(".faq-trigger");
  trigger.addEventListener("click", () => {
    const isActive = item.classList.contains("faq-active");

    // Close all FAQs first
    faqItems.forEach(i => i.classList.remove("faq-active"));

    // Toggle clicked FAQ
    if (!isActive) {
      item.classList.add("faq-active");
    }
  });
});

// 11. Mobile Hamburger Menu Toggle
const menuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = mobileMenu.querySelectorAll("a");

menuBtn.addEventListener("click", () => {
  const isHidden = mobileMenu.classList.contains("hidden");
  if (isHidden) {
    mobileMenu.classList.remove("hidden");
    menuBtn.innerHTML = `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`;
  } else {
    mobileMenu.classList.add("hidden");
    menuBtn.innerHTML = `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>`;
  }
});

// Close mobile menu when link is clicked
mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuBtn.innerHTML = `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>`;
  });
});

// 12. Document Init
document.addEventListener("DOMContentLoaded", () => {
  // Use enhanced render if available (patched later), fallback to original
  renderMovies("now_showing");

  // Hide seat selection initially until trigger
  seatSection.classList.add("hidden");

  // Init all features
  initBackToTop();
  initScrollReveal();
  initActiveNavHighlight();
  initTrailerModal();
  initNavbarScrollEffect();

  // Auth Initialization
  const sessionRaw = localStorage.getItem('ryino_session');
  if (sessionRaw) {
    const session = JSON.parse(sessionRaw);

    // Update Navbar Profile Name
    const navUserName = document.getElementById("nav-user-name");
    const mobileUserName = document.getElementById("mobile-user-name");
    if (navUserName) navUserName.textContent = session.name;
    if (mobileUserName) mobileUserName.textContent = session.name;

    // Autofill form
    const formName = document.getElementById("form-name");
    const formEmail = document.getElementById("form-email");
    if (formName) formName.value = session.name;
    if (formEmail) formEmail.value = session.email;
  }

  // Logout Handlers
  const handleLogout = () => {
    localStorage.removeItem('ryino_session');
    window.location.href = 'auth.html';
  };

  const btnLogout = document.getElementById("btn-logout");
  const btnLogoutMobile = document.getElementById("btn-logout-mobile");

  if (btnLogout) btnLogout.addEventListener("click", handleLogout);
  if (btnLogoutMobile) btnLogoutMobile.addEventListener("click", handleLogout);
});

// Re-render with enhanced version after everything is set up
window.addEventListener("load", () => {
  if (window.renderMovies) {
    window.renderMovies("now_showing");
  }
});

// ======================================================
// 13. BACK TO TOP BUTTON
// ======================================================
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
      btn.classList.add("opacity-100", "translate-y-0");
    } else {
      btn.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
      btn.classList.remove("opacity-100", "translate-y-0");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ======================================================
// 14. SCROLL REVEAL ANIMATIONS (Intersection Observer)
// ======================================================
function initScrollReveal() {
  // Add base reveal classes to all sections and key elements
  const revealTargets = document.querySelectorAll(
    "section, footer, .card-glow, .faq-item, .grid > div"
  );

  revealTargets.forEach((el) => {
    el.classList.add("reveal-hidden");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          entry.target.classList.remove("reveal-hidden");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
  );

  revealTargets.forEach((el) => observer.observe(el));
}

// ======================================================
// 15. ACTIVE NAV LINK HIGHLIGHT ON SCROLL
// ======================================================
function initActiveNavHighlight() {
  const sections = document.querySelectorAll("section[id], footer[id]");
  const navLinks = document.querySelectorAll("nav a[href^='#'], #mobile-menu a[href^='#']");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            const href = link.getAttribute("href").replace("#", "");
            if (href === id) {
              link.classList.add("text-amber-500");
              link.classList.remove("text-slate-300");
            } else {
              link.classList.remove("text-amber-500");
              link.classList.add("text-slate-300");
            }
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((sec) => sectionObserver.observe(sec));
}

// ======================================================
// 16. NAVBAR SCROLL EFFECT (shadow on scroll)
// ======================================================
function initNavbarScrollEffect() {
  const header = document.querySelector("header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      header.style.boxShadow = "0 4px 30px rgba(0,0,0,0.5)";
    } else {
      header.style.boxShadow = "none";
    }
  });
}

// ======================================================
// 17. TOAST NOTIFICATION SYSTEM
// ======================================================
function showToast(message, type = "success", duration = 4000) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const icons = {
    success: `<svg class="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    error: `<svg class="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    info: `<svg class="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  };

  const toast = document.createElement("div");
  toast.className = `pointer-events-auto flex items-center gap-3 px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl shadow-black/40 text-sm text-white max-w-sm transform translate-x-full opacity-0 transition-all duration-300`;
  toast.innerHTML = `
    ${icons[type] || icons.info}
    <span class="flex-1">${message}</span>
    <button class="text-slate-500 hover:text-white ml-2 flex-shrink-0" onclick="this.parentElement.remove()">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
  `;
  container.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.remove("translate-x-full", "opacity-0");
    });
  });

  // Auto dismiss
  setTimeout(() => {
    toast.classList.add("translate-x-full", "opacity-0");
    setTimeout(() => toast.remove(), 350);
  }, duration);
}

// (Form submit toast moved to summaryConfirm click)

// Override Confirm Seats button to show toast
btnConfirmSeats.addEventListener("click", () => {
  if (selectedSeats.length === 0) return;
  setTimeout(() => {
    showToast(`🎫 ${selectedSeats.length} kursi berhasil dipilih! Silakan lengkapi formulir di bawah.`, "success");
  }, 300);
});

// ======================================================
// 18. TRAILER MODAL
// ======================================================
function initTrailerModal() {
  const trailerModal = document.getElementById("trailer-modal");
  const trailerClose = document.getElementById("trailer-close");
  const trailerMovieTitle = document.getElementById("trailer-movie-title");
  const btnWatchTrailer = document.getElementById("btn-watch-trailer");

  if (!trailerModal || !btnWatchTrailer) return;

  btnWatchTrailer.addEventListener("click", () => {
    if (!selectedMovie) return;
    trailerMovieTitle.textContent = selectedMovie.title;
    trailerModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });

  trailerClose.addEventListener("click", () => {
    trailerModal.classList.add("hidden");
    document.body.style.overflow = "";
  });

  trailerModal.addEventListener("click", (e) => {
    if (e.target === trailerModal) {
      trailerModal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  });
}

// ======================================================
// 19. UPCOMING MOVIE COUNTDOWN TIMERS
// ======================================================
// Release dates for upcoming movies (keyed by movie id)
const upcomingReleaseDates = {
  9: new Date("2026-07-15T00:00:00"),
  10: new Date("2026-07-29T00:00:00"),
  11: new Date("2026-08-10T00:00:00"),
  12: new Date("2026-08-22T00:00:00"),
};

function formatCountdown(targetDate) {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) return { d: "00", h: "00", m: "00", s: "00", expired: true };

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  const pad = (n) => String(n).padStart(2, "0");
  return { d: pad(d), h: pad(h), m: pad(m), s: pad(s), expired: false };
}

// Patch renderMovies to inject countdown for upcoming type
const _originalRenderMovies = renderMovies;
function renderMoviesWithCountdown(filterType = "now_showing") {
  movieGrid.innerHTML = "";
  const filtered = movies.filter((m) => m.type === filterType);

  filtered.forEach((movie) => {
    const isUpcoming = movie.type === "upcoming";
    const ratingBg =
      movie.rating === "D17+"
        ? "bg-red-900 text-red-200"
        : movie.rating === "SU"
          ? "bg-green-900 text-green-200"
          : "bg-blue-900 text-blue-200";

    const starsHtml = !isUpcoming
      ? `<div class="flex items-center text-amber-400 gap-1 text-sm font-semibold">
           <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
           <span>${movie.ratingStars}</span>
         </div>`
      : `<span class="text-amber-500 font-semibold text-xs tracking-wider uppercase bg-amber-950 px-2 py-0.5 rounded border border-amber-800">Segera Hadir</span>`;

    const releaseDate = upcomingReleaseDates[movie.id];
    const countdownHtml =
      isUpcoming && releaseDate
        ? `<div class="countdown-block mt-3 pt-3 border-t border-slate-800" data-movie-id="${movie.id}">
             <p class="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5 font-semibold">Tayang dalam:</p>
             <div class="flex gap-1.5 text-center">
               <div class="bg-slate-950 border border-slate-800 rounded-lg px-1.5 py-1 flex-1">
                 <span class="cd-days text-amber-500 font-extrabold text-sm leading-none block">--</span>
                 <span class="text-[9px] text-slate-500">Hari</span>
               </div>
               <div class="bg-slate-950 border border-slate-800 rounded-lg px-1.5 py-1 flex-1">
                 <span class="cd-hours text-amber-500 font-extrabold text-sm leading-none block">--</span>
                 <span class="text-[9px] text-slate-500">Jam</span>
               </div>
               <div class="bg-slate-950 border border-slate-800 rounded-lg px-1.5 py-1 flex-1">
                 <span class="cd-mins text-amber-500 font-extrabold text-sm leading-none block">--</span>
                 <span class="text-[9px] text-slate-500">Menit</span>
               </div>
               <div class="bg-slate-950 border border-slate-800 rounded-lg px-1.5 py-1 flex-1">
                 <span class="cd-secs text-amber-500 font-extrabold text-sm leading-none block">--</span>
                 <span class="text-[9px] text-slate-500">Detik</span>
               </div>
             </div>
           </div>`
        : "";

    const card = document.createElement("div");
    card.className =
      "card-glow bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group cursor-pointer flex flex-col justify-between";
    card.setAttribute("data-id", movie.id);

    card.innerHTML = `
      <div class="relative overflow-hidden aspect-[2/3] bg-slate-950">
        <img src="${movie.poster}" alt="${movie.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=60'">
        <div class="absolute top-3 right-3 ${ratingBg} px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">${movie.rating}</div>
        <div class="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-xs text-slate-300 font-medium">${movie.studio}</div>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div class="p-4 flex flex-col justify-between flex-grow">
        <div>
          <span class="text-xs text-slate-400 font-medium uppercase tracking-wider">${movie.genre}</span>
          <h3 class="font-bold text-lg text-white group-hover:text-amber-500 transition-colors leading-tight mt-1 line-clamp-2">${movie.title}</h3>
        </div>
        <div class="mt-3">
          <div class="flex items-center justify-between pt-3 border-t border-slate-800">
            <span class="text-xs text-slate-400">${movie.duration} Menit</span>
            ${starsHtml}
          </div>
          ${countdownHtml}
        </div>
      </div>
    `;

    card.addEventListener("click", () => openBookingModal(movie));
    movieGrid.appendChild(card);
  });

  // Start countdown tick if upcoming
  if (filterType === "upcoming") {
    tickCountdowns();
  }
}

// Overwrite renderMovies globally
window.renderMovies = renderMoviesWithCountdown;

// Tick function to update all countdowns in DOM
let countdownInterval = null;
function tickCountdowns() {
  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    document.querySelectorAll(".countdown-block").forEach((block) => {
      const movieId = parseInt(block.getAttribute("data-movie-id"));
      const releaseDate = upcomingReleaseDates[movieId];
      if (!releaseDate) return;

      const cd = formatCountdown(releaseDate);
      block.querySelector(".cd-days").textContent = cd.d;
      block.querySelector(".cd-hours").textContent = cd.h;
      block.querySelector(".cd-mins").textContent = cd.m;
      block.querySelector(".cd-secs").textContent = cd.s;
    });
  }, 1000);
}


// Tick countdowns automatically removed from tab listeners above (already handled).

