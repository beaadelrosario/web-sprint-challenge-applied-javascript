// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

// const data = {
//     "topics": [
//         "javascript",
//         "bootstrap",
//         "technology",
//         "jquery",
//         "node.js"
//     ]
// }

//tab making function
function tabMaker(tab){
    let tabber = document.createElement('div')
    tabber.classList.add('tab')
    tabber.textContent = tab

    return tab
}
console.log(tabMaker)

//iteration for each topic
let topics = document.querySelector('.topics')
console.log(topics)

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => { //res is my function
        res.data.topics.forEach( makeOwnTopicTab => { //always add data
            topics.appendChild(tabMaker(makeOwnTopicTab))
        })
    })
    .catch(error => { //error function logs error in console
        console.log(error)
    })
