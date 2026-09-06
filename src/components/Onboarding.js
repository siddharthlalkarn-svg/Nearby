export function renderOnboarding(container, onComplete) {
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
    <div class="onboarding-screen">
      <div class="onboarding-header">
        <h1>What's your mood?</h1>
        <p>Tell us what you need right now, and we'll find the perfect match.</p>
      </div>

      <div class="chat-input-wrapper">
        <input type="text" id="chatInput" class="chat-input" placeholder="E.g. I want food under ₹1000..." autocomplete="off">
        <button id="chatSubmit" class="chat-submit" aria-label="Search">
          <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
        </button>
      </div>

      <div style="text-align: center; margin-bottom: 24px; color: var(--color-text-light); font-size: 14px;">— OR —</div>

      <div class="form-group">
        <label class="form-label">Interests (Select 1 or more)</label>
        <div class="chip-group" id="interestsGroup">
          ${interestsOptions.map(interest => `
            <div class="chip interest-chip" data-val="${interest}">${interest}</div>
          `).join('')}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Budget: <span class="slider-value" id="budgetVal">₹${state.budget}</span></label>
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

      <div class="form-group" style="margin-top: 32px;">
        <button id="submitBtn" class="btn btn-primary" disabled>Find my match</button>
      </div>

      <div class="provider-link">
        Are you a provider? <a href="#" id="providerLink">List an experience</a>
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
}
