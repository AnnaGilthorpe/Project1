const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a2665f7bb0mshc19ed396f46144dp146b41jsnb876a96c1dd8',
		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
};

let locationInput = document.querySelector("#dropdown-item");


fetch('https://booking-com.p.rapidapi.com/v1/hotels/search?dest_id=-553173&order_by=popularity&filter_by_currency=AED&adults_number=2&room_number=1&checkout_date=2023-07-16&units=metric&checkin_date=2023-07-15&dest_type=city&locale=en-gb&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true&children_number=2', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    console.log(options)

	