const ul = document.querySelector('ul');

ul.addEventListener('click', changeClass);

function changeClass(event) {
	event.preventDefault();

	const className = 'active';
	console.log(event.target);

	const li = event.target.closest('li');

	if (event.ctrlKey || event.metaKey) {
		li.classList.toggle(className);
	} else {
		for (const el of ul.children) {
			el.classList.remove(className);
		}
		li.classList.add(className);
	}
}
