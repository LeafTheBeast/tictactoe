
const field = document.querySelectorAll('.field')

console.log(field)

let player = 0
let test = [[null,null,null], [null,null,null], [null,null,null]]
let array = [null, null, null, null, null, null, null, null, null]

const checkGame = (player) => {


	if(array[0] === player && array[3] === player && array[6] === player)
	{
		champion(player)
	}
	else if (array[0] === player && array[4] === player && array[8] === player)
	{
		champion(player)
	}
	else if (array[1] === player && array[4] === player && array[7] === player)
	{
		champion(player)
	}
	else if (array[2] === player && array[5] === player && array[8] === player)
	{
		champion(player)
	}
	else if (array[0] === player && array[1] === player && array[2] === player)
	{
		champion(player)
	}
	else if (array[3] === player && array[4] === player && array[5] === player)
	{
		champion(player)
	}
	else if (array[6] === player && array[7] === player && array[8] === player)
	{
		champion(player)
	}
	else if (array[2] === player && array[4] === player && array[6] === player)
	{
		champion(player)
	}

}

const champion = (player) => {

	player === 1 ? alert('Player 1 is the Champion') : alert('Player 2 is the Champion')
}

field.forEach(function (e, i){
	e.addEventListener('click', function () {


		if(player === 0) {
			if (e.firstElementChild === null) {
				e.innerHTML = "<div class=\"circle\"></div>"
				player = 1;
				array[i] = player
				checkGame(player)
			} else {
				alert('This is already set');
			}
		}
		else
		{
			if (e.firstElementChild === null) {
				e.innerHTML = "<div class=\"cross\"><div class=\"cross_one\"><div class=\"cross_two\"></div></div></div>"
				player = 0
				array[i] = player
				console.log(array)
				checkGame(player)
			}
			else {
				//alert('This is already set');
			}
		}


	})
})

for(let i = 0; i < field.length; i++)
{
	console.log(i)
}

if(array[0] === 1 && array[3] === 1 && array[6] === 1)
{
	alert('Das geht')
}