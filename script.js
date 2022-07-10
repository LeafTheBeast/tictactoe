
const field = document.querySelectorAll('.field')

console.log(field)

let player = 0
let test = [[null,null,null], [null,null,null], [null,null,null]]

const gameLogic = (element) => {
	console.log(element)

}

field.forEach(function (e){
	e.addEventListener('click', function () {


		if(player === 0) {
			if (e.firstElementChild === null) {
				e.innerHTML = "<div class=\"circle\"></div>"
				player = 1;
				console.log(field.indexOf(e))
			} else {
				alert('This is already set');
				console.log(e)
			}
		}
		else
		{
			if (e.firstElementChild === null) {
				e.innerHTML = "<div class=\"cross\"><div class=\"cross_one\"><div class=\"cross_two\"></div></div></div>"
				player = 0
			}
			else {
				//alert('This is already set');
			}
		}


	})
})
