(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function I(e,a){let n={interests:[],budget:1500,availableMinutes:120,groupType:"solo"};const o=["food","culture","adventure","nightlife","shopping"],i=[{label:"1 hr",value:60},{label:"2 hrs",value:120},{label:"Half Day",value:240}],s=[{label:"👤 Solo",value:"solo"},{label:"👨‍👩‍👧 Family",value:"family"},{label:"👥 Group",value:"group"}];function u(){const t=e.querySelector("#budgetVal");t&&(t.textContent=`₹${n.budget}`);const g=e.querySelector("#submitBtn");g&&(n.interests.length>0?g.removeAttribute("disabled"):g.setAttribute("disabled","true"))}e.innerHTML=`
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
          ${o.map(t=>`
            <div class="chip interest-chip" data-val="${t}">${t}</div>
          `).join("")}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Budget: <span class="slider-value" id="budgetVal">₹${n.budget}</span></label>
        <div class="slider-container">
          <input type="range" id="budgetSlider" min="0" max="5000" step="100" value="${n.budget}">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Time Available</label>
        <div class="chip-group" id="timeGroup">
          ${i.map(t=>`
            <div class="chip time-chip ${t.value===n.availableMinutes?"active teal-active":""}" data-val="${t.value}">
              ${t.label}
            </div>
          `).join("")}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Who's going?</label>
        <div class="chip-group" id="groupTypeGroup">
          ${s.map(t=>`
            <div class="chip group-chip ${t.value===n.groupType?"active teal-active":""}" data-val="${t.value}">
              ${t.label}
            </div>
          `).join("")}
        </div>
      </div>

      <div class="form-group" style="margin-top: 32px;">
        <button id="submitBtn" class="btn btn-primary" disabled>Find my match</button>
      </div>

      <div class="provider-link">
        Are you a provider? <a href="#" id="providerLink">List an experience</a>
      </div>
    </div>
  `;const c=e.querySelector("#chatInput"),h=e.querySelector("#chatSubmit");function v(){const t=c.value.trim().toLowerCase();if(!t)return;const g=t.match(/(?:under\s*|₹|rs\s*)?(\d{3,4})(?:\s*rs)?/);g&&(n.budget=parseInt(g[1],10)),(t.includes("1 hour")||t.includes("60 min"))&&(n.availableMinutes=60),(t.includes("2 hour")||t.includes("120 min"))&&(n.availableMinutes=120),(t.includes("half day")||t.includes("4 hour"))&&(n.availableMinutes=240);const d=[];(t.includes("food")||t.includes("eat")||t.includes("coffee"))&&d.push("food"),(t.includes("culture")||t.includes("museum")||t.includes("art"))&&d.push("culture"),(t.includes("adventure")||t.includes("hike")||t.includes("active"))&&d.push("adventure"),(t.includes("night")||t.includes("drink")||t.includes("bar"))&&d.push("nightlife"),(t.includes("shop")||t.includes("buy")||t.includes("market"))&&d.push("shopping"),d.length>0?n.interests=[...new Set([...n.interests,...d])]:n.interests.length===0&&(n.interests=["food"]),a(n)}h.addEventListener("click",v),c.addEventListener("keypress",t=>{t.key==="Enter"&&v()});const l=e.querySelector("#providerLink");l&&l.addEventListener("click",t=>{t.preventDefault(),window.onGoToProvider&&window.onGoToProvider()}),e.querySelector("#interestsGroup").addEventListener("click",t=>{if(t.target.classList.contains("interest-chip")){const g=t.target.dataset.val;n.interests.includes(g)?(n.interests=n.interests.filter(d=>d!==g),t.target.classList.remove("active")):(n.interests.push(g),t.target.classList.add("active")),u()}}),e.querySelector("#budgetSlider").addEventListener("input",t=>{n.budget=parseInt(t.target.value,10),u()}),e.querySelector("#timeGroup").addEventListener("click",t=>{t.target.classList.contains("time-chip")&&(n.availableMinutes=parseInt(t.target.dataset.val,10),e.querySelectorAll(".time-chip").forEach(g=>g.classList.remove("active","teal-active")),t.target.classList.add("active","teal-active"),u())}),e.querySelector("#groupTypeGroup").addEventListener("click",t=>{t.target.classList.contains("group-chip")&&(n.groupType=t.target.dataset.val,e.querySelectorAll(".group-chip").forEach(g=>g.classList.remove("active","teal-active")),t.target.classList.add("active","teal-active"),u())}),e.querySelector("#submitBtn").addEventListener("click",()=>{n.interests.length>0&&a(n)})}const k=[{id:"exp-001",name:"Street Food Crawl",description:"Taste the best local street food with an expert guide.",category:"Food",tags:["food","culture","nightlife"],location:{lat:19.0607,lng:72.8362,name:"Downtown Market"},price:800,durationMinutes:90,rating:4.8,reviewsCount:124,openingHours:{start:16,end:23},availableSlots:["4:00 PM","6:00 PM","8:30 PM"],capacity:10,accessibility:["kidFriendly"],image:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",providerId:"prov-1"},{id:"exp-002",name:"Hidden Temple Walk",description:"Discover ancient temples hidden in the modern city.",category:"Culture",tags:["culture","adventure"],location:{lat:19.055,lng:72.84,name:"Old City"},price:400,durationMinutes:120,rating:4.6,reviewsCount:89,openingHours:{start:8,end:18},availableSlots:["8:00 AM","10:30 AM","2:00 PM"],capacity:15,accessibility:["kidFriendly","wheelchair"],image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",providerId:"prov-2"},{id:"exp-003",name:"Sunset Kayaking",description:"Paddle through calm waters and watch the sunset.",category:"Adventure",tags:["adventure"],location:{lat:19.102,lng:72.826,name:"Juhu Beach"},price:1500,durationMinutes:60,rating:4.9,reviewsCount:201,openingHours:{start:16,end:19},availableSlots:["4:30 PM","5:30 PM","6:30 PM"],capacity:6,accessibility:[],image:"https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80",providerId:"prov-3"},{id:"exp-004",name:"Artisanal Coffee Tasting",description:"Sample 5 local roasts and learn brewing techniques.",category:"Food",tags:["food","culture"],location:{lat:19.065,lng:72.83,name:"Arts District"},price:1200,durationMinutes:45,rating:4.5,reviewsCount:56,openingHours:{start:9,end:15},availableSlots:["9:00 AM","11:00 AM","1:00 PM"],capacity:8,accessibility:["wheelchair","kidFriendly"],image:"https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80",providerId:"prov-4"},{id:"exp-005",name:"Neon Night Market",description:"Explore the bustling night market for trinkets and snacks.",category:"Shopping",tags:["shopping","nightlife","food"],location:{lat:19.05,lng:72.85,name:"East Plaza"},price:300,durationMinutes:180,rating:4.3,reviewsCount:432,openingHours:{start:18,end:24},availableSlots:["6:00 PM","8:00 PM","10:00 PM"],capacity:100,accessibility:["wheelchair"],image:"https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800&q=80",providerId:"prov-5"},{id:"exp-006",name:"Secret Cocktail Bar",description:"Exclusive mixology experience behind a hidden door.",category:"Nightlife",tags:["nightlife"],location:{lat:19.062,lng:72.835,name:"Downtown Market"},price:2500,durationMinutes:120,rating:4.9,reviewsCount:78,openingHours:{start:20,end:26},availableSlots:["8:30 PM","10:00 PM","11:30 PM"],capacity:20,accessibility:[],image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",providerId:"prov-6"},{id:"exp-007",name:"Pottery Workshop",description:"Create your own clay masterpiece with local artisans.",category:"Culture",tags:["culture"],location:{lat:19.07,lng:72.845,name:"Arts District"},price:1800,durationMinutes:150,rating:4.7,reviewsCount:42,openingHours:{start:10,end:17},availableSlots:["10:00 AM","1:30 PM","3:00 PM"],capacity:12,accessibility:["kidFriendly","wheelchair"],image:"https://images.unsplash.com/photo-1610719875143-df9c104e760c?w=800&q=80",providerId:"prov-7"},{id:"exp-008",name:"Boutique Thrift Shopping",description:"A curated tour of the best vintage clothing spots.",category:"Shopping",tags:["shopping"],location:{lat:19.052,lng:72.842,name:"Old City"},price:500,durationMinutes:90,rating:4.4,reviewsCount:31,openingHours:{start:11,end:19},availableSlots:["11:00 AM","2:00 PM","4:30 PM"],capacity:5,accessibility:[],image:"https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=800&q=80",providerId:"prov-8"},{id:"exp-009",name:"Cliffside Hike",description:"A challenging hike with breathtaking ocean views.",category:"Adventure",tags:["adventure"],location:{lat:19.117,lng:72.906,name:"Powai Lake"},price:0,durationMinutes:240,rating:4.8,reviewsCount:167,openingHours:{start:6,end:18},availableSlots:["6:00 AM","8:00 AM","3:00 PM"],capacity:30,accessibility:[],image:"https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",providerId:"prov-9"}];function T(e){const a="exp-custom-"+Date.now();k.push({...e,id:a,rating:5,reviewsCount:0,providerId:"prov-me",isProviderCreated:!0})}function D(){const e=k.filter(n=>n.isProviderCreated);return[k.find(n=>n.id==="exp-004"),...e].filter(Boolean)}const x=new Set;function B(e){x.has(e)?x.delete(e):x.add(e)}function $(e){return x.has(e)}function F(e,a){if(!e||!a)return Math.random()*5+.5;const n=e.lat-a.lat,o=e.lng-a.lng;return Math.sqrt(n*n+o*o)*111}function H(e){const{interests:a,budget:n,availableMinutes:o,location:i}=e,u=k.map(c=>{let h=[],v=0,l=0;c.durationMinutes<=o?(l=1,h.push(`Fits your ${Math.floor(o/60)}hr window`)):l=-2;let b=0;if(c.price<=n){b=1;const m=n-c.price;m>0?h.push(`₹${m} under budget`):h.push("Exactly matches your budget")}else b=-2;let r=0;const p=c.tags.filter(m=>a.includes(m));p.length>0&&(r=p.length/a.length,h.push(`Matches your ${p.join(" + ")} interest`));const f=F(i,c.location).toFixed(1);let t=Math.max(0,1-f/10);h.push(`${f} km away`);let g=c.rating/5;v=r*.35+l*.25+b*.2+t*.15+g*.05;let d=Math.round(Math.max(0,Math.min(100,v*100)));return{...c,matchPercent:d,reasons:h,distanceKm:f}}).filter(c=>c.price<=n&&c.durationMinutes<=o);return u.sort((c,h)=>h.matchPercent-c.matchPercent),u}function O(e,a,n,o){let i={...a},s="list",u=null;function c(r){const p=H({...r,location:{lat:19.05,lng:72.84}}),f=p.length>0?`
      <div class="masonry-grid" id="cardGrid">
        ${p.map(d=>`
          <div class="exp-card" data-id="${d.id}" style="cursor: pointer;">
            <div class="card-img-container">
              <img class="card-img" src="${d.image}" alt="${d.name}">
              <div class="match-badge">${d.matchPercent}% Match</div>
              <button class="save-btn ${$(d.id)?"saved":""}" data-id="${d.id}">
                <svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path></svg>
              </button>
            </div>
            <div class="card-content">
              <div class="card-meta">
                <span>${d.category}</span>
                <span>⭐ ${d.rating}</span>
              </div>
              <h3 class="card-title">${d.name}</h3>
              <div class="card-meta" style="margin-bottom: 0;">
                <span>₹${d.price}</span>
                <span>${d.durationMinutes} min</span>
              </div>
              <ul class="reason-list">
                ${d.reasons.map(m=>`<li class="reason-item">${m}</li>`).join("")}
              </ul>
            </div>
          </div>
        `).join("")}
      </div>
    `:`
      <div class="empty-state">
        <h3 style="font-size: 24px; margin-bottom: 8px;">No exact matches</h3>
        <p style="color: var(--color-text-light); margin-bottom: 24px;">We couldn't find experiences fitting those exact constraints. Let's widen the search.</p>
        <button id="resetFiltersBtn" class="btn btn-secondary" style="width: auto; padding: 12px 24px; border-radius: 999px;">Reset Filters</button>
      </div>
    `,t=`
      <div id="mapView" class="map-container" style="display: none;"></div>
      <div id="bottomSheet" class="bottom-sheet">
        <!-- Preview injected here -->
      </div>
    `,g=`
      <div class="filter-bar">
        <div class="chip filter-chip ${r.budget<1e3?"active teal-active":""}" data-type="budget" data-val="800">Under ₹1K</div>
        <div class="chip filter-chip ${r.availableMinutes<=60?"active teal-active":""}" data-type="time" data-val="60">Fast (1hr)</div>
        <div class="chip filter-chip ${r.interests.includes("adventure")?"active teal-active":""}" data-type="interest" data-val="adventure">Adventure</div>
        
        <div class="view-toggle">
          <button class="toggle-btn ${s==="list"?"active":""}" data-mode="list">List</button>
          <button class="toggle-btn ${s==="map"?"active":""}" data-mode="map">Map</button>
        </div>
      </div>
    `;e.innerHTML=`
      <div class="feed-screen">
        ${g}
        <div id="feedContent">
          ${s==="list"?f:t}
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
    `,h(p),s==="map"&&v(p)}function h(r){e.querySelectorAll(".filter-chip").forEach(m=>{m.addEventListener("click",S=>{const y=S.target.dataset.type,M=S.target.dataset.val;y==="budget"?i.budget=i.budget===800?5e3:800:y==="time"?i.availableMinutes=i.availableMinutes===60?240:60:y==="interest"&&(i.interests.includes(M)?i.interests=i.interests.filter(C=>C!==M):i.interests.push(M)),c(i)})}),e.querySelectorAll(".toggle-btn").forEach(m=>{m.addEventListener("click",S=>{s=S.target.dataset.mode,u&&(u.remove(),u=null),c(i)})}),s==="list"&&e.querySelectorAll(".exp-card").forEach(m=>{m.addEventListener("click",()=>{const S=m.dataset.id,y=r.find(M=>M.id===S);y&&o&&o(y)})}),e.querySelectorAll(".save-btn").forEach(m=>{m.addEventListener("click",S=>{S.stopPropagation();const y=m.dataset.id;B(y),m.classList.toggle("saved",$(y))})});const p=e.querySelector("#resetFiltersBtn");p&&p.addEventListener("click",()=>{i.budget=5e3,i.availableMinutes=480,i.interests=[],c(i)});const f=e.querySelector("#simulateEventBtn"),t=e.querySelector("#replanOverlay"),g=e.querySelector("#acceptSwapBtn"),d=e.querySelector("#cancelSwapBtn");f&&t&&(f.addEventListener("click",()=>{t.classList.add("open")}),d.addEventListener("click",()=>{t.classList.remove("open")}),g.addEventListener("click",()=>{t.classList.remove("open"),i.interests=i.interests.filter(m=>m!=="adventure"),i.interests.includes("culture")||i.interests.push("culture"),setTimeout(()=>{c(i)},300)}))}function v(r){const p=e.querySelector("#mapView");if(p.style.display="block",typeof L>"u"){console.warn("Leaflet not loaded");return}u=L.map(p,{zoomControl:!1}).setView([19.05,72.84],13),L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(u);const f=L.featureGroup().addTo(u);r.forEach(t=>{const g=t.rating>4.7,d=`
        <div class="rich-map-pin" data-id="${t.id}">
          ${g?'<div class="live-dot"></div>':""}
          ₹${t.price}
        </div>
      `,m=L.divIcon({className:"custom-icon-wrapper",html:d,iconSize:null,iconAnchor:[25,15]}),S=L.marker([t.location.lat,t.location.lng],{icon:m}).addTo(f);S.on("click",()=>{document.querySelectorAll(".rich-map-pin").forEach(M=>M.classList.remove("active-pin"));const y=S.getElement().querySelector(".rich-map-pin");y&&y.classList.add("active-pin"),l(t)})}),r.length>0&&u.fitBounds(f.getBounds(),{padding:[50,50],maxZoom:15}),u.on("click",()=>{document.querySelectorAll(".rich-map-pin").forEach(t=>t.classList.remove("active-pin")),b()})}function l(r){const p=e.querySelector("#bottomSheet");if(!p)return;p.innerHTML=`
      <div style="display: flex; gap: 16px;">
        <img src="${r.image}" style="width: 80px; height: 80px; border-radius: 8px; object-fit: cover;">
        <div style="flex: 1;">
          <h4 style="margin:0 0 4px 0; font-size: 16px;">${r.name}</h4>
          <p style="margin:0; font-size: 12px; color: var(--color-text-light);">${r.matchPercent}% Match • ${r.distanceKm} km</p>
          <div style="display: flex; gap: 8px; align-items: center;">
            <button id="viewDetailBtn" class="btn btn-primary" style="margin-top: 12px; padding: 6px 12px; font-size: 12px; flex: 1;">View Details</button>
            <button class="save-btn ${$(r.id)?"saved":""}" data-id="${r.id}" style="position: static; margin-top: 12px;">
              <svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path></svg>
            </button>
          </div>
        </div>
      </div>
    `,p.classList.add("open"),p.querySelector("#viewDetailBtn").addEventListener("click",()=>{o&&o(r)});const f=p.querySelector(".save-btn");f&&f.addEventListener("click",t=>{t.stopPropagation(),B(r.id),f.classList.toggle("saved",$(r.id))})}function b(){const r=e.querySelector("#bottomSheet");r&&r.classList.remove("open")}c(i)}function z(e,a,n){let o=null;function i(){const l=e.querySelector("#requestBtn");o?(l.removeAttribute("disabled"),l.textContent=`Request ${o}`):(l.setAttribute("disabled","true"),l.textContent="Select a time")}const s=a.accessibility&&a.accessibility.length>0?`<div class="accessibility-tags">
         ${a.accessibility.map(l=>`<span class="access-tag">${l}</span>`).join("")}
       </div>`:"",u=a.reasons&&a.reasons.length>0?`<div class="detail-section">
         <h4>✨ Why it's a match</h4>
         <ul class="reason-list" style="margin-top: 0;">
           ${a.reasons.map(l=>`<li class="reason-item">${l}</li>`).join("")}
         </ul>
       </div>`:"";e.innerHTML=`
    <div class="detail-screen">
      <div class="detail-hero">
        <button class="back-btn" id="backBtn">←</button>
        <button class="save-btn ${$(a.id)?"saved":""}" id="detailSaveBtn" style="left: auto; right: var(--space-4);">
          <svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path></svg>
        </button>
        <img src="${a.image}" alt="${a.name}">
      </div>

      <div class="detail-content">
        <div class="detail-header">
          <div class="detail-meta-row" style="justify-content: space-between;">
            <span>${a.category}</span>
            <span style="color: var(--color-primary); font-weight: bold;">⭐ ${a.rating} (${a.reviewsCount} reviews)</span>
          </div>
          <h1 class="detail-title">${a.name}</h1>
          <div class="detail-meta-row">
            <span>₹${a.price}</span>
            <span>•</span>
            <span>${a.durationMinutes} min</span>
          </div>
          ${s}
        </div>

        ${u}

        <div class="detail-section">
          <h4>About</h4>
          <p style="color: var(--color-text-light); font-size: 15px;">${a.description}</p>
        </div>

        <div class="detail-section" style="margin-bottom: 32px;">
          <h4>Availability Today</h4>
          <div class="time-slot-group" id="timeSlots">
            ${a.availableSlots.map(l=>`
              <div class="time-slot" data-slot="${l}">${l}</div>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="sticky-cta-bar">
        <button class="btn btn-primary" id="requestBtn" disabled>Select a time</button>
      </div>
    </div>
  `,e.querySelector("#backBtn").addEventListener("click",n);const c=e.querySelector("#detailSaveBtn");c&&c.addEventListener("click",()=>{B(a.id),c.classList.toggle("saved",$(a.id))});const h=e.querySelector("#timeSlots");h&&h.addEventListener("click",l=>{l.target.classList.contains("time-slot")&&(e.querySelectorAll(".time-slot").forEach(b=>b.classList.remove("selected")),l.target.classList.add("selected"),o=l.target.dataset.slot,i())}),e.querySelector("#requestBtn").addEventListener("click",()=>{o&&alert(`Requested slot at ${o} for ${a.name}! (MVP Demo)`)})}function j(e,a,n){let o=1;const i=3;let s={name:"",category:"Food",description:"",price:500,durationMinutes:60,tags:[],location:{lat:19.0607,lng:72.8362,name:"Provider Location"},availableSlots:["10:00 AM","12:00 PM","2:00 PM"],accessibility:[],image:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"};function u(){const v=Array.from({length:i}).map((b,r)=>{let p="progress-dot";return r+1===o?p+=" active":r+1<o&&(p+=" completed"),`<div class="${p}"></div>`}).join("");let l="";o===1?l=`
        <div class="form-group">
          <label class="form-label">Experience Name</label>
          <input type="text" class="form-input" id="inpName" value="${s.name}" placeholder="e.g. Sunset Kayaking">
        </div>
        <div class="form-group">
          <label class="form-label">Category</label>
          <select class="form-input" id="inpCategory">
            <option value="Food" ${s.category==="Food"?"selected":""}>Food</option>
            <option value="Culture" ${s.category==="Culture"?"selected":""}>Culture</option>
            <option value="Adventure" ${s.category==="Adventure"?"selected":""}>Adventure</option>
            <option value="Nightlife" ${s.category==="Nightlife"?"selected":""}>Nightlife</option>
            <option value="Shopping" ${s.category==="Shopping"?"selected":""}>Shopping</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea class="form-input" id="inpDesc" placeholder="Describe the experience...">${s.description}</textarea>
        </div>
      `:o===2?l=`
        <div class="form-group">
          <label class="form-label">Price (₹)</label>
          <input type="number" class="form-input" id="inpPrice" value="${s.price}" min="0" step="100">
        </div>
        <div class="form-group">
          <label class="form-label">Duration (Minutes)</label>
          <input type="number" class="form-input" id="inpDuration" value="${s.durationMinutes}" min="15" step="15">
        </div>
      `:o===3&&(l=`
        <div class="form-group">
          <label class="form-label">Photo URL</label>
          <input type="text" class="form-input" id="inpImage" value="${s.image}" placeholder="https://...">
        </div>
        <p style="font-size: 14px; color: var(--color-text-light); margin-bottom: 24px;">
          *For this MVP, availability is automatically set to standard daytime slots and location is mocked to your current city area.
        </p>
      `),e.innerHTML=`
      <div class="onboarding-screen">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
          <button class="toggle-btn" id="cancelBtn" style="padding:0;">Cancel</button>
          <div class="progress-dots" style="margin:0;">
            ${v}
          </div>
          <div style="width: 45px;"></div> <!-- Spacer for balance -->
        </div>

        <div class="onboarding-header">
          <h1 style="font-size: 28px;">Create Listing</h1>
          <p>Step ${o} of ${i}</p>
        </div>

        ${l}

        <div class="form-group" style="margin-top: 32px; display: flex; gap: 16px;">
          ${o>1?'<button id="prevBtn" class="btn btn-secondary">Back</button>':""}
          ${o<i?'<button id="nextBtn" class="btn btn-primary">Next</button>':'<button id="publishBtn" class="btn btn-primary">Publish Listing</button>'}
        </div>
      </div>
    `,h()}function c(){if(o===1){const v=e.querySelector("#inpName"),l=e.querySelector("#inpCategory"),b=e.querySelector("#inpDesc");v&&(s.name=v.value),l&&(s.category=l.value,s.tags=[l.value.toLowerCase()]),b&&(s.description=b.value)}else if(o===2){const v=e.querySelector("#inpPrice"),l=e.querySelector("#inpDuration");v&&(s.price=parseInt(v.value,10)),l&&(s.durationMinutes=parseInt(l.value,10))}else if(o===3){const v=e.querySelector("#inpImage");v&&(s.image=v.value)}}function h(){const v=e.querySelector("#cancelBtn");v&&v.addEventListener("click",n);const l=e.querySelector("#prevBtn");l&&l.addEventListener("click",()=>{c(),o--,u()});const b=e.querySelector("#nextBtn");b&&b.addEventListener("click",()=>{c(),o++,u()});const r=e.querySelector("#publishBtn");r&&r.addEventListener("click",()=>{c(),s.name||(s.name="Unnamed Experience"),a(s)})}u()}function G(e,a){const n=D();e.innerHTML=`
    <div class="onboarding-screen" style="max-width: 800px;">
      <div class="onboarding-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
        <div>
          <h1 style="margin-bottom: 8px;">Provider Dashboard</h1>
          <p>Manage your local experiences and see how they are performing.</p>
        </div>
        <button id="closeBtn" style="background: none; border: none; font-size: 24px; cursor: pointer; color: var(--color-text-light);">×</button>
      </div>

      <button id="createListingBtn" class="btn btn-primary" style="margin-bottom: 32px; max-width: 200px;">
        + Create New Listing
      </button>

      <div>
        <h3 style="margin-bottom: 16px; font-weight: 700;">Your Active Listings</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${n.map(o=>{const i=Math.floor(Math.random()*500)+50,s=Math.floor(i*.15);return`
              <div style="background: var(--color-surface); border: 1px solid rgba(30, 30, 36, 0.08); border-radius: var(--radius-lg); padding: 16px; display: flex; gap: 16px; box-shadow: var(--shadow-level-1);">
                <img src="${o.image}" style="width: 100px; height: 100px; border-radius: 8px; object-fit: cover;">
                <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
                  <h4 style="font-size: 18px; margin-bottom: 4px; font-weight: 700;">${o.name}</h4>
                  <p style="color: var(--color-text-light); font-size: 14px; margin-bottom: 12px;">₹${o.price} • ${o.durationMinutes} mins • ${o.category}</p>
                  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                    <span class="stat-chip">👀 ${i} Views</span>
                    <span class="stat-chip">❤️ ${s} Saves</span>
                    <span class="stat-chip">⭐ ${o.rating} Rating</span>
                  </div>
                </div>
              </div>
            `}).join("")}
          ${n.length===0?"<p>You have no active listings.</p>":""}
        </div>
      </div>
    </div>
  `,e.querySelector("#closeBtn").addEventListener("click",()=>{a("ONBOARDING")}),e.querySelector("#createListingBtn").addEventListener("click",()=>{a("PROVIDER_FORM")})}const w=document.getElementById("app");let P=null;function N(){q()}function q(){w.innerHTML="",window.onGoToProvider=()=>{E()},I(w,e=>{P=e,A(e)})}function A(e){w.innerHTML="",O(w,e,()=>{q()},a=>{R(a)})}function R(e){w.innerHTML="",z(w,e,()=>{P?A(P):q()})}function E(){w.innerHTML="",G(w,e=>{e==="ONBOARDING"&&q(),e==="PROVIDER_FORM"&&V()})}function V(){w.innerHTML="",j(w,e=>{T(e),E()},()=>{E()})}N();
