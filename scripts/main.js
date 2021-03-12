console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");
const dropdown = document.getElementById("dropdown");
const searchbar = document.getElementById("legoSearch")

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showGreen") {
		filterLegos("Green")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

dropdown.addEventListener("change", (event) => {
	if (event.target.id === "dropdown") {
		const material = event.target.value
		materialFilter(material)
	}
})

navElement.addEventListener("click", (event) => {
	if (event.target.id === "search") {
		const search = document.querySelector("input[name='postSearch']").value
		searchFilter(search)
	} 
})


const materialFilter = (material) => {
	const matArray = useLegos().filter(singleLego => {
		if (singleLego.Material === material) {
			return singleLego;
		}
	})
	makeLegoList(matArray);
}

const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

const searchFilter = (searchedId) => {
	const searchArray = useLegos().filter(singleLego => {
		if (singleLego.LegoId === searchedId) {
			return singleLego;
		} 
	})
	makeLegoList(searchArray);

	if (searchArray.length === 0) {
		document.querySelector("input[name='postSearch']").value = `ID ${searchedId} not found`
		makeLegoList(useLegos());
	}
}

const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	})

}

startEIA();