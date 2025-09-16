// const STATIONS = [
//     // Switzerland
//     "Zermatt Bus Terminal",
//     "Interlaken Ost Bus Station",
//     "Grindelwald Bus Terminal",
//     "Lauterbrunnen Bahnhof",
//     "Lucerne Bahnhofquai",
//     "Chamonix-Mont-Blanc Sud (France, near Swiss border)",
//     "Geneva Bus Station",
//     "Bern PostAuto Terminal",
//     "Gstaad Bus Station",
//     "St. Moritz Bahnhof PostAuto",
//     "Verbier Village",
//     "Davos Platz Postautohaltestelle",
//     "Andermatt Gotthardpass",
//     "Täsch Bahnhof (Shuttle to Zermatt)",
//     "Flims Dorf Post",
//
//     // France
//     "Chamonix Sud Bus Station",
//     "Annecy Gare Routière",
//     "Grenoble Gare Routière",
//     "Nice Airport (Bus to Alps)",
//     "Bourg-Saint-Maurice Gare Routière",
//     "Morzine Gare Routière",
//     "Les Gets Gare Routière",
//     "Val d'Isère Centre",
//     "Courchevel 1850",
//     "Megève Place du Village",
//
//     // Italy
//     "Aosta Autostazione",
//     "Bolzano Autostazione",
//     "Trento Autostazione",
//     "Cortina d'Ampezzo Autostazione",
//     "Bormio Bus Station",
//     "Livigno Centro",
//     "Merano Autostazione",
//     "Sestriere Bus Stop",
//     "Ortisei (St. Ulrich) Autostazione",
//     "Canazei Piazza Marconi",
//
//     // Austria
//     "Innsbruck Hauptbahnhof Bus Terminal",
//     "Salzburg Süd Busbahnhof",
//     "Mayrhofen Bahnhof",
//     "Lech am Arlberg Postamt",
//     "Kitzbühel Hahnenkammbahn",
//     "Ischgl Seilbahn",
//     "Zell am See Postplatz",
//     "Bad Gastein Bahnhof",
//     "St. Anton am Arlberg Bahnhof",
//     "Sölden Postamt",
//
//     // Germany
//     "Garmisch-Partenkirchen Bahnhof (Bus Station)",
//     "Berchtesgaden Busbahnhof",
//     "Oberstdorf Busbahnhof",
//     "Füssen Bahnhof (Bus Station)",
//     "Mittenwald Bahnhof (Bus Station)",
//
//     // Slovenia
//     "Bled Bus Station",
//     "Bohinj Jezero",
//     "Kranjska Gora Avtobusna Postaja"
// ];
//
// const departureInput = document.getElementById('departure-input');
// const autocompleteDropdown = document.getElementById('autocomplete-dropdown');
//
// // Появление дропдауна при фокусе на инпут
// departureInput.addEventListener('focus', (event) => {
//     autocompleteDropdown.classList.remove('hidden')
//
//     const value = event.target.value
//     renderStations(value)
// })
//
// // Исчезнование дропдауна при blur на инпут
// departureInput.addEventListener('blur', () => {
//     autocompleteDropdown.classList.add('hidden')
// })
//
// // Работат с содержимым инпута
// departureInput.addEventListener('keyup', (event) => {
//     const value = event.target.value
//     renderStations(value)
// })
//
//
// function renderStations(value) {
//     // station.toUpperCase().includes('')
//     let filteredStations = []
//     if(value.trim().length < 0){
//         filteredStations = STATIONS
//     }
//     else {
//         filteredStations = STATIONS.filter(station => station.toUpperCase().includes(value.toUpperCase().trim()))
//     }
//
//     const filteredListElements = filteredStations.map(station => {
//         const li = document.createElement("li");
//         li.innerText = station; // <li>Kranjska Gora Avtobusna Postaja"</li>
//         return li;
//     })
//     autocompleteDropdown.innerHTML = ''
//
//     // не найдена ни одна станция
//     if (filteredListElements.length < 1) {
//         autocompleteDropdown.innerHTML = `<span class="not-found-span">Not found</span>`
//     }
//     else {
//         autocompleteDropdown.append(...filteredListElements) // append(li, li, li)
//     }
// }
//
//
// // ДЕЛЕГИРОВАНИЕ СОБЫТИЙ
// autocompleteDropdown.addEventListener('mousedown', (event) => {
//     if (event.target.nodeName === 'LI') {
//         departureInput.value = event.target.innerText
//     }
// })


const burgerIcon = document.getElementById('burger-icon')
const burgerMenu = document.getElementById('burger-menu')

burgerIcon.addEventListener('click', () => {
    console.log('icon')
    burgerMenu.classList.toggle('hidden');
})
