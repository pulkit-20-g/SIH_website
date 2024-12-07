document.addEventListener('DOMContentLoaded', () => {
  function createEntryScreen() {
     // Create entry screen container
     const entryScreen = document.createElement('div');
     entryScreen.id = 'entry-screen';
     entryScreen.style.cssText = `
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       background: linear-gradient(to bottom, #000000, #1a1a1a, #333333);
       z-index: 9999;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       overflow: hidden;
     `;
 
     // Create background text
     const backgroundText = document.createElement('div');
     backgroundText.style.cssText = `
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       font-size: 20rem;
       font-weight: bold;
       color: rgba(255,255,255,0.05);
       text-align: center;
       user-select: none;
       pointer-events: none;
     `;
     backgroundText.textContent = 'VEHICLE';
 
     // Create logo container
     const logoContainer = document.createElement('div');
     logoContainer.style.cssText = `
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       opacity: 0;
       transition: all 1s ease-in-out;
       display: flex;
       flex-direction: column;
       align-items: center;
       z-index: 10;
     `;
 
     // Create logo image
     const logoImage = document.createElement('img');
     logoImage.src = 'logo2.png'; // Replace with your logo path
     logoImage.style.cssText = `
       width: 500px;
       height: auto;
       max-width: 500px;
       margin-bottom: 20px;
       transition: all 1s ease-in-out;
     `;
 
     // Create website name text
     const websiteNameText = document.createElement('div');
     websiteNameText.textContent = '"Barely Made it"';
     websiteNameText.style.cssText = `
       color: white;
       font-size: 3rem;
       font-weight: bold;
       text-align: center;
       opacity: 0;
     `;
 
     // Create website description
     const websiteDescription = document.createElement('div');
     websiteDescription.textContent = 'Tracking Vehicle Movements with Precision';
     websiteDescription.style.cssText = `
       color: white;
       font-size: 1.2rem;
       text-align: center;
       margin-top: 10px;
       opacity: 0;
     `;
 
     // Create enter button
     const enterButton = document.createElement('button');
     enterButton.textContent = 'Enter Website';
     enterButton.style.cssText = `
       margin-top: 20px;
       padding: 10px 20px;
       font-size: 1.2rem;
       background-color: white;
       color: black;
       border: none;
       border-radius: 5px;
       cursor: pointer;
       opacity: 0;
       transition: all 0.3s ease;
     `;
 
     logoContainer.appendChild(logoImage);
     logoContainer.appendChild(websiteNameText);
     logoContainer.appendChild(websiteDescription);
     logoContainer.appendChild(enterButton);
     
     entryScreen.appendChild(backgroundText);
     entryScreen.appendChild(logoContainer);
     document.body.appendChild(entryScreen);
 
     // Animation functions
     function animateLogo() {
       return new Promise((resolve) => {
         logoContainer.style.opacity = '1';
         websiteNameText.style.opacity = '1';
         websiteDescription.style.opacity = '1';
         enterButton.style.opacity = '1';
         resolve();
       });
     }
 
     function removeEntryScreen() {
       return new Promise((resolve) => {
         enterButton.addEventListener('click', () => {
           logoImage.style.transform = 'scale(2)';
           logoImage.style.opacity = '0';
           websiteNameText.style.opacity = '0';
           websiteDescription.style.opacity = '0';
           backgroundText.style.opacity = '0';
           
           setTimeout(() => {
             document.body.removeChild(entryScreen);
             resolve();
           }, 1000);
         });
       });
     }
 
     // Sequence the animations
     async function startEntrySequence() {
       await animateLogo();
       await removeEntryScreen();
     }
 
     // Start the sequence after a short delay
     setTimeout(startEntrySequence, 500);
   }
 
     // Create and append style element
     const style = document.createElement('style');
     style.textContent = `
       :root {
        --cyan-100: #E0F7FA;
         --cyan-600: #00838F;
         --cyan-700:  #006064;
         --cyan-800: #004D40;
       }
   
       * {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
       }
   
       body {
         font-family: Arial, sans-serif;
         line-height: 1.6;
         color: var(--cyan-800);
       }
   
       .container {
         max-width: 1500px;
         margin: 0 auto;
         padding: 0 20px;
       }
       header {
         padding: 15px 0;
         position: fixed;
         top: 0;
         left: 0;
         right: 0;
         z-index: 1000;
         background: linear-gradient(45deg, #2C2C2C, #1A1A1A, #333333);

         box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
       }
 
       header::before {
         content: '';
         position: absolute;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
         background-image: url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.1" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E');
         opacity: 0.1;
         z-index: -1;
       }
 
       header .container {
         display: flex;
         align-items: center;
         justify-content: space-between;
         padding: 0 20px;
       }
 
       .logo {
         display: flex;
         align-items: center;
       }
 
       .logo img {
         width: 50px;
         height: 50px;
         margin-right: 10px;
       }
 
       .logo span {
         font-weight: bold;
         font-size: 1.2rem;
         color: white;
       }
 
       nav {
         flex-grow: 1;
         display: flex;
         justify-content: flex-end;
       }
 
       nav ul {
         display: flex;
         list-style-type: none;
         margin: 0;
         padding: 0;
       }
 
       nav ul li {
         margin-left: 20px;
       }
 
       nav ul li a {
         text-decoration: none;
         color: white;
         font-weight: bold;
         font-size: 1rem;
         transition: color 0.3s ease;
         position: relative;
       }
 
       nav ul li a:hover {
         color: #F1F4E9;
       }
 
       nav ul li a::after {
         content: '';
         position: absolute;
         width: 100%;
         height: 2px;
         bottom: -5px;
         left: 0;
         background-color: #F1F4E9;
         visibility: hidden;
         transform: scaleX(0);
         transition: all 0.3s ease-in-out;
       }
 
       nav ul li a:hover::after {
         visibility: visible;
         transform: scaleX(1);
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
   
      .file-upload {
    background-color: var(--cyan-100);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 10px;
    flex-basis: calc(50% - 20px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.file-upload:hover {
    transform: translateY(-10px); /* Moves the card up on hover */
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); /* Adds a larger shadow for depth */
}

.file-upload h3 {
    margin-bottom: 10px;
    color: #333;
    font-size: 1.2rem;
}

/* Styling for File Input */
.file-upload input[type="file"] {
    display: block;
    margin-top: 10px;
    font-size: 1rem;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ddd;
    cursor: pointer;
    transition: background-color 0.3s;
}

.file-upload input[type="file"]:hover {
    background-color: #f1f1f1; /* Change background color on hover */
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
       /* Floating container to make the toll section look like floating above the page */
.floating-container {
    background-color: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15); /* Creates the floating shadow effect */
    max-width: 500px;
    margin: 0 auto; /* Centers the floating container */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    z-index: 1; /* Ensures it floats above other content */
}

/* Hover effect on the floating container */
.floating-container:hover {
    transform: translateY(-10px); /* Slightly lifts the box on hover */
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2); /* Enhance shadow for depth */
}

/* Styling for the toll calculator box */
.toll-calculator {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Hover effect for the toll calculator */
.toll-calculator:hover {
    transform: translateY(-10px); /* Moves the box up on hover */
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); /* Larger shadow for depth */
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

/* Button styling */
.toll-calculator button {
    width: 100%;
    padding: 10px;
    background-color: var(--cyan-600);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

/* Button hover effect */
.toll-calculator button:hover {
    background-color: var(--cyan-700);
}

#totalToll {
    margin-top: 15px;
    font-weight: bold;
    text-align: center;
}

   
       /* Team Member Section */
.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
}

/* Hover Effect for Team Member Cards */
.team-member {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Hover Effect on Team Member Cards */
.team-member:hover {
    transform: translateY(-10px); /* Moves the card up on hover */
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); /* Larger shadow for depth */
}

.team-member img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 10px;
}

/* Road Name Section */
.road-name-section {
    background-color: var(--cyan-100);
    padding: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Hover Effect for Road Name Box */
.road-name-form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Hover Effect on Road Name Form */
.road-name-form:hover {
    transform: translateY(-10px); /* Moves the form up on hover */
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); /* Larger shadow for depth */
}

/* Styling for Input Fields in Road Name Form */
.road-name-form input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

/* Centering Button */
.button-center {
    display: flex;
    justify-content: center;
}

/* Big Button Styling */
.big-button {
    font-size: 1.2rem;
    padding: 12px 24px;
    background-color: var(--cyan-600);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

/* Hover Effect for Button */
.big-button:hover {
    background-color: var(--cyan-700);
}

   
       .footer {
         background-color: var(--cyan-600);
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
       .map-container.full-width {
         width: 100%;
         height: 600px;
       }
 
       .map.full-height {
         width: 100%;
         height: 100%;
       }
       /* Section styles */
.vehicle-features {
  background-color: var(--cyan-100);
  padding: 80px 0; /* Adjust padding to give more space around the floating box */
  display: flex;
  justify-content: center; /* Center the floating box */
  align-items: center;
  min-height: 100vh; /* Ensure full viewport height for the floating effect */
}

/* Floating Box Style */
.floating-box {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* Create the floating shadow effect */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition on hover */
  padding: 40px;
  width: 80%; /* Adjust the width as per your layout */
  max-width: 1200px;
}

.floating-box:hover {
  transform: translateY(-10px) scale(1.05); /* Slightly lift the box and increase size */
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3); /* Stronger shadow on hover */
}

/* Container for the content inside the floating box */
.container {
  text-align: center;
}

/* Grid styles */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

/* Individual Feature Box */
.feature {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transition for each feature box */
}

.feature:hover {
  transform: scale(1.05) rotateY(5deg); /* Slight scale and rotation on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
}

.feature h3 {
  margin-bottom: 10px;
  color: var(--cyan-700);
}

.feature p {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--cyan-800);
}

/* Optional: Smoothly animate the text color change on hover */
.feature:hover h3 {
  color: var(--cyan-600);
}

.feature:hover p {
  color: var(--cyan-700);
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
             <li><a href="#old-map">Old Map</a></li>
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
        <section id="old-map">
           <div class="container">
             <h2>Old Map</h2>
             <div class="map-container full-width">
               <div id="map1" class="map full-height"></div>
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
             <h2>Predicted Map</h2>
             <div class="map-container full-width">
               <div id="map2" class="map full-height"></div>
             </div>
           </div>
         </section>
       
     <section id="vehicle-features" class="vehicle-features">
  <div class="floating-box">
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
  </div>
</section>



        <section id="toll">
    <div class="container">
        <h2>Toll Calculation</h2>
        
        <!-- Floating Container that wraps the toll calculator -->
        <div class="floating-container">
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
       // creating entry screen
     createEntryScreen();  
   
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
 
     // Add Scrolling Car Functionality
const scrollCar = document.createElement('div');
scrollCar.id = 'scroll-car';
scrollCar.style.cssText = `
  position: fixed;
  right: -55px;
  top: -200px; /* Start above the viewport */
  width: 150px; /* Adjust size as needed */
  height: auto;
  z-index: 10;
  transition: top 0.3s ease-out;
  pointer-events: auto; /* Allow interaction */
`;

// Create car image
const carImage = document.createElement('img');
carImage.src = 'car.png';
carImage.style.cssText = `
  width: 100%;
  height: auto;
  transform: rotate(90deg); /* Rotate car to look like it's going down */
`;
scrollCar.appendChild(carImage);

// Add car to body
document.body.appendChild(scrollCar);

// Scrolling animation
let lastScrollTop = 0;
let isScrollingDown = true;
let isDragging = false;
let startY = 0;
let startTop = 0;

// Mouse events for dragging
scrollCar.addEventListener('mousedown', (e) => {
  isDragging = true;
  startY = e.clientY;
  startTop = parseInt(window.getComputedStyle(scrollCar).top, 10);
  scrollCar.style.transition = 'none'; // Disable transition while dragging
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const deltaY = e.clientY - startY;
    const newTop = Math.min(Math.max(startTop + deltaY, 0), window.innerHeight - 200); // Constrain car within window bounds
    scrollCar.style.top = `${newTop}px`;

    // Calculate scroll position based on the car's position
    const scrollProgress = newTop / (window.innerHeight - 200);
    window.scrollTo(0, scrollProgress * (document.documentElement.scrollHeight - window.innerHeight));
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  scrollCar.style.transition = 'top 0.3s ease-out'; // Re-enable transition after dragging
});

// Scrolling sync animation
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // Determine scroll direction
  isScrollingDown = scrollTop > lastScrollTop;
  lastScrollTop = scrollTop;

  // Calculate car position based on scroll progress
  const scrollProgress = scrollTop / (documentHeight - windowHeight);
  
  // Move car down as page scrolls
  if (!isDragging) {
    if (isScrollingDown) {
      scrollCar.style.top = `${Math.min(scrollProgress * windowHeight, windowHeight - 200)}px`;
    } else {
      scrollCar.style.top = `${Math.max(scrollProgress * windowHeight, 0)}px`;
    }
  }

  // Optional: Tilt car based on scroll direction
  carImage.style.transform = isScrollingDown 
    ? 'rotate(90deg)' 
    : 'rotate(270deg)';
});

// Add some styling to make scrolling smoother
const scrollCarStyle = document.createElement('style');
scrollCarStyle.textContent = `
  html {
    scroll-behavior: smooth;
  }
  #scroll-car {
    transition: top 0.3s ease-out;
  }
`;
document.head.appendChild(scrollCarStyle);

   //starts here
   // Add Side Road Background
   const scrollRoad = document.createElement('div');
   scrollRoad.id = 'scroll-road';
   scrollRoad.style.cssText = `
     position: fixed;
     top: 0;
     right: 0;
     width: 40px; /* Adjust road width as needed */
     height: 100vh;
     background: linear-gradient(
       to right,
       #444 0%, 
       #555 10%, 
       #444 20%, 
       #555 30%, 
       #444 40%, 
       #555 50%, 
       #444 60%, 
       #555 70%, 
       #444 80%, 
       #555 90%, 
       #444 100%
     );
     z-index: 9;
     overflow: hidden;
   `;
 
   // Add road marking lines
   const roadMarkings = document.createElement('div');
   roadMarkings.style.cssText = `
     position: absolute;
     top: 0%;
     left: 50%;
     width: 5px;
     height: 100%;
     background: repeating-linear-gradient(
       0deg, 
       white 0%, 
       white 20px, 
       transparent 20px, 
       transparent 40px
     );
     transform: translateX(-50%);
     opacity: 0.7;
   `;
   scrollRoad.appendChild(roadMarkings);
 
   // Add road to body
   document.body.appendChild(scrollRoad);
 
   // Modify existing scroll event listener to include road movement
   window.addEventListener('scroll', () => {
     // ... (rest of the scroll event listener code)
     // Move road based on scroll progress (example)
     const roadProgress = scrollTop / (documentHeight - windowHeight);
     scrollRoad.style.top = `${-roadProgress * 100}vh`; // Move road upwards as page scrolls down
 
   });
 
   // Add some additional styling for road texture
   const roadStyle = document.createElement('style');
   roadStyle.textContent = `
     #scroll-road {
       box-shadow: -5px 0 10px rgba(0,0,0,0.2);
       border-left: 2px solid #333;
     }
   `;
   document.head.appendChild(roadStyle);
 
   });
 
 