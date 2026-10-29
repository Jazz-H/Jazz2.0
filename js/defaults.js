// defaults.js - Default data that seeds localStorage on first run (everything is editable in-app afterwards).
// Classic script: shares one global scope with the other js/*.js files (load order is in jazz2.0.html).

// ---------- DEFAULT DATA (seeds localStorage on first run; everything below is editable in-app after) ----------

const DEFAULT_SKIN_RULES = [];
// The original three rules, removed from saved lists on load (see loadAllContent)
const RETIRED_SKIN_RULES = [
  "Vitamin C (AM) and Glycolic Acid (PM) are fine same day — just never same session.",
  "SPF is the final AM step, no exceptions, even indoors.",
  "Multi-Peptide Lash & Brow Serum is always the very last PM step."
];

const DEFAULT_SKIN_DAYS = [
  {
    day:"Monday",
    am:[
      ["Cleanse","Glucoside Foaming Cleanser"],
      ["Vitamin C","Ascorbyl Glucoside 12%"],
      ["Niacinamide","10% + Zinc"],
      ["Moisturize","Natural Moisturizing Factors + HA"],
      ["Hair mist","Locsanity Passion Fruit Daily Spray"],
      ["SPF — last step","Black Girl Sunscreen SPF 30"]
    ],
    pm:[
      ["Cleanse","Glucoside Foaming Cleanser"],
      ["Exfoliate","Glycolic Acid 7%","Mon / Wed / Fri only"],
      ["Niacinamide","10% + Zinc"],
      ["Moisturize","Natural Moisturizing Factors + HA"],
      ["Eye area","Caffeine Solution 5% + EGCG"],
      ["Hair mist","Locsanity Passion Fruit Daily Spray"],
      ["Lash/brow — last step","Multi-Peptide Lash & Brow Serum"]
    ]
  },
  {
    day:"Tuesday",
    am:[
      ["Cleanse","Glucoside Foaming Cleanser"],
      ["Vitamin C","Ascorbyl Glucoside 12%"],
      ["Niacinamide","10% + Zinc"],
      ["Moisturize","Natural Moisturizing Factors + HA"],
      ["Hair mist","Locsanity Passion Fruit Daily Spray"],
      ["SPF — last step","Black Girl Sunscreen SPF 30"]
    ],
    pm:[
      ["Cleanse","Glucoside Foaming Cleanser"],
      ["Niacinamide","10% + Zinc"],
      ["Moisturize","Natural Moisturizing Factors + HA"],
      ["Eye area","Caffeine Solution 5% + EGCG"],
      ["Hair mist","Locsanity Passion Fruit Daily Spray"],
      ["Lash/brow — last step","Multi-Peptide Lash & Brow Serum"]
    ]
  },
  {
    day:"Wednesday",
    am:[
      ["Cleanse","Glucoside Foaming Cleanser"],
      ["Vitamin C","Ascorbyl Glucoside 12%"],
      ["Niacinamide","10% + Zinc"],
      ["Moisturize","Natural Moisturizing Factors + HA"],
      ["Hair mist","Locsanity Passion Fruit Daily Spray"],
      ["SPF — last step","Black Girl Sunscreen SPF 30"]
    ],
    pm:[
      ["Cleanse","Glucoside Foaming Cleanser"],
      ["Exfoliate","Glycolic Acid 7%","Mon / Wed / Fri only"],
      ["Niacinamide","10% + Zinc"],
      ["Moisturize","Natural Moisturizing Factors + HA"],
      ["Eye area","Caffeine Solution 5% + EGCG"],
      ["Hair mist","Locsanity Passion Fruit Daily Spray"],
      ["Lash/brow — last step","Multi-Peptide Lash & Brow Serum"]
    ]
  },
  {
    day:"Thursday",
    am:[
      ["Cleanse","Glucoside Foaming Cleanser"],
      ["Vitamin C","Ascorbyl Glucoside 12%"],
      ["Niacinamide","10% + Zinc"],
      ["Moisturize","Natural Moisturizing Factors + HA"],
      ["Hair mist","Locsanity Passion Fruit Daily Spray"],
      ["SPF — last step","Black Girl Sunscreen SPF 30"]
    ],
    pmWash:[
      ["Wash day","Dollylocks Clarifying Shampoo"],
      ["Mask","Mielle Rosemary Mint Strengthening Hair Mask"],
      ["Cleanse","Glucoside Foaming Cleanser"],
      ["Niacinamide","10% + Zinc"],
      ["Moisturize","Natural Moisturizing Factors + HA"],
      ["Lash/brow — last step","Multi-Peptide Lash & Brow Serum"]
    ],
    pm:[
      ["Cleanse","Glucoside Foaming Cleanser"],
      ["Niacinamide","10% + Zinc"],
      ["Moisturize","Natural Moisturizing Factors + HA"],
      ["Eye area","Caffeine Solution 5% + EGCG"],
      ["Hair mist","Locsanity Passion Fruit Daily Spray"],
      ["Lash/brow — last step","Multi-Peptide Lash & Brow Serum"]
    ]
  },
  {
    day:"Friday",
    am:[
      ["Cleanse","Glucoside Foaming Cleanser"],
      ["Vitamin C","Ascorbyl Glucoside 12%"],
      ["Niacinamide","10% + Zinc"],
      ["Moisturize","Natural Moisturizing Factors + HA"],
      ["Hair mist","Locsanity Passion Fruit Daily Spray"],
      ["SPF — last step","Black Girl Sunscreen SPF 30"]
    ],
    pm:[
      ["Cleanse","Glucoside Foaming Cleanser"],
      ["Exfoliate","Glycolic Acid 7%","Mon / Wed / Fri only"],
      ["Niacinamide","10% + Zinc"],
      ["Moisturize","Natural Moisturizing Factors + HA"],
      ["Eye area","Caffeine Solution 5% + EGCG"],
      ["Hair mist","Locsanity Passion Fruit Daily Spray"],
      ["Lash/brow — last step","Multi-Peptide Lash & Brow Serum"]
    ]
  },
  {
    day:"Saturday",
    am:[
      ["Cleanse","Glucoside Foaming Cleanser"],
      ["Vitamin C","Ascorbyl Glucoside 12%"],
      ["Niacinamide","10% + Zinc"],
      ["Moisturize","Natural Moisturizing Factors + HA"],
      ["Hair mist","Locsanity Passion Fruit Daily Spray"],
      ["SPF — last step","Black Girl Sunscreen SPF 30"]
    ],
    pm:[
      ["Cleanse","Glucoside Foaming Cleanser"],
      ["Niacinamide","10% + Zinc"],
      ["Moisturize","Natural Moisturizing Factors + HA"],
      ["Eye area","Caffeine Solution 5% + EGCG"],
      ["Hair mist","Locsanity Passion Fruit Daily Spray"],
      ["Lash/brow — last step","Multi-Peptide Lash & Brow Serum"]
    ]
  },
  {
    day:"Sunday",
    am:[
      ["Cleanse","Glucoside Foaming Cleanser"],
      ["Vitamin C","Ascorbyl Glucoside 12%"],
      ["Niacinamide","10% + Zinc"],
      ["Moisturize","Natural Moisturizing Factors + HA"],
      ["Hair mist","Locsanity Passion Fruit Daily Spray"],
      ["SPF — last step","Black Girl Sunscreen SPF 30"]
    ],
    pm:[
      ["Cleanse","Glucoside Foaming Cleanser"],
      ["Niacinamide","10% + Zinc"],
      ["Moisturize","Natural Moisturizing Factors + HA"],
      ["Eye area","Caffeine Solution 5% + EGCG"],
      ["Hair mist","Locsanity Passion Fruit Daily Spray"],
      ["Lash/brow — last step","Multi-Peptide Lash & Brow Serum"]
    ]
  }
];

const DEFAULT_STYLE_RULES = [
  "Front-tuck oxfords/shirts to work with the short torso.",
  "Chinos and dress pants are always Tall/Long inseam.",
  "Bottoms size to the hips, not the waist.",
  "Avoid oversized or drop-shoulder cuts.",
  "Ankle-length dress pants = business casual only, worn with no-show socks and loafers — never sneakers.",
  "White sneakers or tan/brown loafers pair better than black shoes with muted or sage green."
];

const DEFAULT_SIZES = [
  ["Tops","XS–S"],["Outerwear","XXS"],
  ["Bottoms","4 Tall/Long"],["Denim","4/27 Long"],
  ["Shoes","7.5M"],["Ring","5–7*"]
];

const CAP_CATS = ["Tops","Bottoms","Shoes","Outerwear","Accessories"];

const DEFAULT_CAPSULE = [
  {id:"tee-hgrey", title:"Crew tee — heather grey", state:"owned", cat:"Tops"},
  {id:"tee-plum", title:"Crew tee — plum", state:"owned", cat:"Tops"},
  {id:"tee-black", title:"Crew tee — black", state:"owned", cat:"Tops"},
  {id:"polo-coke", title:"Coca-Cola graphic polo", state:"owned", cat:"Tops"},
  {id:"jeans-dark", title:"Dark-wash slim jeans", sub:"4/27 Long", state:"owned", cat:"Bottoms"},
  {id:"shorts-khaki", title:"Downtown Khaki shorts", state:"owned", cat:"Bottoms"},
  {id:"shorts-bermuda", title:"Bermuda shorts", state:"owned", cat:"Bottoms"},
  {id:"tank-white", title:"Timeless Tank — white", state:"owned", cat:"Tops"},
  {id:"tank-black", title:"Timeless Tank — black", state:"owned", cat:"Tops"},
  {id:"tank-stripe", title:"Timeless Tank — stripe", state:"owned", cat:"Tops"},
  {id:"top-capsleeve", title:"Collared cap-sleeve top", state:"owned", cat:"Tops"},
  {id:"pants-khaki", title:"High-Waisted Uniform Skinny Pants — khaki (Mocha Taffy)", sub:"4 Tall", state:"pending", cat:"Bottoms"},
  {id:"pants-black", title:"High-Waisted Uniform Skinny Pants — black", sub:"4 Tall", state:"pending", cat:"Bottoms"},
  {id:"button-white", title:"Classic Button-Down — white", sub:"Petite XS", state:"owned", cat:"Tops"},
  {id:"chambray", title:"Chambray denim shirt", state:"owned", cat:"Tops"},
  {id:"shoe-vans-loafer", title:"Black Vans loafers", state:"owned", cat:"Shoes"},
  {id:"shoe-dressloafer", title:"Dress-up loafers", state:"owned", cat:"Shoes"},
  {id:"shoe-timbs", title:"Timberlands — black/tan", state:"owned", cat:"Shoes"},
  {id:"shoe-chelsea", title:"Black Chelsea boots", state:"owned", cat:"Shoes"},
  {id:"shoe-vans", title:"Black Vans", state:"owned", cat:"Shoes"},
  {id:"shoe-nike", title:"Nike low tops — black/white", state:"owned", cat:"Shoes"},
  {id:"shoe-airmax", title:"Air Max Bia — black/white", state:"owned", cat:"Shoes"},
  {id:"shoe-adidas", title:"Adidas Swift Run — white", state:"owned", cat:"Shoes"},
  {id:"acc-chain", title:"Cuban link chain", state:"owned", cat:"Accessories"},
  {id:"acc-watch", title:"Galaxy Watch S8", state:"owned", cat:"Accessories"},
  {id:"acc-bag", title:"Black crossbody bag", state:"owned", cat:"Accessories"},
  {id:"acc-belt", title:"Black belt", state:"owned", cat:"Accessories"},
  {id:"need-oxford", title:"Light blue oxford", sub:"J.Crew Factory, Petite XS", state:"needed", cat:"Tops"},
  {id:"need-blazer", title:"Structured blazer", sub:"Full-price Banana Republic", state:"needed", cat:"Outerwear"},
  {id:"need-belt-brown", title:"Brown/cognac belt", price:20, estimated:true, state:"needed", cat:"Accessories"},
  {id:"need-coach", title:"Coach jacket — black", sub:"Olive secondary", state:"needed", cat:"Outerwear"},
  {id:"need-chinos", title:"Charcoal slim chinos", sub:"Gap or BR Factory, Tall inseam", state:"needed", cat:"Bottoms"},
  {id:"need-chino-shorts", title:"Slim chino shorts — navy/olive/charcoal/white", sub:"Nice to have", state:"needed", cat:"Bottoms"}
];

const DEFAULT_WANTS = [
  {id:"holster", name:"Cytac OWB Kydex Paddle Holster", meta:"Sig Sauer P365 (base model), right-hand", price:24.99,
   link:"https://www.amazon.com/CYTAC-Tactical-Security-R-Defender-CY-P365G3/dp/B08973W4QX"},
  {id:"instantpot", name:"Instant Pot Duo 3 Qt", meta:"", price:59.99,
   link:"https://instantpot.com/products/instant-pot-duo-mini-3qt-multi-use-pressure-cooker"},
  {id:"antora", name:"North Face Antora Jacket", meta:"Gray, XXS · Dick's Sporting Goods", price:130.00,
   link:"https://www.dickssportinggoods.com/p/the-north-face-womens-antora-jacket-21tnowwntrjcktxxxrnw/21tnowwntrjcktxxxrnw"},
  {id:"timberland", name:"Timberland Linden Woods Lace-Up Boot", meta:"Black, 7.5M · Rack Room Shoes", price:139.99,
   link:"https://www.rackroomshoes.com/p/timberland-womens-linden-woods-lace-up-boot/304623"},
  {id:"oura", name:"Oura Ring 5 + 1yr membership", meta:"Size 7 · wellness-device reimbursement eligible", price:468.99,
   link:"https://www.amazon.com/Oura-Ring-Smallest-Activity-Compatible/dp/B0GRJZX1D8"},
  {id:"belt-brown", name:"Brown leather belt, square buckle", meta:"Pending: merge with wardrobe belt? Price/link not locked in", price:20.00,
   link:"https://us.amazon.com/Leather-1-Pack-Classic-Square-Buckle/dp/B0GV2BGNC3", estimated:true}
];

const DEFAULT_TODO = [];

let skinRules, skinRoutine, routineChecks, styleRules, sizes, capsule, wantsList, todoList;

