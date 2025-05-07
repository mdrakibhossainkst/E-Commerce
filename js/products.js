// Product data
const products = [
    {
      id: "1",
      name: "iPhone 16 Pro Max",
      price: 153500,
      image: "assets/product1.jpg",
      description: "1 Year Official Warranty Support for Australia , Dubai &  Singapore Variant  Only",
    },
    {
      id: "2",
      name: "oraimo Necklace Lite Call Vibration Wireless Headphones",
      price: 1310,
      image: "assets/product2.jpg",
      description: "১৫,০০০ rpm এর সর্বোচ্চ গতি পৌঁছানো একটি উচ্চ-ফ্রিকোয়েন্সি মোটর সজ্জিত, এই হেডফোনগুলি শক্তিশালী ভাইব্রেশন সরবরাহ করে যাতে আপনি কোনো কল মিস না করেন। কল ভাইব্রেশন অ্যালার্ট বৈশিষ্ট্যের ধন্যবাদ, তারা আসন্ন কলের জন্য আপনাকে ভাইব্রেশনের মাধ্যমে নোটিফাই করে।",
    },
    {
      id: "3",
      name: "oraimo Watch 2R 1.39 TFT IP68 Smart Watch",
      price: 3870,
      image: "assets/product3.jpg",
      description: "1.39 TFT স্ক্রিন স্বচ্ছতাকে পুনরায় সংজ্ঞায়িত করে এবং একটি উজ্জ্বল, আরও প্রাণবন্ত দেখার এবং মসৃণ অপারেটিং অভিজ্ঞতা প্রদান করে।",
    },
    {
      id: "4",
      name: "HP Elitebook 840 G6",
      price: 25500,
      image: "assets/product4.jpg",
      description: "HP EliteBook 840 G6 laptop offers an Intel Core i5-8265U Processor (6M Cache, 1.60GHz up to 3.90GHz), 8GB DDR4-2400 SDRAM, 256GB SSD and Intel UHD Graphics 620. This Laptop has a balanced design, power, and mobility with a narrow border display of 14 inch Full HD LED-backlit (1920 x 1080) display. This light and compact PC is built for the professional who requires top performance while on the go. Windows 10 Home is available in it as its operating system along with a multi-format SD media card reader. It provides Intel Dual Band Wireless-AC 9560 802.11a/b/g/n/ac (2x2) and Bluetooth 5 Combo. This device is designed with 2 USB 3.1 Gen 1 (charging); 1 Thunderbolt, 1 RJ-45; 1 headphone/microphone combo; 1 HDMI 1.4b; 1 docking connector; 1 AC power, 720p HD camera, Dual speakers with 3-cell, 50 Wh Li-ion battery.",
    },
    {
      id: "5",
      name: "F&D F380 X 2.1 Channel Multimedia Bluetooth Speakers",
      price: 86000,
      image: "assets/product5.jpg",
      description: "F&D F380 X 2.1 Channel Multimedia Bluetooth Speakers Excellent sound and unmatched enjoyment 5.25 bass driver for sub-woofer Bluetooth 4.0 version and supporting NFC function, Plug & play USB/SD card reader Fluorescence full function remote control Satellite: 3 inch full range driver Subwoofer: 5.25 inch bass driver Subwoofer Frequency response: 30Hz~90Hz  Satellite Frequency response: 110Hz~20kHz. Item Weight	4.8 Kg Product Dimensions	23.9 x 34.5 x 46.4 cm Speaker Surround Sound Channel Configuration	2.1 Channel Speaker Connectivity	wireless Warranty 1 year",
    },
    {
      id: "6",
      name: "Canon EOS 2000D DSLR Camera (Body Only)",
      price: 42000,
      image: "assets/product6.jpg",
      description: "The Canon EOS 2000D Digital SLR Camera sensor is CMOS. When it comes to ISO settings, this camera offers Auto. Movies may be recorded at 1920x1080 pixels (1080p HD) or 1280x720 pixels (720p HD). This simple-to-use camera is ideal for beginners, delivering beautiful photos and cinematic Full HD movies full of detail, color, and depth, as well as an excellent low-light performance from a 24.1 Megapixel sensor. With built-in guidance and creative settings in Creative Auto mode, offering partial and full manual photographic controls whenever you're ready, live-view shooting with on-screen previews is simple. When using the Canon Camera Connect and Photo Companion apps, you can easily share to social media and shoot remotely by connecting via Wi-Fi or NFC. This camera has to Create stunning photographs and videos by blurring the backdrop. With a big 24.1 Megapixel sensor, shoot detailed shots into the night and produce a lovely background blur. Express your imagination with simple-to-follow the w instructions. With Creative Auto mode, you may shoot with guidelines in mind. Use Creative Filters to create one-of-a-kind effects. Learn about the capabilities of DSLRs and interchangeable lenses with Canon's Photo Companion app. When you're ready, add lenses and accessories and switch to manual mode. Shoot with confidence and speed in challenging settings. Capture the moment precisely as you remember it with accurate autofocus, 3.0 f, ps, and DIGIC 4+ processing.",
    },
    {
      id: "7",
      name: "Nintendo Switch Lite Gaming Console",
      price: 25500,
      image: "assets/product7.jpg",
      description: "The Nintendo Switch Lite is a pioneering Nintendo Gaming Console that revolutionizes portable entertainment by providing the complete Nintendo handheld console experience in a sleek, lightweight package. This Nintendo Switch Lite, designed specifically for handheld gaming, features a brilliant 5.5-inch touchscreen with beautiful images and responsive gameplay, letting you to explore Nintendo's vast library of creative titles wherever you go. As a specialized Nintendo handheld system, the Switch Lite combines the tradition of Nintendo's famous franchises with modern conveniences, including intuitive controls built into its compact body—ideal for players who value mobility without sacrificing performance. Engineered for extended play, its long battery life allows you to enjoy long gaming sessions on the go, during travel, or in the comfort of your own home, while the ergonomically built build offers comfort even during marathon sessions. With its streamlined UI, broad game compatibility, and emphasis on the pure handheld experience, the Nintendo Switch Lite demonstrates that high-quality entertainment does not require large hardware to deliver compelling, immersive adventures. Whether you are a casual player looking for a quick escape or a die-hard Nintendo fan looking for a dependable handheld system, the Nintendo Switch Lite is the ultimate portable companion, encapsulating Nintendo's creative approach to gaming.",
    },
    {
      id: "8",
      name: "Redmi Pad Pro",
      price: 30500,
      image: "assets/product8.jpg",
      description: "Experience exceptional performance and stunning visuals with Xiaomi Redmi Pad Pro by Xiaomi. Enhanced productivity and lightweight traveling with 7.52mm slimmer profile. Gorgeous viewing angle from the large 12.1-inch display which has Dolby vision capability and high-resolution to enjoy quality movie watchingi. Enjoy vibrant colors with 12-bit depth and a smooth 120Hz AdaptiveSync refresh rate, protected by Corning Gorilla Glass 3. Powered by the Snapdragon 7s Gen 2 Mobile Platform with an octa-core processor up to 2.4GHz, it ensures fast productivity. Store your favorite games and capture larger videos as you get up to 1.5TB extra storage expansion capability. Capture moments with 8MP front and rear cameras, record in 1080p at 30fps. Remain powered up for longer hours while traveling with 10,000mAh battery.",
    },
  ];
  
  // Function to create product card
  function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-price">৳${product.price}</p>
        <a href="product-details.html?id=${product.id}" class="btn primary-btn">বিস্তারিত দেখুন</a>
      </div>
    `;
    
    return card;
  }