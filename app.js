const API_BASE = (window.EMOURA_API_BASE || localStorage.getItem("EMOURA_API_BASE") || ((location.hostname === "localhost" || location.hostname === "127.0.0.1") ? "http://localhost:8080" : "")).replace(/\/$/, "");

const USER_KEY = "emoura_user";
const SESSION_KEY = "emoura_session";
const VIEW_KEY = "emoura_views";
const BAG_KEY = "emoura_bag";
const WISHLIST_KEY = "emoura_wishlist";

const BRANDS = [
  { name: "Versace", focus: "Regal Sensuality" },
  { name: "Valentino", focus: "Romantic Couture" },
  { name: "Gucci", focus: "Opulent Femme" },
  { name: "Louis Vuitton", focus: "Eternal Luxury" },
  { name: "Chanel", focus: "Parisian Poise" },
  { name: "Burberry", focus: "Noble Grace" },
  { name: "Dior", focus: "Divine Femininity" },
  { name: "Hermes", focus: "Silent Opulence" },
  { name: "YSL", focus: "Sensual Power" },
  { name: "Christian Louboutin", focus: "Scarlet Desire" },
  { name: "Dolce & Gabbana", focus: "Italian Romance" },
  { name: "Jimmy Choo", focus: "Glamour Heels" },
  { name: "Balmain", focus: "Structured Power" },
  { name: "Givenchy Kids", focus: "Modern Mini" },
  { name: "Tom Ford Beauty", focus: "Bold Sensuality" },
  { name: "Valmont", focus: "Swiss Regeneration" },
  { name: "Raw Mango", focus: "Textile Poetry" },
  { name: "Ekaya", focus: "Banarasi Luxury" },
  { name: "Sabyasachi", focus: "Heritage Opulence" },
  { name: "JJ Valaya", focus: "Royal Heritage" },
  { name: "Masaba", focus: "Bold Heritage" },
  { name: "Manish Malhotra", focus: "Cinematic Glamour" },
  { name: "House of Pataudi", focus: "Timeless Soles" },
  { name: "Mahima Mahajan Shoes", focus: "Elegant Craft" },
  { name: "Kama Ayurveda", focus: "Natural Radiance" }
];

const FALLBACK_PRODUCTS = [{"id": 1, "name": "Aurora Silk Gown", "brand": "Emoura", "image": "assets/products/aurora-gown.jpg", "price": 38075.0, "rating": 0.0, "category": "women", "description": "A radiant silk gown crafted for effortless elegance and graceful movement."}, {"id": 2, "name": "Velvet Wrap Dress", "brand": "Emoura", "image": "assets/products/velvet-wrap.jpg", "price": 28103.0, "rating": 0.0, "category": "women", "description": "Soft velvet wrap dress designed to flatter your silhouette with timeless charm."}, {"id": 3, "name": "Garden Muse Sari", "brand": "Emoura", "image": "assets/products/garden-sari.jpg", "price": 50000.0, "rating": 0.0, "category": "women", "description": "An artistic sari inspired by nature, blending tradition with modern grace."}, {"id": 4, "name": "Chanel Lace Bow", "brand": "Emoura", "image": "assets/products/chanel lace bow.jpg", "price": 72500.0, "rating": 0.0, "category": "women", "description": "Delicate lace detailing with a bow accent for a refined, feminine look."}, {"id": 5, "name": "Blue Sea Mermaid", "brand": "Emoura", "image": "assets/products/blue sea mermaid.jpg", "price": 64900.0, "rating": 0.0, "category": "women", "description": "A figure-hugging mermaid gown inspired by ocean hues and fluid elegance."}, {"id": 6, "name": "Mulberry Queen Red", "brand": "Emoura", "image": "assets/products/mulberry queen red.jpg", "price": 88000.0, "rating": 0.0, "category": "women", "description": "A bold red ensemble that exudes confidence, royalty, and classic glamour."}, {"id": 7, "name": "Satin Silky Smooth", "brand": "Emoura", "image": "assets/products/satin silky smooth.jpg", "price": 59750.0, "rating": 0.0, "category": "women", "description": "Luxurious satin attire with a smooth finish and elegant drape."}, {"id": 8, "name": "Purple Ball Gown", "brand": "Emoura", "image": "assets/products/purple ball gown.jpg", "price": 91500.0, "rating": 0.0, "category": "women", "description": "A dramatic ball gown in rich purple, made for grand celebrations."}, {"id": 9, "name": "Lavander Party Sari", "brand": "Emoura", "image": "assets/products/lavander party sari.jpg", "price": 62250.0, "rating": 0.0, "category": "women", "description": ""}, {"id": 10, "name": "Desi Dior Junon", "brand": "Emoura", "image": "assets/products/Desi Dior Junon.jpg", "price": 105000.0, "rating": 0.0, "category": "women", "description": "A couture-inspired ethnic outfit blending luxury fashion with desi elegance."}, {"id": 11, "name": "Red Sequin Ball Gown", "brand": "Emoura", "image": "assets/products/Red Sequin Ball Gown.jpg", "price": 97000.0, "rating": 0.0, "category": "women", "description": "A show-stopping gown adorned with sequins for a dazzling party look."}, {"id": 12, "name": "Rose Tulle Dress", "brand": "Emoura", "image": "assets/products/rose-tulle.jpg", "price": 46999.0, "rating": 0.0, "category": "women", "description": "A romantic tulle dress layered with softness and floral charm."}, {"id": 13, "name": "Pastel Jumpsuit", "brand": "Emoura", "image": "assets/products/pastel-jumpsuit.jpg", "price": 9999.0, "rating": 0.0, "category": "women", "description": "A chic pastel jumpsuit offering modern style with all-day comfort."}, {"id": 14, "name": "Sunlit Linen Set", "brand": "Emoura", "image": "assets/products/sunlit-linen.jpg", "price": 15999.0, "rating": 0.0, "category": "women", "description": "A breezy linen set perfect for relaxed days and effortless styling."}, {"id": 15, "name": "Mesh Mild Calf Sheath", "brand": "Emoura", "image": "assets/products/mesh mild calf sheath.jpg", "price": 14800.0, "rating": 0.0, "category": "girls", "description": "A soft mesh dress designed for comfort with a graceful festive look."}, {"id": 16, "name": "Lavan Lace Ball Gown", "brand": "Emoura", "image": "assets/products/lavan lace ball gown for little princess.jpg", "price": 18900.0, "rating": 0.0, "category": "girls", "description": "A dreamy lace ball gown made for magical childhood moments."}, {"id": 17, "name": "Blue Little Angels", "brand": "Emoura", "image": "assets/products/blue little angels.jpg", "price": 12500.0, "rating": 0.0, "category": "girls", "description": "An adorable blue dress with angelic charm and gentle detailing."}, {"id": 18, "name": "Sea Pearl Princess", "brand": "Emoura", "image": "assets/products/sea pearl princess.jpg", "price": 13750.0, "rating": 0.0, "category": "girls", "description": "A princess-style dress inspired by pearls and ocean tones."}, {"id": 19, "name": "Green Rose Till", "brand": "Emoura", "image": "assets/products/green rose till for little one.jpg", "price": 10900.0, "rating": 0.0, "category": "girls", "description": "A playful green outfit accented with rose-inspired elegance."}, {"id": 20, "name": "Dior Baby", "brand": "Emoura", "image": "assets/products/dior baby.jpg", "price": 21500.0, "rating": 0.0, "category": "girls", "description": "A luxury-inspired baby dress crafted for comfort and charm."}, {"id": 21, "name": "Cindrella Dress", "brand": "Emoura", "image": "assets/products/cindrella dress.jpg", "price": 11750.0, "rating": 0.0, "category": "girls", "description": ""}, {"id": 22, "name": "Dusty Pink Rose Tilt", "brand": "Emoura", "image": "assets/products/dusty pink rose tilt kids.jpg", "price": 12900.0, "rating": 0.0, "category": "girls", "description": "A soft pink dress with rose details for a sweet, elegant look."}, {"id": 23, "name": "Rose Quartz Serum", "brand": "Emoura", "image": "assets/products/rose-serum.jpg", "price": 7963.0, "rating": 0.0, "category": "beauty", "description": "A nourishing facial serum that enhances glow and promotes radiant skin."}, {"id": 24, "name": "Velour Lip Veil", "brand": "Emoura", "image": "assets/products/velour-lip.jpg", "price": 5258.0, "rating": 0.0, "category": "beauty", "description": "A lightweight lip color delivering a soft, velvety finish."}, {"id": 25, "name": "Moonlit Eyes Palette", "brand": "Emoura", "image": "assets/products/moonlit-palette.jpg", "price": 6660.0, "rating": 0.0, "category": "beauty", "description": "A versatile eyeshadow palette inspired by moonlit tones and elegance."}, {"id": 26, "name": "Ivory Sculpted Heel", "brand": "Emoura", "image": "assets/products/ivory-heel.jpg", "price": 33999.0, "rating": 0.0, "category": "footwear", "description": "Elegant ivory heels designed with a sculpted silhouette for refined style."}, {"id": 27, "name": "Gilded Strap Sandal", "brand": "Emoura", "image": "assets/products/gilded-sandal.jpg", "price": 18679.0, "rating": 0.0, "category": "footwear", "description": "Gold-accented strap sandals that add instant glamour to any outfit."}, {"id": 28, "name": "Noir City Boot", "brand": "Emoura", "image": "assets/products/noir-boot.jpg", "price": 49999.0, "rating": 0.0, "category": "footwear", "description": "Sleek black boots crafted for bold city fashion."}, {"id": 29, "name": "Stylish Dior Heel", "brand": "Emoura", "image": "assets/products/stylish dior.jpg", "price": 68000.0, "rating": 0.0, "category": "footwear", "description": "Luxury-inspired heels that elevate your look with timeless sophistication."}, {"id": 30, "name": "Jimmy Choo Heel", "brand": "Emoura", "image": "assets/products/jimmy choo heel.jpg", "price": 54000.0, "rating": 0.0, "category": "footwear", "description": "Statement heels designed for confidence, shine, and elegance."}, {"id": 31, "name": "Sea Heel", "brand": "Emoura", "image": "assets/products/sea heel.jpg", "price": 32500.0, "rating": 0.0, "category": "footwear", "description": "Ocean-toned heels offering a refreshing and stylish finish."}, {"id": 32, "name": "Golden Girl", "brand": "Emoura", "image": "assets/products/golden girl.jpg", "price": 74500.0, "rating": 0.0, "category": "footwear", "description": "Shimmering gold heels made to stand out at every celebration."}, {"id": 33, "name": "Pink Heel", "brand": "Emoura", "image": "assets/products/pink heel.jpg", "price": 29900.0, "rating": 0.0, "category": "footwear", "description": "Soft pink heels that bring femininity and charm to your look."}, {"id": 34, "name": "Purple Heel", "brand": "Emoura", "image": "assets/products/purple heel.jpg", "price": 31500.0, "rating": 0.0, "category": "footwear", "description": "Bold purple heels crafted for confident and expressive styling."}, {"id": 35, "name": "Chick Leather", "brand": "Emoura", "image": "assets/products/chick leather.jpg", "price": 36800.0, "rating": 0.0, "category": "footwear", "description": "Premium leather footwear combining durability with modern elegance."}, {"id": 36, "name": "Red Stylish Heel", "brand": "Emoura", "image": "assets/products/red stylish heel.jpg", "price": 42000.0, "rating": 0.0, "category": "footwear", "description": "Striking red heels designed to turn heads with every step."}, {"id": 37, "name": "YSL", "brand": "Emoura", "image": "assets/products/YSL wine red lip matte.jpg", "price": 5999.0, "rating": 5.0, "category": "beauty", "description": "feel the radiant and smudge proof"}, {"id": 38, "name": "kama ayurveda bundle of glow", "brand": "Emoura", "image": "assets/products/Kama Ayurveda.jpg", "price": 21999.0, "rating": 4.8, "category": "beauty", "description": "ayurvedhic elagance with bundle of love"}, {"id": 39, "name": "Burberry perfume with rose essence", "brand": "Emoura", "image": "assets/products/Burberry fragrance.jpg", "price": 5999.0, "rating": 4.6, "category": "beauty", "description": "feel fragrance of romantic rose"}, {"id": 40, "name": "valentino dark seduce perfume", "brand": "Emoura", "image": "assets/products/Valentino Born In Roma Uomo Intense Eau de Toilette.jpg", "price": 7999.0, "rating": 5.0, "category": "beauty", "description": "valentino born in roma"}, {"id": 41, "name": "dior eye bomb for dark queens", "brand": "Emoura", "image": "assets/products/dior.jpg", "price": 7999.0, "rating": 4.8, "category": "beauty", "description": "elegantly made for dusky boss"}, {"id": 42, "name": "Tom ford lipstick matte", "brand": "Emoura", "image": "assets/products/Tom Ford Lip Color Matte Review.jpg", "price": 4999.0, "rating": 5.0, "category": "beauty", "description": "tom ford dusky pink rose petals"}, {"id": 43, "name": "Ekaya Banarasi desi black and gold sari", "brand": "Emoura", "image": "assets/products/ekaya banarasi.jpg", "price": 30000.0, "rating": 5.0, "category": "women", "description": "elegant sari for people who love updated tradition"}, {"id": 44, "name": "soft Blue Gold sari from Raw mango", "brand": "Emoura", "image": "assets/products/Blue gold sari from Raw mango.jpg", "price": 28000.0, "rating": 4.8, "category": "women", "description": "choose raw mango if you were the person who loves the raw and soft tradition"}, {"id": 45, "name": "Bridal Wine red leghanka from sabyasachi", "brand": "Emoura", "image": "assets/products/sabyasachi.jpg", "price": 79000.0, "rating": 5.0, "category": "women", "description": "Choose Sabyasachi, where every name speaks beauty."}, {"id": 46, "name": "purple glam from house of CB", "brand": "Emoura", "image": "assets/products/purple.jpg", "price": 35000.0, "rating": 5.0, "category": "women", "description": "bridal purple glam for people who loves detailed manual designing works"}, {"id": 47, "name": "Masaba gupta banarasi lucknow lehanga", "brand": "Emoura", "image": "assets/products/masaba.jpg", "price": 69000.0, "rating": 5.0, "category": "women", "description": "Masaba gupta collections who loves trend with traditional colors"}, {"id": 48, "name": "pearl white designer netted sari from manish malhotra", "brand": "Emoura", "image": "assets/products/manish malhotra.jpg", "price": 55999.0, "rating": 5.0, "category": "women", "description": "Say manish mahotra, Where fashion and glam meets india"}, {"id": 49, "name": "Black balmain gown for girl babies", "brand": "Emoura", "image": "assets/products/balmain.jpg", "price": 12999.0, "rating": 5.0, "category": "girls", "description": "slay with balmain.... created for little divas"}, {"id": 50, "name": "hermes baby set", "brand": "Emoura", "image": "assets/products/hermes kid.jpg", "price": 8999.0, "rating": 5.0, "category": "girls", "description": "hand glove , cap, and socks for who born with golden spoon"}, {"id": 51, "name": "gucci casuals for girls", "brand": "Emoura", "image": "assets/products/gucci kid.jpg", "price": 33999.0, "rating": 5.0, "category": "girls", "description": "gucci collections for little ladies"}, {"id": 52, "name": "versace for girls", "brand": "Emoura", "image": "assets/products/versace kids.jpg", "price": 8999.0, "rating": 5.0, "category": "girls", "description": "gift your child with versace"}, {"id": 53, "name": "Christian loboutin pointed heel", "brand": "Emoura", "image": "assets/products/christian louboutin.jpg", "price": 190000.0, "rating": 5.0, "category": "footwear", "description": "christian loboutin for boss Divas"}, {"id": 54, "name": "chanel blush", "brand": "Emoura", "image": "assets/products/chanel blush.jpg", "price": 6999.0, "rating": 5.0, "category": "beauty", "description": "chanel rosie blush that will glow on your skill"}, {"id": 55, "name": "dior lip oil", "brand": "Emoura", "image": "assets/products/dior lip oil.jpg", "price": 9999.0, "rating": 5.0, "category": "beauty", "description": "pink lip oil from dior"}, {"id": 56, "name": "Dolce & Gabbana Blueberry foundation", "brand": "Emoura", "image": "assets/products/Dolce & Gabbana Blueberry foundation.jpg", "price": 6999.0, "rating": 5.0, "category": "beauty", "description": "rich and elegant beauty"}];

let PRODUCTS = [];

const readStore = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (err) {
    return fallback;
  }
};

const writeStore = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getSessionId = () => {
  let session = readStore(SESSION_KEY, null);
  if (!session) {
    session = `sess_${Math.random().toString(36).slice(2, 10)}`;
    writeStore(SESSION_KEY, session);
  }
  return session;
};

const getUserId = () => {
  const user = readStore(USER_KEY, null);
  return user?.id || user?.mobile || "guest";
};

const formatPrice = (value) => {
  const num = Number(value || 0);
  return `RS ${num.toLocaleString("en-IN")}`;
};

const normalizeImage = (url) => {
  if (!url) return "assets/products/placeholder.jpg";
  if (url.startsWith("/")) return url.slice(1);
  return url;
};

const apiFetch = async (path, options = {}) => {
  if (!API_BASE) return null;
  try {
    const response = await fetch(`${API_BASE}${path}`, {
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      body: options.body,
    });
    if (!response.ok) return null;
    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      return await response.json();
    }
    return null;
  } catch (err) {
    return null;
  }
};

const mapApiProduct = (product, index = 0) => {
  return {
    id: product.id ?? product.productId ?? `${product.name || "item"}-${index}`,
    name: product.name || "Product",
    brand: product.brand || "Emoura",
    category: (product.category || "women").toLowerCase(),
    price: formatPrice(product.price),
    rating: product.rating ?? 0,
    image: normalizeImage(product.imageUrl || product.image || product.imageURL || ""),
    description: product.description || "",
    tag: product.tag || (product.rating >= 4.5 ? "Bestseller" : "New"),
    tone: "rgba(201, 75, 122, 0.35)",
  };
};

const loadProducts = async () => {
  const data = await apiFetch("/api/products");
  if (Array.isArray(data) && data.length) {
    PRODUCTS = data.map(mapApiProduct);
    return;
  }
  PRODUCTS = FALLBACK_PRODUCTS.map((item) => ({
    ...item,
    price: formatPrice(item.price),
    tag: item.rating >= 4.5 ? "Bestseller" : "New",
    tone: "rgba(201, 75, 122, 0.35)",
  }));
};

const addView = async (product) => {
  const views = readStore(VIEW_KEY, {});
  views[product.id] = (views[product.id] || 0) + 1;
  writeStore(VIEW_KEY, views);
  if (typeof product.id === "number") {
    await apiFetch(
      `/api/views?sessionId=${encodeURIComponent(getSessionId())}&productId=${product.id}`,
      { method: "POST" }
    );
  }
};

const addToBag = async (product) => {
  const bag = readStore(BAG_KEY, {});
  let nextQty = Number(bag[product.id] || 0) + 1;

  if (typeof product.id === "number") {
    const apiItems = await apiFetch(`/api/cart?userId=${encodeURIComponent(getUserId())}`);
    if (Array.isArray(apiItems)) {
      const existing = apiItems.find((item) => String(item.productId) === String(product.id));
      nextQty = Number(existing?.quantity || 0) + 1;
    }
    await apiFetch(
      `/api/cart?userId=${encodeURIComponent(getUserId())}&productId=${product.id}&qty=${nextQty}`,
      { method: "POST" }
    );
  }

  bag[product.id] = nextQty;
  writeStore(BAG_KEY, bag);
  updateBagBadge();
};

const removeFromBag = async (product) => {
  const bag = readStore(BAG_KEY, {});
  let currentQty = Number(bag[product.id] || 0);

  if (typeof product.id === "number") {
    const apiItems = await apiFetch(`/api/cart?userId=${encodeURIComponent(getUserId())}`);
    if (Array.isArray(apiItems)) {
      const existing = apiItems.find((item) => String(item.productId) === String(product.id));
      currentQty = Number(existing?.quantity || currentQty || 0);
    }
  }

  if (currentQty <= 0) return;
  const nextQty = currentQty - 1;

  if (typeof product.id === "number") {
    if (nextQty <= 0) {
      await apiFetch(
        `/api/cart?userId=${encodeURIComponent(getUserId())}&productId=${product.id}`,
        { method: "DELETE" }
      );
    } else {
      await apiFetch(
        `/api/cart?userId=${encodeURIComponent(getUserId())}&productId=${product.id}&qty=${nextQty}`,
        { method: "PUT" }
      );
    }
  }

  if (nextQty <= 0) {
    delete bag[product.id];
  } else {
    bag[product.id] = nextQty;
  }
  writeStore(BAG_KEY, bag);
  updateBagBadge();
};

const toggleWishlist = async (product) => {
  const list = readStore(WISHLIST_KEY, {});
  if (list[product.id]) {
    delete list[product.id];
    if (typeof product.id === "number") {
      await apiFetch(
        `/api/wishlist?userId=${encodeURIComponent(getUserId())}&productId=${product.id}`,
        { method: "DELETE" }
      );
    }
  } else {
    list[product.id] = true;
    if (typeof product.id === "number") {
      await apiFetch(
        `/api/wishlist?userId=${encodeURIComponent(getUserId())}&productId=${product.id}`,
        { method: "POST" }
      );
    }
  }
  writeStore(WISHLIST_KEY, list);
  updateWishlistBadge();
  return !!list[product.id];
};

const updateBagBadge = async () => {
  const badge = document.querySelector("#bagCount");
  if (!badge) return;
  const apiItems = await apiFetch(`/api/cart?userId=${encodeURIComponent(getUserId())}`);
  if (Array.isArray(apiItems)) {
    const count = apiItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
    badge.textContent = count;
    return;
  }
  const bag = readStore(BAG_KEY, {});
  const count = Object.values(bag).reduce((sum, val) => sum + val, 0);
  badge.textContent = count;
};

const updateWishlistBadge = () => {
  const badge = document.querySelector("#wishlistCount");
  if (!badge) return;
  const list = readStore(WISHLIST_KEY, {});
  badge.textContent = Object.keys(list).length;
};

const openModal = (product) => {
  const modal = document.querySelector(".modal");
  if (!modal) return;
  modal.classList.add("active");
  const title = modal.querySelector("h3");
  const brand = modal.querySelector(".modal-brand");
  const desc = modal.querySelector(".modal-desc");
  const price = modal.querySelector(".modal-price");
  const tag = modal.querySelector(".modal-tag");
  if (title) title.textContent = product.name || "Product";
  if (brand) brand.textContent = product.brand || "Emoura";
  if (desc) desc.textContent = product.description || "No description available yet.";
  if (price) price.textContent = product.price || "";
  if (tag) tag.textContent = product.tag || "";
  modal.querySelectorAll("[data-close]").forEach((btn) => {
    btn.onclick = (event) => {
      event.preventDefault();
      modal.classList.remove("active");
    };
  });
};

const setupModal = () => {
  const modal = document.querySelector(".modal");
  if (!modal) return;
  const closeModal = (event) => {
    event?.preventDefault?.();
    modal.classList.remove("active");
  };
  modal.addEventListener("click", (event) => {
    const shouldClose = event.target.closest("[data-close]");
    if (!shouldClose) return;
    closeModal(event);
  });
  modal.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal(event);
  });
};
const buildCard = (product) => {
  const card = document.createElement("article");
  card.className = "product-card";
  card.dataset.productId = String(product.id);
  card.innerHTML = `
    <div class="product-media" style="--tone: ${product.tone}">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div>
      <p class="product-title">${product.name}</p>
      <div class="product-meta">
        <span>${product.tag}</span>
        <span class="price">${product.price}</span>
      </div>
    </div>
    <div class="card-actions">
      <button class="btn btn-outline like-btn ${readStore(WISHLIST_KEY, {})[product.id] ? "liked" : ""}" data-action="like" aria-label="Like">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.8 8.6c0 5-8.8 11-8.8 11s-8.8-6-8.8-11a4.8 4.8 0 0 1 8.8-2.7 4.8 4.8 0 0 1 8.8 2.7z"></path>
        </svg>
      </button>
      <button class="btn btn-outline" data-action="view">View</button>
      <button class="btn btn-primary" data-action="bag">Add</button>
    </div>
  `;
  card.addEventListener("click", async (event) => {
    const actionBtn = event.target.closest("[data-action]");
    if (!actionBtn) return;
    const action = actionBtn.getAttribute("data-action");
    if (action === "like") {
      const liked = await toggleWishlist(product);
      actionBtn.classList.toggle("liked", liked);
    }
    if (action === "view") {
      await addView(product);
      openModal(product);
    }
    if (action === "bag") {
      await addToBag(product);
    }
  });
  return card;
};

const renderProducts = (category, filter = "all") => {
  const normalizedCategory = category ? category.toLowerCase() : "";
  const grid = document.querySelector("#productGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const items = PRODUCTS.filter((product) => {
    if (normalizedCategory && String(product.category).toLowerCase() !== normalizedCategory) return false;
    if (filter === "all") return true;
    if (filter === "new") return product.tag === "New";
    if (filter === "bestsellers") return product.tag === "Bestseller";
    if (filter === "limited") return product.tag === "Limited";
    return true;
  });
  items.forEach((product) => grid.appendChild(buildCard(product)));
};

const renderRecommendations = async () => {
  const grid = document.querySelector("#recommendGrid");
  if (!grid) return;
  const apiRecs = await apiFetch(`/api/recommendations?sessionId=${encodeURIComponent(getSessionId())}`);
  const list = Array.isArray(apiRecs) && apiRecs.length ? apiRecs.map(mapApiProduct) : PRODUCTS.slice(0, 4);
  grid.innerHTML = "";
  list.slice(0, 4).forEach((product) => grid.appendChild(buildCard(product)));
};

const renderBrandGrid = () => {
  const grid = document.querySelector("#brandGrid");
  if (!grid) return;
  grid.innerHTML = "";
  BRANDS.forEach((brand) => {
    const card = document.createElement("div");
    card.className = "brand-card";
    card.innerHTML = `
      <h3>${brand.name}</h3>
      <p>${brand.focus}</p>
    `;
    grid.appendChild(card);
  });
};

const renderBag = async () => {
  const bagList = document.querySelector("#bagList");
  if (!bagList) return;

  const productMap = new Map(PRODUCTS.map((product) => [String(product.id), product]));
  const apiItems = await apiFetch(`/api/cart?userId=${encodeURIComponent(getUserId())}`);

  let bagItems = [];
  if (Array.isArray(apiItems) && apiItems.length) {
    bagItems = apiItems
      .map((item) => ({ productId: item.productId, quantity: Number(item.quantity || 0) }))
      .filter((item) => item.quantity > 0);
  } else {
    const bag = readStore(BAG_KEY, {});
    bagItems = Object.entries(bag)
      .map(([productId, quantity]) => ({ productId, quantity: Number(quantity || 0) }))
      .filter((item) => item.quantity > 0);
  }

  if (!bagItems.length) {
    bagList.innerHTML = "<p>Your bag is empty. Start exploring Emoura.</p>";
    return;
  }

  bagList.innerHTML = "";
  bagItems.forEach((item) => {
    const product = productMap.get(String(item.productId));
    if (!product) return;
    const row = document.createElement("div");
    row.className = "product-card";
    row.innerHTML = `
      <div class="product-media" style="--tone: ${product.tone}">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div>
        <p class="product-title">${product.name}</p>
        <div class="product-meta">
          <span>Qty: ${item.quantity}</span>
          <span class="price">${product.price}</span>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn btn-outline" data-action="minus">-</button>
        <button class="btn btn-primary" data-action="plus">+</button>
      </div>
    `;
    row.addEventListener("click", async (event) => {
      const actionBtn = event.target.closest("[data-action]");
      if (!actionBtn) return;
      const action = actionBtn.getAttribute("data-action");
      if (action === "minus") {
        await removeFromBag(product);
        renderBag();
      }
      if (action === "plus") {
        await addToBag(product);
        renderBag();
      }
    });
    bagList.appendChild(row);
  });
};

const renderWishlist = async () => {
  const grid = document.querySelector("#wishlistGrid");
  if (!grid) return;
  const apiList = await apiFetch(`/api/wishlist?userId=${encodeURIComponent(getUserId())}`);
  const list = Array.isArray(apiList) && apiList.length ? apiList.map(mapApiProduct) : PRODUCTS.filter((product) => readStore(WISHLIST_KEY, {})[product.id]);
  if (!list.length) {
    grid.innerHTML = "<p>No liked products yet. Tap a heart to save your favorites.</p>";
    return;
  }
  grid.innerHTML = "";
  list.forEach((product) => grid.appendChild(buildCard(product)));
};

const renderProfile = async () => {
  const nameEl = document.querySelector("#profileName");
  const mobileEl = document.querySelector("#profileMobile");
  const wishlistEl = document.querySelector("#profileWishlist");
  const bagEl = document.querySelector("#profileBag");
  const statusEl = document.querySelector("#profileStatus");
  if (!nameEl || !mobileEl || !wishlistEl || !bagEl || !statusEl) return;

  const user = readStore(USER_KEY, null);
  nameEl.textContent = user?.name || "Guest";
  mobileEl.textContent = `Mobile: ${user?.mobile || "-"}`;

  const wishlist = readStore(WISHLIST_KEY, {});
  wishlistEl.textContent = Object.keys(wishlist).length;

  const apiItems = await apiFetch(`/api/cart?userId=${encodeURIComponent(getUserId())}`);
  const bagCount = Array.isArray(apiItems)
    ? apiItems.reduce((sum, item) => sum + (item.quantity || 0), 0)
    : Object.values(readStore(BAG_KEY, {})).reduce((sum, val) => sum + val, 0);
  bagEl.textContent = bagCount;

  statusEl.textContent = user ? "Signed in" : "Guest mode";
};

const showToast = (msg) => {
  const toast = document.querySelector(".toast");
  const toastMsg = toast?.querySelector(".toast-msg");
  if (!toast) return;
  if (toastMsg && msg) toastMsg.textContent = msg;
  toast.classList.add("active");
  setTimeout(() => toast.classList.remove("active"), 2000);
};

const setProfileEditable = (editable) => {
  const email = document.querySelector("#profileEmail");
  const address = document.querySelector("#profileAddress");
  const pincode = document.querySelector("#profilePincode");
  const saveBtn = document.querySelector("#profileSaveBtn");
  const editBtn = document.querySelector("#profileEditBtn");

  [email, address, pincode].forEach((input) => {
    if (!input) return;
    input.disabled = !editable;
  });
  if (saveBtn) saveBtn.style.display = editable ? "inline-flex" : "none";
  if (editBtn) editBtn.style.display = editable ? "none" : "inline-flex";
};

const loadProfileDetails = async () => {
  const user = readStore(USER_KEY, null);
  if (!user?.mobile) return;
  const data = await apiFetch(`/api/users/by-mobile?mobile=${encodeURIComponent(user.mobile)}`);
  if (!data) return;
  const email = document.querySelector("#profileEmail");
  const address = document.querySelector("#profileAddress");
  const pincode = document.querySelector("#profilePincode");
  if (email) email.value = data.email || "";
  if (address) address.value = data.address || "";
  if (pincode) pincode.value = data.pincode || "";
  if (data.email || data.address || data.pincode) {
    setProfileEditable(false);
  }
};

const bindProfileForm = () => {
  const form = document.querySelector("#profileForm");
  if (!form) return;
  const saveMsg = document.querySelector("#profileSaveMsg");
  const editBtn = document.querySelector("#profileEditBtn");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const user = readStore(USER_KEY, null);
    if (!user?.mobile) {
      if (saveMsg) saveMsg.textContent = "Please login first.";
      return;
    }
    const payload = {
      email: document.querySelector("#profileEmail")?.value || "",
      address: document.querySelector("#profileAddress")?.value || "",
      pincode: document.querySelector("#profilePincode")?.value || "",
    };
    const res = await apiFetch(
      `/api/users/profile`,
      {
        method: "POST",
        body: JSON.stringify({ ...payload, mobile: user.mobile, name: user.name || "" }),
      }
    );
    if (res?.error) {
      if (saveMsg) saveMsg.textContent = res.error;
      return;
    }
    if (saveMsg) saveMsg.textContent = "";
    setProfileEditable(false);
    showToast("Profile saved");
  });

  editBtn?.addEventListener("click", () => {
    setProfileEditable(true);
  });
};

const setupFilters = (category) => {
  const chips = document.querySelectorAll(".chip");
  if (!chips.length) return;
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      renderProducts(category, chip.dataset.filter || "all");
    });
  });
};

const setupLogin = () => {
  const form = document.querySelector("#loginForm");
  if (!form) return;

  const nameInput = document.querySelector("#nameInput");
  const mobileInput = document.querySelector("#mobileInput");
  const sendOtpBtn = document.querySelector("#sendOtp");
  const otpArea = document.querySelector("#otpArea");
  const otpInput = document.querySelector("#otpInput");
  const verifyOtpBtn = document.querySelector("#verifyOtp");
  const resendOtpBtn = document.querySelector("#resendOtp");
  const message = document.querySelector("#loginMessage");

  const showMsg = (text) => {
    if (message) message.textContent = text || "";
  };

  const requestOtp = async () => {
    const name = (nameInput?.value || "").trim();
    const mobile = (mobileInput?.value || "").trim();
    if (!mobile) {
      showMsg("Enter your mobile number.");
      return;
    }
    showMsg("Sending OTP...");
    const res = await apiFetch(
      "/api/auth/request-otp",
      {
        method: "POST",
        body: JSON.stringify({ identifier: mobile, name }),
      }
    );
    if (!res) {
      showMsg("OTP request failed.");
      return;
    }
    if (res?.error) {
      showMsg(res.error);
      return;
    }
    if (otpArea) otpArea.style.display = "grid";
    if (res?.otp) {
      showMsg(`OTP sent. Demo OTP: ${res.otp}`);
    } else {
      showMsg("OTP sent. Please verify.");
    }
  };

  const verifyOtp = async () => {
    const name = (nameInput?.value || "").trim();
    const mobile = (mobileInput?.value || "").trim();
    const otp = (otpInput?.value || "").trim();
    if (!mobile || !otp) {
      showMsg("Enter mobile and OTP.");
      return;
    }
    showMsg("Verifying...");
    const res = await apiFetch(
      "/api/auth/verify-otp",
      {
        method: "POST",
        body: JSON.stringify({ identifier: mobile, code: otp, name }),
      }
    );
    if (!res) {
      showMsg("Verification failed.");
      return;
    }
    if (res?.error) {
      showMsg(res.error);
      return;
    }
    if (res?.status !== "verified") {
      showMsg("Invalid OTP.");
      return;
    }
    writeStore(USER_KEY, {
      id: res?.id || res?.userId || mobile,
      name: res?.name || name || "Guest",
      mobile,
    });
    showMsg("Logged in.");
    window.location.href = "dashboard.htm";
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    requestOtp();
  });

  sendOtpBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    requestOtp();
  });

  verifyOtpBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    verifyOtp();
  });

  resendOtpBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    requestOtp();
  });

  const skipBtn = document.querySelector("#skipLogin");
  skipBtn?.addEventListener("click", () => {
    window.location.href = "dashboard.htm";
  });
};


const setupGlobalViewHandler = () => {
  document.addEventListener("click", (event) => {
    const viewBtn = event.target.closest("[data-action=\"view\"]");
    if (!viewBtn) return;
    const card = viewBtn.closest(".product-card");
    if (!card) return;
    const id = card.dataset.productId;
    const product = PRODUCTS.find((p) => String(p.id) === String(id));
    if (!product) return;
    event.preventDefault();
    addView(product).then(() => openModal(product));
  });
};
const detectPage = () => {
  const pageFromBody = document.body?.dataset?.page;
  if (pageFromBody) return pageFromBody;
  const path = window.location.pathname.toLowerCase();
  const clean = path.endsWith("/") ? path.slice(0, -1) : path;
  const last = clean.split("/").pop() || "index";
  return last.replace(/\.html$/, "") || "index";
};

const initPage = async () => {
  await loadProducts();
  updateBagBadge();
  updateWishlistBadge();

  const page = detectPage();
  if (page === "dashboard") {
    renderRecommendations();
  }
  if (page === "explore") {
    renderBrandGrid();
  }
  if (page === "women") {
    renderProducts("women");
    setupFilters("women");
  }
  if (page === "girls") {
    renderProducts("girls");
    setupFilters("girls");
  }
  if (page === "beauty") {
    renderProducts("beauty");
    setupFilters("beauty");
  }
  if (page === "footwear") {
    renderProducts("footwear");
    setupFilters("footwear");
  }
  if (page === "bag") {
    renderBag();
  }
  if (page === "wishlist") {
    renderWishlist();
  }
  if (page === "profile") {
    renderProfile();
    loadProfileDetails();
    bindProfileForm();
  }
  if (page === "login") {
    setupLogin();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initPage();
});













