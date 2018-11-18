var bookTitle = document.getElementById("productTitle").innerHTML

/*
var scraperURL = 'http://nypl.bibliocommons.com/search?utf8=%E2%9C%93&t=title&search_category=title&q=' + bookTitle + '&commit=Search&searchOpt=catalogue';
*/



if (bookTitle){
	alert(bookTitle);

	//search for the book

	document.documentElement.style.height = '100%';
	document.body.style.height = '100%';
	document.documentElement.style.width = '100%';
	document.body.style.width = '100%';

	var div = document.createElement( 'div' );
	var btnForm = document.createElement( 'form' );
	var btn = document.createElement( 'input' );

	//append all elements
	document.body.appendChild( div );
	div.appendChild( btnForm );
	btnForm.appendChild( btn );
	//set attributes for div
	div.id = 'checkBookNYPL';
	div.style.position = 'fixed';
	div.style.top = '0';
	div.style.left = '0';
	div.style.width = '100%';   
	div.style.height = '50';
	div.style.zIndex = '9999';
	div.style.backgroundColor = 'red';
	div.innerHTML = "Checking to see if " + bookTitle + " is available on NYPL...";

}

