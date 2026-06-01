// Struktur: { id, nama, kota: [{ id, nama, kecamatan: [{ id, nama, kelurahan: [string] }] }] }
// Gratis ongkir: DKI Jakarta & Bandung (Kota Bandung)
// TODO: Lengkapi dengan dataset wilayah Indonesia resmi (BPS/Kemendagri)

const wilayah = [
  {
    id: "11",
    nama: "DKI JAKARTA",
    gratisOngkir: true,
    kota: [
      {
        id: "11.01",
        nama: "KOTA JAKARTA PUSAT",
        kecamatan: [
          { id: "11.01.01", nama: "GAMBIR", kelurahan: ["Gambir", "Cideng", "Petojo Utara", "Petojo Selatan", "Kebon Kelapa", "Duri Pulo"] },
          { id: "11.01.02", nama: "SAWAH BESAR", kelurahan: ["Pasar Baru", "Karang Anyar", "Kartini", "Gunung Sahari Utara", "Mangga Dua Selatan"] },
          { id: "11.01.03", nama: "KEMAYORAN", kelurahan: ["Kemayoran", "Kebon Kosong", "Harapan Mulya", "Utan Panjang", "Serdang", "Gunung Sahari Selatan", "Cempaka Baru", "Sumur Batu"] },
          { id: "11.01.04", nama: "SENEN", kelurahan: ["Senen", "Kenari", "Paseban", "Kramat", "Kwitang", "Bungur"] },
          { id: "11.01.05", nama: "CEMPAKA PUTIH", kelurahan: ["Cempaka Putih Timur", "Cempaka Putih Barat", "Rawasari"] },
          { id: "11.01.06", nama: "MENTENG", kelurahan: ["Menteng", "Pegangsaan", "Cikini", "Gondangdia", "Kebon Sirih"] },
          { id: "11.01.07", nama: "TANAH ABANG", kelurahan: ["Tanah Abang", "Karet Tengsin", "Kebon Melati", "Kebon Kacang", "Kampung Bali", "Petamburan", "Gelora"] },
          { id: "11.01.08", nama: "JOHAR BARU", kelurahan: ["Johar Baru", "Kampung Rawa", "Galur", "Tanah Tinggi"] },
        ],
      },
      {
        id: "11.02",
        nama: "KOTA JAKARTA UTARA",
        kecamatan: [
          { id: "11.02.01", nama: "PENJARINGAN", kelurahan: ["Penjaringan", "Pluit", "Kamal Muara", "Kapuk Muara", "Pejagalan"] },
          { id: "11.02.02", nama: "PADEMANGAN", kelurahan: ["Pademangan Barat", "Pademangan Timur", "Ancol"] },
          { id: "11.02.03", nama: "TANJUNG PRIOK", kelurahan: ["Tanjung Priok", "Sunter Agung", "Sunter Jaya", "Papanggo", "Warakas", "Kebon Bawang"] },
          { id: "11.02.04", nama: "KOJA", kelurahan: ["Koja", "Tugu Selatan", "Tugu Utara", "Lagoa", "Rawa Badak Selatan", "Rawa Badak Utara"] },
          { id: "11.02.05", nama: "CILINCING", kelurahan: ["Cilincing", "Semper Timur", "Semper Barat", "Rorotan", "Marunda", "Kali Baru"] },
          { id: "11.02.06", nama: "KELAPA GADING", kelurahan: ["Kelapa Gading Timur", "Kelapa Gading Barat", "Pegangsaan Dua"] },
        ],
      },
      {
        id: "11.03",
        nama: "KOTA JAKARTA BARAT",
        kecamatan: [
          { id: "11.03.01", nama: "CENGKARENG", kelurahan: ["Cengkareng Timur", "Cengkareng Barat", "Kapuk", "Duri Kosambi", "Rawa Buaya", "Kedaung Kali Angke"] },
          { id: "11.03.02", nama: "GROGOL PETAMBURAN", kelurahan: ["Grogol", "Tomang", "Jelambar", "Jelambar Baru", "Tanjung Duren Utara", "Tanjung Duren Selatan", "Wijaya Kusuma"] },
          { id: "11.03.03", nama: "TAMBORA", kelurahan: ["Tambora", "Roa Malaka", "Angke", "Kali Anyar", "Duri Selatan", "Duri Utara", "Jembatan Besi", "Jembatan Lima", "Pekojan", "Tangki", "Krendang"] },
          { id: "11.03.04", nama: "PALMERAH", kelurahan: ["Palmerah", "Kota Bambu Utara", "Kota Bambu Selatan", "Jati Pulo", "Kemanggisan", "Slipi"] },
          { id: "11.03.05", nama: "KEBON JERUK", kelurahan: ["Kebon Jeruk", "Sukabumi Utara", "Sukabumi Selatan", "Kelapa Dua", "Duri Kepa", "Kedoya Utara", "Kedoya Selatan"] },
          { id: "11.03.06", nama: "KEMBANGAN", kelurahan: ["Kembangan Utara", "Kembangan Selatan", "Joglo", "Srengseng", "Meruya Utara", "Meruya Selatan"] },
          { id: "11.03.07", nama: "KALIDERES", kelurahan: ["Kalideres", "Semanan", "Pegadungan", "Tegal Alur", "Kamal"] },
          { id: "11.03.08", nama: "PESANGGRAHAN", kelurahan: ["Pesanggrahan", "Bintaro", "Ulujami", "Petukangan Utara", "Petukangan Selatan"] },
        ],
      },
      {
        id: "11.04",
        nama: "KOTA JAKARTA SELATAN",
        kecamatan: [
          { id: "11.04.01", nama: "TEBET", kelurahan: ["Tebet Barat", "Tebet Timur", "Kebon Baru", "Bukit Duri", "Menteng Dalam", "Manggarai", "Manggarai Selatan"] },
          { id: "11.04.02", nama: "SETIABUDI", kelurahan: ["Setiabudi", "Karet", "Karet Semanggi", "Karet Kuningan", "Kuningan Timur", "Menteng Atas", "Pasar Manggis", "Guntur"] },
          { id: "11.04.03", nama: "MAMPANG PRAPATAN", kelurahan: ["Mampang Prapatan", "Bangka", "Pela Mampang", "Tegal Parang", "Kuningan Barat"] },
          { id: "11.04.04", nama: "PANCORAN", kelurahan: ["Pancoran", "Kalibata", "Rawajati", "Duren Tiga", "Pengadegan", "Cikoko"] },
          { id: "11.04.05", nama: "KEBAYORAN LAMA", kelurahan: ["Kebayoran Lama Utara", "Kebayoran Lama Selatan", "Grogol Selatan", "Grogol Utara", "Cipulir", "Pondok Pinang"] },
          { id: "11.04.06", nama: "KEBAYORAN BARU", kelurahan: ["Selong", "Rawa Barat", "Senayan", "Kramat Pela", "Gandaria Utara", "Cipete Utara", "Petogogan", "Melawai", "Gunung", "Pulo"] },
          { id: "11.04.07", nama: "JAGAKARSA", kelurahan: ["Jagakarsa", "Srengseng Sawah", "Ciganjur", "Lenteng Agung", "Tanjung Barat", "Cipedak"] },
          { id: "11.04.08", nama: "PASAR MINGGU", kelurahan: ["Pasar Minggu", "Jati Padang", "Cilandak Timur", "Ragunan", "Kebagusan", "Pejaten Barat", "Pejaten Timur"] },
          { id: "11.04.09", nama: "CILANDAK", kelurahan: ["Cilandak Barat", "Lebak Bulus", "Pondok Labu", "Gandaria Selatan", "Cipete Selatan"] },
        ],
      },
      {
        id: "11.05",
        nama: "KOTA JAKARTA TIMUR",
        kecamatan: [
          { id: "11.05.01", nama: "MATRAMAN", kelurahan: ["Matraman", "Kebon Manggis", "Palmeriam", "Utan Kayu Selatan", "Utan Kayu Utara", "Kayu Manis"] },
          { id: "11.05.02", nama: "PULO GADUNG", kelurahan: ["Pulo Gadung", "Pisangan Timur", "Cipinang", "Jatinegara Kaum", "Rawamangun", "Kayu Putih", "Jati"] },
          { id: "11.05.03", nama: "JATINEGARA", kelurahan: ["Bidaracina", "Rawa Bunga", "Kampung Melayu", "Bali Mester", "Cipinang Besar Selatan", "Cipinang Besar Utara", "Cipinang Cempedak", "Cipinang Muara"] },
          { id: "11.05.04", nama: "KRAMAT JATI", kelurahan: ["Kramat Jati", "Cililitan", "Cawang", "Dukuh", "Batu Ampar", "Balekambang"] },
          { id: "11.05.05", nama: "DUREN SAWIT", kelurahan: ["Duren Sawit", "Pondok Bambu", "Pondok Kelapa", "Malaka Sari", "Malaka Jaya", "Klender"] },
          { id: "11.05.06", nama: "CAKUNG", kelurahan: ["Cakung Timur", "Cakung Barat", "Jatinegara", "Penggilingan", "Rawa Terate", "Pulogebang"] },
          { id: "11.05.07", nama: "PASAR REBO", kelurahan: ["Pasar Rebo", "Cijantung", "Kalisari", "Baru", "Gedong"] },
          { id: "11.05.08", nama: "CIRACAS", kelurahan: ["Ciracas", "Kelapa Dua Wetan", "Rambutan", "Susukan", "Cibubur"] },
          { id: "11.05.09", nama: "CIPAYUNG", kelurahan: ["Cipayung", "Cilangkap", "Munjul", "Pondok Ranggon", "Bambu Apus", "Ceger", "Setu", "Lubang Buaya"] },
        ],
      },
    ],
  },
  {
    id: "32",
    nama: "JAWA BARAT",
    gratisOngkir: false,
    kota: [
      {
        id: "32.73",
        nama: "KOTA BANDUNG",
        gratisOngkir: true,
        kecamatan: [
          { id: "32.73.01", nama: "ANDIR", kelurahan: ["Campaka", "Garuda", "Dunguscariang", "Ciroyom", "Kebon Jeruk", "Maleber"] },
          { id: "32.73.02", nama: "ASTANAANYAR", kelurahan: ["Karasak", "Panjunan", "Cibadak", "Pelindung Hewan", "Nyengseret", "Balonggede"] },
          { id: "32.73.03", nama: "BABAKAN CIPARAY", kelurahan: ["Babakan", "Babakan Ciparay", "Babakan Tarogong", "Margahayu Utara", "Cigondewah Kaler", "Sukahaji"] },
          { id: "32.73.04", nama: "BANDUNG KIDUL", kelurahan: ["Batununggal", "Kujangsari", "Mengger", "Wates"] },
          { id: "32.73.05", nama: "BANDUNG KULON", kelurahan: ["Caringin", "Cigondewah Hilir", "Cigondewah Rahayu", "Cijerah", "Cibuntu", "Warungmuncang"] },
          { id: "32.73.06", nama: "BANDUNG WETAN", kelurahan: ["Tamansari", "Citarum", "Cihapit", "Neglasari"] },
          { id: "32.73.07", nama: "BATUNUNGGAL", kelurahan: ["Cibangkong", "Gumuruh", "Maleer", "Binong", "Kebon Gedang", "Kebonwaru"] },
          { id: "32.73.08", nama: "BOJONGLOA KALER", kelurahan: ["Bojongloa", "Suka Asih", "Jamika", "Babakan Asih", "Kopo"] },
          { id: "32.73.09", nama: "BOJONGLOA KIDUL", kelurahan: ["Cibaduyut", "Cibaduyut Kidul", "Cibaduyut Wetan", "Kebon Lega", "Malabar", "Situsaeur"] },
          { id: "32.73.10", nama: "BUAHBATU", kelurahan: ["Margasari", "Sekejati", "Cijawura", "Jatisari"] },
          { id: "32.73.11", nama: "CIBEUNYING KALER", kelurahan: ["Cigadung", "Cihaurgeulis", "Neglasari", "Sukaluyu"] },
          { id: "32.73.12", nama: "CIBEUNYING KIDUL", kelurahan: ["Padasuka", "Cicadas", "Sukapada", "Cikutra"] },
          { id: "32.73.13", nama: "CIBIRU", kelurahan: ["Cibiru Wetan", "Palasari", "Pasir Biru", "Cipadung"] },
          { id: "32.73.14", nama: "CICENDO", kelurahan: ["Husen Sastranegara", "Arjuna", "Pajajaran", "Pamoyanan", "Pasirkaliki", "Sukaraja"] },
          { id: "32.73.15", nama: "CIDADAP", kelurahan: ["Hegarmanah", "Ciumbuleuit", "Ledeng"] },
          { id: "32.73.16", nama: "COBLONG", kelurahan: ["Lebakgede", "Lebaksiliwangi", "Cipaganti", "Sadangserang", "Dago", "Sekeloa"] },
          { id: "32.73.17", nama: "GEDEBAGE", kelurahan: ["Rancanumpang", "Rancabolang", "Cisaranten Kidul", "Cimincrang"] },
          { id: "32.73.18", nama: "KIARACONDONG", kelurahan: ["Babakan Sari", "Kebonwaru", "Kebon Jayanti", "Sukapura", "Cicaheum", "Babakan Surabaya"] },
          { id: "32.73.19", nama: "LENGKONG", kelurahan: ["Cijagra", "Cikawao", "Lingkar Selatan", "Malabar", "Turangga", "Burangrang"] },
          { id: "32.73.20", nama: "MANDALAJATI", kelurahan: ["Jatihandap", "Karang Pamulang", "Sindangjaya", "Pasirimpun"] },
          { id: "32.73.21", nama: "PANYILEUKAN", kelurahan: ["Cipadung Kidul", "Cipadung Kulon", "Cipadung Wetan", "Mekar Mulya"] },
          { id: "32.73.22", nama: "RANCASARI", kelurahan: ["Cipamokolan", "Derwati", "Manjahlega", "Mekarjaya"] },
          { id: "32.73.23", nama: "REGOL", kelurahan: ["Ancol", "Balonggede", "Cigereleng", "Ciateul", "Pasirluyu", "Balong Gede"] },
          { id: "32.73.24", nama: "SUKAJADI", kelurahan: ["Sukajadi", "Sukagalih", "Cipedes", "Pasteur", "Sariwangi"] },
          { id: "32.73.25", nama: "SUKASARI", kelurahan: ["Gegerkalong", "Sarijadi", "Sukarasa", "Isola"] },
          { id: "32.73.26", nama: "SUMUR BANDUNG", kelurahan: ["Braga", "Kebon Pisang", "Merdeka", "Babakan Ciamis"] },
          { id: "32.73.27", nama: "UJUNGBERUNG", kelurahan: ["Pasanggrahan", "Cigending", "Pasirwangi", "Bahatan", "Lio Baru"] },
        ],
      },
      {
        id: "32.74",
        nama: "KOTA BEKASI",
        kecamatan: [
          { id: "32.74.01", nama: "BEKASI BARAT", kelurahan: ["Bintara", "Bintara Jaya", "Kranji", "Kotabaru", "Jakasampurna"] },
          { id: "32.74.02", nama: "BEKASI TIMUR", kelurahan: ["Aren Jaya", "Bekasi Jaya", "Duren Jaya", "Margahayu"] },
          { id: "32.74.03", nama: "BEKASI SELATAN", kelurahan: ["Pekayon Jaya", "Kayuringin Jaya", "Jakasetia", "Marga Jaya", "Jaka Mulya"] },
          { id: "32.74.04", nama: "BEKASI UTARA", kelurahan: ["Harapan Jaya", "Harapan Baru", "Perwira", "Marga Mulya", "Teluk Pucung", "Kaliabang Tengah"] },
        ],
      },
      {
        id: "32.75",
        nama: "KOTA DEPOK",
        kecamatan: [
          { id: "32.75.01", nama: "BEJI", kelurahan: ["Beji", "Beji Timur", "Kemiri Muka", "Pondok Cina", "Kukusan", "Tanah Baru"] },
          { id: "32.75.02", nama: "CIMANGGIS", kelurahan: ["Cisalak", "Curug", "Harjamukti", "Mekarsari", "Pabuaran", "Tugu"] },
          { id: "32.75.03", nama: "SUKMAJAYA", kelurahan: ["Abadijaya", "Baktijaya", "Mekarjaya", "Sukmajaya", "Sukamaju", "Tirtajaya"] },
        ],
      },
      {
        id: "32.76",
        nama: "KOTA BOGOR",
        kecamatan: [
          { id: "32.76.01", nama: "BOGOR BARAT", kelurahan: ["Menteng", "Sindangbarang", "Cilendek Barat", "Cilendek Timur", "Pasir Mulya", "Pasir Jaya", "Semplak", "Curug Mekar", "Curug", "Loji", "Bubulak", "Bojong Rangkong"] },
          { id: "32.76.02", nama: "BOGOR TENGAH", kelurahan: ["Paledang", "Pabaton", "Tegalega", "Cibogor", "Kebon Kelapa", "Sempur", "Babakan", "Ciwaringin", "Gudang", "Parung Banteng"] },
          { id: "32.76.03", nama: "BOGOR TIMUR", kelurahan: ["Sindangsari", "Katulampa", "Tajur", "Baranangsiang", "Sukasari", "Baranang Siang"] },
        ],
      },
    ],
  },
  {
    id: "33",
    nama: "JAWA TENGAH",
    gratisOngkir: false,
    kota: [
      {
        id: "33.74",
        nama: "KOTA SEMARANG",
        kecamatan: [
          { id: "33.74.01", nama: "BANYUMANIK", kelurahan: ["Banyumanik", "Gedawang", "Jabungan", "Padangsari", "Pedalangan", "Pudakpayung", "Srondol Kulon", "Srondol Wetan", "Sumurboto", "Tinjomoyo"] },
          { id: "33.74.02", nama: "GAJAHMUNGKUR", kelurahan: ["Bendan Dhuwur", "Bendan Ngisor", "Gajahmungkur", "Karangrejo", "Lempongsari", "Petompon", "Sampangan", "Bendungan"] },
          { id: "33.74.03", nama: "SEMARANG TENGAH", kelurahan: ["Bangunharjo", "Brumbungan", "Gabahan", "Jagalan", "Karangkidul", "Kembangsari", "Kranggan", "Miroto", "Pandansari", "Pekunden", "Pendrikan Kidul", "Pendrikan Lor", "Purwodinatan", "Sekayu"] },
        ],
      },
      {
        id: "33.72",
        nama: "KOTA SURAKARTA",
        kecamatan: [
          { id: "33.72.01", nama: "BANJARSARI", kelurahan: ["Banyuanyar", "Banjarsari", "Kadipiro", "Kestalan", "Keprabon", "Manahan", "Mangkubumen", "Nusukan", "Punggawan", "Setabelan", "Sumber", "Timuran"] },
          { id: "33.72.02", nama: "JEBRES", kelurahan: ["Gandekan", "Jagalan", "Jebres", "Kepatihan Kulon", "Kepatihan Wetan", "Mojosongo", "Purwodiningratan", "Sewu", "Sudiroprajan", "Tegalharjo"] },
        ],
      },
    ],
  },
  {
    id: "34",
    nama: "DI YOGYAKARTA",
    gratisOngkir: false,
    kota: [
      {
        id: "34.71",
        nama: "KOTA YOGYAKARTA",
        kecamatan: [
          { id: "34.71.01", nama: "DANUREJAN", kelurahan: ["Bausasran", "Tegalpanggung", "Suryatmajan"] },
          { id: "34.71.02", nama: "GONDOKUSUMAN", kelurahan: ["Baciro", "Demangan", "Klitren", "Kotabaru", "Terban"] },
          { id: "34.71.03", nama: "GONDOMANAN", kelurahan: ["Ngupasan", "Prawirodirjan"] },
          { id: "34.71.04", nama: "JETIS", kelurahan: ["Bumijo", "Cokrodiningratan", "Gowongan"] },
          { id: "34.71.05", nama: "KOTAGEDE", kelurahan: ["Jagalan", "Purbayan", "Rejowinangun"] },
          { id: "34.71.06", nama: "KRATON", kelurahan: ["Patehan", "Panembahan", "Kadipaten"] },
        ],
      },
    ],
  },
  {
    id: "35",
    nama: "JAWA TIMUR",
    gratisOngkir: false,
    kota: [
      {
        id: "35.78",
        nama: "KOTA SURABAYA",
        kecamatan: [
          { id: "35.78.01", nama: "BUBUTAN", kelurahan: ["Alun-alun Contong", "Bubutan", "Gundih", "Jepara", "Tembok Dukuh"] },
          { id: "35.78.02", nama: "GENTENG", kelurahan: ["Embong Kaliasin", "Genteng", "Kapasari", "Ketabang", "Peneleh"] },
          { id: "35.78.03", nama: "GUBENG", kelurahan: ["Airlangga", "Baratajaya", "Gubeng", "Kertajaya", "Mojo", "Pucangsewu"] },
          { id: "35.78.04", nama: "SUKOLILO", kelurahan: ["Gebang Putih", "Keputih", "Klampis Ngasem", "Medokan Semampir", "Menur Pumpungan", "Nginden Jangkungan", "Semolowaru"] },
          { id: "35.78.05", nama: "WONOKROMO", kelurahan: ["Darmo", "Jagir", "Ngagel", "Ngagel Rejo", "Sawunggaling", "Wonokromo"] },
        ],
      },
      {
        id: "35.79",
        nama: "KOTA MALANG",
        kecamatan: [
          { id: "35.79.01", nama: "BLIMBING", kelurahan: ["Arjosari", "Balearjosari", "Blimbing", "Kesatrian", "Pandanwangi", "Polehan", "Purwantoro", "Snggung", "Tongkang", "Wonokoyo"] },
          { id: "35.79.02", nama: "KLOJEN", kelurahan: ["Bareng", "Gadingkasri", "Kasin", "Kauman", "Klojen", "Oro-oro Dowo", "Penanggungan", "Rampalcelaket", "Samaan", "Sukoharjo"] },
        ],
      },
    ],
  },
  {
    id: "36",
    nama: "BANTEN",
    gratisOngkir: false,
    kota: [
      {
        id: "36.71",
        nama: "KOTA TANGERANG",
        kecamatan: [
          { id: "36.71.01", nama: "BATUCEPER", kelurahan: ["Batuceper", "Batujaya", "Batusari", "Kebon Besar", "Poris Gaga", "Poris Gaga Baru"] },
          { id: "36.71.02", nama: "CILEDUG", kelurahan: ["Parung Serab", "Sudimara Barat", "Sudimara Jaya", "Sudimara Selatan", "Sudimara Timur", "Tajur"] },
          { id: "36.71.03", nama: "TANGERANG", kelurahan: ["Babakan", "Buaran Indah", "Cikokol", "Kelapa Indah", "Sukasari", "Tanah Tinggi", "Tangerang"] },
        ],
      },
      {
        id: "36.74",
        nama: "KOTA TANGERANG SELATAN",
        kecamatan: [
          { id: "36.74.01", nama: "CIPUTAT", kelurahan: ["Ciputat", "Cipayung", "Jombang", "Sawah", "Serua"] },
          { id: "36.74.02", nama: "PAMULANG", kelurahan: ["Bambu Apus", "Benda Baru", "Pamulang Barat", "Pamulang Timur", "Pondok Benda", "Pondok Cabe Ilir", "Pondok Cabe Udik"] },
          { id: "36.74.03", nama: "SERPONG", kelurahan: ["BSD", "Buaran", "Cilenggang", "Lengkong Gudang", "Lengkong Gudang Timur", "Lengkong Wetan", "Rawabuntu", "Rawa Mekar Jaya", "Serpong"] },
        ],
      },
    ],
  },
  {
    id: "31",
    nama: "KEPULAUAN RIAU",
    gratisOngkir: false,
    kota: [
      {
        id: "31.71",
        nama: "KOTA BATAM",
        kecamatan: [
          { id: "31.71.01", nama: "BATAM KOTA", kelurahan: ["Baloi Indah", "Belian", "Sagulung", "Sukajadi", "Teluk Tering"] },
          { id: "31.71.02", nama: "NONGSA", kelurahan: ["Batu Besar", "Kabil", "Ngenang", "Nongsa"] },
        ],
      },
    ],
  },
];

export default wilayah;

export const gratisOngkirIds = ["11", "32.73"];
