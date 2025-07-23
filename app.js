// Facility Booking Platform - SpaceBooker
// Main Application JavaScript - Fixed Version

// Mock Data
const MOCK_DATA = {
  "spaces": [
    {
      "id": "1",
      "name": "Executive Conference Room",
      "description": "Premium conference room with state-of-the-art AV equipment, perfect for board meetings and presentations.",
      "location": "Downtown Singapore, Singapore",
      "space_type": "Meeting Room",
      "price_per_hour": 80,
      "is_public": true,
      "owner_id": "owner1",
      "images": ["https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"],
      "amenities": ["Projector", "Whiteboard", "Video Conferencing", "WiFi", "Coffee Station"]
    },
    {
      "id": "2", 
      "name": "Basketball Court Alpha",
      "description": "Full-size indoor basketball court with professional hardwood flooring and adjustable hoops.",
      "location": "Sports Hub, Singapore",
      "space_type": "Sports Court",
      "price_per_hour": 45,
      "is_public": true,
      "owner_id": "owner2",
      "images": ["https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800"],
      "amenities": ["Professional Court", "Scoreboard", "Sound System", "Changing Rooms", "Equipment Storage"]
    },
    {
      "id": "3",
      "name": "Grand Event Hall",
      "description": "Elegant event space perfect for weddings, corporate events, and large gatherings with premium amenities.",
      "location": "Marina Bay, Singapore",
      "space_type": "Event Venue",
      "price_per_hour": 200,
      "is_public": true,
      "owner_id": "owner1",
      "images": ["https://images.unsplash.com/photo-1519167758481-83f29d8ae8ae?w=800"],
      "amenities": ["Stage", "Professional Lighting", "Sound System", "Catering Kitchen", "Parking"]
    },
    {
      "id": "4",
      "name": "Startup Meeting Pod",
      "description": "Cozy meeting space designed for small team collaborations and brainstorming sessions.",
      "location": "One North, Singapore",
      "space_type": "Meeting Room",
      "price_per_hour": 0,
      "is_public": true,
      "owner_id": "owner3",
      "images": ["https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=800"],
      "amenities": ["Whiteboard", "WiFi", "Comfortable Seating", "Natural Light"]
    },
    {
      "id": "5",
      "name": "Tennis Court Pro",
      "description": "Professional tennis court with high-quality surface and professional-grade lighting for evening play.",
      "location": "East Coast, Singapore", 
      "space_type": "Sports Court",
      "price_per_hour": 35,
      "is_public": true,
      "owner_id": "owner2",
      "images": ["https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800"],
      "amenities": ["Professional Court", "Lighting", "Equipment Rental", "Seating Area"]
    },
    {
      "id": "6",
      "name": "Creative Workshop Space",
      "description": "Flexible workshop space perfect for art classes, team building activities, and creative sessions.",
      "location": "Tiong Bahru, Singapore",
      "space_type": "Event Venue", 
      "price_per_hour": 60,
      "is_public": true,
      "owner_id": "owner3",
      "images": ["https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"],
      "amenities": ["Art Supplies", "Natural Light", "Flexible Layout", "Storage", "Kitchen Access"]
    },
    {
      "id": "7",
      "name": "Boardroom Elite",
      "description": "Prestigious boardroom with premium furnishings and advanced technology for executive meetings.",
      "location": "Raffles Place, Singapore",
      "space_type": "Meeting Room",
      "price_per_hour": 120,
      "is_public": true,
      "owner_id": "owner1", 
      "images": ["https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800"],
      "amenities": ["Executive Seating", "Video Conferencing", "Catering Service", "Concierge", "Parking"]
    },
    {
      "id": "8",
      "name": "Community Hall",
      "description": "Large community space perfect for town halls, workshops, and community events.",
      "location": "Tampines, Singapore",
      "space_type": "Event Venue",
      "price_per_hour": 0,
      "is_public": true,
      "owner_id": "owner4",
      "images": ["https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800"],
      "amenities": ["Large Capacity", "Stage", "Sound System", "Kitchen", "Free Parking"]
    },
    {
      "id": "9",
      "name": "Badminton Court Central",
      "description": "Standard badminton court with professional flooring and equipment available for rent.",
      "location": "Jurong East, Singapore",
      "space_type": "Sports Court",
      "price_per_hour": 25,
      "is_public": true,
      "owner_id": "owner2",
      "images": ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800"],
      "amenities": ["Professional Court", "Equipment Rental", "Changing Rooms", "Water Station"]
    },
    {
      "id": "10",
      "name": "Innovation Lab",
      "description": "High-tech meeting space equipped with the latest technology for innovation and development sessions.",
      "location": "Punggol, Singapore",
      "space_type": "Meeting Room", 
      "price_per_hour": 90,
      "is_public": true,
      "owner_id": "owner3",
      "images": ["https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800"],
      "amenities": ["Smart Board", "VR Equipment", "High-Speed Internet", "Collaboration Tools", "Tech Support"]
    }
  ],
  "bookings": [
    {
      "id": "b1",
      "space_id": "1", 
      "booker_id": "user1",
      "start_time": "2025-07-25T09:00:00",
      "end_time": "2025-07-25T11:00:00",
      "status": "confirmed",
      "booker_name": "John Doe",
      "booker_email": "john@example.com"
    },
    {
      "id": "b2",
      "space_id": "1",
      "booker_id": "user2", 
      "start_time": "2025-07-26T14:00:00",
      "end_time": "2025-07-26T16:00:00",
      "status": "confirmed",
      "booker_name": "Sarah Chen",
      "booker_email": "sarah@example.com"
    },
    {
      "id": "b3",
      "space_id": "2",
      "booker_id": "user3",
      "start_time": "2025-07-25T18:00:00", 
      "end_time": "2025-07-25T20:00:00",
      "status": "confirmed",
      "booker_name": "Michael Lee",
      "booker_email": "michael@example.com"
    }
  ],
  "users": [
    {
      "id": "owner1",
      "email": "owner1@example.com",
      "password": "password123",
      "full_name": "Alice Johnson",
      "role": "owner"
    },
    {
      "id": "owner2", 
      "email": "owner2@example.com",
      "password": "password123",
      "full_name": "Bob Wilson", 
      "role": "owner"
    },
    {
      "id": "owner3",
      "email": "owner3@example.com",
      "password": "password123",
      "full_name": "Carol Davis",
      "role": "owner" 
    },
    {
      "id": "owner4",
      "email": "owner4@example.com",
      "password": "password123", 
      "full_name": "David Kim",
      "role": "owner"
    },
    {
      "id": "user1",
      "email": "user1@example.com",
      "password": "password123",
      "full_name": "John Doe", 
      "role": "booker"
    },
    {
      "id": "user2",
      "email": "user2@example.com",
      "password": "password123",
      "full_name": "Sarah Chen",
      "role": "booker"
    }
  ]
};

// Application State
class AppState {
  constructor() {
    this.currentUser = null;
    this.currentView = 'home';
    this.currentSpace = null;
    this.selectedTimeSlot = null;
    this.filters = {
      search: '',
      type: '',
      price: ''
    };
    this.isEditingSpace = false;
    this.editingSpaceId = null;
  }

  setUser(user) {
    this.currentUser = user;
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('currentUser');
    }
  }

  loadUser() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUser = JSON.parse(savedUser);
    }
  }

  setView(view) {
    this.currentView = view;
    this.showView(view);
  }

  showView(view) {
    // Hide all views
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    
    // Show specific view
    const viewElement = document.getElementById(`${view}-view`);
    if (viewElement) {
      viewElement.classList.remove('hidden');
    }
  }
}

const appState = new AppState();

// Utility Functions
function generateId() {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
}

function formatPrice(price) {
  return price === 0 ? 'Free' : `$${price}/hour`;
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function formatTime(dateString) {
  return new Date(dateString).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
}

function showSuccess(message) {
  const successElement = document.getElementById('success-message');
  const successText = document.getElementById('success-text');
  successText.textContent = message;
  successElement.classList.remove('hidden');
  
  setTimeout(() => {
    successElement.classList.add('hidden');
  }, 3000);
}

// Authentication Functions
function authenticateUser(email, password) {
  const user = MOCK_DATA.users.find(u => u.email === email && u.password === password);
  if (user) {
    return { ...user, token: generateId() };
  }
  return null;
}

function registerUser(name, email, password, role) {
  const existingUser = MOCK_DATA.users.find(u => u.email === email);
  if (existingUser) {
    throw new Error('User already exists');
  }
  
  const newUser = {
    id: generateId(),
    email,
    password,
    full_name: name,
    role,
    token: generateId()
  };
  
  MOCK_DATA.users.push(newUser);
  return newUser;
}

// Space Management Functions
function getFilteredSpaces() {
  let spaces = MOCK_DATA.spaces.filter(space => space.is_public);
  
  // Apply search filter
  if (appState.filters.search) {
    const searchTerm = appState.filters.search.toLowerCase();
    spaces = spaces.filter(space => 
      space.name.toLowerCase().includes(searchTerm) ||
      space.location.toLowerCase().includes(searchTerm) ||
      space.space_type.toLowerCase().includes(searchTerm)
    );
  }
  
  // Apply type filter
  if (appState.filters.type) {
    spaces = spaces.filter(space => space.space_type === appState.filters.type);
  }
  
  // Apply price filter
  if (appState.filters.price) {
    if (appState.filters.price === 'free') {
      spaces = spaces.filter(space => space.price_per_hour === 0);
    } else if (appState.filters.price === 'paid') {
      spaces = spaces.filter(space => space.price_per_hour > 0);
    }
  }
  
  return spaces;
}

function getOwnerSpaces(ownerId) {
  return MOCK_DATA.spaces.filter(space => space.owner_id === ownerId);
}

function getUserBookings(userId) {
  return MOCK_DATA.bookings.filter(booking => booking.booker_id === userId);
}

function getSpaceBookings(spaceId) {
  return MOCK_DATA.bookings.filter(booking => booking.space_id === spaceId);
}

// Calendar Functions
function generateTimeSlots(date, spaceId) {
  const slots = [];
  const bookings = getSpaceBookings(spaceId);
  const selectedDate = new Date(date);
  
  // Generate hourly slots from 9 AM to 6 PM
  for (let hour = 9; hour <= 17; hour++) {
    const startTime = new Date(selectedDate);
    startTime.setHours(hour, 0, 0, 0);
    
    const endTime = new Date(startTime);
    endTime.setHours(hour + 1, 0, 0, 0);
    
    const isBooked = bookings.some(booking => {
      const bookingStart = new Date(booking.start_time);
      const bookingEnd = new Date(booking.end_time);
      return (startTime >= bookingStart && startTime < bookingEnd) ||
             (endTime > bookingStart && endTime <= bookingEnd);
    });
    
    slots.push({
      start: startTime.toISOString(),
      end: endTime.toISOString(),
      available: !isBooked,
      display: `${hour}:00 - ${hour + 1}:00`
    });
  }
  
  return slots;
}

function renderCalendar(spaceId) {
  const calendar = document.getElementById('availability-calendar');
  const today = new Date();
  
  // Simple calendar for the current week
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  
  let calendarHTML = `
    <div class="calendar">
      <div class="calendar-header">
        <h4>This Week - Click a date to see time slots</h4>
      </div>
      <div class="calendar-grid">
  `;
  
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Add day headers
  days.forEach(day => {
    calendarHTML += `<div style="font-weight: 600; text-align: center; padding: 8px; border-bottom: 1px solid var(--color-border);">${day}</div>`;
  });
  
  // Add day cells
  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    
    const isToday = date.toDateString() === today.toDateString();
    const dayClasses = ['calendar-day'];
    if (isToday) dayClasses.push('today');
    
    calendarHTML += `
      <div class="${dayClasses.join(' ')}" data-date="${date.toISOString().split('T')[0]}" style="cursor: pointer;">
        ${date.getDate()}
      </div>
    `;
  }
  
  calendarHTML += `
      </div>
      <div id="selected-date-slots" class="time-slots" style="margin-top: 20px;">
        <p style="text-align: center; color: var(--color-text-secondary);">Select a date above to view available time slots</p>
      </div>
    </div>
  `;
  
  calendar.innerHTML = calendarHTML;
  
  // Add click handlers for dates
  calendar.querySelectorAll('.calendar-day').forEach(dayElement => {
    dayElement.addEventListener('click', () => {
      // Remove active class from all days
      calendar.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('active'));
      dayElement.classList.add('active');
      dayElement.style.backgroundColor = 'var(--color-primary)';
      dayElement.style.color = 'var(--color-btn-primary-text)';
      
      const selectedDate = dayElement.dataset.date;
      renderTimeSlots(selectedDate, spaceId);
    });
  });
}

function renderTimeSlots(date, spaceId) {
  const slotsContainer = document.getElementById('selected-date-slots');
  const slots = generateTimeSlots(date, spaceId);
  
  let slotsHTML = `<h5 style="margin-bottom: 12px;">Available Times for ${formatDate(date)}</h5>`;
  
  slots.forEach(slot => {
    const slotClasses = ['time-slot'];
    if (slot.available) {
      slotClasses.push('available');
    } else {
      slotClasses.push('booked');
    }
    
    slotsHTML += `
      <div class="${slotClasses.join(' ')}" 
           data-start="${slot.start}" 
           data-end="${slot.end}"
           data-date="${date}"
           style="${slot.available ? 'cursor: pointer;' : 'cursor: not-allowed;'}">
        ${slot.display}
      </div>
    `;
  });
  
  slotsContainer.innerHTML = slotsHTML;
  
  // Add click handlers for available slots
  slotsContainer.querySelectorAll('.time-slot.available').forEach(slotElement => {
    slotElement.addEventListener('click', () => {
      appState.selectedTimeSlot = {
        start: slotElement.dataset.start,
        end: slotElement.dataset.end,
        date: slotElement.dataset.date
      };
      openBookingModal();
    });
  });
}

// UI Rendering Functions
function renderSpaceCard(space) {
  const priceDisplay = formatPrice(space.price_per_hour);
  const priceClass = space.price_per_hour === 0 ? 'free' : '';
  
  return `
    <div class="space-card" data-space-id="${space.id}">
      <div class="space-image">
        <img src="${space.images[0]}" alt="${space.name}" loading="lazy" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDgwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjQwMCIgeT0iMTA1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0E2QUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPklNQUdFPC90ZXh0Pgo8L3N2Zz4K'">
      </div>
      <div class="space-card-body">
        <h3 class="space-name">${space.name}</h3>
        <p class="space-location">${space.location}</p>
        <div class="space-meta">
          <span class="space-type">${space.space_type}</span>
          <span class="space-price ${priceClass}">${priceDisplay}</span>
        </div>
      </div>
    </div>
  `;
}

function renderSpacesGrid() {
  const grid = document.getElementById('spaces-grid');
  const spaces = getFilteredSpaces();
  
  if (spaces.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <h3>No spaces found</h3>
        <p>Try adjusting your search filters</p>
      </div>
    `;
    return;
  }
  
  grid.innerHTML = spaces.map(space => renderSpaceCard(space)).join('');
  
  // Add click handlers
  grid.querySelectorAll('.space-card').forEach(card => {
    card.addEventListener('click', () => {
      const spaceId = card.dataset.spaceId;
      showSpaceDetail(spaceId);
    });
  });
}

function renderOwnerSpacesGrid() {
  const grid = document.getElementById('owner-spaces-grid');
  if (!appState.currentUser) return;
  
  const spaces = getOwnerSpaces(appState.currentUser.id);
  
  if (spaces.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No spaces yet</h3>
        <p>Create your first space to get started</p>
      </div>
    `;
    return;
  }
  
  grid.innerHTML = spaces.map(space => {
    const cardHTML = renderSpaceCard(space);
    // Add edit button to owner's cards
    return cardHTML.replace('</div></div>', `
      <div style="padding: 16px; border-top: 1px solid var(--color-border);">
        <button class="btn btn--outline btn--sm edit-space-btn" data-space-id="${space.id}">
          Edit Space
        </button>
      </div>
    </div></div>`);
  }).join('');
  
  // Add click handlers for editing
  grid.querySelectorAll('.edit-space-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const spaceId = btn.dataset.spaceId;
      editSpace(spaceId);
    });
  });
}

function renderBookingsList() {
  const container = document.getElementById('bookings-list');
  if (!appState.currentUser) return;
  
  let bookings = [];
  if (appState.currentUser.role === 'owner') {
    // Show bookings for owner's spaces
    const ownerSpaces = getOwnerSpaces(appState.currentUser.id);
    bookings = MOCK_DATA.bookings.filter(booking => 
      ownerSpaces.some(space => space.id === booking.space_id)
    );
  } else {
    // Show user's bookings
    bookings = getUserBookings(appState.currentUser.id);
  }
  
  if (bookings.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>No bookings found</h3>
        <p>Your bookings will appear here</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = bookings.map(booking => {
    const space = MOCK_DATA.spaces.find(s => s.id === booking.space_id);
    const statusClass = booking.status === 'confirmed' ? 'success' : 'warning';
    
    return `
      <div class="booking-item">
        <div class="booking-header">
          <div>
            <div class="booking-space">${space.name}</div>
            <div class="booking-details">${space.location}</div>
          </div>
          <span class="status status--${statusClass}">${booking.status}</span>
        </div>
        <div class="booking-details">
          <strong>Date:</strong> ${formatDate(booking.start_time)}<br>
          <strong>Time:</strong> ${formatTime(booking.start_time)} - ${formatTime(booking.end_time)}<br>
          <strong>Booked by:</strong> ${booking.booker_name} (${booking.booker_email})
        </div>
      </div>
    `;
  }).join('');
}

// View Management Functions
function showSpaceDetail(spaceId) {
  const space = MOCK_DATA.spaces.find(s => s.id === spaceId);
  if (!space) return;
  
  appState.currentSpace = space;
  
  // Populate space details
  document.getElementById('detail-name').textContent = space.name;
  document.getElementById('detail-image').src = space.images[0];
  document.getElementById('detail-image').alt = space.name;
  // Add error handler for detail image
  document.getElementById('detail-image').onerror = function() {
    this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDgwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjQwMCIgeT0iMTU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5Q0E2QUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPklNQUdFPC90ZXh0Pgo8L3N2Zz4K';
  };
  
  document.getElementById('detail-description').textContent = space.description;
  document.getElementById('detail-location').textContent = space.location;
  
  const pricingElement = document.getElementById('detail-pricing');
  const priceDisplay = formatPrice(space.price_per_hour);
  const priceClass = space.price_per_hour === 0 ? 'success' : 'primary';
  pricingElement.innerHTML = `<span class="status status--${priceClass}">${priceDisplay}</span>`;
  
  // Render amenities
  const amenitiesElement = document.getElementById('detail-amenities');
  amenitiesElement.innerHTML = space.amenities.map(amenity => 
    `<span class="amenity-tag">${amenity}</span>`
  ).join('');
  
  // Render calendar
  renderCalendar(spaceId);
  
  appState.setView('detail');
}

function openBookingModal() {
  if (!appState.currentSpace || !appState.selectedTimeSlot) return;
  
  // Populate modal with booking details
  document.getElementById('booking-space-name').textContent = appState.currentSpace.name;
  document.getElementById('booking-date').textContent = formatDate(appState.selectedTimeSlot.start);
  document.getElementById('booking-time').textContent = 
    `${formatTime(appState.selectedTimeSlot.start)} - ${formatTime(appState.selectedTimeSlot.end)}`;
  
  // Pre-fill user data if logged in
  if (appState.currentUser) {
    document.getElementById('booking-name').value = appState.currentUser.full_name;
    document.getElementById('booking-email').value = appState.currentUser.email;
  }
  
  document.getElementById('booking-modal').classList.remove('hidden');
}

function closeBookingModal() {
  document.getElementById('booking-modal').classList.add('hidden');
  document.getElementById('booking-form').reset();
  appState.selectedTimeSlot = null;
}

function confirmBooking() {
  const name = document.getElementById('booking-name').value;
  const email = document.getElementById('booking-email').value;
  
  if (!name || !email) {
    alert('Please fill in all fields');
    return;
  }
  
  // Create new booking
  const newBooking = {
    id: generateId(),
    space_id: appState.currentSpace.id,
    booker_id: appState.currentUser?.id || generateId(),
    start_time: appState.selectedTimeSlot.start,
    end_time: appState.selectedTimeSlot.end,
    status: 'confirmed',
    booker_name: name,
    booker_email: email
  };
  
  MOCK_DATA.bookings.push(newBooking);
  
  closeBookingModal();
  showSuccess('Booking confirmed successfully!');
  
  // Refresh calendar if we're still on the detail page
  if (appState.currentView === 'detail') {
    renderCalendar(appState.currentSpace.id);
  }
}

function editSpace(spaceId) {
  const space = MOCK_DATA.spaces.find(s => s.id === spaceId);
  if (!space) return;
  
  appState.isEditingSpace = true;
  appState.editingSpaceId = spaceId;
  
  // Populate form
  document.getElementById('form-title').textContent = 'Edit Space';
  document.getElementById('form-name').value = space.name;
  document.getElementById('form-description').value = space.description;
  document.getElementById('form-type').value = space.space_type;
  document.getElementById('form-location').value = space.location;
  document.getElementById('form-price').value = space.price_per_hour;
  document.getElementById('form-public').checked = space.is_public;
  
  // Show form section
  showDashboardSection('space-form-section');
}

function createNewSpace() {
  appState.isEditingSpace = false;
  appState.editingSpaceId = null;
  
  document.getElementById('form-title').textContent = 'Create New Space';
  document.getElementById('space-form').reset();
  document.getElementById('form-public').checked = true; // Default to public
  
  showDashboardSection('space-form-section');
}

function saveSpace() {
  const formData = {
    name: document.getElementById('form-name').value,
    description: document.getElementById('form-description').value,
    space_type: document.getElementById('form-type').value,
    location: document.getElementById('form-location').value,
    price_per_hour: parseFloat(document.getElementById('form-price').value) || 0,
    is_public: document.getElementById('form-public').checked
  };
  
  // Basic validation
  if (!formData.name || !formData.description || !formData.space_type || !formData.location) {
    alert('Please fill in all required fields');
    return;
  }
  
  if (appState.isEditingSpace && appState.editingSpaceId) {
    // Update existing space
    const spaceIndex = MOCK_DATA.spaces.findIndex(s => s.id === appState.editingSpaceId);
    if (spaceIndex !== -1) {
      MOCK_DATA.spaces[spaceIndex] = {
        ...MOCK_DATA.spaces[spaceIndex],
        ...formData
      };
      showSuccess('Space updated successfully!');
    }
  } else {
    // Create new space
    const newSpace = {
      id: generateId(),
      ...formData,
      owner_id: appState.currentUser.id,
      images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"], // Default image
      amenities: ["WiFi", "Basic Equipment"] // Default amenities
    };
    
    MOCK_DATA.spaces.push(newSpace);
    showSuccess('Space created successfully!');
  }
  
  // Return to my spaces
  showDashboardSection('my-spaces-section');
  renderOwnerSpacesGrid();
  document.getElementById('space-form').reset();
}

function showDashboardSection(sectionId) {
  // Hide all dashboard sections
  document.querySelectorAll('.dashboard-section').forEach(section => {
    section.classList.add('hidden');
  });
  
  // Show specific section
  document.getElementById(sectionId).classList.remove('hidden');
  
  // Update nav active state
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  
  const navMap = {
    'my-spaces-section': 'my-spaces',
    'bookings-section': 'bookings', 
    'account-section': 'account',
    'space-form-section': 'my-spaces' // Keep my-spaces active when editing
  };
  
  const activeNav = document.querySelector(`[data-section="${navMap[sectionId]}"]`);
  if (activeNav) activeNav.classList.add('active');
}

function updateAuthUI() {
  const publicNav = document.getElementById('public-nav');
  const authNav = document.getElementById('auth-nav');
  const userName = document.getElementById('user-name');
  const dashboardBtn = document.getElementById('dashboard-btn');
  
  if (appState.currentUser) {
    publicNav.classList.add('hidden');
    authNav.classList.remove('hidden');
    userName.textContent = `Hello, ${appState.currentUser.full_name}`;
    
    // Show dashboard button only for owners
    if (appState.currentUser.role === 'owner') {
      dashboardBtn.classList.remove('hidden');
    } else {
      dashboardBtn.classList.add('hidden');
    }
  } else {
    publicNav.classList.remove('hidden');
    authNav.classList.add('hidden');
  }
}

function updateDashboardUI() {
  if (!appState.currentUser) return;
  
  const sidebarUserName = document.getElementById('sidebar-user-name');
  const sidebarUserRole = document.getElementById('sidebar-user-role');
  const accountName = document.getElementById('account-name');
  const accountEmail = document.getElementById('account-email');
  const accountRole = document.getElementById('account-role');
  
  if (sidebarUserName) sidebarUserName.textContent = appState.currentUser.full_name;
  if (sidebarUserRole) sidebarUserRole.textContent = appState.currentUser.role;
  if (accountName) accountName.textContent = appState.currentUser.full_name;
  if (accountEmail) accountEmail.textContent = appState.currentUser.email;
  if (accountRole) accountRole.textContent = appState.currentUser.role;
}

// Event Listeners
function initializeEventListeners() {
  // Brand logo click to go home
  document.querySelector('.navbar-brand').addEventListener('click', () => {
    appState.setView('home');
  });

  // Navigation
  document.getElementById('login-btn').addEventListener('click', () => {
    appState.setView('login');
  });
  
  document.getElementById('register-btn').addEventListener('click', () => {
    appState.setView('register');
  });
  
  document.getElementById('dashboard-btn').addEventListener('click', () => {
    appState.setView('dashboard');
    updateDashboardUI();
    renderOwnerSpacesGrid();
    renderBookingsList();
  });
  
  document.getElementById('logout-btn').addEventListener('click', () => {
    appState.setUser(null);
    appState.setView('home');
    updateAuthUI();
    renderSpacesGrid(); // Refresh the grid
  });
  
  document.getElementById('back-to-home').addEventListener('click', () => {
    appState.setView('home');
  });
  
  // Auth form switches
  document.getElementById('switch-to-register').addEventListener('click', () => {
    appState.setView('register');
  });
  
  document.getElementById('switch-to-login').addEventListener('click', () => {
    appState.setView('login');
  });
  
  // Form submissions
  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    try {
      const user = authenticateUser(email, password);
      if (user) {
        appState.setUser(user);
        updateAuthUI();
        
        if (user.role === 'owner') {
          appState.setView('dashboard');
          updateDashboardUI();
          renderOwnerSpacesGrid();
          renderBookingsList();
        } else {
          appState.setView('home');
        }
        
        showSuccess('Login successful!');
        document.getElementById('login-form').reset();
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      alert(error.message);
    }
  });
  
  document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const role = document.getElementById('register-role').value;
    
    try {
      const user = registerUser(name, email, password, role);
      appState.setUser(user);
      updateAuthUI();
      
      if (user.role === 'owner') {
        appState.setView('dashboard');
        updateDashboardUI();
        renderOwnerSpacesGrid();
        renderBookingsList();
      } else {
        appState.setView('home');
      }
      
      showSuccess('Registration successful!');
      document.getElementById('register-form').reset();
    } catch (error) {
      alert(error.message);
    }
  });
  
  // Search and filters
  document.getElementById('search-input').addEventListener('input', (e) => {
    appState.filters.search = e.target.value;
    renderSpacesGrid();
  });
  
  document.getElementById('type-filter').addEventListener('change', (e) => {
    appState.filters.type = e.target.value;
    renderSpacesGrid();
  });
  
  document.getElementById('price-filter').addEventListener('change', (e) => {
    appState.filters.price = e.target.value;
    renderSpacesGrid();
  });
  
  // Booking modal
  document.getElementById('close-modal').addEventListener('click', closeBookingModal);
  document.getElementById('cancel-booking').addEventListener('click', closeBookingModal);
  document.getElementById('confirm-booking').addEventListener('click', confirmBooking);
  
  // Modal backdrop click to close
  document.querySelector('.modal-backdrop').addEventListener('click', closeBookingModal);
  
  // Dashboard navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const section = item.dataset.section;
      if (section === 'my-spaces') {
        showDashboardSection('my-spaces-section');
        renderOwnerSpacesGrid();
      } else if (section === 'bookings') {
        showDashboardSection('bookings-section');
        renderBookingsList();
      } else if (section === 'account') {
        showDashboardSection('account-section');
      }
    });
  });
  
  // Space form
  document.getElementById('create-space-btn').addEventListener('click', createNewSpace);
  document.getElementById('cancel-form-btn').addEventListener('click', () => {
    showDashboardSection('my-spaces-section');
  });
  
  document.getElementById('space-form').addEventListener('submit', (e) => {
    e.preventDefault();
    saveSpace();
  });
}

// Initialize Application
function initializeApp() {
  // Load saved user
  appState.loadUser();
  
  // Update UI
  updateAuthUI();
  
  // Render initial content
  renderSpacesGrid();
  
  // Set initial view
  appState.setView('home');
  
  // Initialize event listeners
  initializeEventListeners();
}

// Start the application
document.addEventListener('DOMContentLoaded', initializeApp);