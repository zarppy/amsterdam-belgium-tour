document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Active State on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    const updateActiveLink = () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    };

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

    // 2. Leaflet Map Initialization
    const map = L.map('map').setView([51.50, 4.5], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Tour Locations Data (Revised 10-Day Loop + Bucket List Pit Stops)
    const tourLocations = [
        { day: 1, name: "Schiphol Airport", lat: 52.3105, lng: 4.7683, type: "transport" },
        { day: 1, name: "Jordaan District", lat: 52.3777, lng: 4.8817, type: "hotel" },
        { day: 1, name: "Gifu Ramen Bar", lat: 52.3693, lng: 4.8805, type: "food" },
        { day: 1, name: "Albert Heijn Westermarkt", lat: 52.3741, lng: 4.8843, type: "food" },
        { day: 1, name: "Pancakes Amsterdam", lat: 52.3752, lng: 4.8841, type: "food" },
        { day: 1, name: "Febo Leidsestraat", lat: 52.3653, lng: 4.8872, type: "food" },
        
        { day: 2, name: "Rijksmuseum", lat: 52.3600, lng: 4.8852, type: "attraction" },
        { day: 2, name: "Lombardo's Burgers", lat: 52.3629, lng: 4.8920, type: "food" },
        { day: 2, name: "Vondelpark", lat: 52.3584, lng: 4.8686, type: "attraction" },
        { day: 2, name: "Lera Cafe Matcha", lat: 52.3562, lng: 4.8906, type: "food" },
        { day: 2, name: "nNea Pizza", lat: 52.3694, lng: 4.8703, type: "food" },
        { day: 2, name: "Cafe Marcella (Burrata)", lat: 52.3607, lng: 4.8973, type: "food" },

        { day: 3, name: "Giethoorn Parking P1", lat: 52.7401, lng: 6.0792, type: "transport" },
        { day: 3, name: "Smit's Paviljoen", lat: 52.7389, lng: 6.0781, type: "attraction" },
        { day: 3, name: "Firma Stroop (Utrecht)", lat: 52.0934, lng: 5.1147, type: "food" },
        { day: 3, name: "Utrecht Center", lat: 52.0907, lng: 5.1214, type: "hotel" },

        { day: 4, name: "Rotterdam Markthal", lat: 51.9179, lng: 4.4852, type: "attraction" },
        { day: 4, name: "Brussels Grand Place", lat: 50.8467, lng: 4.3525, type: "hotel" },
        
        { day: 5, name: "Atomium", lat: 50.8949, lng: 4.3415, type: "attraction" },
        { day: 5, name: "Mont des Arts", lat: 50.8444, lng: 4.3567, type: "attraction" },
        
        { day: 6, name: "Namur Citadel", lat: 50.4605, lng: 4.8640, type: "attraction" },
        { day: 6, name: "Dinant Church", lat: 50.2611, lng: 4.9124, type: "attraction" },
        { day: 6, name: "Château de Walzin", lat: 50.2201, lng: 4.9221, type: "attraction" },
        
        { day: 7, name: "Ghent Graslei", lat: 51.0555, lng: 3.7208, type: "attraction" },
        { day: 7, name: "Bruges Market", lat: 51.2087, lng: 3.2241, type: "hotel" },
        
        { day: 8, name: "Rozenhoedkaai", lat: 51.2075, lng: 3.2268, type: "attraction" },
        { day: 8, name: "Antwerp Station", lat: 51.2172, lng: 4.4211, type: "attraction" },
        
        { day: 9, name: "Fabel Friet", lat: 52.3697, 4.8845, type: "food" },
        { day: 9, name: "Van Stapele Cookies", lat: 52.3688, 4.8899, type: "food" },
        { day: 9, name: "Harry's Pasta", lat: 52.3719, 4.9004, type: "food" },
        { day: 9, name: "Rembrandt Corner", lat: 52.3695, 4.9015, type: "food" },
        { day: 9, name: "Amsterdam Return", lat: 52.3792, lng: 4.8994, type: "transport" }
    ];

    const markers = [];

    // Icons
    const icons = {
        attraction: L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
        }),
        transport: L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
        }),
        hotel: L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
        }),
        food: L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
        })
    };

    const addMarkers = (filterDay = 'all') => {
        markers.forEach(m => map.removeLayer(m));
        markers.length = 0;

        tourLocations.forEach(loc => {
            if (filterDay === 'all' || loc.day == filterDay) {
                const label = loc.type === 'food' ? `🍴 Pit Stop: ${loc.name}` : `Day ${loc.day}: ${loc.name}`;
                const marker = L.marker([loc.lat, loc.lng], { icon: icons[loc.type] || icons.attraction })
                    .bindPopup(`<strong>${label}</strong>`)
                    .addTo(map);
                markers.push(marker);
            }
        });

        if (markers.length > 1 && filterDay !== 'all') {
            const group = new L.featureGroup(markers);
            map.fitBounds(group.getBounds().pad(0.2));
        } else if (filterDay === 'all') {
            map.setView([51.50, 4.5], 7);
        }
    };

    addMarkers();
});
