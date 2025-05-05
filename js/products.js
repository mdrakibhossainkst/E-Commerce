// Product data
const products = [
    {
      id: "1",
      name: "স্মার্টফোন প্রো",
      price: 25999,
      image: "https://via.placeholder.com/300",
      description: "অত্যাধুনিক প্রযুক্তি সম্পন্ন স্মার্টফোন। উন্নত ক্যামেরা, দ্রুত প্রসেসর এবং দীর্ঘস্থায়ী ব্যাটারি লাইফ।",
    },
    {
      id: "2",
      name: "ওয়্যারলেস হেডফোন",
      price: 3499,
      image: "https://via.placeholder.com/300",
      description: "নয়েজ ক্যানসেলেশন সহ প্রিমিয়াম ওয়্যারলেস হেডফোন। ২০ ঘন্টা ব্যাটারি লাইফ এবং আরামদায়ক ডিজাইন।",
    },
    {
      id: "3",
      name: "স্মার্ট ওয়াচ",
      price: 4999,
      image: "https://via.placeholder.com/300",
      description: "ফিটনেস ট্র্যাকিং, হার্ট রেট মনিটরিং এবং নোটিফিকেশন সহ আধুনিক স্মার্ট ওয়াচ।",
    },
    {
      id: "4",
      name: "ল্যাপটপ প্রো",
      price: 65999,
      image: "https://via.placeholder.com/300",
      description: "শক্তিশালী প্রসেসর, উচ্চ রেজোলিউশন ডিসপ্লে এবং দীর্ঘস্থায়ী ব্যাটারি লাইফ সহ প্রিমিয়াম ল্যাপটপ।",
    },
    {
      id: "5",
      name: "ব্লুটুথ স্পিকার",
      price: 2499,
      image: "https://via.placeholder.com/300",
      description: "পানি প্রতিরোধী, পোর্টেবল ব্লুটুথ স্পিকার। ১২ ঘন্টা ব্যাটারি লাইফ এবং শক্তিশালী বেস।",
    },
    {
      id: "6",
      name: "ক্যামেরা ডিএসএলআর",
      price: 45999,
      image: "https://via.placeholder.com/300",
      description: "পেশাদার ফটোগ্রাফি এবং ভিডিও শুটিং এর জন্য উচ্চ মানের ডিএসএলআর ক্যামেরা।",
    },
    {
      id: "7",
      name: "গেমিং কনসোল",
      price: 35999,
      image: "https://via.placeholder.com/300",
      description: "আধুনিক গেমিং কনসোল যা 4K রেজোলিউশনে গেম চালাতে সক্ষম। বিভিন্ন গেম এবং অ্যাপ্লিকেশন সাপোর্ট করে।",
    },
    {
      id: "8",
      name: "ট্যাবলেট প্রো",
      price: 28999,
      image: "https://via.placeholder.com/300",
      description: "হালকা, পাতলা এবং শক্তিশালী ট্যাবলেট। পড়াশোনা, কাজ এবং বিনোদনের জন্য আদর্শ।",
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