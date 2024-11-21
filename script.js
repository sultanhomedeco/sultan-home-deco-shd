document.addEventListener('DOMContentLoaded', function() {
  // Data Produk (Contoh)
  const products = {
      mejamakan: [
          {
              id: 1,
              name: "Meja Makan Minimalis Kursi A",
              price: "Rp 8.500.000",
              image: "mejamakan/mejamakan1.jpg",
              description: "Dapatkan kenyamanan dan keindahan dalam satu paket. Set meja makan jati ini terbuat dari kayu jati pilihan, terkenal dengan kekuatan dan daya tahannya. Dilengkapi dengan 4 kursi desain ergonomis dan 1 bench panjang dengan sandaran, memberikan ruang duduk yang nyaman untuk keluarga Anda. Finishing natural atau warna custom menambah kesan hangat dan elegan pada ruang makan Anda."
          },
          {
            id: 2,
            name: "Meja Makan Suar Kursi Rotan",
            price: "Rp 7.900.000",
            image: "mejamakan/mejamakan2.jpg",
            description: "Meja makan trembesi dengan kursi rotan, perpaduan sempurna antara kekuatan kayu dan keindahan anyaman. Tampilan natural yang akan membuat ruang makan Anda terasa lebih hidup."
        },
        {
            id: 3,
            name: "Meja Makan Trambesi Minimalis K6",
            price: "Rp 9.850.000",
            image: "mejamakan/mejamakan3.jpeg",
            description: "Nikmati keanggunan ruang makan Anda dengan set meja makan trembesi yang unik. Kombinasi kayu trembesi solid, kursi jati minimalis, dan kaki besi hollow menciptakan tampilan modern yang tahan lama. Sempurna untuk keluarga modern yang menghargai desain estetik dan kualitas."
        },
        {
            id: 4,
            name: "Meja Makan Trambesi Hisohima Chair",
            price: "Rp 10.500.000",
            image: "mejamakan/mejamakan4.jpg",
            description: "Nikmati kehangatan dan kemewahan ruang makan Anda dengan meja makan trembesi solid. Desain minimalis dengan tepi natural memberikan kesan modern dan elegan. Cocok untuk Anda yang menginginkan perabot rumah tangga dengan kualitas terbaik."
        },
        {
            id: 5,
            name: "Meja Makan Shena Minimalis Marmer",
            price: "Rp 17.000.000",
            image: "mejamakan/mejamakan5.jpg",
            description: "Dapatkan harga terbaik untuk set meja makan marmer impian Anda! Nikmati kemewahan dan keindahan ruang makan dengan marmer putih yang elegan dan kursi berlapis kain yang nyaman. Jangan lewatkan kesempatan ini!"
        },
        {
            id: 6,
            name: "Meja Makan Teak Wooden Ropan Chair",
            price: "Rp 8.000.000",
            image: "mejamakan/mejamakan6.jpg",
            description: "Nikmati kehangatan dan keindahan alam di ruang makan Anda dengan set meja makan jati yang menawan. Kombinasi kayu jati solid dan anyaman rotan memberikan tampilan natural dan klasik yang tak lekang oleh waktu. Sempurna untuk Anda yang menginginkan perabot rumah tangga dengan kualitas terbaik."
        },
        {
            id: 7,
            name: "Meja Makan Luxury Top Marmer Carara",
            price: "Rp 26.900.000",
            image: "mejamakan/mejamakan7.jpg",
            description: "Nikmati kemewahan dan keindahan ruang makan Anda dengan set meja makan marmer yang elegan. Perpaduan marmer putih yang mewah dengan kursi berlapis kain memberikan kesan modern dan klasik sekaligus. Cocok untuk Anda yang menginginkan perabot rumah tangga dengan kualitas premium"
        },
        {
            id: 8,
            name: "Meja Makan Jati Modern Rustic",
            price: "Rp 10.500.000",
            image: "mejamakan/mejamakan8.jpg",
            description: "Nikmati kehangatan dan keindahan alam di ruang makan Anda dengan set meja makan jati yang menawan. Kombinasi kayu jati solid dan anyaman rotan memberikan tampilan natural dan klasik yang tak lekang oleh waktu. Sempurna untuk Anda yang menginginkan perabot rumah tangga dengan kualitas terbaik."
        },
          // Tambahkan 7 produk stainless lainnya
      ],
      kamarset: [
          {
              id: 1,
              name: "Kamar Set Bleaching",
              price: "Rp 27.500.000",
              image: "kamarset/kamarset1.jpg",
              description: "Kamar set elegan dengan desain klasik yang tak lekang oleh waktu. Set ini menampilkan keindahan kayu alami dengan warna cokelat muda yang hangat, memberikan nuansa nyaman dan bersahaja pada kamar tidur Anda."
          },
          {
            id: 2,
            name: "Kamar Set Antique",
            price: "Rp 17.500.000",
            image: "kamarset/kamarset2.jpg",
            description: "Kamar set ini memiliki desain klasik dengan sentuhan modern. Terbuat dari kayu jati solid dengan warna cokelat tua yang kaya, memberikan kesan hangat dan elegan. Desainnya yang sederhana namun detail, seperti ukiran pada kaki-kaki furnitur, menambah nilai estetika. Set ini terdiri dari tempat tidur berukuran besar dengan headboard yang menawan, dua nakas, satu lemari pakaian dengan banyak laci, dan sebuah bangku penyimpanan. Kamar set ini cocok untuk Anda yang menyukai gaya interior yang timeless dan ingin menciptakan suasana yang tenang dan nyaman di kamar tidur."
        },
        {
            id: 3,
            name: "Kamar Set Jati Classic",
            price: "Rp 17.900.000",
            image: "kamarset/kamarset3.jpg",
            description: "Kamar set ini memiliki desain klasik yang elegan dengan sentuhan modern. Terbuat dari kayu jati solid dengan warna cokelat hangat, memberikan kesan mewah dan nyaman. Desainnya yang detail, seperti ukiran pada headboard dan kaki-kaki furnitur, menambah nilai estetika. Set ini terdiri dari tempat tidur berukuran besar dengan headboard yang tinggi, dua nakas, dan satu lemari pakaian dengan cermin besar. Kamar set ini cocok untuk Anda yang menyukai gaya interior yang timeless dan ingin menciptakan suasana yang mewah dan romantis di kamar tidur."
        },
        {
            id: 4,
            name: "Kamar Set Syailendra",
            price: "Rp 22.500.000",
            image: "kamarset/kamarset4.jpg",
            description: "Kamar set ini memiliki desain klasik yang elegan dengan sentuhan modern. Dominasi warna  duco memberikan kesan bersih dan luas pada ruangan. Detail ukiran pada headboard dan kaki-kaki furnitur menambah kesan mewah dan artistik. Set ini biasanya terdiri dari tempat tidur berukuran besar dengan headboard yang tinggi, dua nakas, dan satu lemari pakaian dengan cermin besar. Kamar set ini cocok untuk Anda yang menyukai gaya interior yang timeless dan ingin menciptakan suasana yang tenang dan mewah di kamar tidur."
        },
        {
            id: 5,
            name: "Kamar Set Brown Duco",
            price: "Rp 25.500.000",
            image: "kamarset/kamarset5.jpg",
            description: "Kamar set ini memiliki desain yang modern dan elegan dengan sentuhan mewah. Dominasi warna emas atau champagne memberikan kesan hangat dan glamor"
        },
        {
            id: 6,
            name: "Kamar Set Duco Semi Abu",
            price: "Rp 26.500.000",
            image: "kamarset/kamarset6.jpg",
            description: "Kamar set ini memiliki desain klasik yang elegan dengan sentuhan modern. Dominasi warna putih memberikan kesan bersih dan luas pada ruangan. Detail ukiran pada headboard dan kaki-kaki furnitur menambah kesan mewah dan artistik. Set ini biasanya terdiri dari tempat tidur berukuran besar dengan headboard yang tinggi, dua nakas, dan satu lemari pakaian dengan cermin besar. Kamar set ini cocok untuk Anda yang menyukai gaya interior yang timeless dan ingin menciptakan suasana yang tenang dan mewah di kamar tidur."
        },
        {
            id: 7,
            name: "Kamar Set Lavora",
            price: "Rp 20.850.000",
            image: "kamarset/kamarset7.jpg",
            description: "Kamar set ini memiliki desain klasik yang elegan dengan sentuhan modern. Dominasi warna putih memberikan kesan bersih, luas, dan cerah pada ruangan."
        },
        {
            id: 8,
            name: "Kamar Set Harmony",
            price: "Rp 25.500.000",
            image: "kamarset/kamarset8.jpg",
            description: "Kamar Set Klasik Elegan ini menghadirkan pesona abadi dengan desain yang terinspirasi dari era Victoria. Dominasi warna putih memberikan kesan bersih, luas, dan elegan. Detail ukiran yang halus pada headboard dan kaki-kaki furnitur menambah sentuhan mewah. Setiap elemen dalam set ini dirancang dengan cermat untuk menciptakan suasana kamar tidur yang tenang dan menenangkan."
        },
        {
            id: 9,
            name: "Kamar Set Elegance",
            price: "Rp 23.250.000",
            image: "kamarset/kamarset9.jpg",
            description: "Kamar Set Elegance memancarkan kemewahan dan keindahan. Desainnya yang modern namun tetap klasik, dipadukan dengan material berkualitas tinggi, menciptakan tampilan yang sangat elegan. Headboard yang bertekstur dan lampu-lampu hias menambah sentuhan kemewahan pada ruangan."
        },
        {
            id: 10,
            name: "Kamar Set Luxury",
            price: "Rp 23.500.000",
            image: "kamarset/kamarset10.jpg",
            description: "Kamar Set Luxury adalah pilihan tepat bagi Anda yang menginginkan kemewahan dalam setiap detailnya. Desainnya yang mewah dan elegan, dipadukan dengan material berkualitas tinggi, menciptakan tampilan yang sangat eksklusif. Headboard yang berlapis kain mewah dan lampu-lampu kristal menambah kesan mewah pada ruangan."
        },
        
      ],
      almari: [
          {
              id: 1,
              name: "Almari Pintu 2 Vintage Sage",
              price: "Rp 10.000.000",
              image: "almari/almari1.jpg",
              description: "Tambahkan sentuhan vintage ke kamar tidur Anda dengan Lemari Pakaian Vintage Hijau Sage. Dibuat dari kayu mahoni solid yang kokoh, lemari ini memiliki dimensi yang lapang (180x100x50 cm) dan dilengkapi dengan fitur-fitur praktis seperti tiga rak yang dapat diatur dan satu batang gantungan pakaian. Desain klasiknya yang elegan dan warna hijau sagenya yang menenangkan akan membuat lemari ini menjadi pusat perhatian di ruangan Anda."
          },
          {
            id: 2,
            name: "Almari Classic Louvored",
            price: "Rp 14.300.000",
            image: "almari/almari2.jpg",
            description: "Hadirkan sentuhan klasik ke kamar tidur Anda dengan Lemari Pakaian Klasik Louvered Putih. Desainnya yang elegan dengan pintu louvered dan jendela kaca memberikan tampilan yang mewah dan timeless. Dilengkapi dengan tiga pintu dan tiga laci, lemari ini menawarkan ruang penyimpanan yang luas untuk semua pakaian dan aksesori Anda. Sempurna untuk menciptakan suasana yang tenang dan menenangkan di kamar tidur."
        },
        {
            id: 3,
            name: "Almari Minimalis Flluted",
            price: "Rp 10.000.000",
            image: "almari/almari3.jpg",
            description: "Hadirkan sentuhan modern ke kamar tidur Anda dengan Lemari Pakaian Flutted Grey dengan Aksen Emas. Desainnya yang minimalis dengan garis-garis vertikal pada pintu memberikan tampilan yang elegan dan kontemporer. Kombinasi warna abu-abu lembut dan aksen emas pada gagang pintu menciptakan kesan yang mewah dan sophisticated. Dilengkapi dengan dua pintu dan satu laci, lemari ini menawarkan ruang penyimpanan yang cukup untuk semua pakaian dan aksesori Anda. Sempurna untuk melengkapi dekorasi ruangan yang modern dan minimalis."
        },
        {
            id: 4,
            name: "Almari Serenity Duco Kaca",
            price: "Rp 17.000.000",
            image: "almari/almari4.jpg",
            description: "Hadirkan keanggunan klasik ke kamar tidur Anda dengan Lemari Pakaian Klasik Cermin Penuh. Desainnya yang timeless dengan pintu panel dan cermin penuh memberikan tampilan yang mewah dan elegan. Dilengkapi dengan lima pintu dan dua laci, lemari ini menawarkan ruang penyimpanan yang luas untuk semua pakaian dan aksesori Anda. Sempurna untuk menciptakan suasana yang tenang dan menenangkan di kamar tidur."
        },
        {
            id: 5,
            name: "Almari Classic Royal Duco",
            price: "Rp 17.700.000",
            image: "almari/almari5.jpg",
            description: "Rasakan kemewahan istana di rumah Anda dengan Lemari Pakaian Royal. Desain klasiknya yang elegan dengan empat pintu panel memberikan tampilan yang mewah dan timeless. Terbuat dari kayu mahoni solid dengan Mdf, lemari ini memiliki kekuatan dan keindahan yang tahan lama. Detail ukiran tangan pada pintu dan kaki lemari menambah kesan mewah. Finishing cat duco putih dengan aksen emas memberikan tampilan yang sempurna. Dilengkapi dengan rak pakaian yang dapat disesuaikan dan laci yang luas, lemari ini menawarkan ruang penyimpanan yang optimal untuk semua pakaian Anda."
        },
        {
            id: 6,
            name: "Almari Ukir Luxury Victoria",
            price: "Rp 23.600.000",
            image: "almari/almari6.jpg",
            description: "Hadirkan kemewahan era Victoria ke kamar tidur Anda dengan Lemari Pakaian Mewah Victoria. Desain klasiknya yang elegan dengan detail pahatan yang rumit memberikan sentuhan mewah pada ruangan. Enam pintu panel yang luas memberikan ruang penyimpanan yang optimal untuk semua pakaian Anda. Sempurna untuk Anda yang menginginkan perabotan berkualitas tinggi dan berkelas."
        },
        {
            id: 7,
            name: "Almari Minimalis Pintu 3",
            price: "Rp 14.000.000",
            image: "almari/almari7.jpg",
            description: "Gabungkan gaya klasik dan modern dengan Lemari Pakaian Marina. Desainnya yang simpel namun elegan dengan warna biru tua yang khas akan memberikan sentuhan segar pada kamar tidur Anda. Terbuat dari kayu solid dengan finishing cat duco berkualitas tinggi, lemari ini sangat kokoh dan tahan lama. Tiga pintu panel yang luas memberikan akses mudah ke semua pakaian Anda. Dilengkapi dengan rak pakaian yang dapat disesuaikan dan laci yang luas, lemari ini menawarkan ruang penyimpanan yang optimal dan fungsional. Sempurna untuk Anda yang menginginkan perabotan yang stylish dan praktis."
        },
        {
            id: 8,
            name: "Almari Display Industrial",
            price: "Rp 25.000.000",
            image: "almari/almari8.jpg",
            description: "Nikmati keindahan desain kontemporer dengan Lemari Pajangan Kayu Modern. Kombinasi kayu alami dan kaca memberikan tampilan yang elegan dan minimalis. Kabinet ini sangat cocok untuk memamerkan koleksi piring, gelas, atau dekorasi lainnya. Desainnya yang serbaguna membuatnya cocok untuk berbagai gaya ruangan."
        },
          // Tambahkan 7 produk dipan lainnya
      ],
      sofa: [
          {
              id: 1,
              name: "Sofa Lily Boucle Single Minimalis",
              price: "Rp 3.500.000",
              image: "sofa/sofa1.jpg",
              description: "Hadirkan kenyamanan ekstra dan gaya modern ke ruang Anda dengan Sofa Lily Boucle. Dengan desain melengkung yang elegan, sofa ini memberikan sentuhan mewah sekaligus hangat untuk ruang tamu, ruang baca, atau sudut santai Anda. Dibalut kain boucle berkualitas tinggi berwarna krem, sofa ini menciptakan suasana cozy sekaligus trendi yang cocok untuk segala gaya interior."
          },
          {
            id: 2,
            name: "Sofa Set Modalur Luxor",
            price: "Rp 15.800.000",
            image: "sofa/sofa2.jpg",
            description: "Transformasikan ruang tamu Anda dengan Sofa Modular Luxor, perpaduan sempurna antara kenyamanan, fleksibilitas, dan gaya modern. Sofa ini dirancang dengan konfigurasi modular, memungkinkan Anda untuk mengatur ulang posisi sesuai kebutuhan ruang dan kenyamanan Anda."
        },
        {
            id: 3,
            name: "Sofa Set Savana Teak Wooden",
            price: "Rp 13.500.000",
            image: "sofa/sofa3.jpg",
            description: "Berikan sentuhan natural dan elegan pada ruang tamu Anda dengan Set Sofa Tamu Jati Savanna. Dibuat dari kayu jati solid yang terkenal akan kekuatan dan daya tahannya, set sofa ini menampilkan desain klasik yang timeless dengan balutan busa tebal berwarna oranye cerah. Warna ini memberikan nuansa hangat dan segar, sempurna untuk menciptakan suasana nyaman dalam ruang tamu Anda."
        },
        {
            id: 4,
            name: "Sofa Set Minimalis Allure L",
            price: "Rp 9.500.000",
            image: "sofa/sofa4.jpg",
            description: "Hadirkan kesan modern dan kenyamanan maksimal dengan Sofa Allure L Minimalis. Dengan desain berbentuk L yang luas, sofa ini dirancang untuk memenuhi kebutuhan ruang tamu minimalis Anda. Balutan kain lembut berwarna beige memberikan kesan hangat dan elegan, menjadikannya pilihan sempurna untuk mempercantik ruang keluarga atau ruang santai Anda."
        },
        {
            id: 5,
            name: "Sofa Monochrome Elegance",
            price: "Rp 6.800.000",
            image: "sofa/sofa5.jpg",
            description: "Berikan sentuhan modern dan mewah pada ruang tamu Anda dengan Sofa Monochrome Elegance. Sofa tiga dudukan ini dirancang dengan gaya minimalis yang memukau, menggabungkan kenyamanan maksimal dengan estetika kontemporer. Dibalut kain premium berwarna hitam elegan, sofa ini memberikan kesan mewah sekaligus netral, cocok untuk berbagai konsep interior, mulai dari modern hingga industrial."
        },
        {
            id: 6,
            name: "Sofa Chesterfield Ivory",
            price: "Rp 6.200.000",
            image: "sofa/sofa6.jpg",
            description: "Ciptakan suasana ruang tamu yang hangat dan elegan dengan Sofa Classic Chesterfield Ivory. Dengan desain klasik yang abadi, sofa ini menghadirkan kombinasi sempurna antara kenyamanan dan gaya tradisional. Sandaran punggung melengkung dengan detail klasik, lengan berbentuk gulungan, serta aksen paku rivet di sisi lengan memberikan karakter yang kuat dan menawan."
        },
        {
            id: 7,
            name: "Sofa Velvet Modern Industrial",
            price: "Rp 6.500.000",
            image: "sofa/sofa7.jpg",
            description: "Sofa Velvet Klasik Modern adalah pilihan ideal bagi Anda yang ingin menciptakan suasana yang hangat dan inviting di rumah. Desain klasik yang timeless dipadukan dengan warna yang trendi memberikan tampilan yang segar dan modern. Sofa ini tidak hanya indah dipandang, tetapi juga sangat nyaman untuk bersantai dan menghabiskan waktu bersama keluarga."
        },
        {
            id: 8,
            name: "Sofa Set Minimalis Tanpa Meja",
            price: "Rp 15.000.000",
            image: "sofa/sofa8.jpg",
            description: "Hadirkan kenyamanan dan gaya modern ke ruang tamu Anda dengan sofa minimalis ini. Sofa ini dilengkapi dengan bantal empuk berlapis kain berwarna putih krem yang menambah kesan elegan dan mewah. Didesain dengan rak kayu solid pada bagian sisi, sofa ini tidak hanya memberikan kenyamanan maksimal tetapi juga fungsi tambahan untuk menyimpan buku, minuman, atau dekorasi kecil"
        },
        {
            id: 9,
            name: "Sofa Allure L + Adding Bench",
            price: "Rp 13.000.000",
            image: "sofa/sofa9.jpg",
            description: "Ciptakan suasana modern dan elegan di ruang tamu Anda dengan Sofa Allure L + Bench Square. Sofa ini dirancang dengan bentuk modular dan garis-garis vertikal yang memberikan tampilan bersih serta minimalis. Dilapisi bahan kain lembut berwarna putih gading, sofa ini memberikan sentuhan kemewahan sekaligus kenyamanan maksimal."
        },
        {
            id: 10,
            name: "Sofa Allure Velora Minimalis",
            price: "Rp 6.600.000",
            image: "sofa/sofa10.jpg",
            description: "Sofa Velora adalah perpaduan sempurna antara desain klasik dan modern yang menawarkan kenyamanan serta estetika elegan. Dibalut dengan kain beludru lembut berwarna oranye terracotta, sofa ini menciptakan suasana hangat dan mewah di ruang tamu Anda."
        },
        {
            id: 11,
            name: "Sofa Salur Eleganza Luxury",
            price: "Rp 6.900.000",
            image: "sofa/sofa11.jpg",
            description: "Almari pakaian 4 pintu dengan desain modern"
        },
        {
            id: 12,
            name: "Sofa Serene Curve Minimalis",
            price: "Rp 6.800.000",
            image: "sofa/sofa12.jpg",
            description: "Sofa ini menonjolkan desain kontemporer dengan siluet melengkung yang elegan, menghadirkan nuansa modern dan minimalis untuk ruang tamu Anda. Dibungkus dengan kain berwarna krem lembut, sofa ini memberikan kesan nyaman dan estetika yang bersih. Punggungnya memiliki pola garis halus berbentuk silang, menciptakan daya tarik visual yang unik."
        },
          // Tambahkan 7 produk almari lainnya
      ]
  };

  // Navigasi
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Hapus kelas active dari semua link dan section
          navLinks.forEach(l => l.classList.remove('active'));
          sections.forEach(s => s.classList.remove('active'));
          
          // Tambah kelas active ke link yang diklik
          this.classList.add('active');
          
          // Tampilkan section yang sesuai
          const sectionId = this.getAttribute('data-section');
          document.getElementById(sectionId).classList.add('active');
      });
  });

  // Kategori Tab
  const tabBtns = document.querySelectorAll('.tab-btn');
  
  tabBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          tabBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          loadProducts(this.getAttribute('data-category'));
      });
  });

  // Fungsi untuk memuat produk
  function loadProducts(category) {
      const productGrid = document.querySelector('.product-grid');
      productGrid.innerHTML = ''; // Bersihkan grid

      products[category].forEach(product => {
          const productCard = `
              <div class="product-card" data-product-id="${product.id}">
                  <img src="images/${product.image}" alt="${product.name}">
                  <h3>${product.name}</h3>
                  <p class="price">${product.price}</p>
                  <button class="details-btn" onclick="showProductDetails(${product.id}, '${category}')">
                      Selengkapnya
                  </button>
              </div>
          `;
          productGrid.innerHTML += productCard;
      });
  }

  // Fungsi untuk menampilkan detail produk
  window.showProductDetails = function(productId, category) {
    const product = products[category].find(p => p.id === productId);
    
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="product-image-container">
                <img src="images/${product.image}" alt="${product.name}">
            </div>
            <div class="product-details">
                <h2>${product.name}</h2>
                <p class="price">${product.price}</p>
                <p class="description">${product.description}</p>
                <a href="https://wa.me/+6282240219160?text=Saya tertarik dengan ${product.name}" 
                   class="whatsapp-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> Pesan via WhatsApp
                </a>
            </div>
        </div>
    `;

      document.body.appendChild(modal);

      // Tutup modal
      const closeBtn = modal.querySelector('.close-modal');
      closeBtn.onclick = function() {
          document.body.removeChild(modal);
      }

      // Tutup modal jika klik di luar modal
      modal.onclick = function(e) {
          if (e.target === modal) {
              document.body.removeChild(modal);
          }
      }
  }

  // Menangkap elemen input dan tombol pencarian
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// Menambahkan event listener pada tombol pencarian
searchBtn.addEventListener('click', function() {
    const searchTerm = searchInput.value.toLowerCase();

    // Memfilter data produk berdasarkan nama yang diinputkan pengguna
    const filteredProducts = [];
    for (const category in products) {
        products[category].forEach(product => {
            if (product.name.toLowerCase().includes(searchTerm)) {
                filteredProducts.push(product);
            }
        });
    }

    // Menampilkan hasil pencarian
    displayProducts(filteredProducts);
});

// Fungsi untuk menampilkan produk
function displayProducts(products) {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.dataset.productId = product.id;

        productCard.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <button class="details-btn">Selengkapnya</button>
        `;

        productGrid.appendChild(productCard);
    });
}
});let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

showSlide(currentIndex);
setInterval(nextSlide, 3000); // Berganti slide setiap 3 detik



// Tambahkan CSS untuk modal
const modalStyles = `
.product-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.close-modal {
  position: absolute;
  right: 1rem;
  top: 1rem;
  font-size: 2rem;
  cursor: pointer;
}

.whatsapp-btn {
  display: inline-block;
  background: #25D366;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  margin-top: 1rem;
}

.whatsapp-btn i {
  margin-right: 8px;
}
`;

// Tambahkan styles ke head
const styleSheet = document.createElement("style");
styleSheet.innerText = modalStyles;
document.head.appendChild(styleSheet);