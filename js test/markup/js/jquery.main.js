$(document).ready(function() {
	const weatherBoxHolder = $('.weather-box-holder');
	const blockViewBtn = $('.block-structure');
	const listViewBtn = $('.list-structure');
	const temperatureDiv = $('.temperature');
	const weatherBoxClass = '.weather-box';
	const blockView = 'block-view';
	const clickable = 'clickable';
	const listView = 'list-view';
	const active = 'active';
	const city = 'city';
	let apiToken = '';

	const initClickEvents = function () {
		$(`.${clickable}`).on('click', function () {
			const that = $(this);

			/* to prevent the same action multiple times */
			if(that.hasClass(clickable)) {
				/* Enable loader */
				that.append('<img src="images/loader.gif" alt="loading..." class="loader">').children(`${city}`).text('Loading...');

				$.ajax({
					url: 'http://api.weatherstack.com/current',
					data: {
						access_key: apiToken,
						query: that.data(city),
					},
					dataType: 'json',
					success: function(apiResponse) {
						/* This API doesn't respond with `apiResponse.success`: true when query is successful, but responds with `apiResponse.success`: false when it's not 
						 so whe have to check whether a key `success` doesn't exist then it means query is OK */
						if (typeof apiResponse.success === 'undefined') {
							/* Append data from response to HTML */
							that.children(`.${city}`).text(`${apiResponse.location.name}, ${apiResponse.location.region}`);
							that.children('.temperature').html(`${apiResponse.current.temperature}&#8451;`);

							let icons = '';
							apiResponse.current.weather_icons.forEach(function (url) {
								icons +=`<img src="${url}" alt="${apiResponse.location.name}" class="weather-icon">`;
							});
							that.append(icons)
							that.removeClass(clickable);
						} else if (parseInt(apiResponse.error.code) === 101) {
							that.children(`${city}`).text('Click here');
							askApiKey(`${apiResponse.error.info} \n\n`);
						}
					},
					complete: function () {
						that.children('.loader').hide();
					}
				});
			}
		});
	};

	const askApiKey = function (errorMessage = '') {
		apiToken = prompt(`${errorMessage} ENTER YOUR API KEY:`);
	};

	blockViewBtn.on('click', function(e) {
		e.preventDefault();
		if (!$(this).hasClass(active)) {
			listViewBtn.removeClass(active);
			$(this).addClass(active);
		}

		weatherBoxHolder.removeClass(listView).addClass(blockView);
	});

	listViewBtn.on('click', function(e) {
		e.preventDefault();
		if (!$(this).hasClass(active)) {
			blockViewBtn.removeClass(active);
			$(this).addClass(active);
		}

		weatherBoxHolder.removeClass(blockView).addClass(listView);
	});

	$('.alphabet').on('click', function (e) {
		e.preventDefault();

		if (!$(weatherBoxClass).hasClass(clickable)) {
			weatherBoxHolder.html($(weatherBoxClass).sort((a, b) => $(a).data(city).localeCompare($(b).data(city))));

			initClickEvents();

			return;
		}

		alert('Before sorting, please get the weather from all cities.')
	});

	initClickEvents();
	askApiKey();
});