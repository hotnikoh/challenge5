/**
Soal Latihan: Penjadwalan Acara Festival

Sebuah kota sedang mempersiapkan festival tahunan mereka. 
Mereka ingin membuat sistem otomatis untuk menentukan acara yang akan dijalankan berdasarkan berbagai kondisi. 
Anda diminta untuk membantu membangun fungsi penjadwalan ini.
 
Kriteria Penjadwalan:
1. Jika hari itu hujan dan anginnya kencang (angin > 20 km/jam), maka semua acara di luar ruangan akan dibatalkan.
2. Jika hujan tapi anginnya tidak terlalu kencang, acara di luar ruangan akan dipindahkan ke dalam ruangan.
3. Jika suhu di bawah 5°C, acara konser malam harus diganti dengan acara indoor.
4. Jika hari cerah dan suhu di atas 25°C, tambahkan acara "Pesta Es Krim" di siang hari.
5. Jika hari Minggu dan cerah, tambahkan acara "Maraton Senja".
6. Setiap hari, tanpa memandang kondisi cuaca, akan selalu ada "Pameran Seni" di dalam ruangan.

Tugas Anda adalah untuk membuat fungsi jadwalFestival(hari, cuaca, suhu, angin) yang menerima parameter:
1. hari (string): Nama hari (Senin, Selasa, ..., Minggu).
2. cuaca (string): 'Hujan' atau 'Cerah'.
3. suhu (number): Suhu hari itu dalam °C.
4. angin (number): Kecepatan angin dalam km/jam.

Fungsi ini harus mengembalikan sebuah string yang berisi daftar acara yang akan diadakan berdasarkan kondisi yang diberikan.
*/

console.log("============ Soal Tiga ============");

function jadwalFestival(hari, cuaca, suhu, angin) {
  let acara = "Pameran seni, ";

  if (typeof hari !== "string" && cuaca !== "string" && suhu !== "number" && angin !== "number"){
  return "input salah";
  }

  if (cuaca === "Hujan" && angin > 20) {
    return acara + "Acara di luar ruangan dibatalkan, ";
    } else if (cuaca === "Hujan" && angin < 20) {
      return acara + "Acara di luar menjadi indoor, ";
    } else if (suhu < 5) {
      return acara + "Acara dalam ruangan"
    } else if (cuaca === "Cerah" && suhu > 25) {
      return acara + ("Pesta Es Krim, ");
    } else if (hari === "Minggu" && cuaca === "Cerah") {
      return acara + "Maraton Senja";
  }

}

console.log(jadwalFestival('Sabtu', 'Hujan', 23, 30));
// Output: Daftar Acara: Pameran Seni.
console.log(jadwalFestival('Sabtu', 'Hujan', 23, 10));
// Output: Daftar Acara: Pameran Seni, Acara Dalam Ruangan.
console.log(jadwalFestival('Minggu', 'Cerah', 27, 8));
// Output: Daftar Acara: Pameran Seni, Pesta Es Krim, Maraton Senja.