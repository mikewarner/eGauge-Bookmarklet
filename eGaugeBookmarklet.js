/*
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/*
	Developed by: Mike Warner
	Email: mike.mjwarner@gmail.com
	Date: 3/15/2017

	Description: This JavaScript can be used as a bookmarklet in any major 
	browser. To add it to Chrome, create a new bookmark and for the url add
	"javascript:" and a minified copy of the below source. This bookmarklet
	can be used on any eGauge web interface. This code will add a new graph
	menu item to simplify setting just the year for the currently selected 
	time period. Simply select the year and the graph will update to the 
	same selected date and time, but for the new year.
	
	This is kind of hacky because I am assuming static indexes of DOM objects.
	Later revisions might try to find the correct DOM element.
*/

if(document.getElementById("bookmarklet") === null) {  // Make sure bookmarklet has not been loaded already
	document.getElementById('graph_menu_button').click();  // Open graph menu
	var gm = document.getElementById('graph_menu');  // Get graph menu DOM object
	var h = parseInt(gm.style.height.slice(0, -2));  // Get the current height of menu
	gm.style.height = h + h / 3 + "px";   // Add 1/3 more to the height to make room for new element
	var d = document.createElement("DIV");   // Create new div
	d.style.cssText = "white-space: nowrap;";  // Set the element style
	d.innerHTML = "Set start year for same time-period";  // Add text to display
	d.className = "GadgetMenuItem";  // Add the same class as other menu items (for CSS styles)
	d.id = "bookmarklet";  // Add arbitrary ID to check to see if menu item cannot be loaded multiple times
	d.addEventListener("click", function(){  // add on click event listener with call back function
		document.getElementsByClassName('GadgetMenuItem')[5].click();  // open "Set time-period to display in graph", this loads the current period values in the form fields
		document.getElementsByTagName('input')[12].click();  // Click the cancel button
		document.getElementById('graph_menu_button').click();  // Click back to display the menu again

		var sEl = document.getElementsByClassName('date_input')[2];  // Get the current start date input object
		var eEl = document.getElementsByClassName('date_input')[3];  // Get the current end date input object
		var sYear = parseInt(eEl.value.slice(-4));  // extract the end year
		var dateDiff = sYear - parseInt(sEl.value.slice(-4));  // get the diff from end date to start date, for instances where period will span through a new year

		var sYear = prompt("Enter start year", sYear - 1 - dateDiff);  // Lazy so just using a prompt to get user value, with the default of last year
		if(sYear !== null) {  // Make sure the user did not click cancel
			sEl.value = sEl.value.slice(0, -4) + sYear;  // set the start date in the "Set time-period to display in graph" menu
			eEl.value = eEl.value.slice(0, -4) + (parseInt(sYear) + dateDiff);  // set the end date in the "Set time-period to display in graph" menu with the added offset
			document.getElementsByTagName('input')[11].click();  // click the set button on "Set time-period to display in graph" menu
		}
	});
	gm.appendChild(d);  // Add the new menu item to the graph menu
}  // fin
