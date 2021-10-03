// nav bar

let navBarListItems = document.querySelectorAll(".nav-bar__list--item")
let navBarMarker = document.querySelector(".nav-bar__marker")
let homeItem = document.querySelector(".nav-bar__list--item")

navBarMarker.style.left = homeItem.offsetLeft + 'px'
navBarMarker.style.width = homeItem.offsetWidth + 'px'

function handleNavMarkerMovement(e) {
	let selectedItem = e.target
	let lastMarkerLeft = Number(navBarMarker.style.left.replace('px', ''))

	if (lastMarkerLeft > selectedItem.offsetLeft) {
		navBarMarker.classList.add('right-leaning-stripes')
	} else {
		navBarMarker.classList.remove('right-leaning-stripes')
	}
	
	navBarMarker.style.left = selectedItem.offsetLeft + 'px'
	navBarMarker.style.width = selectedItem.offsetWidth + 'px'
}

navBarListItems.forEach(item => item.addEventListener('mouseenter', handleNavMarkerMovement))

// about section