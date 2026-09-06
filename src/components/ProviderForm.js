export function renderProviderForm(container, onPublish, onCancel) {
  let step = 1;
  const totalSteps = 3;
  let listingData = {
    name: '',
    category: 'Food',
    description: '',
    price: 500,
    durationMinutes: 60,
    tags: [],
    location: { lat: 19.0607, lng: 72.8362, name: 'Provider Location' }, // Mock location for MVP
    availableSlots: ['10:00 AM', '12:00 PM', '2:00 PM'], // Mock slots for MVP
    accessibility: [],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80' // Default MVP image
  };

  function updateView() {
    // Generate Dots
    const dotsHtml = Array.from({ length: totalSteps }).map((_, i) => {
      let classes = 'progress-dot';
      if (i + 1 === step) classes += ' active';
      else if (i + 1 < step) classes += ' completed';
      return `<div class="${classes}"></div>`;
    }).join('');

    let stepHtml = '';

    if (step === 1) {
      stepHtml = `
        <div class="form-group">
          <label class="form-label">Experience Name</label>
          <input type="text" class="form-input" id="inpName" value="${listingData.name}" placeholder="e.g. Sunset Kayaking">
        </div>
        <div class="form-group">
          <label class="form-label">Category</label>
          <select class="form-input" id="inpCategory">
            <option value="Food" ${listingData.category==='Food'?'selected':''}>Food</option>
            <option value="Culture" ${listingData.category==='Culture'?'selected':''}>Culture</option>
            <option value="Adventure" ${listingData.category==='Adventure'?'selected':''}>Adventure</option>
            <option value="Nightlife" ${listingData.category==='Nightlife'?'selected':''}>Nightlife</option>
            <option value="Shopping" ${listingData.category==='Shopping'?'selected':''}>Shopping</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea class="form-input" id="inpDesc" placeholder="Describe the experience...">${listingData.description}</textarea>
        </div>
      `;
    } else if (step === 2) {
      stepHtml = `
        <div class="form-group">
          <label class="form-label">Price (₹)</label>
          <input type="number" class="form-input" id="inpPrice" value="${listingData.price}" min="0" step="100">
        </div>
        <div class="form-group">
          <label class="form-label">Duration (Minutes)</label>
          <input type="number" class="form-input" id="inpDuration" value="${listingData.durationMinutes}" min="15" step="15">
        </div>
      `;
    } else if (step === 3) {
      stepHtml = `
        <div class="form-group">
          <label class="form-label">Photo URL</label>
          <input type="text" class="form-input" id="inpImage" value="${listingData.image}" placeholder="https://...">
        </div>
        <p style="font-size: 14px; color: var(--color-text-light); margin-bottom: 24px;">
          *For this MVP, availability is automatically set to standard daytime slots and location is mocked to your current city area.
        </p>
      `;
    }

    container.innerHTML = `
      <div class="onboarding-screen">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
          <button class="toggle-btn" id="cancelBtn" style="padding:0;">Cancel</button>
          <div class="progress-dots" style="margin:0;">
            ${dotsHtml}
          </div>
          <div style="width: 45px;"></div> <!-- Spacer for balance -->
        </div>

        <div class="onboarding-header">
          <h1 style="font-size: 28px;">Create Listing</h1>
          <p>Step ${step} of ${totalSteps}</p>
        </div>

        ${stepHtml}

        <div class="form-group" style="margin-top: 32px; display: flex; gap: 16px;">
          ${step > 1 ? `<button id="prevBtn" class="btn btn-secondary">Back</button>` : ''}
          ${step < totalSteps 
            ? `<button id="nextBtn" class="btn btn-primary">Next</button>` 
            : `<button id="publishBtn" class="btn btn-primary">Publish Listing</button>`}
        </div>
      </div>
    `;

    attachEvents();
  }

  function saveCurrentStepData() {
    if (step === 1) {
      const nameInp = container.querySelector('#inpName');
      const catInp = container.querySelector('#inpCategory');
      const descInp = container.querySelector('#inpDesc');
      if (nameInp) listingData.name = nameInp.value;
      if (catInp) {
        listingData.category = catInp.value;
        listingData.tags = [catInp.value.toLowerCase()];
      }
      if (descInp) listingData.description = descInp.value;
    } else if (step === 2) {
      const priceInp = container.querySelector('#inpPrice');
      const durInp = container.querySelector('#inpDuration');
      if (priceInp) listingData.price = parseInt(priceInp.value, 10);
      if (durInp) listingData.durationMinutes = parseInt(durInp.value, 10);
    } else if (step === 3) {
      const imgInp = container.querySelector('#inpImage');
      if (imgInp) listingData.image = imgInp.value;
    }
  }

  function attachEvents() {
    const cancelBtn = container.querySelector('#cancelBtn');
    if (cancelBtn) cancelBtn.addEventListener('click', onCancel);

    const prevBtn = container.querySelector('#prevBtn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        saveCurrentStepData();
        step--;
        updateView();
      });
    }

    const nextBtn = container.querySelector('#nextBtn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        saveCurrentStepData();
        step++;
        updateView();
      });
    }

    const publishBtn = container.querySelector('#publishBtn');
    if (publishBtn) {
      publishBtn.addEventListener('click', () => {
        saveCurrentStepData();
        if (!listingData.name) listingData.name = "Unnamed Experience";
        onPublish(listingData);
      });
    }
  }

  updateView();
}
