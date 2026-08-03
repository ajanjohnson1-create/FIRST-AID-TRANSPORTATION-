const TOPBAR_HTML = `
<div class="topbar">
  <div class="topbar-left">
    <a href="tel:5104797328">📞 510-479-7328</a>
    <a href="mailto:firstaidtransportation@gmail.com">✉️ firstaidtransportation@gmail.com</a>
    <span>📍 1709 International Blvd., Ste. 107, Oakland, CA 94606</span>
  </div>
  <div class="topbar-right">
    <div class="social-links">
      <a href="https://www.instagram.com/firstaidtransportation" target="_blank" title="Instagram">📷</a>
      <a href="https://www.yelp.com/biz/first-aid-transportation-llc-oakland" target="_blank" title="Yelp">★</a>
      <a href="https://www.google.com/maps/search/?api=1&query=First+Aid+Transportation+LLC+1709+International+Blvd+Oakland+CA+94606" target="_blank" title="Google Business">🔍</a>
    </div>
  </div>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <a href="index.html" style="text-decoration:none;display:flex;align-items:center;gap:.8rem;margin-bottom:.5rem;">
        <img src="logo.png" alt="First Aid Transportation Logo" style="width:48px;height:48px;object-fit:contain;"/>
        <div class="logo-text">First Aid Transportation LLC<small>Non-Emergency Medical Transportation</small></div>
      </a>
      <p>Serving the Bay Area with compassionate, reliable non-emergency medical transportation since 2017.</p>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="schedule.html">Schedule a Ride</a></li>
        <li><a href="careers.html">Careers</a></li>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="privacy.html">Privacy Policy</a></li>
        <li><a href="sms-terms.html">SMS Terms of Service</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="services.html">Wheelchair Transport</a></li>
        <li><a href="services.html">Gurney / Stretcher</a></li>
        <li><a href="services.html">Ambulatory Transport</a></li>
        <li><a href="services.html">Bariatric Gurney</a></li>
        <li><a href="services.html">Door-to-Door Assist</a></li>
        <li><a href="services.html">Stair Assistance</a></li>
        <li><a href="services.html">Oxygen Tank Vehicles</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <ul>
        <li><a href="tel:5104797328">📞 510-479-7328</a></li>
        <li><a href="tel:5108428357">📠 Fax: 510-842-8357</a></li>
        <li><a href="mailto:firstaidtransportation@gmail.com">✉️ firstaidtransportation@gmail.com</a></li>
        <li><a href="contact.html">📍 1709 International Blvd., Ste. 107, Oakland, CA 94606</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2023–2026 First Aid Transportation LLC. All rights reserved.</span>
    <span>Oakland, CA · Alameda · Contra Costa · Santa Clara · SF · San Mateo</span>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const topbarEl = document.getElementById('topbar');
  if (topbarEl) topbarEl.innerHTML = TOPBAR_HTML;
  const footerEl = document.getElementById('footer');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;
  // NOTE: the hamburger menu handler lives in each page's inline script.
  // Do not add one here — two handlers on the same button toggle it twice
  // per tap, which cancels out and makes the menu appear unresponsive.
});
