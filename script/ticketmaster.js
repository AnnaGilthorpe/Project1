let cityLocale = document.querySelector(".dropdown-menu")
let eventDate = document.querySelector("#date-picker")
let ticketDiv = document.querySelector(".ticketMast")
let bookingDiv = document.querySelector(".booking")
let cityNaame = document.querySelector("#cityNaame")

cityLocale.addEventListener("click", function local(event) {  
  event.stopPropagation()
event.preventDefault()  
    let cityName = event.target.textContent
    cityNaame.textContent = cityName
    window.localStorage.setItem("region", cityName)



   
    

if (cityName === "London") {
       let cityName = "602"
       let codeBook = "2601889"
       cityBooking.push(codeBook)
       cityCode.push(cityName)
       console.log(codeBook)
       }
       if (cityName === "South") {
           let cityName = "603"
           let codeBook = "2590884"
           cityBooking.push(codeBook)
           cityCode.push(cityName)
           console.log(cityName)
        
        }
       
       if (cityName === "Midlands and Central") {
           let cityName = "604"
           let codeBook = "2589989"
           cityBooking.push(codeBook)
           cityCode.push(cityName)
       console.log(cityName)
           }
       
           if (cityName === "Wales and North West") {
               let cityName = "605"
               let codeBook = "2602512"
           cityBooking.push(codeBook)
               cityCode.push(cityName)
       console.log(cityName)
               }
       
               if (cityName === "Scotland") {
                   let cityName = "607"
                   let codeBook = "2597039"
           cityBooking.push(codeBook)
                   cityCode.push(cityName)
                   console.log(cityName)
                   }
                   if (cityName === "North and North East") {
                       let cityName = "606"
                       let cityBooking = "2603966"
                       cityBooking.push(codeBook)
                       cityCode.push(cityName)
       console.log(cityName)
                       }
                       if (cityName === "All of Ireland") {
                           let cityName = "608"
                           let cityBooking = "1502554"
                           cityBooking.push(codeBook)
                           cityCode.push(cityName)
       console.log(cityName)
                           }
                           if (cityName === "Northern Ireland") {
                               let cityName = "609"
                               let cityBooking = "2589607"
                           cityBooking.push(codeBook)
                               cityCode.push(cityName)
                               console.log(cityName)
                                   }
                                 
                                  
                                  })


                                  let savedData = window.localStorage.getItem('region')
                                  let newBtnn = document.createElement("button")
                                  newBtnn.setAttribute("class", "btn btn-primary button-save")
                                      newBtnn.textContent = savedData
                                      cityNaame.appendChild(newBtnn)
                                      
                                      let saveButton = document.querySelector(".button-save")


saveButton.addEventListener("click", function saveBtn(event) {  
event.stopPropagation()
event.preventDefault()  
    let cityName = event.target.textContent
if (cityName === "London") {
       let cityName = "602"
       let codeBook = "2601889"
       cityBooking.push(codeBook)
       cityCode.push(cityName)
       console.log(codeBook)
       }
       if (cityName === "South") {
           let cityName = "603"
           let codeBook = "2590884"
           cityBooking.push(codeBook)
           cityCode.push(cityName)
           console.log(cityName)
        
        }
       
       if (cityName === "Midlands and Central") {
           let cityName = "604"
           let codeBook = "2589989"
           cityBooking.push(codeBook)
           cityCode.push(cityName)
       console.log(cityName)
           }
       
           if (cityName === "Wales and North West") {
               let cityName = "605"
               let codeBook = "2602512"
           cityBooking.push(codeBook)
               cityCode.push(cityName)
       console.log(cityName)
               }
       
               if (cityName === "Scotland") {
                   let cityName = "607"
                   let codeBook = "2597039"
           cityBooking.push(codeBook)
                   cityCode.push(cityName)
                   console.log(cityName)
                   }
                   if (cityName === "North and North East") {
                       let cityName = "606"
                       let cityBooking = "2603966"
                       cityBooking.push(codeBook)
                       cityCode.push(cityName)
       console.log(cityName)
                       }
                       if (cityName === "All of Ireland") {
                           let cityName = "608"
                           let cityBooking = "1502554"
                           cityBooking.push(codeBook)
                           cityCode.push(cityName)
       console.log(cityName)
                           }
                           if (cityName === "Northern Ireland") {
                               let cityName = "609"
                               let cityBooking = "2589607"
                           cityBooking.push(codeBook)
                               cityCode.push(cityName)
                               console.log(cityName)
                                   }
                                 
                                  
                                  })

    

let cityBooking = []
console.log(cityBooking)
let cityCode = []
let localS = []
console.log(cityCode)
let submitEvent = document.querySelector("#ticketmasterSubmit") 
let findArtist = document.querySelector("#artistListButton")


submitEvent.addEventListener("click", function submit(event) {
    event.stopPropagation()
    event.preventDefault()
    let artistName = document.querySelector("#ArtistName").value
    console.log(artistName)
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${artistName}&dmaId=${cityCode}&apikey=xOZUNaOZsShdCRIbd8ANacFOy9bua5me`)
    .then(response => response.json())
    .then (function(response){
      
console.log(response._embedded.events[0].url)
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
</div>
<div class="card" style="width: 100%">
  <div class="card-body">
    <h5 class="card-title"> Book Your Accomodation</h5>
    <h6 class="card-subtitle mb-2 text-muted">Check in Date</h6>
    <input type="date" id="date-picker-in" name="date_picker" value="${response._embedded.events[0].dates.start.localDate}" required>
    <div class="mb-3 row">
            <div class="input-group-addon">
                <span class="glyphicon glyphicon-th">
                </span>
                <h6 class="card-subtitle mb-2 text-muted">Check Out Date</h6>
                <input type="date" id="date-picker-out" name="date_picker" value="${response._embedded.events[0].dates.start.localDate}" required>
                <div class="mb-3 row">
                        <div class="input-group-addon">
                            <span class="glyphicon glyphicon-th">
                            </span>
                            <div class="input-group input-group-sm mb-3 >
  <span class="input-group-text" id="inputGroup-sizing-sm">Guests</span>
  <input type="number" class="form-control guests" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>
<div class="input-group input-group-sm mb-3 >
<span class="input-group-text" id="inputGroup-sizing-sm">Rooms</span>
<input type="number" class="form-control rooms" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>`
let bookButton = document.createElement("button")
bookButton.innerText = "Submit"
bookButton.setAttribute("class", "btn btn-primary book-submit")
ticketDiv.appendChild(bookButton)






let dates = document.querySelector(".book-submit")
dates.addEventListener("click", function (event) {
  console.log("yes")
let checkIn = document.querySelector("#date-picker-in").value
console.log(checkIn)
let checkOut = document.querySelector("#date-picker-out").value
console.log(checkOut)
let guests = document.querySelector(".guests").value
let rooms = document.querySelector(".rooms").value
console.log(rooms)
console.log(guests)
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '368853d1ecmshf08dfad6a3f5517p11fdb2jsnac38bffe319a',
		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
};

fetch(`https://booking-com.p.rapidapi.com/v1/hotels/search?dest_id=-${cityBooking}&order_by=popularity&filter_by_currency=AED&adults_number=${guests}&room_number=${rooms}&checkout_date=${checkOut}&units=metric&checkin_date=${checkIn}&dest_type=city&locale=en-gb&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true&children_number=2`, options)
	.then(response => response.json())
	.then (function(response){
console.log(response.result[0])
event.stopPropagation()
event.preventDefault()

bookingDiv.innerHTML= `<div class="card mb-3" style="max-width: 100%;">
<div class="row g-0">
  <div class="col-4" >
    <img src="${response.result[0].max_1440_photo_url}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-8">
    <div class="card-body">
      <h3 class="card-title">${response.result[0].hotel_name}</h3>
      <h4 class="card-text"> ${response.result[0].address} </h4>
      <h4 class="card-text"> ${response.result[0].zip} </h4>
      <h4 class="card-text"> ${response.result[0].city} </h4>
      <h5 class="card-text"> Overall:£${response.result[0].composite_price_breakdown.all_inclusive_amount.value} </h5>
      <a class="btn btn-primary" href="${response.result[0].url}" role="button">Book Now</a>
    </div>
  </div>
</div>
<div class="card mb-3" style="max-width: 100%;">
<div class="row g-0">
  <div class="col-4" >
    <img src="${response.result[1].max_1440_photo_url}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-8">
    <div class="card-body">
      <h3 class="card-title">${response.result[1].hotel_name}</h3>
      <h4 class="card-text"> ${response.result[1].address} </h4>
      <h4 class="card-text"> ${response.result[1].zip} </h4>
      <h4 class="card-text"> ${response.result[1].city} </h4>
      <h5 class="card-text"> Overall:£${response.result[1].composite_price_breakdown.all_inclusive_amount.value} </h5>
      <a class="btn btn-primary" href="${response.result[1].url}" role="button">Book Now</a>
    </div>
  </div>
</div>
<div class="card mb-3" style="max-width: 100%;">
<div class="row g-0">
  <div class="col-4" >
    <img src="${response.result[2].max_1440_photo_url}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-8">
    <div class="card-body">
      <h3 class="card-title">${response.result[2].hotel_name}</h3>
      <h4 class="card-text"> ${response.result[2].address} </h4>
      <h4 class="card-text"> ${response.result[2].zip} </h4>
      <h4 class="card-text"> ${response.result[2].city} </h4>
      <h5 class="card-text"> Overall:£${response.result[2].composite_price_breakdown.all_inclusive_amount.value} </h5>
      <a class="btn btn-primary" href="${response.result[2].url}" role="button">Book Now</a>
    </div>
  </div>
</div>
<div class="card mb-3" style="max-width: 100%;">
<div class="row g-0">
  <div class="col-4" >
    <img src="${response.result[3].max_1440_photo_url}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-8">
    <div class="card-body">
      <h3 class="card-title">${response.result[3].hotel_name}</h3>
      <h4 class="card-text"> ${response.result[3].address} </h4>
      <h4 class="card-text"> ${response.result[3].zip} </h4>
      <h4 class="card-text"> ${response.result[3].city} </h4>
      <h5 class="card-text"> Overall:£${response.result[3].composite_price_breakdown.all_inclusive_amount.value} </h5>
      <a class="btn btn-primary" href="${response.result[3].url}" role="button">Book Now</a>
    </div>
  </div>
</div>
<div class="card mb-3" style="max-width: 100%;">
<div class="row g-0">
  <div class="col-4" >
    <img src="${response.result[4].max_1440_photo_url}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-8">
    <div class="card-body">
      <h3 class="card-title">${response.result[4].hotel_name}</h3>
      <h4 class="card-text"> ${response.result[4].address} </h4>
      <h4 class="card-text"> ${response.result[4].zip} </h4>
      <h4 class="card-text"> ${response.result[4].city} </h4>
      <h5 class="card-text"> Overall:£${response.result[4].composite_price_breakdown.all_inclusive_amount.value} </h5>
      <a class="btn btn-primary" href="${response.result[4].url}" role="button">Book Now</a>
    </div>
  </div>
</div>`



})})                          



})})


findArtist.addEventListener("click", function artistList(event){
  event.stopPropagation()
  event.preventDefault()
  console.log("yes")
  fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=${cityCode}&apikey=xOZUNaOZsShdCRIbd8ANacFOy9bua5me`)
  .then(response => response.json())
  .then (function(response){
    
console.log(response._embedded.events[0].url)
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
</div>
<div class="card" style="width: 100%">
<div class="card-body">
  <h5 class="card-title"> Book Your Accomodation</h5>
  <h6 class="card-subtitle mb-2 text-muted">Check in Date</h6>
  <input type="date" id="date-picker-in" name="date_picker" value="${response._embedded.events[0].dates.start.localDate}" required>
  <div class="mb-3 row">
          <div class="input-group-addon">
              <span class="glyphicon glyphicon-th">
              </span>
              <h6 class="card-subtitle mb-2 text-muted">Check Out Date</h6>
              <input type="date" id="date-picker-out" name="date_picker" value="${response._embedded.events[0].dates.start.localDate}" required>
              <div class="mb-3 row">
                      <div class="input-group-addon">
                          <span class="glyphicon glyphicon-th">
                          </span>
                          <div class="input-group input-group-sm mb-3 >
<span class="input-group-text" id="inputGroup-sizing-sm">Guests</span>
<input type="number" class="form-control guests" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>
<div class="input-group input-group-sm mb-3 >
<span class="input-group-text" id="inputGroup-sizing-sm">Rooms</span>
<input type="number" class="form-control rooms" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>`
let bookButton = document.createElement("button")
bookButton.innerText = "Submit"
bookButton.setAttribute("class", "btn btn-primary book-submit")
ticketDiv.appendChild(bookButton)


let dates = document.querySelector(".book-submit")
dates.addEventListener("click", function (event) {
console.log("yes")
let checkIn = document.querySelector("#date-picker-in").value
console.log(checkIn)
let checkOut = document.querySelector("#date-picker-out").value
console.log(checkOut)
let guests = document.querySelector(".guests").value
let rooms = document.querySelector(".rooms").value
console.log(rooms)
console.log(guests)
const options = {
method: 'GET',
headers: {
  'X-RapidAPI-Key': '368853d1ecmshf08dfad6a3f5517p11fdb2jsnac38bffe319a',
  'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
}
};

fetch(`https://booking-com.p.rapidapi.com/v1/hotels/search?dest_id=-${cityBooking}&order_by=popularity&filter_by_currency=AED&adults_number=${guests}&room_number=${rooms}&checkout_date=${checkOut}&units=metric&checkin_date=${checkIn}&dest_type=city&locale=en-gb&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true&children_number=2`, options)
.then(response => response.json())
.then (function(response){
console.log(response.result[0])
event.stopPropagation()
event.preventDefault()

bookingDiv.innerHTML= `<div class="card mb-3" style="max-width: 100%;">
<div class="row g-0">
<div class="col-4" >
  <img src="${response.result[0].max_1440_photo_url}" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-8">
  <div class="card-body">
    <h3 class="card-title">${response.result[0].hotel_name}</h3>
    <h4 class="card-text"> ${response.result[0].address} </h4>
    <h4 class="card-text"> ${response.result[0].zip} </h4>
    <h4 class="card-text"> ${response.result[0].city} </h4>
    <h5 class="card-text"> Overall:£${response.result[0].composite_price_breakdown.all_inclusive_amount.value} </h5>
    <a class="btn btn-primary" href="${response.result[0].url}" role="button">Book Now</a>
  </div>
</div>
</div>
<div class="card mb-3" style="max-width: 100%;">
<div class="row g-0">
<div class="col-4" >
  <img src="${response.result[1].max_1440_photo_url}" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-8">
  <div class="card-body">
    <h3 class="card-title">${response.result[1].hotel_name}</h3>
    <h4 class="card-text"> ${response.result[1].address} </h4>
    <h4 class="card-text"> ${response.result[1].zip} </h4>
    <h4 class="card-text"> ${response.result[1].city} </h4>
    <h5 class="card-text"> Overall:£${response.result[1].composite_price_breakdown.all_inclusive_amount.value} </h5>
    <a class="btn btn-primary" href="${response.result[1].url}" role="button">Book Now</a>
  </div>
</div>
</div>
<div class="card mb-3" style="max-width: 100%;">
<div class="row g-0">
<div class="col-4" >
  <img src="${response.result[2].max_1440_photo_url}" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-8">
  <div class="card-body">
    <h3 class="card-title">${response.result[2].hotel_name}</h3>
    <h4 class="card-text"> ${response.result[2].address} </h4>
    <h4 class="card-text"> ${response.result[2].zip} </h4>
    <h4 class="card-text"> ${response.result[2].city} </h4>
    <h5 class="card-text"> Overall:£${response.result[2].composite_price_breakdown.all_inclusive_amount.value} </h5>
    <a class="btn btn-primary" href="${response.result[2].url}" role="button">Book Now</a>
  </div>
</div>
</div>
<div class="card mb-3" style="max-width: 100%;">
<div class="row g-0">
<div class="col-4" >
  <img src="${response.result[3].max_1440_photo_url}" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-8">
  <div class="card-body">
    <h3 class="card-title">${response.result[3].hotel_name}</h3>
    <h4 class="card-text"> ${response.result[3].address} </h4>
    <h4 class="card-text"> ${response.result[3].zip} </h4>
    <h4 class="card-text"> ${response.result[3].city} </h4>
    <h5 class="card-text"> Overall:£${response.result[3].composite_price_breakdown.all_inclusive_amount.value} </h5>
    <a class="btn btn-primary" href="${response.result[3].url}" role="button">Book Now</a>
  </div>
</div>
</div>
<div class="card mb-3" style="max-width: 100%;">
<div class="row g-0">
<div class="col-4" >
  <img src="${response.result[4].max_1440_photo_url}" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-8">
  <div class="card-body">
    <h3 class="card-title">${response.result[4].hotel_name}</h3>
    <h4 class="card-text"> ${response.result[4].address} </h4>
    <h4 class="card-text"> ${response.result[4].zip} </h4>
    <h4 class="card-text"> ${response.result[4].city} </h4>
    <h5 class="card-text"> Overall:£${response.result[4].composite_price_breakdown.all_inclusive_amount.value} </h5>
    <a class="btn btn-primary" href="${response.result[4].url}" role="button">Book Now</a>
  </div>
</div>
</div>`



})})                          



})})

