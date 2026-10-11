/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "121092";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "ibu sayang❤️";      // ← GANTI NAMA

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title: "Kekal",
    artist: "Nadin Amizah",
    src: "assets/music/song1.mp3",
    cover: "assets/music/song1.jpeg",
    startTime: 0,
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "Ibu, senyummu adalah alasan hari-hari terasa lebih indah." },
  { file: "img2.jpeg", caption: "Kehadiran Ibu adalah rumah paling tenang dalam hidupku." },
  { file: "img3.jpeg", caption: "Semua momen bersama Ibu selalu jadi kenangan paling berharga." },
  { file: "img4.jpeg", caption: "Tak ada yang lebih menenangkan daripada melihat Ibu bahagia." },
  { file: "img5.jpeg", caption: "Ibu selalu jadi sumber kekuatan dan kebahagiaan dalam setiap langkah." },
  { file: "img6.jpeg", caption: "Setiap hari bersama Ibu terasa istimewa, bahkan di saat paling sederhana." },
  { file: "img7.jpeg", caption: "Ibu tetap menjadi sosok yang paling aku kagumi dan sayangi." },
  { file: "img8.jpeg", caption: "Selalu dan selamanya, Ibu adalah orang yang paling istimewa di hati." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
  "Selamat ulang tahun untuk wanita yang pantas mendapatkan dunia dan lebih dari itu, Ibu sayang❤️. Ibu, terima kasih atas semua yang Ibu lakukan, baik yang tampak maupun yang tidak terlihat. Semuanya tidak pernah luput dari perhatian, dan semua perjuangan Ibu selalu menjadi bentuk cinta yang begitu besar.",
  "Kasih sayang Ibu, kekuatan Ibu, dan pengorbanan Ibu adalah bagian yang paling berharga dalam hidupku. Ibu adalah tempat paling aman bagiku, dan juga sosok yang paling aku kagumi. Hari ini, aku ingin Ibu tahu betapa besar rasa sayang, penghargaan, dan kebanggaanku atas Ibu.",
  "Ibu, semoga hari ini mengingatkan Ibu betapa Ibu sangat dicintai, dihormati, dan sangat istimewa. Ibu pantas menerima yang terbaik, yang paling hangat, dan yang paling indah dalam hidup ini. Terima kasih karena selalu menjadi ibu yang luar biasa, serta menjadi panutan dan tempat pulang yang paling nyaman.",
  "Aku berharap Ibu selalu tahu bahwa Ibu tidak pernah sendiri, dan Ibu tidak pernah kurang dihargai. Aku sayang Ibu selalu, ibuuuu🤍🫶🏻. Semoga hari ini membawa kebahagiaan, kedamaian, dan banyak momen indah yang akan selalu Ibu ingat."
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year: "Bab Satu",
    title: "Awal yang penuh cinta",
    text: "Dari momen kecil hingga hari-hari yang terasa lebih hangat karena Ibu selalu hadir dengan kasih yang tulus.",
  },
  {
    depth: "8m",
    year: "Bab Dua",
    title: "Hari-hari yang tenang",
    text: "Banyak momen sederhana yang ternyata menjadi kenangan paling indah, karena Ibu selalu membuat segalanya terasa aman dan damai.",
  },
  {
    depth: "16m",
    year: "Bab Tiga",
    title: "Melewati masa sulit",
    text: "Bahkan di saat sulit, Ibu tetap menjadi kekuatan besar yang menenangkan hati dan mengajarkan arti keteguhan.",
  },
  {
    depth: "24m",
    year: "Bab Empat",
    title: "Cahaya di perjalanan",
    text: "Ibu adalah sosok yang selalu menyalakan kembali semangat, membuat setiap hari terasa lebih ringan dan lebih berarti.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave", text: "Semoga tahun ini membawa kedamaian seperti ombak yang tenang, serta hati Ibu yang selalu penuh kasih dan kebahagiaan." },
  { icon: "shell", text: "Semoga setiap harinya tetap cerah, hangat, dan dipenuhi banyak kebahagiaan yang sederhana namun membuat Ibu tersenyum." },
  { icon: "star", text: "Semoga semua doa dan harapan Ibu perlahan terwujud, di saat yang paling tepat dan paling indah." },
  { icon: "compass", text: "Semoga Ibu selalu menemukan jalan menuju kebahagiaan, kesehatan, dan kedamaian yang sepadan dengan kebaikan Ibu." },
  { icon: "anchor", text: "Semoga Ibu tetap kuat, tetap tenang, dan selalu menjadi diri yang penuh kasih seperti saat ini." },
  { icon: "heart", text: "Selamat ulang tahun, Ibu sayang. Semoga hari-hari ke depan penuh dengan cinta, senyum, dan kenangan indah yang selalu dikenang." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
  const WHATSAPP_NUMBER = "6281234567890";
  const WHATSAPP_MESSAGE = "Halo Ibu sayang, terima kasih sudah menjadi sumber kebahagiaan dan kekuatan dalam hidupku. Selamat ulang tahun! ❤️";

  window.OCEAN_SETTINGS = {
    recipientName: String(RECIPIENT_NAME),
    galleryPhotos: GALLERY_PHOTOS,
    musicTracks: MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories: MEMORIES,
    wishes: WISHES,
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappMessage: WHATSAPP_MESSAGE
  };
})(window);