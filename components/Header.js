// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector('.header-container')

function Header() {
    const header = document.createElement('header')
    header.classList.add('header')

    const date = document.createElement('span')
    date.classList.add('date')

    const timesHeader = document.createElement('h1')
    timesHeader.textContent = 'Lambda Times'

    const weather = document.createElement('span')
    weather.classList.add('weather')
    weather.textContent = '98°'

    headerContainer.appendChild(header)
    header.appendChild(date)
    header.appendChild(timesHeader)
    header.appendChild(weather)

    return header
}

Header()
