function prompt_user() {
// Function prompting user for a list of data

 var data = prompt("Please enter a list of data points");

 // Logging to Console
 console.log(data);
 const myArr = data.split(",");

 // Displaying list of split data
 document.getElementById("Displayer").innerHTML = myArr;
}

function compute_kde()
{
	var current_data = document.getElementById("Displayer").innerHTML.split(",");
	const transformed_data = new Array();

	/// Traversal and transformation fo elements
	for(var i = 0; i < current_data.length; i++)
	{
		// pushing elements onto the array
		transformed_data.push(parseInt(current_data[i]) * 2);
	}

	// Changing HTML
	document.getElementById('Display_KDE').innerHTML = transformed_data;

}

function plot_kde()
{

}