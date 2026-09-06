import { getRecommendations } from '../lib/recommendationEngine.js';
import { toggleSave, isSaved } from '../data/mockExperiences.js';

export function renderRecommendationFeed(container, constraints, onReplan, onSelectExperience) {
  let currentState = { ...constraints };
  let viewMode = 'list'; // 'list' or 'map'
  let leafletMap = null;

  function renderFeed(state) {
    const recommendations = getRecommendations({
      ...state,
      location: { lat: 19.05, lng: 72.84 } // Mock user location
    });

    const feedHtml = recommendations.length > 0 ? `
      <div class="masonry-grid" id="cardGrid">
        ${recommendations.map(exp => `
          <div class="exp-card" data-id="${exp.id}" style="cursor: pointer;">
            <div class="card-img-container">
              <img class="card-img" src="${exp.image}" alt="${exp.name}">
              <div class="match-badge">${exp.matchPercent}% Match</div>
              <button class="save-btn ${isSaved(exp.id) ? 'saved' : ''}" data-id="${exp.id}">
                <svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path></svg>
              </button>
            </div>
            <div class="card-content">
              <div class="card-meta">
                <span>${exp.category}</span>
                <span>⭐ ${exp.rating}</span>
              </div>
              <h3 class="card-title">${exp.name}</h3>
              <div class="card-meta" style="margin-bottom: 0;">
                <span>₹${exp.price}</span>
                <span>${exp.durationMinutes} min</span>
              </div>
              <ul class="reason-list">
                ${exp.reasons.map(r => `<li class="reason-item">${r}</li>`).join('')}
              </ul>
            </div>
          </div>
        `).join('')}
      </div>
    ` : `
      <div class="empty-state">
        <h3 style="font-size: 24px; margin-bottom: 8px;">No exact matches</h3>
        <p style="color: var(--color-text-light); margin-bottom: 24px;">We couldn't find experiences fitting those exact constraints. Let's widen the search.</p>
        <button id="resetFiltersBtn" class="btn btn-secondary" style="width: auto; padding: 12px 24px; border-radius: 999px;">Reset Filters</button>
      </div>
    `;

    const mapHtml = `
      <div id="mapView" class="map-container" style="display: none;"></div>
      <div id="bottomSheet" class="bottom-sheet">
        <!-- Preview injected here -->
      </div>
    `;

    // Filter Bar HTML with toggle
    const filterHtml = `
      <div class="filter-bar">
        <div class="chip filter-chip ${state.budget < 1000 ? 'active teal-active' : ''}" data-type="budget" data-val="800">Under ₹1K</div>
        <div class="chip filter-chip ${state.availableMinutes <= 60 ? 'active teal-active' : ''}" data-type="time" data-val="60">Fast (1hr)</div>
        <div class="chip filter-chip ${state.interests.includes('adventure') ? 'active teal-active' : ''}" data-type="interest" data-val="adventure">Adventure</div>
        
        <div class="view-toggle">
          <button class="toggle-btn ${viewMode === 'list' ? 'active' : ''}" data-mode="list">List</button>
          <button class="toggle-btn ${viewMode === 'map' ? 'active' : ''}" data-mode="map">Map</button>
        </div>
      </div>
    `;

    container.innerHTML = `
      <div class="feed-screen">
        ${filterHtml}
        <div id="feedContent">
          ${viewMode === 'list' ? feedHtml : mapHtml}
        </div>
        
        <button id="simulateEventBtn" class="simulate-btn">
          🌧️ Simulate Weather
        </button>

        <div id="replanOverlay" class="replan-overlay">
          <div class="replan-modal">
            <h3 style="font-size: 24px; margin-bottom: 8px; display:flex; align-items:center; gap:8px;">
              <span>🌧️</span> Sudden Rain Detected
            </h3>
            <p style="margin-bottom: 24px; font-size: 16px; opacity: 0.9;">
              We've paused outdoor suggestions and found cozy indoor alternatives nearby.
            </p>
            <div style="display: flex; gap: 12px;">
              <button id="acceptSwapBtn" class="btn" style="background: var(--color-base); color: var(--color-primary); flex: 1;">Swap Plans</button>
              <button id="cancelSwapBtn" class="btn" style="background: rgba(255,255,255,0.2); flex: 1; border: 1px solid rgba(255,255,255,0.4);">Ignore</button>
            </div>
          </div>
        </div>
      </div>
    `;

    attachEvents(recommendations);

    if (viewMode === 'map') {
      initMap(recommendations);
    }
  }

  function attachEvents(recommendations) {
    // Filter clicks
    container.querySelectorAll('.filter-chip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const type = e.target.dataset.type;
        const val = e.target.dataset.val;
        
        // Simple toggle logic for demo
        if (type === 'budget') {
          currentState.budget = currentState.budget === 800 ? 5000 : 800;
        } else if (type === 'time') {
          currentState.availableMinutes = currentState.availableMinutes === 60 ? 240 : 60;
        } else if (type === 'interest') {
          if (currentState.interests.includes(val)) {
             currentState.interests = currentState.interests.filter(i => i !== val);
          } else {
             currentState.interests.push(val);
          }
        }
        renderFeed(currentState); // Re-render with new state
      });
    });

    // View toggle
    container.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        viewMode = e.target.dataset.mode;
        if (leafletMap) {
          leafletMap.remove();
          leafletMap = null;
        }
        renderFeed(currentState);
      });
    });

    // Card clicks
    if (viewMode === 'list') {
      container.querySelectorAll('.exp-card').forEach(card => {
        card.addEventListener('click', () => {
          const id = card.dataset.id;
          const exp = recommendations.find(r => r.id === id);
          if (exp && onSelectExperience) {
            onSelectExperience(exp);
          }
        });
      });
    }

    // Save Button Clicks
    container.querySelectorAll('.save-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        toggleSave(id);
        btn.classList.toggle('saved', isSaved(id));
      });
    });

    // Reset Filters
    const resetBtn = container.querySelector('#resetFiltersBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        // Relax constraints
        currentState.budget = 5000;
        currentState.availableMinutes = 480;
        currentState.interests = [];
        renderFeed(currentState);
      });
    }

    // Replan Modal Events
    const simulateBtn = container.querySelector('#simulateEventBtn');
    const replanOverlay = container.querySelector('#replanOverlay');
    const acceptSwapBtn = container.querySelector('#acceptSwapBtn');
    const cancelSwapBtn = container.querySelector('#cancelSwapBtn');

    if (simulateBtn && replanOverlay) {
      simulateBtn.addEventListener('click', () => {
        replanOverlay.classList.add('open');
      });

      cancelSwapBtn.addEventListener('click', () => {
        replanOverlay.classList.remove('open');
      });

      acceptSwapBtn.addEventListener('click', () => {
        replanOverlay.classList.remove('open');
        
        // Adaptive magic: filter out adventure, force culture for indoor
        currentState.interests = currentState.interests.filter(i => i !== 'adventure');
        if (!currentState.interests.includes('culture')) {
          currentState.interests.push('culture');
        }
        
        setTimeout(() => {
          renderFeed(currentState);
        }, 300);
      });
    }
  }

  function initMap(recommendations) {
    const mapEl = container.querySelector('#mapView');
    mapEl.style.display = 'block';

    // Check if Leaflet is loaded
    if (typeof L === 'undefined') {
      console.warn("Leaflet not loaded");
      return;
    }

    // Default center
    leafletMap = L.map(mapEl, { zoomControl: false }).setView([19.05, 72.84], 13);
    
    // Use OpenStreetMap standard tiles (no API key required)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(leafletMap);

    const markerGroup = L.featureGroup().addTo(leafletMap);

    // Add pins
    recommendations.forEach(exp => {
      const isLive = exp.rating > 4.7; // arbitrarily make highly rated things "pulse"
      const htmlContent = `
        <div class="rich-map-pin" data-id="${exp.id}">
          ${isLive ? '<div class="live-dot"></div>' : ''}
          ₹${exp.price}
        </div>
      `;

      const richIcon = L.divIcon({
        className: 'custom-icon-wrapper',
        html: htmlContent,
        iconSize: null, // auto-size
        iconAnchor: [25, 15] // approximate center offset
      });

      const marker = L.marker([exp.location.lat, exp.location.lng], {
        icon: richIcon
      }).addTo(markerGroup);

      marker.on('click', () => {
        document.querySelectorAll('.rich-map-pin').forEach(el => el.classList.remove('active-pin'));
        const pinEl = marker.getElement().querySelector('.rich-map-pin');
        if (pinEl) pinEl.classList.add('active-pin');
        
        showBottomSheet(exp);
      });
    });
    
    // Dynamic Auto-zoom
    if (recommendations.length > 0) {
      leafletMap.fitBounds(markerGroup.getBounds(), { padding: [50, 50], maxZoom: 15 });
    }
    
    // Close sheet and deselect pins if clicking map
    leafletMap.on('click', () => {
      document.querySelectorAll('.rich-map-pin').forEach(el => el.classList.remove('active-pin'));
      hideBottomSheet();
    });
  }

  function showBottomSheet(exp) {
    const sheet = container.querySelector('#bottomSheet');
    if (!sheet) return;

    sheet.innerHTML = `
      <div style="display: flex; gap: 16px;">
        <img src="${exp.image}" style="width: 80px; height: 80px; border-radius: 8px; object-fit: cover;">
        <div style="flex: 1;">
          <h4 style="margin:0 0 4px 0; font-size: 16px;">${exp.name}</h4>
          <p style="margin:0; font-size: 12px; color: var(--color-text-light);">${exp.matchPercent}% Match • ${exp.distanceKm} km</p>
          <div style="display: flex; gap: 8px; align-items: center;">
            <button id="viewDetailBtn" class="btn btn-primary" style="margin-top: 12px; padding: 6px 12px; font-size: 12px; flex: 1;">View Details</button>
            <button class="save-btn ${isSaved(exp.id) ? 'saved' : ''}" data-id="${exp.id}" style="position: static; margin-top: 12px;">
              <svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path></svg>
            </button>
          </div>
        </div>
      </div>
    `;

    sheet.classList.add('open');

    sheet.querySelector('#viewDetailBtn').addEventListener('click', () => {
      if (onSelectExperience) {
        onSelectExperience(exp);
      }
    });

    const saveBtn = sheet.querySelector('.save-btn');
    if (saveBtn) {
      saveBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSave(exp.id);
        saveBtn.classList.toggle('saved', isSaved(exp.id));
      });
    }
  }

  function hideBottomSheet() {
    const sheet = container.querySelector('#bottomSheet');
    if (sheet) {
      sheet.classList.remove('open');
    }
  }

  // Initial render
  renderFeed(currentState);
}
