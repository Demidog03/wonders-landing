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


// const burgerIcon = document.getElementById('burger-icon')
// const burgerMenu = document.getElementById('burger-menu')
//
// burgerIcon.addEventListener('click', () => {
//     console.log('icon')
//     burgerMenu.classList.toggle('hidden');
// })

const leftMonthYearEl = document.getElementById('left-month-year')
const rightMonthYearEl = document.getElementById('right-month-year')
const prevMonthBtn = document.getElementById('prev-month-btn')
const nextMonthBtn = document.getElementById('next-month-btn')
const currMonthDatesEl = document.getElementById('curr-month-dates')
const nextMonthDatesEl = document.getElementById('next-month-dates')

class Calendar {
    #currentDate = new Date()
    #nextDate = new Date()
    #leftMonthYearEl
    #rightMonthYearEl
    #currMonthDatesEl
    #nextMonthDatesEl

    constructor(leftMonthYearEl, rightMonthYearEl, currMonthDatesEl, nextMonthDatesEl) {
        this.#leftMonthYearEl = leftMonthYearEl
        this.#rightMonthYearEl = rightMonthYearEl
        this.#currMonthDatesEl = currMonthDatesEl
        this.#nextMonthDatesEl = nextMonthDatesEl
    }

    init() {
        this.#nextDate.setMonth(this.#currentDate.getMonth() + 1);
        this.render();
    }

    #updateNextMonth() {
        this.#nextDate.setMonth(this.#currentDate.getMonth() + 1);
    }

    getCurMonthYear() {
        return this.#currentDate.toLocaleString('en', { month: 'long', year: 'numeric' });
    }
    getNextMonthYear() {
        return this.#nextDate.toLocaleString('en', { month: 'long', year: 'numeric' });
    }

    #renderLeftMonthYear(element) {
        element.innerText = this.getCurMonthYear()
    }
    #renderRightMonthYear(element) {
        element.innerText = this.getNextMonthYear()
    }

    #getMonthMatrix(dateObj) {
        const year = dateObj.getFullYear();
        const month = dateObj.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1);
        const mondayIndex = (firstDay.getDay() + 6) % 7;

        const matrix = [];
        let week = new Array(7).fill(null);
        let dayCounter = 1;

        for (let i = 0; i < mondayIndex; i++) {
            week[i] = null;
        }
        for (let i = mondayIndex; i < 7 && dayCounter <= daysInMonth; i++) {
            week[i] = dayCounter++;
        }
        matrix.push(week);

        while (dayCounter <= daysInMonth) {
            const w = new Array(7).fill(null);
            for (let i = 0; i < 7 && dayCounter <= daysInMonth; i++) {
                w[i] = dayCounter++;
            }
            matrix.push(w);
        }

        return matrix;
    }

    #renderMonthDays(container, dateObj) {
        const matrix = this.#getMonthMatrix(dateObj);
        const frag = document.createDocumentFragment();

        matrix.forEach(week => {
            week.forEach(cell => {
                if (cell === null) {
                    const span = document.createElement('span');
                    span.className = 'empty';
                    frag.appendChild(span);
                } else {
                    const btn = document.createElement('button');
                    btn.className = 'date';
                    btn.type = 'button';
                    btn.textContent = String(cell);
                    frag.appendChild(btn);
                }
            })
        });
        container.appendChild(frag);
    }

    goPrevMonth() {
        this.#currentDate.setMonth(this.#currentDate.getMonth() - 1);
        this.#updateNextMonth()
        this.render()
    }
    goNextMonth() {
        this.#currentDate.setMonth(this.#currentDate.getMonth() + 1);
        this.#updateNextMonth()
        this.render()
    }

    render() {
        this.#renderLeftMonthYear(this.#leftMonthYearEl)
        this.#renderRightMonthYear(this.#rightMonthYearEl)

        this.#currMonthDatesEl.innerHTML = ''
        this.#nextMonthDatesEl.innerHTML = ''

        this.#renderMonthDays(this.#currMonthDatesEl, this.#currentDate);
        this.#renderMonthDays(this.#nextMonthDatesEl, this.#nextDate);
    }
}


const calendar = new Calendar(leftMonthYearEl, rightMonthYearEl, currMonthDatesEl, nextMonthDatesEl)
calendar.init()

console.log(calendar)

prevMonthBtn.addEventListener('click', () => {
    calendar.goPrevMonth()
})
nextMonthBtn.addEventListener('click', () => {
    calendar.goNextMonth()
})

