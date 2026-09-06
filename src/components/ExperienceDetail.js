import { toggleSave, isSaved } from '../data/mockExperiences.js';

export function renderExperienceDetail(container, experience, onBack) {
  let selectedSlot = null;

  function updateCTA() {
    const btn = container.querySelector('#requestBtn');
    if (selectedSlot) {
      btn.removeAttribute('disabled');
      btn.textContent = `Request ${selectedSlot}`;
    } else {
      btn.setAttribute('disabled', 'true');
      btn.textContent = 'Select a time';
    }
  }

  const accessTagsHtml = experience.accessibility && experience.accessibility.length > 0 
    ? `<div class="accessibility-tags">
         ${experience.accessibility.map(t => `<span class="access-tag">${t}</span>`).join('')}
       </div>`
    : '';

  const reasonsHtml = experience.reasons && experience.reasons.length > 0
    ? `<div class="detail-section">
         <h4>✨ Why it's a match</h4>
         <ul class="reason-list" style="margin-top: 0;">
           ${experience.reasons.map(r => `<li class="reason-item">${r}</li>`).join('')}
         </ul>
       </div>`
    : '';

  container.innerHTML = `
    <div class="detail-screen">
      <div class="detail-hero">
        <button class="back-btn" id="backBtn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <button class="save-btn ${isSaved(experience.id) ? 'saved' : ''}" id="detailSaveBtn" style="left: auto; right: var(--space-4);">
          <svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path></svg>
        </button>
        <img src="${experience.image}" alt="${experience.name}">
      </div>

      <div class="detail-layout">
        <!-- LEFT COLUMN: Content -->
        <div class="detail-main-content">
          <div class="detail-header">
            <div class="detail-meta-row" style="justify-content: space-between;">
              <span style="font-weight:700; color:var(--color-text-light); text-transform:uppercase; letter-spacing:0.05em; font-size:12px;">${experience.category}</span>
              <span style="color: var(--color-primary); font-weight: bold;">⭐ ${experience.rating} (${experience.reviewsCount} reviews)</span>
            </div>
            <h1 class="detail-title">${experience.name}</h1>
            <div class="detail-meta-row" style="font-size: 16px;">
              <span style="color:var(--color-text); font-weight:700;">₹${experience.price}</span>
              <span>•</span>
              <span>${experience.durationMinutes} min</span>
            </div>
            ${accessTagsHtml}
          </div>

          <div class="host-profile-card">
            <div class="host-avatar">H</div>
            <div class="host-info">
              <h4>Hosted by Mumbai Locals</h4>
              <p>Superhost • 4.9 Rating</p>
            </div>
          </div>

          ${reasonsHtml}

          <div class="detail-section">
            <h4>About this experience</h4>
            <p style="color: var(--color-text-light); font-size: 15px; line-height: 1.6;">${experience.description}</p>
          </div>

          <div class="detail-section">
            <h4>Location</h4>
            <div style="width: 100%; height: 160px; background: #e0e0e0; border-radius: var(--radius-md); display:flex; align-items:center; justify-content:center; color: var(--color-text-light); font-weight: 600;">
              [ Map Render Mock ]
            </div>
          </div>

          <div class="detail-section">
            <h4>Reviews</h4>
            <div style="border-bottom: 1px solid rgba(30,30,36,0.05); padding-bottom: 12px; margin-bottom: 12px;">
              <div style="display:flex; justify-content:space-between; margin-bottom: 4px;">
                <strong>Arjun M.</strong> <span style="color:var(--color-primary);">⭐⭐⭐⭐⭐</span>
              </div>
              <p style="font-size:14px; color:var(--color-text-light);">"Absolutely fantastic experience! Matches the description perfectly."</p>
            </div>
            <div>
              <div style="display:flex; justify-content:space-between; margin-bottom: 4px;">
                <strong>Priya S.</strong> <span style="color:var(--color-primary);">⭐⭐⭐⭐⭐</span>
              </div>
              <p style="font-size:14px; color:var(--color-text-light);">"Highly recommend for anyone visiting the area."</p>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: Sticky Booking Panel -->
        <div class="detail-sidebar">
          <div class="booking-card">
            <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom: 16px;">
              <div>
                <span style="font-size: 24px; font-weight: 700;">₹${experience.price}</span> <span style="color: var(--color-text-light); font-size:14px;">/ person</span>
              </div>
              <div style="font-size:14px; font-weight:600;">⭐ ${experience.rating}</div>
            </div>
            
            <h4 style="margin-bottom: 12px; font-size: 16px;">Availability Today</h4>
            <div class="time-slot-group" id="timeSlots" style="margin-bottom: 24px;">
              ${experience.availableSlots.map(slot => `
                <div class="time-slot" data-slot="${slot}">${slot}</div>
              `).join('')}
            </div>

            <button class="btn btn-primary" id="requestBtn" disabled>Select a time</button>
            <p style="text-align:center; font-size:12px; color:var(--color-text-light); margin-top:12px;">You won't be charged yet</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Events
  container.querySelector('#backBtn').addEventListener('click', onBack);

  const detailSaveBtn = container.querySelector('#detailSaveBtn');
  if (detailSaveBtn) {
    detailSaveBtn.addEventListener('click', () => {
      toggleSave(experience.id);
      detailSaveBtn.classList.toggle('saved', isSaved(experience.id));
    });
  }

  const timeSlots = container.querySelector('#timeSlots');
  if (timeSlots) {
    timeSlots.addEventListener('click', (e) => {
      if (e.target.classList.contains('time-slot')) {
        // Toggle off all
        container.querySelectorAll('.time-slot').forEach(el => el.classList.remove('selected'));
        // Select this
        e.target.classList.add('selected');
        selectedSlot = e.target.dataset.slot;
        updateCTA();
      }
    });
  }

  const requestBtn = container.querySelector('#requestBtn');
  requestBtn.addEventListener('click', () => {
    if (selectedSlot) {
      alert(`Requested slot at ${selectedSlot} for ${experience.name}! (MVP Demo)`);
    }
  });
}
