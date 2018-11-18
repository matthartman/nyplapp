var bookTitle = document.getElementById("productTitle").innerHTML

/*
var scraperURL = 'http://nypl.bibliocommons.com/search?utf8=%E2%9C%93&t=title&search_category=title&q=' + bookTitle + '&commit=Search&searchOpt=catalogue';
*/



if (bookTitle){
	alert(bookTitle);

	//search for the book
	var div = document.createElement( 'div' );
	//append all elements
	document.body.appendChild( div );
	//set attributes for div
	div.id = 'checkBookNYPL';
	div.innerHTML = "Checking to see if " + bookTitle + " is available on NYPL...";
}

