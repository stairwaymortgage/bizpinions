/* ============================================
   BIZPINIONS — Shared Components
   js/components.js
   Edit the nav or footer here and it updates
   every page on the site automatically.
   ============================================ */

(function() {

  // ── CURRENT PAGE DETECTION ──
  var path = window.location.pathname.replace(/\/$/, '') || '/';

  function isActive(href) {
    if (href === '/' && path === '/') return true;
    if (href !== '/' && path.startsWith(href)) return true;
    return false;
  }

  // ── NAV HTML ──
  var navHTML = `
    <nav class="nav">
      <a href="/" class="nav-brand">
        <div class="nav-logo">Biz<span>pinions</span></div>
        <div class="nav-tagline">Answers in 60 seconds.</div>
      </a>
      <a href="/newsletter" class="nav-subscribe">Subscribe free</a>
    </nav>

    <div class="stage-strip">
      <div class="stage-strip-label">Where are you in your business?</div>
      <div class="stage-pills">
        <a class="stage-pill ${isActive('/start-it') ? 'active' : ''}" href="/start-it">
          <span class="pill-icon">🚀</span><span class="pill-text">Start it</span>
        </a>
        <a class="stage-pill ${isActive('/fund-it') ? 'active' : ''}" href="/fund-it">
          <span class="pill-icon">💰</span><span class="pill-text">Fund it</span>
        </a>
        <a class="stage-pill ${isActive('/run-it') ? 'active' : ''}" href="/run-it">
          <span class="pill-icon">⚙️</span><span class="pill-text">Run it</span>
        </a>
        <a class="stage-pill ${isActive('/buy-it') ? 'active' : ''}" href="/buy-it">
          <span class="pill-icon">🏪</span><span class="pill-text">Buy it</span>
        </a>
        <a class="stage-pill ${isActive('/sell-it') ? 'active' : ''}" href="/sell-it">
          <span class="pill-icon">🏁</span><span class="pill-text">Sell it</span>
        </a>
        <a class="stage-pill ${isActive('/the-verdict') ? 'active' : ''}" href="/the-verdict">
          <span class="pill-icon">⚖️</span><span class="pill-text">The Verdict</span>
        </a>
      </div>
    </div>
  `;

  // ── FOOTER HTML ──
  var footerHTML = `
    <footer class="site-footer">
      <a href="/" class="footer-logo">Biz<span>pinions</span></a>
      <div class="footer-tagline-line">Answers in 60 seconds.</div>
      <p class="footer-desc">Honest reviews of business software, franchises, vendors, and opportunities. The answer is always in the first paragraph.</p>
      <div class="footer-search-wrap">
        <input type="text" placeholder="Search reviews and guides..." id="footerSearchInput" onkeydown="if(event.key==='Enter') window.location='/search?q='+encodeURIComponent(this.value)"/>
        <button onclick="window.location='/search?q='+encodeURIComponent(document.getElementById('footerSearchInput').value)">Search</button>
      </div>
      <div class="footer-links-grid">
        <div class="footer-col">
          <h4>Topics</h4>
          <a href="/start-it">Start it</a>
          <a href="/fund-it">Fund it</a>
          <a href="/run-it">Run it</a>
          <a href="/buy-it">Buy it</a>
          <a href="/sell-it">Sell it</a>
          <a href="/the-verdict">The Verdict</a>
        </div>
        <div class="footer-col">
          <h4>Reviews</h4>
          <a href="/the-verdict">CRM software</a>
          <a href="/the-verdict">Payroll tools</a>
          <a href="/the-verdict">Accounting</a>
          <a href="/the-verdict">Franchises</a>
          <a href="/the-verdict">Lenders</a>
        </div>
        <div class="footer-col">
          <h4>Guides</h4>
          <a href="/browse-all">All 120 guides</a>
          <a href="/fund-it">SBA loans</a>
          <a href="/buy-it">Franchise reviews</a>
          <a href="/sell-it">Business valuation</a>
          <a href="/start-it">How to start a business</a>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <a href="/about">About</a>
          <a href="/how-we-review">How we review</a>
          <a href="/newsletter">Newsletter</a>
          <a href="/advertise">Advertise</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div class="footer-bottom-row">
        <p>© 2026 Bizpinions.com · Affiliate links disclosed on every review.</p>
        <div class="footer-sign">Real opinions. Real business. No fluff.</div>
      </div>
    </footer>
  `;

  // ── INJECT ──
  var navEl = document.getElementById('nav-placeholder');
  var footerEl = document.getElementById('footer-placeholder');

  if (navEl) navEl.innerHTML = navHTML;
  if (footerEl) footerEl.innerHTML = footerHTML;

})();
