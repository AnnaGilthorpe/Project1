let cityLocale = document.querySelector(".dropdown-menu")
let eventDate = document.querySelector("#date-picker")
let ticketDiv = document.querySelector(".ticketMast")

cityLocale.addEventListener("click", function local(event) {    
    let cityName = event.target.textContent


    if (cityName === "London") {
       let cityName = "602"
       cityCode.push(cityName)
       console.log(cityName)
       }
       if (cityName === "South") {
           let cityName = "603"
           cityCode.push(cityName)
           console.log(cityName)
        
        }
       
       if (cityName === "Midlands and Central") {
           let cityName = "604"
           cityCode.push(cityName)
       console.log(cityName)
           }
       
           if (cityName === "Wales and North West") {
               let cityName = "605"
               cityCode.push(cityName)
       console.log(cityName)
               }
       
               if (cityName === "Scotland") {
                   let cityName = "607"
                   cityCode.push(cityName)
                   console.log(cityName)
                   }
                   if (cityName === "North and North East") {
                       let cityName = "606"
                       cityCode.push(cityName)
       console.log(cityName)
                       }
                       if (cityName === "All of Ireland") {
                           let cityName = "608"
                           cityCode.push(cityName)
       console.log(cityName)
                           }
                           if (cityName === "Northern Ireland") {
                               let cityName = "609"
                               cityCode.push(cityName)
                               console.log(cityName)
                                   }
                                 
                                })
    


// eventDate.addEventListener("click", function date (event) {
//   let dateEvent =  event.target.value

// console.log(dateEvent)
// dateE.splice.push(dateEvent)


// })
let dateE = []
console.log(dateE)
let cityCode = []
console.log(cityCode)
let submitEvent = document.querySelector("#ticketmasterSubmit") 


submitEvent.addEventListener("click", function submit(event) {
    event.stopPropagation()
    event.preventDefault()
    let artistName = document.querySelector("#ArtistName").value
    console.log(artistName)
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${artistName}&dmaId=${cityCode}&startEndDateTime=${dateE}&apikey=xOZUNaOZsShdCRIbd8ANacFOy9bua5me`)
    .then(response => response.json())
    .then (function(response){
console.log(response._embedded.events[0].url


    )
ticketDiv.innerHTML = `<div class="card mb-3" style="max-width: 100%;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${response._embedded.events[0].images[2].url}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h4 class="card-title">${response._embedded.events[0].name}</h4>
      <h5 class="card-text">${response._embedded.events[0]._embedded.venues[0].name}</h5>
    <h6 class="card-text">${response._embedded.events[0]._embedded.venues[0].city.name}</h6>
    <h6 class="card-text">£${response._embedded.events[0].priceRanges[0].min} to £${response._embedded.events[0].priceRanges[0].max} </h6>
      <h6 class="card-text">${response._embedded.events[0].dates.start.localDate}</h6>
      <a class="btn btn-primary" href="${response._embedded.events[0].url}" role="button">Book Now</a>

    </div>
  </div>
</div>
</div>`

})})













// })
    


// })


// // 602 === "london"
// // 604 === "birmingham"
// // 605 === ""
// // 606 === "newcastle"
// // 607 === "glasgow"

