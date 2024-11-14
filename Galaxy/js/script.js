function createStar() {
	const sections = document.querySelectorAll('section.pl')
	sections.forEach((section) => {
		const star = document.createElement('span')
		const size = Math.random() * 3

		star.style.width = 1 + size + 'px'
		star.style.height = 1 + size + 'px'
		star.style.left = Math.random() * innerWidth + 'px'
		star.style.top = Math.random() * innerHeight + 'px'
		star.style.animationDuration = 2 + Math.random() * 3 + 's' // Random duration between 2s and 5s
		section.appendChild(star)

		setTimeout(() => {
			star.remove()
		}, 5000) // Adjust timeout to match the maximum animation duration
	})
}

setInterval(createStar, 100)
