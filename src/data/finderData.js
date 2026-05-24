export const finderCategories = [
  {
    id: 'books',
    keywords: ['book', 'books', 'novel', 'novels', 'reading', 'textbook', 'ebook', 'kindle', 'audiobook', 'fiction', 'nonfiction', 'comic', 'manga', 'cookbook', 'biography'],
    title: 'Books & Reading',
    avoidIds: ['amazon'],
    tips: [
      { name: 'Your local independent bookstore', url: 'https://www.indiebound.org', note: 'Search IndieBound.org to find one near you', type: 'Local' },
      { name: 'Bookshop.org', url: 'https://bookshop.org', note: 'Online ordering that directs profits to indie bookstores', type: 'Online' },
      { name: 'ThriftBooks', url: 'https://thriftbooks.com', note: 'Used books at low prices, sustainable', type: 'Online' },
      { name: 'Your public library', url: 'https://www.worldcat.org', note: 'Free — supports public literacy funding', type: 'Free' },
    ],
  },
  {
    id: 'coffee',
    keywords: ['coffee', 'cafe', 'espresso', 'latte', 'cappuccino', 'tea', 'barista', 'cold brew', 'matcha', 'chai', 'hot chocolate'],
    title: 'Coffee & Cafes',
    avoidIds: ['starbucks'],
    tips: [
      { name: 'Local independent cafes', url: 'https://www.yelp.com/search?find_desc=coffee+shop', note: 'Keeps money in your community', type: 'Local' },
      { name: "Peet's Coffee", url: 'https://peets.com', note: 'Better labor record than Starbucks', type: 'Chain' },
      { name: 'Grounds for Change', url: 'https://groundsforchange.com', note: 'Worker-owned, organic, fair trade', type: 'Online' },
      { name: 'Equal Exchange', url: 'https://equalexchange.coop', note: 'Worker cooperative, fair trade', type: 'Online' },
    ],
  },
  {
    id: 'clothing',
    keywords: ['clothing', 'clothes', 'fashion', 'shirt', 'jeans', 'jacket', 'dress', 'apparel', 'wear', 'pants', 'sweater', 'coat', 'socks', 'hoodie', 'top', 'blouse', 'skirt', 'shorts', 'leggings', 'tights', 'underwear', 'swimwear', 'bikini', 'athletic wear', 'sportswear', 'activewear', 'yoga', 'gym clothes', 'formal wear', 'suit', 'blazer'],
    title: 'Clothing & Fashion',
    avoidIds: ['shein', 'hm', 'zara'],
    tips: [
      { name: 'ThredUp', url: 'https://thredup.com', note: 'Online secondhand — huge selection at low prices', type: 'Online' },
      { name: 'Depop', url: 'https://depop.com', note: 'Peer-to-peer secondhand and vintage', type: 'Online' },
      { name: 'Poshmark', url: 'https://poshmark.com', note: 'Resell and buy secondhand clothing', type: 'Online' },
      { name: 'Patagonia', url: 'https://patagonia.com', companyId: 'patagonia', note: 'B Corp certified, ethical manufacturing, repair program', type: 'Brand' },
      { name: 'Local thrift stores', url: 'https://www.goodwill.org', note: 'Search Goodwill near you', type: 'Local' },
    ],
  },
  {
    id: 'shoes',
    keywords: ['shoes', 'sneakers', 'trainers', 'boots', 'heels', 'sandals', 'loafers', 'flats', 'running shoes', 'hiking boots', 'work boots', 'football boots', 'cleats', 'tennis shoes', 'basketball shoes', 'flip flops', 'slippers', 'oxfords'],
    title: 'Footwear',
    avoidIds: ['nike', 'adidas'],
    tips: [
      { name: 'Veja', url: 'https://veja-store.com', note: 'Fair trade, ethical sourcing, no big marketing budget', type: 'Brand' },
      { name: 'Allbirds', url: 'https://allbirds.com', note: 'Low carbon footprint, sustainable materials', type: 'Brand' },
      { name: 'Thrift stores / Depop', url: 'https://depop.com', note: 'Secondhand shoes — lowest impact option', type: 'Online' },
      { name: 'Local shoe repair', url: 'https://www.yelp.com/search?find_desc=shoe+repair', note: 'Repair first — extends life by years', type: 'Local' },
    ],
  },
  {
    id: 'electronics',
    keywords: ['electronics', 'tech', 'gadget', 'device', 'screen', 'display', 'monitor', 'keyboard', 'mouse', 'webcam', 'speaker', 'smart home', 'alexa', 'echo', 'nest', 'hue', 'printer', 'ink', 'toner', 'router', 'hard drive', 'storage', 'usb hub', 'dock', 'cable', 'charger', 'adapter', 'lightning', 'usb-c', 'usb c', 'power adapter', 'charging', 'laptop', 'computer', 'notebook', 'macbook', 'pc', 'desktop', 'tablet', 'ipad', 'phone', 'iphone', 'smartphone', 'android', 'samsung phone', 'pixel', 'headphones', 'earbuds', 'airpods', 'earphones', 'buds', 'tv', 'television', 'smart tv', 'gaming', 'console', 'xbox', 'playstation', 'switch', 'nintendo', 'ps5', 'ps4', 'camera', 'dslr', 'mirrorless', 'lens', 'stylus', 'digital pen', 'apple pencil', 'surface pen', 'drawing tablet', 'wacom', 'graphics tablet'],
    title: 'Electronics',
    avoidIds: ['amazon'],
    tips: [
      { name: 'Back Market', url: 'https://www.backmarket.com', note: 'Certified refurbished electronics — buy used first', type: 'Online' },
      { name: 'Newegg', url: 'https://newegg.com', note: 'Electronics-focused, no major labor scandals', type: 'Online' },
      { name: 'Framework Laptop', url: 'https://frame.work', note: 'Repairable, sustainable laptops — right to repair', type: 'Brand' },
      { name: 'Fairphone', url: 'https://fairphone.com', note: 'Ethically sourced, repairable smartphones', type: 'Brand' },
      { name: 'Local computer repair shops', url: 'https://www.yelp.com/search?find_desc=computer+repair', note: 'Repair first, replace second', type: 'Local' },
    ],
  },
  {
    id: 'groceries',
    keywords: ['grocery', 'groceries', 'food', 'supermarket', 'produce', 'vegetables', 'fruit', 'meat', 'snacks', 'dairy', 'eggs', 'bread', 'pasta', 'rice', 'cereal', 'granola', 'chips', 'crackers', 'organic', 'bulk', 'pantry'],
    title: 'Groceries & Food',
    avoidIds: ['walmart', 'amazon', 'tyson', 'nestle', 'cocacola'],
    tips: [
      { name: 'Local grocery co-ops', url: 'https://www.coopdirectory.org', note: 'Community-owned, member profits stay local', type: 'Local' },
      { name: 'Costco', url: 'https://costco.com', companyId: 'costco', note: 'Higher wages and better worker benefits than Walmart', type: 'Chain' },
      { name: 'Aldi', url: 'https://aldi.us', note: 'Simpler supply chain, decent worker pay', type: 'Chain' },
      { name: "Farmers' markets", url: 'https://www.ams.usda.gov/local-food-directories/farmersmarkets', note: 'Direct from farmer, no middlemen, seasonal', type: 'Local' },
      { name: 'Imperfect Foods', url: 'https://www.imperfectfoods.com', note: 'Reduces food waste, delivers direct to door', type: 'Online' },
    ],
  },
  {
    id: 'banking',
    keywords: ['bank', 'banking', 'savings', 'checking', 'account', 'mortgage', 'loan', 'credit card', 'finance', 'money', 'investment', 'brokerage', 'retirement', 'ira', '401k', 'etf', 'stock', 'insurance'],
    title: 'Banking & Finance',
    avoidIds: ['jpmorgan', 'wellsfargo', 'bankofamerica'],
    tips: [
      { name: 'Local credit unions', url: 'https://www.mycreditunion.gov', note: 'Nonprofit, member-owned — profit returned to members', type: 'Local' },
      { name: 'Amalgamated Bank', url: 'https://amalgamatedbank.com', note: 'Union-owned, ethical banking, no fossil fuel financing', type: 'Chain' },
      { name: 'Beneficial State Bank', url: 'https://beneficialstatebank.com', note: 'B Corp certified bank, mission-driven lending', type: 'Chain' },
    ],
  },
  {
    id: 'pharmacy',
    keywords: ['pharmacy', 'medicine', 'drugs', 'prescription', 'medication', 'pills', 'vitamins', 'supplements', 'health', 'drugstore', 'otc'],
    title: 'Pharmacy & Medications',
    avoidIds: ['mckesson'],
    tips: [
      { name: 'Local independent pharmacies', url: 'https://www.ncpanet.org/find-a-pharmacy', note: 'Community-owned, personalized care', type: 'Local' },
      { name: 'Cost Plus Drugs', url: 'https://costplusdrugs.com', note: 'Mark Cuban venture — transparent, low-markup pricing', type: 'Online' },
      { name: 'GoodRx', url: 'https://www.goodrx.com', note: 'Find the best price on prescriptions anywhere', type: 'Tool' },
    ],
  },
  {
    id: 'gas',
    keywords: ['gas', 'gasoline', 'fuel', 'petrol', 'oil', 'energy', 'electricity', 'power', 'utility', 'solar', 'wind', 'renewable', 'carbon offset'],
    title: 'Energy & Fuel',
    avoidIds: ['exxon', 'chevron', 'shell', 'bp'],
    tips: [
      { name: 'Green Mountain Energy', url: 'https://greenmountainenergy.com', note: '100% renewable electricity for your home', type: 'Provider' },
      { name: 'Arcadia', url: 'https://arcadia.com', note: 'Switch your existing utility to clean energy', type: 'Provider' },
      { name: 'Community solar', url: 'https://www.energy.gov/energysaver/community-solar', note: 'Subscribe to a local solar farm', type: 'Provider' },
      { name: 'Drive less / take transit', url: 'https://www.transit.app', note: 'Transit app shows nearby public transit options', type: 'Local' },
    ],
  },
  {
    id: 'beauty',
    keywords: ['beauty', 'makeup', 'cosmetics', 'skincare', 'moisturizer', 'sunscreen', 'serum', 'foundation', 'lipstick', 'mascara', 'eyeshadow', 'shampoo', 'conditioner', 'hair', 'soap', 'body wash', 'shower', 'deodorant', 'perfume', 'cologne', 'fragrance', 'toothpaste', 'toothbrush', 'dental', 'lotion', 'face wash', 'toner', 'blush', 'concealer'],
    title: 'Beauty & Personal Care',
    avoidIds: ['nestle'],
    tips: [
      { name: 'Ethique', url: 'https://ethique.com', note: 'Zero-waste solid bars, B Corp certified', type: 'Brand' },
      { name: 'Dr. Bronner\'s', url: 'https://www.drbronners.com', note: 'Organic, fair trade, family-owned', type: 'Brand' },
      { name: 'Local apothecary / beauty shops', url: 'https://www.yelp.com/search?find_desc=natural+beauty', note: 'Independent, curated natural brands', type: 'Local' },
      { name: 'EWG\'s Skin Deep', url: 'https://www.ewg.org/skindeep/', note: 'Free database to verify any product\'s safety', type: 'Tool' },
    ],
  },
  {
    id: 'furniture',
    keywords: ['furniture', 'couch', 'sofa', 'chair', 'table', 'desk', 'bed', 'dresser', 'bookshelf', 'shelf', 'cabinet', 'mattress', 'bedding', 'sheets', 'pillow', 'towel', 'curtain', 'rug', 'lamp', 'home decor', 'home goods', 'kitchen', 'cookware', 'pots', 'pans', 'knife', 'cutlery', 'cleaning', 'mop', 'vacuum', 'laundry'],
    title: 'Home & Furniture',
    avoidIds: ['amazon', 'walmart'],
    tips: [
      { name: 'Facebook Marketplace / Craigslist', url: 'https://www.facebook.com/marketplace', note: 'Used furniture — lowest carbon footprint', type: 'Local' },
      { name: 'IKEA (with caveats)', url: 'https://www.ikea.com', note: 'Better sustainability than most, buy used IKEA on marketplace', type: 'Chain' },
      { name: 'Habitat for Humanity ReStores', url: 'https://www.habitat.org/restores', note: 'Donated furniture at low prices, supports housing charity', type: 'Local' },
      { name: 'Local antique / thrift shops', url: 'https://www.yelp.com/search?find_desc=antique+furniture', note: 'Unique, sustainable, supports local shops', type: 'Local' },
    ],
  },
  {
    id: 'travel',
    keywords: ['hotel', 'accommodation', 'stay', 'airbnb', 'hostel', 'motel', 'flight', 'airline', 'travel', 'car rental', 'luggage', 'suitcase', 'backpack', 'vacation', 'trip'],
    title: 'Travel & Accommodation',
    avoidIds: ['airbnb'],
    tips: [
      { name: 'Local / boutique hotels', url: 'https://www.yelp.com/search?find_desc=hotels', note: 'Unionized staff, proper employment, local ownership', type: 'Local' },
      { name: 'Fairbnb', url: 'https://fairbnb.coop', note: 'Co-op home sharing — 50% of fees go to local communities', type: 'Online' },
      { name: 'Amtrak / train travel', url: 'https://www.amtrak.com', note: 'Far lower carbon footprint than flying', type: 'Chain' },
    ],
  },
]

// Specific product hints: matched BEFORE broad category keywords
export const productHints = [
  // Electronics specifics
  {
    keywords: ['stylus', 'apple pencil', 'surface pen', 'digital pen', 'drawing pen', 'wacom', 'graphics tablet', 'drawing tablet'],
    categoryId: 'electronics',
    note: 'For styluses and drawing tablets, buy directly from the device or brand manufacturer (apple.com, wacom.com, samsung.com) rather than Amazon — counterfeits are widespread on Amazon marketplace.',
    pinnedAlts: [
      { name: 'Wacom direct', url: 'https://www.wacom.com', note: 'Buy directly from Wacom — ethically made, industry standard', type: 'Brand' },
    ],
  },
  {
    keywords: ['charger', 'cable', 'lightning cable', 'usb cable', 'usb-c cable', 'charging cable', 'power adapter', 'power brick', 'laptop charger', 'phone charger'],
    categoryId: 'electronics',
    note: 'Cheap third-party chargers on Amazon are often counterfeit and can damage devices or cause fires. Buy from the device manufacturer, Anker, or a reputable electronics store.',
    pinnedAlts: [
      { name: 'Anker (direct)', url: 'https://www.anker.com', note: 'Reliable, affordable chargers — better than Amazon knockoffs', type: 'Brand' },
    ],
  },
  {
    keywords: ['laptop', 'notebook computer', 'macbook', 'chromebook', 'gaming laptop', 'ultrabook'],
    categoryId: 'electronics',
    note: 'Consider a repairable laptop (Framework) or refurbished model before buying new. Refurbished MacBooks from Apple.com come with warranty.',
    pinnedAlts: [
      { name: 'Framework Laptop', url: 'https://frame.work', note: 'Modular, repairable — anti-planned-obsolescence', type: 'Brand' },
      { name: 'Apple Refurbished', url: 'https://www.apple.com/shop/refurbished', note: 'Certified refurbished with warranty, lower carbon', type: 'Online' },
    ],
  },
  {
    keywords: ['phone', 'iphone', 'smartphone', 'android phone', 'pixel', 'samsung phone', 'mobile phone', 'cell phone'],
    categoryId: 'electronics',
    note: 'Smartphones are one of the highest-impact purchases environmentally. Buying refurbished saves ~70% of the carbon footprint vs. a new device.',
    pinnedAlts: [
      { name: 'Back Market (refurbished)', url: 'https://www.backmarket.com', note: 'Certified refurbished phones with warranty', type: 'Online' },
      { name: 'Fairphone', url: 'https://fairphone.com', note: 'Ethically sourced, designed to be repaired', type: 'Brand' },
    ],
  },
  {
    keywords: ['headphones', 'earbuds', 'airpods', 'earphones', 'wireless earbuds', 'over-ear headphones', 'noise cancelling'],
    categoryId: 'electronics',
    note: 'Refurbished headphones work identically to new ones at a fraction of the price and carbon cost. Check Back Market or the manufacturer\'s certified refurbished store.',
    pinnedAlts: [
      { name: 'Back Market (refurbished)', url: 'https://www.backmarket.com', note: 'Certified refurbished headphones with warranty', type: 'Online' },
    ],
  },
  {
    keywords: ['gaming', 'video game', 'console', 'xbox', 'playstation', 'ps5', 'ps4', 'nintendo', 'switch', 'game controller', 'steam'],
    categoryId: 'electronics',
    note: 'Buying used games and consoles is the most ethical choice. Local game stores and platforms like eBay/Facebook Marketplace are better than buying new from Amazon.',
    pinnedAlts: [
      { name: 'Local used game stores', url: 'https://www.yelp.com/search?find_desc=video+game+store', note: 'Support local shops, buy used games', type: 'Local' },
      { name: 'eBay (used)', url: 'https://www.ebay.com', note: 'Secondhand consoles and games', type: 'Online' },
    ],
  },
  {
    keywords: ['tv', 'television', 'smart tv', '4k tv', 'oled', 'qled', 'monitor', 'computer monitor', 'gaming monitor', 'curved monitor'],
    categoryId: 'electronics',
    note: 'Large screens have a significant carbon footprint. Consider refurbished, or buy from a manufacturer\'s direct outlet rather than Amazon.',
    pinnedAlts: [
      { name: 'Back Market (refurbished)', url: 'https://www.backmarket.com', note: 'Refurbished TVs and monitors with warranty', type: 'Online' },
    ],
  },
  // Clothing specifics
  {
    keywords: ['jeans', 'denim', 'denim jacket', 'denim shorts'],
    categoryId: 'clothing',
    note: 'Denim production is one of the most water-intensive and polluting textile processes. Secondhand jeans or ethical denim brands are far better choices.',
    pinnedAlts: [
      { name: 'Nudie Jeans', url: 'https://www.nudiejeans.com', note: 'Organic cotton, free lifetime repairs, transparent supply chain', type: 'Brand' },
      { name: 'ThredUp (denim)', url: 'https://www.thredup.com/jeans', note: 'Thousands of secondhand jeans', type: 'Online' },
    ],
  },
  {
    keywords: ['running shoes', 'hiking boots', 'hiking shoes', 'trail shoes', 'work boots', 'steel toe'],
    categoryId: 'shoes',
    note: 'For outdoor and work footwear, quality matters more than price. Cheap fast-fashion boots fall apart quickly and end up in landfill. Buy once, buy good.',
    pinnedAlts: [
      { name: 'Patagonia footwear', url: 'https://www.patagonia.com/footwear/', companyId: 'patagonia', note: 'Ethical, durable outdoor footwear', type: 'Brand' },
      { name: 'Danner', url: 'https://www.danner.com', note: 'USA-made work boots, repairable', type: 'Brand' },
    ],
  },
  // Food specifics
  {
    keywords: ['chocolate', 'cocoa', 'dark chocolate', 'milk chocolate', 'candy bar', 'sweets', 'confectionery'],
    categoryId: 'groceries',
    note: 'Most major chocolate brands (Nestlé, Mars, Hershey) have documented child labor in their cocoa supply chains. Certified fair trade chocolate is widely available.',
    pinnedAlts: [
      { name: "Tony's Chocolonely", url: 'https://tonyschocolonely.com', note: '100% slave-free certified, industry leading', type: 'Brand' },
      { name: 'Alter Eco', url: 'https://alterecofoods.com', note: 'Fair trade, organic, B Corp', type: 'Brand' },
      { name: 'Endangered Species Chocolate', url: 'https://chocolatebar.com', note: '10% of profit to wildlife conservation', type: 'Brand' },
    ],
  },
  {
    keywords: ['coffee beans', 'ground coffee', 'espresso beans', 'roasted coffee', 'coffee pods', 'k-cup', 'nespresso pods'],
    categoryId: 'coffee',
    note: 'Fair trade and direct trade coffee ensures farmers get paid fairly. Avoid cheap supermarket coffee — the price difference reflects real labor exploitation.',
    pinnedAlts: [
      { name: 'Equal Exchange', url: 'https://equalexchange.coop', note: 'Worker co-op, direct trade with farmer co-ops', type: 'Brand' },
      { name: 'Counter Culture Coffee', url: 'https://counterculturecoffee.com', note: 'Direct trade, high transparency', type: 'Brand' },
    ],
  },
  {
    keywords: ['protein powder', 'protein shake', 'whey protein', 'plant protein', 'supplements', 'creatine', 'pre-workout', 'bcaa', 'vitamins'],
    categoryId: 'groceries',
    note: 'The supplement industry is largely unregulated. Look for NSF Certified for Sport or third-party tested products from brands with transparent sourcing.',
    pinnedAlts: [
      { name: 'Thorne', url: 'https://www.thorne.com', note: 'NSF certified, pharmaceutical-grade manufacturing', type: 'Brand' },
      { name: 'Garden of Life', url: 'https://www.gardenoflife.com', note: 'Certified organic, non-GMO, B Corp', type: 'Brand' },
    ],
  },
  {
    keywords: ['beer', 'wine', 'alcohol', 'spirits', 'whiskey', 'rum', 'vodka', 'craft beer', 'local beer', 'cider'],
    categoryId: 'groceries',
    note: 'Local craft breweries and wineries keep money in your community and have far smaller carbon footprints than global brands.',
    pinnedAlts: [
      { name: 'Local craft breweries', url: 'https://www.yelp.com/search?find_desc=craft+brewery', note: 'Search for taprooms and bottle shops near you', type: 'Local' },
      { name: 'Vivino (wine)', url: 'https://www.vivino.com', note: 'Find small-producer wines at local shops', type: 'Tool' },
    ],
  },
  // Beauty specifics
  {
    keywords: ['shampoo', 'conditioner', 'hair care', 'hair product', 'dry shampoo', 'hair mask', 'hair oil'],
    categoryId: 'beauty',
    note: 'Most drugstore shampoos are made by Unilever, P&G, or Henkel — large conglomerates. Independent brands tend to have cleaner ingredients and more ethical supply chains.',
    pinnedAlts: [
      { name: 'Ethique shampoo bars', url: 'https://ethique.com', note: 'Zero-waste, no plastic, B Corp certified', type: 'Brand' },
      { name: 'Plaine Products', url: 'https://www.plaineproducts.com', note: 'Refillable aluminum bottles, all-natural', type: 'Brand' },
    ],
  },
  {
    keywords: ['sunscreen', 'spf', 'sun protection', 'tanning'],
    categoryId: 'beauty',
    note: 'Many conventional sunscreens contain chemicals harmful to coral reefs. Look for mineral (zinc oxide/titanium dioxide) sunscreens in recyclable packaging.',
    pinnedAlts: [
      { name: 'Raw Elements', url: 'https://www.rawelementsusa.com', note: 'Reef-safe, non-nano zinc, plastic-free tin', type: 'Brand' },
      { name: 'All Good', url: 'https://allgoodproducts.com', note: 'Reef-safe, B Corp certified', type: 'Brand' },
    ],
  },
  // Home specifics
  {
    keywords: ['mattress', 'bed', 'bedding', 'sheets', 'pillow', 'duvet', 'comforter', 'blanket'],
    categoryId: 'furniture',
    note: 'The mattress industry is notorious for greenwashing. Look for GOTS-certified organic cotton or GOLS-certified organic latex.',
    pinnedAlts: [
      { name: 'Avocado Green Mattress', url: 'https://www.avocadomattress.com', note: 'Certified organic, B Corp, made in USA', type: 'Brand' },
      { name: 'Saatva', url: 'https://www.saatva.com', note: 'American-made, takes back old mattresses for recycling', type: 'Brand' },
    ],
  },
  {
    keywords: ['cleaning supplies', 'cleaner', 'cleaning products', 'all purpose cleaner', 'dish soap', 'laundry detergent', 'mop', 'sponge'],
    categoryId: 'furniture',
    note: 'Most cleaning products are made by a handful of conglomerates. Concentrated or refillable options are better for the environment and often cheaper.',
    pinnedAlts: [
      { name: 'Blueland', url: 'https://www.blueland.com', note: 'Refillable tablets, no single-use plastic', type: 'Brand' },
      { name: "Dr. Bronner's", url: 'https://www.drbronners.com', note: 'Multi-purpose, fair trade, organic', type: 'Brand' },
    ],
  },
]

export function findBestMatch(query) {
  if (!query.trim()) return { category: null, hint: null }
  const q = query.toLowerCase().trim()

  // Check specific product hints first (more precise)
  for (const hint of productHints) {
    const matched = hint.keywords.find(kw => q.includes(kw) || kw.includes(q))
    if (matched) {
      const category = finderCategories.find(c => c.id === hint.categoryId) ?? null
      return { category, hint }
    }
  }

  // Fall back to broad category keyword matching
  const category = finderCategories.find(cat =>
    cat.keywords.some(kw => q.includes(kw) || kw.includes(q))
  ) ?? null

  return { category, hint: null }
}
