const itineraryData = [
    {
        day: 1,
        title: "Arrive Schiphol → Jordaan & Core Walk",
        description: "Arrive in Amsterdam, settle into the charming Jordaan district, and take an efficient walking loop through the historic center.",
        heroImage: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1600&q=80",
        items: [
            {
                title: "Arrival & Transfer to Jordaan",
                description: "Arrive mid‑afternoon at Schiphol. For comfort and ease with luggage, take a direct taxi to your hotel in Jordaan (approx €55–65, ~15 mins). Check in to Hotel Mercier, Hotel Hegra, or similar.",
                tags: ["Transport", "Hotel"],
                image: "./images/jordaan.jpeg", /* Add jordaan.jpeg to the images folder */
                route: "Schiphol Airport → Jordaan"
            },
            {
                title: "Amsterdam Core Walk & Snacks",
                description: "Take a tram or taxi to Centraal Station. Walk down the busy Damrak, grab some Dutch fries at Fabel Friet. Continue to Dam Square for photos, get a stroopwafel at Firma Stroop on Kalverstraat. Loop through the Red Light District, then head towards Spui for cookies at Van Stapele Koekmakerij before returning to Jordaan.",
                tags: ["Attraction", "Food"],
                image: "./images/amsterdam-core.jpeg", /* Add amsterdam-core.jpeg to the images folder */
                route: "Centraal → Damrak → Dam Square → RLD → Spui → Jordaan"
            },
            {
                title: "Dinner in Jordaan",
                description: "Enjoy a relaxed first night at one of Jordaan's small bistros or brown cafés offering seasonal European plates. Perfect way to wind down. Option: Gifu Ramen Bar or a local modern Dutch bistro.",
                tags: ["Food"],
                image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
                route: null
            }
        ]
    },
    {
        day: 2,
        title: "Museums, Vondelpark & De Pijp",
        description: "A brisk day covering world-class art, vibrant local markets, and green spaces.",
        heroImage: "https://images.unsplash.com/photo-1584003550607-bb2cc648bc05?auto=format&fit=crop&w=1600&q=80",
        items: [
            {
                title: "Museum Quarter & Vondelpark",
                description: "Start early (9-11 AM) at the Van Gogh Museum or Rijksmuseum. Afterward, grab a burger lunch at Lombardo's near the Spiegel Quarter, and take a stroll through the beautiful Vondelpark.",
                tags: ["Attraction", "Food"],
                image: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=800&q=80",
                route: "Museumplein → Lombardo's → Vondelpark"
            },
            {
                title: "Bloemenmarkt & De Pijp",
                description: "Walk or tram to the Bloemenmarkt (floating flower market). Then head south to De Pijp to explore the Albert Cuyp Market for street food and casual bites.",
                tags: ["Attraction", "Food"],
                image: "./images/bloemenmarkt.jpeg", /* Add bloemenmarkt.jpeg to the images folder */
                route: "Singel Canal → De Pijp"
            },
            {
                title: "Evening in De Pijp or Jordaan",
                description: "Stay in De Pijp for a vibrant local evening with global cuisines, or return to Jordaan for a quieter, neighborhood-feel dinner.",
                tags: ["Food", "Hotel"],
                image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
                route: null
            }
        ]
    },
    {
        day: 3,
        title: "Roadtrip: Giethoorn & Zwolle",
        description: "Pick up your rental car and head out to the picturesque Dutch countryside and historic towns.",
        heroImage: "https://images.unsplash.com/photo-1600100451708-54b9d5c312fb?auto=format&fit=crop&w=1600&q=80",
        items: [
            {
                title: "Vollenhove & Giethoorn",
                description: "Rent a car in Amsterdam. Drive 1.5 hrs to Vollenhove for a coffee/photo stop. Continue to Giethoorn (the 'Venice of the North') to rent a small electric boat and explore footpaths for ~4 hours.",
                tags: ["Transport", "Attraction"],
                image: "./images/giethoorn.jpeg", /* Add giethoorn.jpeg to the images folder */
                route: "Amsterdam (Car Pick-up) → Vollenhove → Giethoorn"
            },
            {
                title: "Evening in Zwolle",
                description: "Late afternoon drive (~35 mins) to Zwolle. Check into a central hotel and enjoy an evening stroll around the pleasant old town center and canals.",
                tags: ["Hotel", "Food"],
                image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
                route: "Giethoorn → Zwolle"
            }
        ]
    },
    {
        day: 4,
        title: "Charming Utrecht & Rotterdam",
        description: "A quick stop for photogenic charm in Utrecht before heading to modern Rotterdam.",
        heroImage: "https://images.unsplash.com/photo-1522864152504-20a67cfbb08b?auto=format&fit=crop&w=1600&q=80",
        items: [
            {
                title: "Utrecht Stopover",
                description: "Drive ~1 hr from Zwolle to Utrecht. Wander the unique split-level wharf cellars, the historic Dom Tower, and medieval core for a couple of hours and grab lunch.",
                tags: ["Attraction", "Food"],
                image: "./images/utrecht.jpeg", /* Add utrecht.jpeg to the images folder */
                route: "Zwolle → Utrecht (1 hr)"
            },
            {
                title: "Arrival in Rotterdam",
                description: "Continue the drive to Rotterdam (40-50 mins). Check into accommodation near the center/river to easily walk to main sites the next day.",
                tags: ["Transport", "Hotel"],
                image: "https://images.unsplash.com/photo-1555581692-0b81e8bba143?auto=format&fit=crop&w=800&q=80",
                route: "Utrecht → Rotterdam"
            }
        ]
    },
    {
        day: 5,
        title: "Rotterdam City & Transit",
        description: "Explore the modern skyline and architecture of Rotterdam before returning to Amsterdam.",
        heroImage: "https://images.unsplash.com/photo-1598007255269-eecfc1b4c30c?auto=format&fit=crop&w=1600&q=80",
        items: [
            {
                title: "Rotterdam Highlights",
                description: "Start at Rotterdam Centraal, walk the Lijnbaan to Markthal for lunch. Visit the Cube Houses and Oude Haven. Head to the Erasmus Bridge for photos.",
                tags: ["Attraction", "Food"],
                image: "./images/rotterdam-1.jpeg", /* Add rotterdam-1.jpeg to the images folder */
                route: "Centraal → Markthal → Cube Houses → Erasmus Bridge"
            },
            {
                title: "Return Car & Train to Schiphol",
                description: "Return rental car in Rotterdam (saves extra days rental/parking). Take a direct train (40-60 mins) to Amsterdam/Schiphol and stay near the airport ahead of your Copenhagen flight.",
                tags: ["Transport", "Hotel"],
                image: "./images/rotterdam-2.jpeg", /* Add rotterdam-2.jpeg to the images folder */
                route: "Rotterdam → Train → Schiphol"
            }
        ]
    },
    {
        day: 6,
        title: "Fly to Copenhagen & Nyhavn",
        description: "Change scenery as you fly to the Danish capital and settle into its iconic harbor district.",
        heroImage: "https://images.unsplash.com/photo-1513622470522-26c314a85ce8?auto=format&fit=crop&w=1600&q=80",
        items: [
            {
                title: "Flight & Arrival",
                description: "Catch a short morning flight AMS → CPH (~1.5–2 hrs). Take the metro or train from Copenhagen airport to city center (~15 mins). Check into your hotel near Nyhavn/Indre By.",
                tags: ["Transport", "Hotel"],
                image: "https://images.unsplash.com/photo-1498118023307-5ba7ddfc09b6?auto=format&fit=crop&w=800&q=80",
                route: "Schiphol (AMS) ✈️ Copenhagen (CPH) → Nyhavn"
            },
            {
                title: "Afternoon in Nyhavn",
                description: "Take a gentle walk along the colorful Nyhavn harbor, cross the bridges for different viewing angles, and explore the nearby waterfront and streets.",
                tags: ["Attraction"],
                image: "./images/nyhavn.jpeg", /* Add nyhavn.jpeg to the images folder */
                route: "Nyhavn Harbor"
            }
        ]
    },
    {
        day: 7,
        title: "Royal Copenhagen & Canals",
        description: "Discover the regal history of Copenhagen by foot and boat.",
        heroImage: "https://images.unsplash.com/photo-1505672678657-cc70370f5e60?auto=format&fit=crop&w=1600&q=80",
        items: [
            {
                title: "Canal Tour & Strøget",
                description: "Morning canal tour from Nyhavn to see the Opera House and Christianshavn. Midday: walk via Amalienborg Palace square towards Strøget for lunch in a side-street café.",
                tags: ["Attraction", "Food"],
                image: "./images/copenhagen-canals.jpeg", /* Add copenhagen-canals.jpeg to the images folder */
                route: "Nyhavn → Canals → Amalienborg → Strøget"
            },
            {
                title: "Rosenborg Castle",
                description: "Afternoon visit to Rosenborg Castle and Kongens Have (King's Garden). Look for dinner options in the Indre By and Nyhavn side streets featuring Nordic-inspired menus.",
                tags: ["Attraction", "Food"],
                image: "./images/rosenborg.jpeg", /* Add rosenborg.jpeg to the images folder */
                route: null
            }
        ]
    },
    {
        day: 8,
        title: "Tivoli Gardens & Neighborhood Eats",
        description: "Experience the magic of Tivoli and the eclectic food scenes of Vesterbro or Nørrebro.",
        heroImage: "https://images.unsplash.com/photo-1541094380735-a13088b90c37?auto=format&fit=crop&w=1600&q=80",
        items: [
            {
                title: "Tivoli Gardens",
                description: "City Hall Square and Tivoli Gardens in the morning. Enjoy the gardens, gentle rides, and vibrant atmosphere. Grab lunch at Tivoli Food Hall or nearby spots.",
                tags: ["Attraction", "Food"],
                image: "./images/tivoli.jpeg", /* Add tivoli.jpeg to the images folder */
                route: "City Hall Square → Tivoli"
            },
            {
                title: "Explore Vesterbro / Nørrebro",
                description: "Spend your evening exploring these neighborhoods packed with food—from New Nordic and Michelin-level to street-food and global cuisines.",
                tags: ["Food"],
                image: "./images/vesterbro.jpeg", /* Add vesterbro.jpeg to the images folder */
                route: null
            }
        ]
    },
    {
        day: 9,
        title: "Danish Villages: Dragør & Roskilde",
        description: "Rent a car and escape the city to traditional Danish coastal towns and Viking heritage.",
        heroImage: "https://images.unsplash.com/photo-1585148003463-22dcda307dc2?auto=format&fit=crop&w=1600&q=80",
        items: [
            {
                title: "Car Pick-up & Dragør",
                description: "Pick up a rental car near your hotel. Drive 20 mins to Dragør, a traditional fishing village with yellow houses, red roofs, and cobbled streets. Stop for lunch.",
                tags: ["Transport", "Attraction"],
                image: "https://images.unsplash.com/photo-1550181512-eb7899d45e41?auto=format&fit=crop&w=800&q=80",
                route: "Copenhagen → Dragør"
            },
            {
                title: "Roskilde Visit & Overnight",
                description: "Drive to Roskilde to explore its Cathedral and Viking Ship Museum. Enjoy a distinct historical and maritime feel. Stay overnight in Roskilde or a nearby coastal base.",
                tags: ["Attraction", "Hotel"],
                image: "./images/roskilde.jpeg", /* Add roskilde.jpeg to the images folder */
                route: "Dragør → Roskilde"
            }
        ]
    },
    {
        day: 10,
        title: "Coastal Drive Back",
        description: "Wind your way back to Copenhagen via scenic coastal routes along the Øresund.",
        heroImage: "https://images.unsplash.com/photo-1601639019253-3b1df051a3a4?auto=format&fit=crop&w=1600&q=80",
        items: [
            {
                title: "Scenic Coastal Drive",
                description: "Spend the morning around Roskilde, then take a scenic drive back towards Copenhagen via smaller coastal towns along the Øresund.",
                tags: ["Attraction", "Transport"],
                image: "./images/coastal-drive.jpeg", /* Add coastal-drive.jpeg to the images folder */
                route: "Roskilde → Coastal Towns → Copenhagen"
            },
            {
                title: "Car Drop & Final Evening",
                description: "Return the rental car late afternoon/evening. Stay centrally or near the airport depending on your return flight preference. Reflect on your journey.",
                tags: ["Hotel", "Transport"],
                image: "https://images.unsplash.com/photo-1513622470522-26c314a85ce8?auto=format&fit=crop&w=800&q=80",
                route: "Copenhagen"
            }
        ]
    },
    {
        day: 11,
        title: "Return to Melbourne",
        description: "Time to head home after an unforgettable 11-day adventure.",
        heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80",
        items: [
            {
                title: "Departure",
                description: "Take the metro to the terminal (if not staying at the airport). Board your flight from CPH to MEL.",
                tags: ["Transport"],
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
                route: "Copenhagen (CPH) ✈️ Melbourne (MEL)"
            }
        ]
    }
];

// Generate Sidebar Navigation
const navContainer = document.getElementById('day-nav');
itineraryData.forEach(dayInfo => {
    const btn = document.createElement('button');
    btn.className = 'day-btn';
    btn.innerHTML = `
        <span class="day-label">Day ${dayInfo.day}</span>
        <span class="date-label">${dayInfo.title.split('→')[0].substring(0, 15)}...</span>
    `;
    btn.onclick = () => {
        const target = document.getElementById(`day-${dayInfo.day}`);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    navContainer.appendChild(btn);
});

// Render all days
function renderAllDays() {
    const contentPanel = document.getElementById('day-content');
    let html = '';

    itineraryData.forEach(data => {
        html += `
        <div id="day-${data.day}" class="day-section fade-in">
            <div class="day-header" style="background-image: linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.8)), url('${data.heroImage}'); background-size: cover; background-position: center;">
                <h2>Day ${data.day}: ${data.title}</h2>
                <p>${data.description}</p>
            </div>
            <div class="day-body">
        `;

        data.items.forEach(item => {
            let tagsHtml = item.tags.map(t => `<span class="tag ${t.toLowerCase()}">${t}</span>`).join('');

            let routeHtml = item.route ? `
                <div class="route-box">
                    <h4>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                        Suggested Route
                    </h4>
                    <div class="route-box-text">${item.route}</div>
                </div>
            ` : '';

            html += `
                <div class="itinerary-item">
                    <div class="itinerary-text">
                        <div class="tag-cloud">${tagsHtml}</div>
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        ${routeHtml}
                    </div>
                    <div class="img-wrapper">
                        <img src="${item.image}" alt="${item.title}" class="itinerary-img" loading="lazy" onerror="this.style.opacity='0'">
                    </div>
                </div>
            `;
        });

        html += `</div></div>`;
    });

    contentPanel.innerHTML = html;
}

// Add scroll listener to update active sidebar item
window.addEventListener('scroll', () => {
    let currentDay = 1;
    itineraryData.forEach(data => {
        const element = document.getElementById(`day-${data.day}`);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 200) {
                currentDay = data.day;
            }
        }
    });

    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerHTML.includes(`Day ${currentDay}`)) {
            btn.classList.add('active');
        }
    });
});

// Initialize
renderAllDays();
// Set initial active button
document.querySelector('.day-btn').classList.add('active');
