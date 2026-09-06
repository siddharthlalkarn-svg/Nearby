import { mockExperiences } from '../data/mockExperiences.js';

export function renderOnboarding(container, onComplete, onSelectExperience) {
  // State
  let state = {
    interests: [],
    budget: 1500,
    availableMinutes: 120,
    groupType: 'solo'
  };

  const interestsOptions = ['food', 'culture', 'adventure', 'nightlife', 'shopping'];
  const timeOptions = [
    { label: '1 hr', value: 60 },
    { label: '2 hrs', value: 120 },
    { label: 'Half Day', value: 240 }
  ];

  const groupOptions = [
    { label: '👤 Solo', value: 'solo' },
    { label: '👨‍👩‍👧 Family', value: 'family' },
    { label: '👥 Group', value: 'group' }
  ];

  function updateUI() {
    // Update Slider
    const budgetVal = container.querySelector('#budgetVal');
    if (budgetVal) budgetVal.textContent = `₹${state.budget}`;

    // Update buttons state
    const submitBtn = container.querySelector('#submitBtn');
    if (submitBtn) {
      if (state.interests.length > 0) {
        submitBtn.removeAttribute('disabled');
      } else {
        submitBtn.setAttribute('disabled', 'true');
      }
    }
  }

  container.innerHTML = `
    <div class="onboarding-layout">
      <!-- Left Column: Interactive Map (Desktop) / Top Map (Mobile) -->
      <div class="onboarding-hero" style="position: relative;">
        <div id="homeMap" class="hero-graphic" style="background: var(--color-base); z-index: 1;">
          <!-- Map will render here -->
        </div>
        
        <!-- Experience Preview Card (Hidden by default) -->
        <div id="homeMapPreview" style="display: none; position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%); width: 90%; max-width: 340px; background: var(--color-surface); border-radius: var(--radius-lg); padding: 12px; box-shadow: var(--shadow-level-2); z-index: 1000; flex-direction: row; gap: 12px; align-items: center;">
          <img id="previewImg" src="" style="width: 60px; height: 60px; border-radius: 8px; object-fit: cover;">
          <div style="flex: 1;">
            <h4 id="previewTitle" style="font-size: 14px; font-weight: 700; margin-bottom: 4px;"></h4>
            <p id="previewMeta" style="font-size: 12px; color: var(--color-text-light);"></p>
          </div>
          <button id="previewBtn" class="btn btn-primary" style="padding: 8px 12px; font-size: 12px;">View</button>
        </div>

        <div class="onboarding-header" style="margin-top: 24px;">
          <h1 class="headline-lg">Spontaneous.<br>Curated.<br>Local.</h1>
          <p style="margin-top: 16px; font-size: 16px;">Explore the map directly, or tell us what you need for a personalized match.</p>
        </div>
      </div>

      <!-- Right Column: Form -->
      <div class="onboarding-form-container">
        <div class="chat-input-wrapper">
          <input type="text" id="chatInput" class="chat-input" placeholder="E.g. I want food under ₹1000..." autocomplete="off">
          <button id="chatSubmit" class="chat-submit" aria-label="Search">
            <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
          </button>
        </div>

        <div style="text-align: center; margin-bottom: 32px; color: var(--color-text-light); font-size: 14px; font-weight: 700; letter-spacing: 1px;">OR BUILD IT</div>

        <div class="form-group">
          <label class="form-label">Interests (Select 1 or more)</label>
          <div class="chip-group" id="interestsGroup">
            ${interestsOptions.map(interest => `
              <div class="chip interest-chip" data-val="${interest}">${interest}</div>
            `).join('')}
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" style="display:flex; justify-content:space-between; align-items:center;">
            Budget 
            <span class="slider-value" id="budgetVal">₹${state.budget}</span>
          </label>
          <div class="slider-container">
            <input type="range" id="budgetSlider" min="0" max="5000" step="100" value="${state.budget}">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Time Available</label>
          <div class="chip-group" id="timeGroup">
            ${timeOptions.map(t => `
              <div class="chip time-chip ${t.value === state.availableMinutes ? 'active teal-active' : ''}" data-val="${t.value}">
                ${t.label}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Who's going?</label>
          <div class="chip-group" id="groupTypeGroup">
            ${groupOptions.map(g => `
              <div class="chip group-chip ${g.value === state.groupType ? 'active teal-active' : ''}" data-val="${g.value}">
                ${g.label}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="form-group" style="margin-top: 40px;">
          <button id="submitBtn" class="btn btn-primary" disabled>Find my match</button>
        </div>
      </div>
    </div>
  `;

  // Attach Events
  const chatInput = container.querySelector('#chatInput');
  const chatSubmit = container.querySelector('#chatSubmit');

  function handleChatSubmit() {
    const text = chatInput.value.trim().toLowerCase();
    if (!text) return;

    // Basic NLP Parser
    const budgetMatch = text.match(/(?:under\s*|₹|rs\s*)?(\d{3,4})(?:\s*rs)?/);
    if (budgetMatch) {
      state.budget = parseInt(budgetMatch[1], 10);
    }
    
    if (text.includes('1 hour') || text.includes('60 min')) state.availableMinutes = 60;
    if (text.includes('2 hour') || text.includes('120 min')) state.availableMinutes = 120;
    if (text.includes('half day') || text.includes('4 hour')) state.availableMinutes = 240;
    
    const newInterests = [];
    if (text.includes('food') || text.includes('eat') || text.includes('coffee')) newInterests.push('food');
    if (text.includes('culture') || text.includes('museum') || text.includes('art')) newInterests.push('culture');
    if (text.includes('adventure') || text.includes('hike') || text.includes('active')) newInterests.push('adventure');
    if (text.includes('night') || text.includes('drink') || text.includes('bar')) newInterests.push('nightlife');
    if (text.includes('shop') || text.includes('buy') || text.includes('market')) newInterests.push('shopping');
    
    if (newInterests.length > 0) {
      state.interests = [...new Set([...state.interests, ...newInterests])];
    } else if (state.interests.length === 0) {
      state.interests = ['food']; // fallback
    }
    
    onComplete(state);
  }

  chatSubmit.addEventListener('click', handleChatSubmit);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleChatSubmit();
  });

  const providerLink = container.querySelector('#providerLink');
  if (providerLink) {
    providerLink.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.onGoToProvider) window.onGoToProvider();
    });
  }

  const interestsGroup = container.querySelector('#interestsGroup');
  interestsGroup.addEventListener('click', (e) => {
    if (e.target.classList.contains('interest-chip')) {
      const val = e.target.dataset.val;
      if (state.interests.includes(val)) {
        state.interests = state.interests.filter(i => i !== val);
        e.target.classList.remove('active');
      } else {
        state.interests.push(val);
        e.target.classList.add('active');
      }
      updateUI();
    }
  });

  const budgetSlider = container.querySelector('#budgetSlider');
  budgetSlider.addEventListener('input', (e) => {
    state.budget = parseInt(e.target.value, 10);
    updateUI();
  });

  const timeGroup = container.querySelector('#timeGroup');
  timeGroup.addEventListener('click', (e) => {
    if (e.target.classList.contains('time-chip')) {
      state.availableMinutes = parseInt(e.target.dataset.val, 10);
      container.querySelectorAll('.time-chip').forEach(c => c.classList.remove('active', 'teal-active'));
      e.target.classList.add('active', 'teal-active');
      updateUI();
    }
  });

  const groupTypeGroup = container.querySelector('#groupTypeGroup');
  groupTypeGroup.addEventListener('click', (e) => {
    if (e.target.classList.contains('group-chip')) {
      state.groupType = e.target.dataset.val;
      container.querySelectorAll('.group-chip').forEach(c => c.classList.remove('active', 'teal-active'));
      e.target.classList.add('active', 'teal-active');
      updateUI();
    }
  });

  container.querySelector('#submitBtn').addEventListener('click', () => {
    if (state.interests.length > 0) {
      onComplete(state);
    }
  });

  // Initialize Map
  setTimeout(() => {
    initHomeMap();
  }, 100);

  function initHomeMap() {
    if (!window.L) return; // Ensure Leaflet is loaded
    const mapEl = document.getElementById('homeMap');
    if (!mapEl) return;

    // Center on Mumbai region
    const map = L.map(mapEl, {
      zoomControl: false,
      attributionControl: false
    }).setView([19.0760, 72.8777], 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    const previewCard = document.getElementById('homeMapPreview');
    let selectedExp = null;

    // Add markers for all mockExperiences
    mockExperiences.forEach(exp => {
      if (!exp.location || !exp.location.lat || !exp.location.lng) return;

      const markerHtml = `
        <div class="custom-marker" style="
          background: var(--color-primary); 
          color: white; 
          border-radius: 50%; 
          width: 32px; 
          height: 32px; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          border: 2px solid white; 
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          font-weight: bold;
          font-size: 14px;
        ">
          ${exp.category.charAt(0)}
        </div>
      `;

      const icon = L.divIcon({
        className: 'custom-icon-wrapper',
        html: markerHtml,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const marker = L.marker([exp.location.lat, exp.location.lng], { icon }).addTo(map);

      marker.on('click', () => {
        // Show Preview
        selectedExp = exp;
        document.getElementById('previewImg').src = exp.image;
        document.getElementById('previewTitle').textContent = exp.name;
        document.getElementById('previewMeta').textContent = `₹${exp.price} • ${exp.durationMinutes}m`;
        
        previewCard.style.display = 'flex';
        
        // Pan to pin
        map.flyTo([exp.location.lat, exp.location.lng], 13, { duration: 0.5 });
      });
    });

    // Close preview if clicking map background
    map.on('click', () => {
      previewCard.style.display = 'none';
      selectedExp = null;
    });

    document.getElementById('previewBtn').addEventListener('click', () => {
      if (selectedExp && onSelectExperience) {
        onSelectExperience(selectedExp);
      }
    });
  }
}
