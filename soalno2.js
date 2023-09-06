/**

Soal Latihan: Penentuan Biaya Parkir

Sebuah mal memiliki aturan biaya parkir sebagai berikut:

1. Jika parkir kurang dari atau sama dengan 1 jam, maka biaya parkirnya adalah Rp10.000.
2. Untuk setiap jam berikutnya (lebih dari 1 jam), biaya tambahan adalah Rp5.000/jam.
3. Jika parkir lebih dari 5 jam, akan diberikan diskon Rp10.000 dari total biaya.
4. Parkir di hari Minggu dikenakan biaya tambahan Rp5.000.
5. Jika total biaya parkir lebih dari Rp30.000 dan parkir dilakukan pada hari libur nasional, maka akan diberikan diskon tambahan sebesar Rp7.000.

Buatlah fungsi hitungBiayaParkir(lamaParkir, hari, liburNasional) yang menerima parameter:
1. lamaParkir (number): Durasi parkir dalam jam.
2. hari (string): Nama hari (Senin, Selasa, ..., Minggu).
3. liburNasional (boolean): Menandakan apakah hari itu merupakan libur nasional atau tidak (true jika ya, false jika tidak).

Fungsi ini harus mengembalikan biaya parkir berdasarkan kondisi yang diberikan.

*/

console.log("============ Soal Dua ============");

function hitungBiayaParkir(lamaParkir, hari, liburNasional) {
    
    let biayaParkir = 10000;

    if (typeof lamaParkir !== "number" && hari !== "string" && liburNasional !== "boolean"){
        return "input salah";
    }
    // Biaya tambahan untuk setiap jam berikutnya (lebih dari 1 jam)
    if (lamaParkir <= 1) {
        return biayaParkir
    }
        else {
        biayaParkir += (lamaParkir - 1) * 5000;
    }
    // Diskon jika parkir lebih dari 5 jam
    if (lamaParkir > 5) {
        biayaParkir -= 10000;
        }
    // Biaya tambahan untuk parkir di hari Minggu
    if (hari.toLowerCase() === "minggu") {
      biayaParkir += 5000;
    }
    // Diskon tambahan jika total biaya parkir lebih dari Rp30.000 dan hari libur nasional
    if (biayaParkir > 30000 && liburNasional) {
      biayaParkir -= 7000;
    }
    return biayaParkir;
  }
console.log(hitungBiayaParkir(2, 'Sabtu', false));
console.log(hitungBiayaParkir(6, 'Minggu', true));