const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	str = str.toLowerCase();
	return fruit.filter(fruitName => fruitName.toLowerCase().includes(str));
}

	

function searchHandler(e) {
	const inputVal = e.target.value;
	const results = search(inputVal);

	if (inputVal.length === 0) {
		clearResultBox();
	}
	
	else {
		showSuggestions(results,inputVal);
	}
	
	
	
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';
	const ul = document.createElement('ul');
	ul.style.listStyle = 'none';
	results.forEach(result => {
		const li = document.createElement('li');
		li.textContent = result;
		ul.appendChild(li);
// Add a maouseover event listener
		li.addEventListener('mouseover', () => {
			li.style.backgroundColor = 'orange';
		});
// Add a mauseout event listener
		li.addEventListener('mouseout', () => {
			li.style.backgroundColor = '';
		});
	});
	suggestions.appendChild(ul);
	
}

function useSuggestion(e) {
	if (e.target.tagName === 'LI'){
		input.value = e.target.textContent;
		suggestions.innerHTML = '';
	
	}
}

function clearResultBox(){
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);