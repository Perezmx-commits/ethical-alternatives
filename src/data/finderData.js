export const finderCategories = [
  {
    id: 'books',
    keywords: ['book', 'books', 'novel', 'reading', 'textbook', 'ebook', 'kindle', 'audiobook'],
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
    keywords: ['coffee', 'cafe', 'espresso', 'latte', 'cappuccino', 'tea', 'barista', 'cafe'],
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
    keywords: ['clothing', 'clothes', 'fashion', 'shirt', 'shoes', 'jeans', 'jacket', 'dress', 'apparel', 'wear', 'pants', 'sweater', 'coat', 'socks'],
    title: 'Clothing & Fashion',
    avoidIds: ['shein', 'hm', 'zara'],
    tips: [
      { name: 'ThredUp', url: 'https://thredup.com', note: 'Online secondhand — huge selection at low prices', type: 'Online' },
      { name: 'Depop', url: 'https://depop.com', note: 'Peer-to-peer secondhand and vintage', type: 'Online' },
      { name: 'Poshmark', url: 'https://poshmark.com', note: 'Resell and buy secondhand clothing', type: 'Online' },
      { name: 'Patagonia', url: 'https://patagonia.com', companyId: 'patagonia', note: 'B Corp certified, ethical manufacturing, repair program', type: 'Brand' },
      { name: 'Local thrift stores', url: 'https://www.goodwill.org', note: 'Search Goodwill near you', type: 'Local' },
      { name: 'Veja', url: 'https://veja-store.com', note: 'Ethical sneakers, fair trade sourced', type: 'Brand' },
    ],
  },
  {
    id: 'electronics',
    keywords: ['electronics', 'laptop', 'computer', 'phone', 'tablet', 'headphones', 'tech', 'gadget', 'tv', 'monitor', 'keyboard', 'mouse', 'charger'],
    title: 'Electronics',
    avoidIds: ['amazon'],
    tips: [
      { name: 'Newegg', url: 'https://newegg.com', note: 'Electronics-focused, no major labor scandals', type: 'Online' },
      { name: 'Framework Laptop', url: 'https://frame.work', note: 'Repairable, sustainable laptops — right to repair', type: 'Brand' },
      { name: 'Fairphone', url: 'https://fairphone.com', note: 'Ethically sourced, repairable smartphones', type: 'Brand' },
      { name: 'Back Market', url: 'https://www.backmarket.com', note: 'Certified refurbished electronics — buy used first', type: 'Online' },
      { name: 'Local computer repair shops', url: 'https://www.yelp.com/search?find_desc=computer+repair', note: 'Repair first, replace second', type: 'Local' },
    ],
  },
  {
    id: 'groceries',
    keywords: ['grocery', 'groceries', 'food', 'supermarket', 'produce', 'vegetables', 'fruit', 'meat', 'snacks', 'dairy', 'eggs', 'bread'],
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
    keywords: ['bank', 'banking', 'savings', 'checking', 'account', 'mortgage', 'loan', 'credit card', 'finance', 'money'],
    title: 'Banking & Finance',
    avoidIds: ['jpmorgan', 'wellsfargo', 'bankofamerica'],
    tips: [
      { name: 'Local credit unions', url: 'https://www.mycreditunion.gov', note: 'Nonprofit, member-owned — profit returned to members', type: 'Local' },
      { name: 'Amalgamated Bank', url: 'https://amalgamatedbank.com', note: 'Union-owned, ethical banking, no fossil fuel financing', type: 'Chain' },
      { name: 'Beneficial State Bank', url: 'https://beneficialstatebank.com', note: 'B Corp certified bank, mission-driven lending', type: 'Chain' },
      { name: 'Online credit unions', url: 'https://www.alliantcreditunion.org', note: 'Alliant CU — great rates, ethical structure', type: 'Online' },
    ],
  },
  {
    id: 'pharmacy',
    keywords: ['pharmacy', 'medicine', 'drugs', 'prescription', 'medication', 'pills', 'health', 'pharmacy'],
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
    keywords: ['gas', 'gasoline', 'fuel', 'petrol', 'oil', 'energy', 'electricity', 'power', 'utility'],
    title: 'Energy & Fuel',
    avoidIds: ['exxon', 'chevron', 'shell', 'bp'],
    tips: [
      { name: 'Green Mountain Energy', url: 'https://greenmountainenergy.com', note: '100% renewable electricity for your home', type: 'Provider' },
      { name: 'Arcadia', url: 'https://arcadia.com', note: 'Switch your existing utility to clean energy', type: 'Provider' },
      { name: 'Community solar', url: 'https://www.energy.gov/energysaver/community-solar', note: 'Subscribe to a local solar farm', type: 'Provider' },
      { name: 'Drive less / take transit', url: 'https://www.transit.app', note: 'Transit app shows nearby public transit options', type: 'Local' },
    ],
  },
]

export function findCategory(query) {
  if (!query.trim()) return null
  const q = query.toLowerCase()
  return finderCategories.find(cat =>
    cat.keywords.some(kw => q.includes(kw))
  ) ?? null
}
