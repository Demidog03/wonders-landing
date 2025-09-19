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
// const burgerLine1 = document.getElementById('burger-line1')
// const burgerLine2 = document.getElementById('burger-line2')
// const burgerLine3 = document.getElementById('burger-line3')
//
// burgerIcon.addEventListener('click', () => {
//     console.log('icon')
//     burgerMenu.classList.toggle('hidden');
//
//     const isMenuHidden = burgerMenu.classList.contains('hidden')
//
//     if (!isMenuHidden) {
//         burgerLine2.style.opacity = 0
//         burgerLine1.style.transform = 'rotate(45deg) translate(10px, 3px)'
//         burgerLine3.style.transform = 'rotate(-45deg) translate(10px, -3px)'
//     }
//     else {
//         burgerLine2.style.opacity = '100%'
//         burgerLine1.style.transform = 'initial'
//         burgerLine3.style.transform = 'initial'
//     }
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
    #prevMonthBtn
    #nextMonthBtn
    #currMonthDatesEl
    #nextMonthDatesEl

    constructor(leftMonthYearEl, rightMonthYearEl, prevMonthBtn, nextMonthBtn, currMonthDatesEl, nextMonthDatesEl) {
        this.#leftMonthYearEl = leftMonthYearEl
        this.#rightMonthYearEl = rightMonthYearEl
        this.#prevMonthBtn = prevMonthBtn
        this.#nextMonthBtn = nextMonthBtn
        this.#currMonthDatesEl = currMonthDatesEl
        this.#nextMonthDatesEl = nextMonthDatesEl
    }

    init() {
        this.#nextDate.setMonth(this.#currentDate.getMonth() + 1)
        this.#render()

        this.#prevMonthBtn.addEventListener('click', function () {
            // this = Calendar
            this.#goPrevMonth()
            this.#render()
        }.bind(this))
        this.#nextMonthBtn.addEventListener('click', function () {
            // this = Calendar
            this.#goNextMonth()
            this.#render()
        }.bind(this))
    }

    #goPrevMonth() {
        this.#currentDate.setMonth(this.#currentDate.getMonth() - 1) // 0 - 1 = 11
        this.#nextDate.setMonth(this.#nextDate.getMonth() - 1) // 11 + 1 = 0
    }

    #goNextMonth() {
        this.#currentDate.setMonth(this.#currentDate.getMonth() + 1)
        this.#nextDate.setMonth(this.#nextDate.getMonth() + 1)
    }

    #getMonthMatrix(dateObj) {
        const year = dateObj.getFullYear() // 2025
        const month = dateObj.getMonth() // 0,1,2,3
        const daysInMonth = new Date(year, month + 1, 0).getDate() // последний день месяца (кол-во дней в месяце)
        const firstDay = new Date(year, month, 1)
        const firstDayWeekIndex = (firstDay.getDay() + 6) % 7


        // 1 - Понедельник -> 1 + 6 = 7 % 7 = 0
        // 2 - Вторник -> 2 + 6 = 8 % 7 = 1
        // 3 - Среда -> 3 + 6 = 9 % 7 = 2
        // 4 - Четверг -> 4 + 6 = 10 % 7 = 3
        // 5 - Пятница -> 5 + 6 = 11 % 7 = 4
        // 6 - Суббота -> 6 + 6 = 12 % 7 = 5
        // 0 - Воскресенье -> 7 + 6 = 13 % 7 = 6

        // (день + предпоследний день) % максимально кол-во дней

        const matrix = []
        // первая неделя
        const firstWeek = new Array(7).fill(null) // [null, null, null, null, null, null, null,]
        let dayCounter = 1

        // Заполняем массив первой неделы (до первого числа)
        for (let i = 0; i < firstDayWeekIndex; i++) { // [null, null]
            firstWeek[i] = null
        }
        // заполняем остаток недели (после первого числа)
        for (let i = firstDayWeekIndex; i < 7; i++) { // [null, null, 1, 2, 3, 4, 5]
            firstWeek[i] = dayCounter
            dayCounter++
        }
        // Добавляем в матрицу первую неделю
        matrix.push(firstWeek)

        // заполняем остальные дни других недель
        while (dayCounter <= daysInMonth) { // 8 <= 31
            const newWeek = new Array(7).fill(null)
            for (let i = 0; i < 7 && dayCounter <= daysInMonth; i++) { // [8, 9, 10, 11, 12, 13, 14]
                newWeek[i] = dayCounter
                dayCounter++
            }

            matrix.push(newWeek)
        }

        return matrix
    }

    #render() {
        this.#leftMonthYearEl.innerText = this.#currentDate.toLocaleString('en', { month: 'long', year: 'numeric' })
        this.#rightMonthYearEl.innerText = this.#nextDate.toLocaleString('en', { month: 'long', year: 'numeric' })

        const currentMonthMatrix = this.#getMonthMatrix(this.#currentDate) // september
        const nextMonthMatrix = this.#getMonthMatrix(this.#nextDate) // october

        this.#currMonthDatesEl.innerHTML = ''
        this.#nextMonthDatesEl.innerHTML = ''

        currentMonthMatrix.forEach((week) => {
            week.forEach((day) => {
                if (!day) {
                    this.#currMonthDatesEl.innerHTML += `<span class="empty"></span>`
                }
                else {
                    this.#currMonthDatesEl.innerHTML += `<button class="date">${day}</button>`
                }
            })
        })

        nextMonthMatrix.forEach((week) => {
            week.forEach((day) => {
                if (!day) {
                    this.#nextMonthDatesEl.innerHTML += `<span class="empty"></span>`
                }
                else {
                    this.#nextMonthDatesEl.innerHTML += `<button class="date">${day}</button>`
                }
            })
        })
    }
}

const calendar = new Calendar(leftMonthYearEl, rightMonthYearEl, prevMonthBtn, nextMonthBtn, currMonthDatesEl, nextMonthDatesEl)
calendar.init()

console.log(calendar)

// const days = [
//     [null, null, 1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10, 11, 12],
//     [13, 14, 15, 16, 17, 18, 19],
//     [20, 21, 22, 23, 24, 25, 26],
//     [27, 28, 29, 30, 31, null, null],
// ]
