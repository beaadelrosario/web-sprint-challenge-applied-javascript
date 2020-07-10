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
function tabMaker(object){ //param needed? tab?
    let tabber = document.createElement('div')
    tabber.classList.add('tab') //or className?
    tabber.textContent = object//or tab or tab.topics

    return tabber
}
console.log(tabMaker)

// //iteration for each topic
let topics = document.querySelector('.topics') //topics is the HTML section variable
console.log(topics)
console.log('this worked')
let title = document.querySelector('.title')
console.log(title)
console.log('this worked')

const timesTopicURL = 'https://lambda-times-backend.herokuapp.com/topics'

axios.get(timesTopicURL)
.then( response => {
    response.data.topics.forEach( topicGetter => {
    topics.append(tabMaker(topicGetter))
    })
})
.catch(function(error){
        console.log(error)
})


// let cards = document.querySelector('.cards') //step4?
// cards.appendChild(socialCard(myStuff))

// let followersCards = document.querySelector('.cards')
// followersArray.forEach((object) => {
//   console.log(object)
//   const otherUsersURL = `https://api.github.com/users/${object}`
//   axios.get(otherUsersURL)
//   .then(function(value){
//     console.log(value)
//     followersCards.appendChild(socialCard(value))
//   })
//   .catch(function(error){
//     console.log(error)
//   })
// })

// let dataSet = myStuff.data
// dataSet.forEach((object) => {
//     console.log(object)
//       followersCards.appendChild(socialCard(object))
//     })