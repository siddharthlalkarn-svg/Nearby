import { renderOnboarding } from './components/Onboarding.js';
import { renderRecommendationFeed } from './components/RecommendationFeed.js';
import { renderExperienceDetail } from './components/ExperienceDetail.js';
import { renderProviderForm } from './components/ProviderForm.js';
import { renderProviderDashboard } from './components/ProviderDashboard.js';
import { addExperience } from './data/mockExperiences.js';

const appContainer = document.getElementById('app');

// State holding user constraints
let globalConstraints = null;

function startApp() {
  showOnboarding();
}

function showOnboarding() {
  appContainer.innerHTML = '';
  
  // Attach global callback for the provider link
  window.onGoToProvider = () => {
    showProviderDashboard();
  };

  renderOnboarding(appContainer, (constraints) => {
    globalConstraints = constraints;
    showFeed(constraints);
  });
}

function showFeed(constraints) {
  appContainer.innerHTML = '';
  renderRecommendationFeed(appContainer, constraints, 
    // onReplan callback
    () => {
      showOnboarding();
    },
    // onSelectExperience callback
    (experience) => {
      showDetail(experience);
    }
  );
}

function showDetail(experience) {
  appContainer.innerHTML = '';
  renderExperienceDetail(appContainer, experience, () => {
    // Back button clicked, go to feed
    if (globalConstraints) {
      showFeed(globalConstraints);
    } else {
      showOnboarding();
    }
  });
}

function showProviderDashboard() {
  appContainer.innerHTML = '';
  renderProviderDashboard(appContainer, (nextView) => {
    if (nextView === 'ONBOARDING') showOnboarding();
    if (nextView === 'PROVIDER_FORM') showProviderForm();
  });
}

function showProviderForm() {
  appContainer.innerHTML = '';
  renderProviderForm(appContainer, 
    // onPublish
    (listingData) => {
      addExperience(listingData);
      // Redirect back to dashboard instead of feed
      showProviderDashboard();
    },
    // onCancel
    () => {
      showProviderDashboard();
    }
  );
}

// Initialize
startApp();
