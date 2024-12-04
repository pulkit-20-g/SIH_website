document.addEventListener('DOMContentLoaded', () => {
    // Create and append style element
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --olive-100: #F1F4E9;
        --olive-600: #556B2F;
        --olive-700: #3D4C21;
        --olive-800: #2C3618;
      }
  
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
  
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: var(--olive-800);
      }
  
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }
  
      header {
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
      }
  
      header .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
      }
  
      .logo {
        display: flex;
        align-items: center;
        margin-right: auto;
      }
  
      .logo img {
        width: 60px;
        height: 60px;
      }
  
      .logo span {
        margin-left: 10px;
        font-weight: bold;
        font-size: 1.2rem;
        color: var(--olive-700);
      }
  
      nav ul {
        display: flex;
        list-style-type: none;
      }
  
      nav ul li {
        margin-left: 20px;
      }
  
      nav ul li a {
        text-decoration: none;
        color: var(--olive-700);
        font-weight: bold;
      }
  
      nav ul li a:hover {
        color: var(--olive-800);
      }
  
      section {
        padding: 80px 0;
      }
  
      h2 {
        text-align: center;
        margin-bottom: 40px;
        font-size: 2.5rem;
      }
  
      .hero {
        position: relative;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }
  
      .hero-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 1s ease-in-out;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
  
      .hero-image.active {
        opacity: 1;
      }
  
      .hero h1 {
        font-size: 4rem;
        color: white;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        position: relative;
        z-index: 1;
      }
  
      #upload {
        background-color: var(--olive-100);
      }
  
      .file-upload-container {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
  
      .file-upload {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin: 10px;
        flex-basis: calc(50% - 20px);
      }
  
      .file-upload h3 {
        margin-bottom: 10px;
      }
  
      .file-upload input[type="file"] {
        display: block;
        margin-top: 10px;
      }
  
      .map-container {
        display: flex;
        justify-content: space-between;
        height: 400px;
      }
  
      .map {
        width: 48%;
        height: 100%;
        border-radius: 8px;
      }
  
      #toll {
        background-color: var(--olive-100);
      }
  
      .toll-calculator {
        max-width: 400px;
        margin: 0 auto;
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
  
      .toll-calculator div {
        margin-bottom: 15px;
      }
  
      .toll-calculator label {
        display: block;
        margin-bottom: 5px;
      }
  
      .toll-calculator input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
  
      .toll-calculator button {
        width: 100%;
        padding: 10px;
        background-color: var(--olive-600);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
      }
  
      .toll-calculator button:hover {
        background-color: var(--olive-700);
      }
  
      #totalToll {
        margin-top: 15px;
        font-weight: bold;
        text-align: center;
      }
  
      .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 20px;
      }
  
      .team-member {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        text-align: center;
      }
  
      .team-member img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-bottom: 10px;
      }
  
      .button-center {
        display: flex;
        justify-content: center;
      }
  
      .big-button {
        font-size: 1.2rem;
        padding: 12px 24px;
      }
  
      .road-name-section {
        background-color: var(--olive-100);
        padding: 40px 0;
      }
  
      .road-name-form {
        max-width: 600px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
  
      .road-name-form input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
  
      .footer {
        background-color: var(--olive-600);
        color: white;
        padding: 40px 0;
      }
  
      .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
  
      .footer-logo img {
        width: 150px;
        height: 150px;
      }
  
      .footer-links {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
  
      .footer-links a {
        color: white;
        text-decoration: bold;
      }
  
      .footer-text {
        text-align: center;
        margin-top: 20px;
      }
  
      @media (max-width: 768px) {
        .file-upload {
          flex-basis: 100%;
        }
  
        .map-container {
          flex-direction: column;
          height: auto;
        }
  
        .map {
          width: 100%;
          height: 300px;
          margin-bottom: 20px;
        }
      }
    `;
    document.head.appendChild(style);
  
    // Create and append link element for Leaflet CSS
    const leafletLink = document.createElement('link');
    leafletLink.rel = 'stylesheet';
    leafletLink.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
    document.head.appendChild(leafletLink);
  
    // Create and append script element for Leaflet JS
    const leafletScript = document.createElement('script');
    leafletScript.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js';
    document.head.appendChild(leafletScript);
  
    // Create main structure
    const body = document.body;
  body.innerHTML = `
    <header>
      <div class="container">
        <div class="logo">
          <img src="logo.png" alt="Logo">
          <span>Vehicle Movement</span>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#upload">Upload</a></li>
            <li><a href="#road-name">Road Name</a></li>
            <li><a href="#tracking">Tracking</a></li>
            <li><a href="#vehicle-features">Vehicle Features</a></li>
            <li><a href="#toll">Toll</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
        <section id="home" class="hero">
          <div class="hero-image active" style="background-image: url('vehicle-bg-1.jpg');"></div>
          <div class="hero-image" style="background-image: url('vehicle-bg-2.jpg');"></div>
          <div class="hero-image" style="background-image: url('vehicle-bg-3.jpg');"></div>
          <div class="hero-image" style="background-image: url('vehicle-bg-4.jpg');"></div>
          <h1>Vehicle Movement</h1>
        </section>
        <section id="upload">
          <div class="container">
            <h2>Upload Your Files</h2>
            <div class="file-upload-container">
              <div class="file-upload">
                <h3>Upload .kml File</h3>
                <input type="file" accept=".kml" id="kmlFile">
                <p id="kmlFileName"></p>
              </div>
              <div class="file-upload">
                <h3>Upload .pos File</h3>
                <input type="file" accept=".pos" id="posFile">
                <p id="posFileName"></p>
              </div>
            </div>
            <div class="button-center">
              <button id="uploadFiles" class="big-button">Upload Files</button>
            </div>
          </div>
        </section>
        <section id="road-name" class="road-name-section">
          <div class="container">
            <h2>Road Name</h2>
            <form class="road-name-form">
              <input type="text" id="highwayName" placeholder="Highway Name">
              <input type="text" id="serviceRoadName" placeholder="Service Road Name">
              <div class="button-center">
                <button type="submit" class="big-button">Submit Road Names</button>
              </div>
            </form>
          </div>
        </section>
       <section id="tracking">
        <div class="container">
          <h2>Vehicle Tracking</h2>
          <div class="map-container">
            <div id="map1" class="map"></div>
            <div id="map2" class="map"></div>
          </div>
        </div>
      </section>
      
      <section id="vehicle-features" class="vehicle-features">
        <div class="container">
          <h2>Vehicle Features</h2>
          <div class="features-grid">
            <div class="feature">
              <h3>Speed</h3>
              <p id="speed">0 km/h</p>
            </div>
            <div class="feature">
              <h3>Bearing</h3>
              <p id="bearing">0°</p>
            </div>
            <div class="feature">
              <h3>Acceleration</h3>
              <p id="acceleration">0 m/s²</p>
            </div>
            <div class="feature">
              <h3>Total Distance</h3>
              <p id="totalDistance">0 km</p>
            </div>
            <div class="feature">
              <h3>Total Time</h3>
              <p id="totalTime">0 hrs</p>
            </div>
          </div>
        </div>
      </section>
        <section id="toll">
          <div class="container">
            <h2>Toll Calculation</h2>
            <div class="toll-calculator">
              <div>
                <label for="vehicleNumber">Vehicle Number</label>
                <input type="text" id="vehicleNumber">
              </div>
              <div>
                <label for="tariffPerKm">Tariff per km</label>
                <input type="number" id="tariffPerKm">
              </div>
              <div class="button-center">
                <button id="calculateToll" class="big-button">Calculate Toll</button>
              </div>
              <p id="totalToll"></p>
            </div>
          </div>
        </section>
        <section id="team">
          <div class="container">
            <h2>Meet the Team</h2>
            <div class="team-grid"></div>
          </div>
        </section>
      </main>
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-logo">
              <img src="footer-logo.png" alt="Footer Logo">
            </div>
            <div class="footer-links">
              <a href="#home">Home</a>
              <a href="#upload">Upload</a>
              <a href="#road-name">Road Name</a>
              <a href="#tracking">Tracking</a>
              <a href="#toll">Toll</a>
              <a href="#team">Team</a>
            </div>
          </div>
          <div class="footer-text">
            <p>© 2024 Vehicle Movement. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  
    // File Upload
    const kmlFileInput = document.getElementById('kmlFile');
    const posFileInput = document.getElementById('posFile');
    const kmlFileName = document.getElementById('kmlFileName');
    const posFileName = document.getElementById('posFileName');
  
    kmlFileInput.addEventListener('change', (e) => {
      kmlFileName.textContent = e.target.files[0] ? `Selected file: ${e.target.files[0].name}` : '';
    });
  
    posFileInput.addEventListener('change', (e) => {
      posFileName.textContent = e.target.files[0] ? `Selected file: ${e.target.files[0].name}` : '';
    });
  
    // Maps
    leafletScript.onload = () => {
      const map1 = L.map('map1').setView([51.505, -0.09], 13);
      const map2 = L.map('map2').setView([51.505, -0.09], 13);
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map1);
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map2);
    };
    // Add styles for the new Vehicle Features section
    style.textContent += `
    .vehicle-features {
      background-color: var(--olive-100);
      padding: 40px 0;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }

    .feature {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .feature h3 {
      margin-bottom: 10px;
      color: var(--olive-700);
    }

    .feature p {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--olive-800);
    }
  `;
  document.head.appendChild(style);

  // Function to update vehicle features (placeholder)
  function updateVehicleFeatures(data) {
    document.getElementById('speed').textContent = `${data.speed.toFixed(2)} km/h`;
    document.getElementById('bearing').textContent = `${data.bearing.toFixed(2)}°`;
    document.getElementById('acceleration').textContent = `${data.acceleration.toFixed(2)} m/s²`;
    document.getElementById('totalDistance').textContent = `${data.totalDistance.toFixed(2)} km`;
    document.getElementById('totalTime').textContent = `${data.totalTime.toFixed(2)} hrs`;
  }

  // Simulating data updates (replace this with actual data fetching)
  setInterval(() => {
    const mockData = {
      speed: Math.random() * 100,
      bearing: Math.random() * 360,
      acceleration: Math.random() * 5,
      totalDistance: Math.random() * 1000,
      totalTime: Math.random() * 24
    };
    updateVehicleFeatures(mockData);
  }, 5000);


    // Toll Calculator
    const vehicleNumberInput = document.getElementById('vehicleNumber');
    const tariffPerKmInput = document.getElementById('tariffPerKm');
    const calculateTollButton = document.getElementById('calculateToll');
    const totalTollDisplay = document.getElementById('totalToll');
  
    calculateTollButton.addEventListener('click', () => {
      const vehicleNumber = vehicleNumberInput.value;
      const tariffPerKm = parseFloat(tariffPerKmInput.value);
  
      if (vehicleNumber && !isNaN(tariffPerKm)) {
        const totalToll = tariffPerKm * 100; // Assuming 100 km distance
        totalTollDisplay.textContent = `Total Toll: $${totalToll.toFixed(2)}`;
      } else {
        totalTollDisplay.textContent = 'Please enter valid values';
      }
    });
  
    // Team Section
    const teamMembers = [
      { name: 'John Doe', image: 'https://via.placeholder.com/150' },
      { name: 'Jane Smith', image: 'https://via.placeholder.com/150' },
      { name: 'Mike Johnson', image: 'https://via.placeholder.com/150' },
      { name: 'Emily Brown', image: 'https://via.placeholder.com/150' },
      { name: 'Chris Lee', image: 'https://via.placeholder.com/150' },
      { name: 'Sarah Davis', image: 'https://via.placeholder.com/150' },
    ];
  
    const teamGrid = document.querySelector('.team-grid');
  
    teamMembers.forEach(member => {
      const memberElement = document.createElement('div');
      memberElement.classList.add('team-member');
      memberElement.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
      `;
      teamGrid.appendChild(memberElement);
    });
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Add Road Name form submission
    const roadNameForm = document.querySelector('.road-name-form');
    roadNameForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const highwayName = document.getElementById('highwayName').value;
      const serviceRoadName = document.getElementById('serviceRoadName').value;
      console.log('Highway Name:', highwayName);
      console.log('Service Road Name:', serviceRoadName);
      // Add your code here to handle the road names
    });
  
    // Hero image slideshow
    const heroImages = document.querySelectorAll('.hero-image');
    let currentImageIndex = 0;
  
    function changeHeroImage() {
      heroImages[currentImageIndex].classList.remove('active');
      currentImageIndex = (currentImageIndex + 1) % heroImages.length;
      heroImages[currentImageIndex].classList.add('active');
    }
  
    setInterval(changeHeroImage, 5000); // Change image every 5 seconds
  
    // Update button styles
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.classList.add('big-button');
    });
  });
  
  