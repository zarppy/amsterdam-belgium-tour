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
    updateActiveLink(); // Initial check

    // 2. Leaflet Map Initialization
    // Center map roughly between Amsterdam and Brussels
    const map = L.map('map').setView([51.50, 4.5], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Marker Data
    const tourLocations = [
        { day: 1, name: "Amsterdam Schiphol", lat: 52.3105, lng: 4.7683, type: "transport" },
        { day: 1, name: "Jordaan District", lat: 52.3777, lng: 4.8817, type: "attraction" },
        { day: 2, name: "Rijksmuseum", lat: 52.3600, lng: 4.8852, type: "attraction" },
        { day: 3, name: "Giethoorn Village", lat: 52.7389, lng: 6.0781, type: "attraction" },
        { day: 3, name: "Zwolle Center", lat: 52.5125, lng: 6.0944, type: "attraction" },
        { day: 4, name: "Rotterdam Markthal", lat: 51.9179, lng: 4.4852, type: "attraction" },
        { day: 4, name: "Brussels Grand Place", lat: 50.8467, lng: 4.3525, type: "attraction" },
        { day: 5, name: "Atomium", lat: 50.8949, lng: 4.3415, type: "attraction" },
        { day: 6, name: "Namur Citadel", lat: 50.4605, lng: 4.8640, type: "attraction" },
        { day: 6, name: "Dinant Collegiate Church", lat: 50.2611, lng: 4.9124, type: "attraction" },
        { day: 6, name: "Château de Walzin", lat: 50.2201, lng: 4.9221, type: "attraction" },
        { day: 7, name: "Ghent Graslei", lat: 51.0555, lng: 3.7208, type: "attraction" },
        { day: 7, name: "Bruges Markt", lat: 51.2087, lng: 3.2241, type: "attraction" },
        { day: 8, name: "Bruges Belfry", lat: 51.2089, lng: 3.2248, type: "attraction" },
        { day: 8, name: "Antwerp Central Station", lat: 51.2172, lng: 4.4211, type: "attraction" },
        { day: 9, name: "Antwerp Cathedral", lat: 51.2203, lng: 4.4015, type: "attraction" },
        { day: 9, name: "Return to Amsterdam", lat: 52.3667, lng: 4.8945, type: "transport" },
        { day: 10, name: "Amsterdam Schiphol (Return)", lat: 52.3105, lng: 4.7683, type: "transport" }
    ];

    const markers = [];

    // Icon Definitions
    const icons = {
        attraction: L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        }),
        transport: L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        })
    };

    // Add all markers to map
    const addMarkers = (filterDay = 'all') => {
        // Clear existing markers
        markers.forEach(m => map.removeLayer(m));
        markers.length = 0;

        tourLocations.forEach(loc => {
            if (filterDay === 'all' || loc.day == filterDay) {
                const marker = L.marker([loc.lat, loc.lng], { icon: icons[loc.type] || icons.attraction })
                    .bindPopup(`<strong>Day ${loc.day}: ${loc.name}</strong>`)
                    .addTo(map);
                markers.push(marker);
            }
        });

        if (markers.length > 1 && filterDay !== 'all') {
            const group = new L.featureGroup(markers);
            map.fitBounds(group.getBounds().pad(0.1));
        } else if (filterDay === 'all') {
            map.setView([51.50, 4.5], 8);
        }
    };

    addMarkers();

    // 3. Map Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const dayValue = btn.getAttribute('data-value');
            addMarkers(dayValue);
        });
    });

    // 4. Reveal Animation on Scroll (Basic check)
    const observerOptions = {
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
