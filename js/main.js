/* ============================================
   BIZPINIONS — Main JavaScript
   js/main.js
   All interactive logic for the site
   ============================================ */

// ── CONTENT INDEX (all 120 articles for search) ──
var CONTENT = [
  // START IT
  {title:"LLC vs S-Corp vs sole proprietor: which structure is right for you?",snippet:"For most small businesses, LLC is the right move — simple, flexible, protects personal assets. S-Corp makes sense once you're netting $40k+ and want to reduce self-employment tax.",pillar:"start",type:"Guide",time:"6 min",slug:"/start-it"},
  {title:"How to start a business with no money in 2026",snippet:"Service businesses, dropshipping, freelancing, and digital products all require near-zero capital. The real cost is time, not money.",pillar:"start",type:"Guide",time:"7 min",slug:"/start-it"},
  {title:"Do you need a business license? Here's the real answer",snippet:"It depends on your state, city, and industry. Most businesses need at least a general business license plus any industry-specific permits.",pillar:"start",type:"Guide",time:"4 min",slug:"/start-it"},
  {title:"How to get your EIN from the IRS — step by step",snippet:"Free at IRS.gov. Takes 5 minutes. You need it before you can open a business bank account or hire employees.",pillar:"start",type:"Guide",time:"3 min",slug:"/start-it"},
  {title:"How to open a business bank account: what banks won't tell you",snippet:"Bring your EIN, articles of incorporation, and ID. Never mix personal and business funds — ever.",pillar:"start",type:"Guide",time:"5 min",slug:"/start-it"},
  {title:"The 10 best businesses to start with under $10,000",snippet:"Cleaning, landscaping, pressure washing, mobile detailing, bookkeeping, social media management. All proven, all scalable, all under $10k.",pillar:"start",type:"Guide",time:"7 min",slug:"/start-it"},
  {title:"How to build business credit from zero",snippet:"Get a business credit card the day you open. Use it for everything. Pay in full monthly. Your business credit score starts building immediately.",pillar:"start",type:"Guide",time:"6 min",slug:"/start-it"},
  {title:"What is a business plan and do you really need one?",snippet:"If you're applying for an SBA loan — yes. For a small service business — a one-pager is enough.",pillar:"start",type:"Guide",time:"4 min",slug:"/start-it"},
  {title:"How to start a cleaning business from scratch in 2026",snippet:"$500-2,000 to start. First clients from Nextdoor and Facebook groups. Scale with employees once you have 10+ recurring clients.",pillar:"start",type:"Guide",time:"6 min",slug:"/start-it"},
  {title:"How to start an online business: 7 models that work right now",snippet:"Freelancing, digital products, dropshipping, affiliate sites, online courses, SaaS, and agency models. Ranked by startup cost and ceiling.",pillar:"start",type:"Guide",time:"8 min",slug:"/start-it"},
  // FUND IT
  {title:"SBA loan vs conventional loan: which should you choose in 2026?",snippet:"SBA wins for most small businesses — lower down payment, longer terms, rate caps. Go conventional only if you need funds in under 2 weeks.",pillar:"fund",type:"Guide",time:"7 min",slug:"/sba-loan-vs-conventional-loan"},
  {title:"How to get a small business loan with bad credit",snippet:"SBA microloans, CDFIs, and equipment financing are still available below 640. Here's the exact path.",pillar:"fund",type:"Guide",time:"6 min",slug:"/fund-it"},
  {title:"Working capital loans for small business: how to get funded fast",snippet:"Best options: SBA 7(a) line of credit, bank line of credit, or invoice factoring. MCA is almost never the right answer.",pillar:"fund",type:"Guide",time:"5 min",slug:"/fund-it"},
  {title:"SBA loan for franchise: everything you need to know",snippet:"SBA 7(a) is the most common franchise financing vehicle. You need 10-20% down, 680+ credit, and an FDD-approved franchise.",pillar:"fund",type:"Guide",time:"8 min",slug:"/fund-it"},
  {title:"SBA 7(a) loan explained: the most popular SBA program",snippet:"Covers almost any business purpose. Up to $5M, terms up to 25 years, rates capped at prime + 2.75%.",pillar:"fund",type:"Guide",time:"7 min",slug:"/fund-it"},
  {title:"SBA Express loan: how to get fast SBA funding in 36 hours",snippet:"Caps at $500k but closes in 36 hours vs 30-90 days for standard 7(a). Need speed without a predatory lender? This is the answer.",pillar:"fund",type:"Guide",time:"5 min",slug:"/fund-it"},
  {title:"SBA 504 loan: for real estate and major equipment",snippet:"Up to $5.5M, 10% down, 20-25 year terms. Best rates in the SBA portfolio for fixed assets.",pillar:"fund",type:"Guide",time:"6 min",slug:"/fund-it"},
  {title:"Merchant cash advance: what it is and exactly why to avoid it",snippet:"Effective APR regularly hits 100-300%. Daily repayment destroys cash flow. Almost never worth it.",pillar:"fund",type:"Guide",time:"5 min",slug:"/fund-it"},
  {title:"Startup business funding: every option for new businesses in 2026",snippet:"SBA microloans, CDFIs, equipment financing, angel investors, crowdfunding, ROBS. The full menu ranked by cost of capital.",pillar:"fund",type:"Guide",time:"8 min",slug:"/fund-it"},
  {title:"SBA commercial real estate loan: how it works in 2026",snippet:"SBA 504 — 10% down, 25-year term, below-market fixed rates. You must occupy 51% of the building.",pillar:"fund",type:"Guide",time:"7 min",slug:"/fund-it"},
  // RUN IT
  {title:"Best accounting software for small business in 2026 — ranked",snippet:"QuickBooks wins overall. Wave wins on price. FreshBooks wins for service businesses that invoice.",pillar:"run",type:"Guide",time:"6 min",slug:"/run-it"},
  {title:"How to automate your small business with AI tools in 2026",snippet:"ChatGPT, Zapier, HubSpot, Gusto. These four tools alone save 10+ hours per week for most owners.",pillar:"run",type:"Guide",time:"8 min",slug:"/run-it"},
  {title:"How to deal with a cash flow crisis before it kills your business",snippet:"Invoice immediately. Collect faster. Cut non-essentials. Get a line of credit before you need it.",pillar:"run",type:"Guide",time:"6 min",slug:"/run-it"},
  {title:"How to hire your first employee without making costly mistakes",snippet:"Get your EIN. Set up payroll before day one. Use Gusto or ADP — never do payroll manually.",pillar:"run",type:"Guide",time:"7 min",slug:"/run-it"},
  {title:"Best CRM software for small business owners in 2026 — ranked",snippet:"HubSpot wins for most. Pipedrive wins for pure sales pipeline. Salesforce is overkill under 50 employees.",pillar:"run",type:"Guide",time:"7 min",slug:"/run-it"},
  {title:"Social media marketing for business owners: what actually works",snippet:"Facebook and Instagram for local awareness, Google Business Profile for local search, LinkedIn for B2B.",pillar:"run",type:"Guide",time:"6 min",slug:"/run-it"},
  {title:"How to set up payroll for a small business: the complete guide",snippet:"Get your EIN. Choose Gusto at $40/month for the best value under 50 employees. First payroll takes 30 minutes.",pillar:"run",type:"Guide",time:"5 min",slug:"/run-it"},
  {title:"Email marketing for small business: beginner to advanced guide",snippet:"Your email list is your most valuable marketing asset. Start building it on day one.",pillar:"run",type:"Guide",time:"7 min",slug:"/run-it"},
  {title:"Business insurance: what you need and what you don't",snippet:"General liability is non-negotiable. Next Insurance is the best value for most small businesses.",pillar:"run",type:"Guide",time:"5 min",slug:"/run-it"},
  {title:"How to create a business budget that actually holds",snippet:"Zero-based budgeting beats percentage-based for small businesses. Every dollar gets a job.",pillar:"run",type:"Guide",time:"5 min",slug:"/run-it"},
  // BUY IT
  {title:"Is Chick-fil-A franchise worth the investment in 2026?",snippet:"Highest AUV in fast food. But you don't own it — you operate it. No equity. No resale.",pillar:"buy",type:"Guide",time:"9 min",slug:"/buy-it"},
  {title:"Top 10 fastest growing franchises in 2026 — ranked by actual ROI",snippet:"Home services dominate — cleaning, HVAC, pest control. Lower investment, recurring revenue.",pillar:"buy",type:"Guide",time:"8 min",slug:"/buy-it"},
  {title:"McDonald's franchise cost and profit: the real numbers for 2026",snippet:"$500k liquid minimum. Total investment $1M-$2.3M. Average owner-operator nets $150-200k annually.",pillar:"buy",type:"Guide",time:"8 min",slug:"/buy-it"},
  {title:"What is a franchise disclosure document (FDD) and how to read it",snippet:"23 items. Focus on Item 19 (financial performance), Item 20 (closures), and Item 21 (franchisor financials).",pillar:"buy",type:"Guide",time:"7 min",slug:"/buy-it"},
  {title:"How to buy an existing business: the complete step-by-step guide",snippet:"LOI first, then due diligence, then purchase agreement. SBA 7(a) is the most common financing.",pillar:"buy",type:"Guide",time:"8 min",slug:"/buy-it"},
  {title:"Best franchises under $50,000 to start in 2026",snippet:"Junk removal, cleaning services, mobile pet grooming, tutoring. All strong options under $50k.",pillar:"buy",type:"Guide",time:"7 min",slug:"/buy-it"},
  {title:"Is Amway still worth joining in 2026? We looked at the real income data",snippet:"73% of Amway IBOs reported zero profit. Average active IBO earned $766/year before expenses.",pillar:"buy",type:"Guide",time:"6 min",slug:"/buy-it"},
  {title:"Subway franchise review: pros, cons, and real owner opinions",snippet:"Low entry cost but high royalty (8%) and intense competition. Many locations struggle with profitability.",pillar:"buy",type:"Guide",time:"7 min",slug:"/buy-it"},
  {title:"How to do due diligence before buying any business",snippet:"Verify 3 years of financials. Talk to customers independently. Check for liens, lawsuits, tax issues.",pillar:"buy",type:"Guide",time:"9 min",slug:"/buy-it"},
  {title:"MLM vs franchise: the honest comparison nobody gives you",snippet:"Franchises offer real ownership with proven systems. MLMs offer income potential that few achieve.",pillar:"buy",type:"Guide",time:"6 min",slug:"/buy-it"},
  // SELL IT
  {title:"How to value a small business: the three methods that actually matter",snippet:"SDE multiple is most common under $5M. Most small businesses sell for 2-4x SDE.",pillar:"sell",type:"Guide",time:"7 min",slug:"/sell-it"},
  {title:"EBITDA vs SDE: which multiple to use to price your business",snippet:"Use SDE for businesses under $1M where the owner works in it. Use EBITDA for larger businesses.",pillar:"sell",type:"Guide",time:"5 min",slug:"/sell-it"},
  {title:"Business exit strategies: which one is right for your situation?",snippet:"Strategic sale, financial buyer, ESOP, family transfer — each has different tax implications.",pillar:"sell",type:"Guide",time:"6 min",slug:"/sell-it"},
  {title:"How to prepare your business for sale 2 years in advance",snippet:"Clean financials. Reduce owner dependence. Diversify customer base. Lock in key employees.",pillar:"sell",type:"Guide",time:"7 min",slug:"/sell-it"},
  {title:"How to sell a business without a broker",snippet:"BizBuySell, BizQuest, and direct outreach. A broker takes 8-12% — selling direct often makes more sense.",pillar:"sell",type:"Guide",time:"6 min",slug:"/sell-it"},
  {title:"How much is my business worth? Use this formula",snippet:"SDE x industry multiple. Industry multiples range from 1.5x (retail) to 4x+ (SaaS).",pillar:"sell",type:"Guide",time:"5 min",slug:"/sell-it"},
  {title:"How taxes work when you sell a business — what sellers always get wrong",snippet:"Asset vs stock sale has massive tax implications. Talk to a CPA 12 months before you sell.",pillar:"sell",type:"Guide",time:"8 min",slug:"/sell-it"},
  {title:"Seller financing explained: how to sell and get paid over time",snippet:"Offering 10-30% seller financing increases your buyer pool and can increase your sale price 10-20%.",pillar:"sell",type:"Guide",time:"5 min",slug:"/sell-it"},
  {title:"Asset sale vs stock sale: the difference that costs sellers money",snippet:"Buyers prefer asset sales. Sellers often prefer stock sales for tax reasons. Always negotiable.",pillar:"sell",type:"Guide",time:"5 min",slug:"/sell-it"},
  {title:"Best marketplaces to list a business for sale in 2026",snippet:"BizBuySell leads for volume. Acquire.com for online businesses. Axial for middle market.",pillar:"sell",type:"Guide",time:"5 min",slug:"/sell-it"},
  // THE VERDICT
  {title:"Gusto review 2026: is it actually worth $40/month for small business?",snippet:"Yes — Gusto is worth it for most businesses with 1-100 employees. Score: 9.2/10.",pillar:"verdict",type:"Review",time:"8 min",slug:"/gusto-review"},
  {title:"Gusto vs Rippling: which payroll platform is worth it?",snippet:"Gusto wins for businesses under 100 employees. Rippling only if you need deep HR integrations.",pillar:"verdict",type:"Comparison",time:"8 min",slug:"/the-verdict"},
  {title:"HubSpot vs Salesforce: which CRM wins for small business?",snippet:"HubSpot wins for most small businesses. Salesforce is overbuilt and overpriced under 50 employees.",pillar:"verdict",type:"Comparison",time:"12 min",slug:"/the-verdict"},
  {title:"QuickBooks vs FreshBooks vs Wave: which wins for small business?",snippet:"QuickBooks wins on features. Wave wins on price (free). FreshBooks is best for service businesses.",pillar:"verdict",type:"Comparison",time:"6 min",slug:"/the-verdict"},
  {title:"Merchant cash advances: why you should almost never use one",snippet:"Effective APR often exceeds 100-300%. Score: 2.1/10. We cover the rare cases where it makes sense.",pillar:"verdict",type:"Warning",time:"5 min",slug:"/the-verdict"},
  {title:"Best CRM for mortgage loan officers in 2026 — ranked",snippet:"HubSpot wins for most loan officers — free to start, scales well, no setup fee.",pillar:"verdict",type:"Best of",time:"10 min",slug:"/the-verdict"},
  {title:"Birdeye vs Podium: honest take for mortgage and lending companies",snippet:"Podium edges Birdeye for mortgage companies. Birdeye is better for multi-location retail.",pillar:"verdict",type:"Comparison",time:"7 min",slug:"/the-verdict"},
  {title:"Best SBA lenders for small business in 2026 — ranked and reviewed",snippet:"Live Oak Bank leads for SBA volume and speed. Avoid any lender charging origination above 3%.",pillar:"verdict",type:"Best of",time:"11 min",slug:"/the-verdict"},
  {title:"Best payroll software for small business in 2026 — ranked",snippet:"Gusto wins for most under 100 employees. ADP is better near 100+. Skip Paychex for small business.",pillar:"verdict",type:"Best of",time:"9 min",slug:"/the-verdict"}
];

var RELATED_SEARCHES = ["SBA loan","franchise reviews","best CRM software","payroll software","how to start a business","working capital loans","how to sell a business","business valuation","Gusto review","QuickBooks vs FreshBooks","Chick-fil-A franchise","merchant cash advance","business exit strategy"];

// ── SEARCH FUNCTIONS ──
function getQueryParam(name) {
  var regex = new RegExp('[?&]' + name + '=([^&#]*)');
  var results = regex.exec(window.location.href);
  return results ? decodeURIComponent(results[1].replace(/\+/g, ' ')) : '';
}

function highlightText(text, query) {
  if (!query) return text;
  var words = query.toLowerCase().split(' ').filter(function(w) { return w.length > 2; });
  var result = text;
  words.forEach(function(word) {
    var regex = new RegExp('(' + word + ')', 'gi');
    result = result.replace(regex, '<mark>$1</mark>');
  });
  return result;
}

function getPillarLabel(pillar) {
  var labels = { start:'🚀 Start it', fund:'💰 Fund it', run:'⚙️ Run it', buy:'🏪 Buy it', sell:'🏁 Sell it', verdict:'⚖️ The Verdict' };
  return labels[pillar] || pillar;
}

function getBadgeClass(pillar) {
  return 'badge-' + pillar;
}

function getTypeStyle(type) {
  if (type === 'Review') return 'background:#E8F5ED;color:#1A6B3C;';
  if (type === 'Warning') return 'background:#FCECEA;color:#A0291A;';
  if (type === 'Comparison') return 'background:#F5EEF8;color:#7B3FA0;';
  if (type === 'Best of') return 'background:#EEF2F8;color:#00274C;';
  return 'background:#F8F4EE;color:#7a7060;';
}

function runSearch(query, filter) {
  filter = filter || 'all';
  var q = (query || '').toLowerCase().trim();
  if (!q) return [];

  return CONTENT.filter(function(item) {
    var matchQuery = item.title.toLowerCase().includes(q) || item.snippet.toLowerCase().includes(q);
    var matchFilter = filter === 'all' || item.pillar === filter;
    return matchQuery && matchFilter;
  }).sort(function(a, b) {
    var aTitle = a.title.toLowerCase().includes(q) ? 1 : 0;
    var bTitle = b.title.toLowerCase().includes(q) ? 1 : 0;
    return bTitle - aTitle;
  });
}

function renderResults(results, query, container) {
  if (!container) return;
  container.innerHTML = '';
  results.forEach(function(item) {
    var card = document.createElement('a');
    card.className = 'result-card';
    card.href = item.slug;
    card.innerHTML =
      '<div class="rc-top">' +
        '<span class="rc-badge ' + getBadgeClass(item.pillar) + '">' + getPillarLabel(item.pillar) + '</span>' +
        '<span class="rc-badge" style="' + getTypeStyle(item.type) + '">' + item.type + '</span>' +
        '<span class="rc-time">' + item.time + ' read</span>' +
      '</div>' +
      '<h3>' + highlightText(item.title, query) + '</h3>' +
      '<div class="rc-snippet">' + highlightText(item.snippet, query) + '</div>' +
      '<div class="rc-footer"><span class="rc-url">bizpinions.com</span><span class="rc-cta">Read now →</span></div>';
    container.appendChild(card);
  });
}

// ── FILTER FUNCTIONS (pillar pages) ──
function initFilters() {
  var fpills = document.querySelectorAll('.fpill');
  var cards = document.querySelectorAll('.acard');
  var searchInput = document.getElementById('pillarSearch');
  var countEl = document.getElementById('resultCount');
  var currentCat = 'all';

  function applyFilters() {
    var q = searchInput ? searchInput.value.toLowerCase() : '';
    var count = 0;
    cards.forEach(function(c) {
      var catMatch = currentCat === 'all' || c.dataset.cat === currentCat;
      var textMatch = !q || (c.dataset.title || '').includes(q) || c.innerText.toLowerCase().includes(q);
      var show = catMatch && textMatch;
      c.style.display = show ? '' : 'none';
      if (show) count++;
    });
    if (countEl) countEl.textContent = count;
  }

  fpills.forEach(function(pill) {
    pill.addEventListener('click', function() {
      fpills.forEach(function(p) { p.classList.remove('active'); });
      pill.classList.add('active');
      currentCat = pill.dataset.cat || 'all';
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }
}

// ── VERDICT HUB FILTERS ──
function initVerdictFilters() {
  var fpills = document.querySelectorAll('.verdict-fpill');
  var cards = document.querySelectorAll('.vcard-filterable');
  var searchInput = document.getElementById('verdictSearch');
  var countEl = document.getElementById('verdictCount');
  var currentCat = 'all';

  function applyFilters() {
    var q = searchInput ? searchInput.value.toLowerCase() : '';
    var count = 0;
    cards.forEach(function(c) {
      var catMatch = currentCat === 'all' || c.dataset.cat === currentCat;
      var textMatch = !q || c.innerText.toLowerCase().includes(q);
      var show = catMatch && textMatch;
      c.style.display = show ? '' : 'none';
      if (show) count++;
    });
    if (countEl) countEl.textContent = count;
  }

  fpills.forEach(function(pill) {
    pill.addEventListener('click', function() {
      fpills.forEach(function(p) { p.classList.remove('active'); });
      pill.classList.add('active');
      currentCat = pill.dataset.cat || 'all';
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }
}

// ── SEARCH PAGE INIT ──
function initSearchPage() {
  var mainSearch = document.getElementById('mainSearch');
  var resultsWrap = document.getElementById('resultsWrap');
  var countEl = document.getElementById('searchResultsCount');
  var noResults = document.getElementById('noResults');
  var currentFilter = 'all';

  function doSearch(q) {
    if (!q || !mainSearch) return;
    mainSearch.value = q;
    history.pushState(null, '', '/search?q=' + encodeURIComponent(q));
    var heading = document.getElementById('searchHeading');
    var queryDisplay = document.getElementById('queryDisplay');
    if (queryDisplay) queryDisplay.textContent = '"' + q + '"';

    var results = runSearch(q, currentFilter);
    if (countEl) countEl.innerHTML = '<strong>' + results.length + '</strong> results for "' + q + '"';

    if (results.length === 0) {
      if (noResults) noResults.style.display = 'block';
      if (resultsWrap) resultsWrap.innerHTML = '';
    } else {
      if (noResults) noResults.style.display = 'none';
      renderResults(results, q, resultsWrap);
    }
  }

  // Filter pills
  var fpills = document.querySelectorAll('.search-fpill');
  fpills.forEach(function(pill) {
    pill.addEventListener('click', function() {
      fpills.forEach(function(p) { p.classList.remove('active'); });
      pill.classList.add('active');
      currentFilter = pill.dataset.filter || 'all';
      var q = mainSearch ? mainSearch.value : '';
      if (q) doSearch(q);
    });
  });

  // Search button
  var searchBtn = document.getElementById('searchBtn');
  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
      doSearch(mainSearch.value.trim());
    });
  }

  if (mainSearch) {
    mainSearch.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') doSearch(mainSearch.value.trim());
    });
  }

  // Suggestion pills
  document.querySelectorAll('.suggestion-pill').forEach(function(pill) {
    pill.addEventListener('click', function() {
      doSearch(pill.textContent.trim());
    });
  });

  // Related searches
  var relWrap = document.getElementById('relatedPills');
  if (relWrap) {
    RELATED_SEARCHES.slice(0, 10).forEach(function(r) {
      var pill = document.createElement('a');
      pill.className = 'rs-pill';
      pill.href = '#';
      pill.textContent = r;
      pill.addEventListener('click', function(e) { e.preventDefault(); doSearch(r); });
      relWrap.appendChild(pill);
    });
  }

  // Check URL on load
  var q = getQueryParam('q');
  if (q) {
    doSearch(q);
  } else {
    if (mainSearch) mainSearch.focus();
    if (countEl) countEl.textContent = 'Enter a search term above';
  }
}

// ── INIT ON DOM READY ──
document.addEventListener('DOMContentLoaded', function() {
  // Detect which page we're on and init accordingly
  if (document.getElementById('searchResultsCount') || document.querySelector('.search-fpill')) {
    initSearchPage();
  }
  if (document.querySelector('.fpill') && document.querySelector('.acard')) {
    initFilters();
  }
  if (document.querySelector('.verdict-fpill')) {
    initVerdictFilters();
  }
});
