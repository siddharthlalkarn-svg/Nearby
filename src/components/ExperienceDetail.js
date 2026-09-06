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
        <button class="back-btn" id="backBtn">←</button>
        <button class="save-btn ${isSaved(experience.id) ? 'saved' : ''}" id="detailSaveBtn" style="left: auto; right: var(--space-4);">
          <svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path></svg>
        </button>
        <img src="${experience.image}" alt="${experience.name}">
      </div>

      <div class="detail-content">
        <div class="detail-header">
          <div class="detail-meta-row" style="justify-content: space-between;">
            <span>${experience.category}</span>
            <span style="color: var(--color-primary); font-weight: bold;">⭐ ${experience.rating} (${experience.reviewsCount} reviews)</span>
          </div>
          <h1 class="detail-title">${experience.name}</h1>
          <div class="detail-meta-row">
            <span>₹${experience.price}</span>
            <span>•</span>
            <span>${experience.durationMinutes} min</span>
          </div>
          ${accessTagsHtml}
        </div>

        ${reasonsHtml}

        <div class="detail-section">
          <h4>About</h4>
          <p style="color: var(--color-text-light); font-size: 15px;">${experience.description}</p>
        </div>

        <div class="detail-section" style="margin-bottom: 32px;">
          <h4>Availability Today</h4>
          <div class="time-slot-group" id="timeSlots">
            ${experience.availableSlots.map(slot => `
              <div class="time-slot" data-slot="${slot}">${slot}</div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="sticky-cta-bar">
        <button class="btn btn-primary" id="requestBtn" disabled>Select a time</button>
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
