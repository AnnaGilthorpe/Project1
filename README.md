# Project1


accommodation_type_name

address

bookingDiv.innerHTML= `<div class="row g-0">
      <div class="col-md-4">
      <img src="${response.result[0].max_1440_photo_url}" class="img-fluid rounded-start" alt="..."> </div>
      <div class="col-md-8">
        <div class="card-body"> <h4 class="card-title">${response.results[0].accommodation_type_name}</h4>
      <h6 class="card-text">${response.results[0].address}</h6>
      <h6 class="card-text">${response.results[0].city}</h6>
      <h6 class="card-text">Overall £${response.results[0].composite_price_breakdown.all_inclusive_amount.value} Per Night £${response.results[0].composite_price_breakdown.strikethrough_amount_per_night.value} </h6>`
