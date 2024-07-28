/* eslint-disable no-undef */
function lazyload() {
	if (lazyloadThrottleTimeout) {
		clearTimeout(lazyloadThrottleTimeout);
	}

	lazyloadThrottleTimeout = setTimeout(function() {
		const scrollTop = window.pageYOffset;
		lazyloadImages.forEach(function(img) {
			if (img.offsetTop < window.innerHeight + scrollTop) {
				img.src = img.dataset.src;
				img.classList.remove('lazy');
			}
		});
		if (lazyloadImages.length == 0) {
			document.removeEventListener('scroll', lazyload);
			window.removeEventListener('resize', lazyload);
			window.removeEventListener('orientationChange', lazyload);
		}
	}, 20);
}

document.addEventListener('DOMContentLoaded', function() {
	let lazyloadImages;

	if ('IntersectionObserver' in window) {
		lazyloadImages = document.querySelectorAll('.lazy');
		const imageObserver = new IntersectionObserver(function(entries, observer) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					const image = entry.target;
					// console.log(image);
					image.src = image.dataset.src;
					image.classList.remove('lazy');
					imageObserver.unobserve(image);
				}
			});
		});

		lazyloadImages.forEach(function(image) {
			imageObserver.observe(image);
		});
	} else {
		let lazyloadThrottleTimeout;
		lazyloadImages = document.querySelectorAll('.lazy');

		document.addEventListener('scroll', lazyload);
		window.addEventListener('resize', lazyload);
		window.addEventListener('orientationChange', lazyload);
	}
});

// document.addEventListener('DOMContentLoaded', function () {
// 	let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
// 	let active = false;

// 	const lazyLoad = function () {
// 		if (active === false) {
// 			active = true;

// 			setTimeout(function () {
// 				lazyImages.forEach(function (lazyImage) {
// 					if (
// 						lazyImage.getBoundingClientRect().top <=
// 							window.innerHeight &&
// 						lazyImage.getBoundingClientRect().bottom >= 0 &&
// 						getComputedStyle(lazyImage).display !== 'none'
// 					) {
// 						lazyImage.src = lazyImage.dataset.src;
// 						lazyImage.srcset = lazyImage.dataset.srcset;
// 						lazyImage.classList.remove('lazy');

// 						lazyImages = lazyImages.filter(function (image) {
// 							return image !== lazyImage;
// 						});

// 						if (lazyImages.length === 0) {
// 							document.removeEventListener('scroll', lazyLoad);
// 							window.removeEventListener('resize', lazyLoad);
// 							window.removeEventListener(
// 								'orientationchange',
// 								lazyLoad,
// 							);
// 						}
// 					}
// 				});

// 				active = false;
// 			}, 200);
// 		}
// 	};

// 	document.addEventListener('scroll', lazyLoad);
// 	window.addEventListener('resize', lazyLoad);
// 	window.addEventListener('orientationchange', lazyLoad);
// });
