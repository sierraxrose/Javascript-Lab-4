$(document).ready (

	
function () {
	
	// cost of plain pizza
	$("#button1").click(plainPizza);
	
		
		function plainPizza () {
			alert("The cost will be $15.");
		}

	// cost of plain pizza split between two people
	
	$("#button2").click(plainSplit1);
	
		function plainSplit1 () {
			let cost = 15 / 2;
			alert("It will cost $" + cost + " per person.");
		}



	// cost of one topping pizza
	
	$("#button3").click(pizza1);
		
		function pizza1 () {
			let cost = 15 + 1.25;
			alert("The cost will be $" + cost);
		}

	// cost of one topping pizza split between two people
	
	$("#button4").click(pizza1Split1);
	
		function pizza1Split1 () {
			let cost = 16.25 / 2;
			let costRound = cost.toFixed(2);
			alert("The cost will be $" + costRound + " per person.");
		}



	//cost of two topping pizza
	
	$("#button5").click(pizza2);
	
		function pizza2 () {
			let cost = 15 + 1.25 + 1.25;
			alert("The cost will be $" + cost);
		}

	// cost of two topping pizza split between two people
	
	$("#button6").click(pizza2Split1);
	
		function pizza2Split1 () {
			let cost = 17.5 / 2;
			let costRound = cost.toFixed(2);
			alert("The cost will be $" + costRound + " per person.");
		}


	//cost of three topping pizza
	
	$("#button7").click(pizza3);
	
		function pizza3 () {
			let cost = 15 + 1.25 + 1.25 + 1.25;
			alert("The cost will be $" + cost);
		}

	//cost of three topping pizza split between two people
	
	$("#button8").click(pizza3Split1);
	
		function pizza3Split1 () {
			let cost = 18.75 / 2;
			let costRound = cost.toFixed(2);
			alert("The cost will be $" + costRound + " per person.");
		}	

});