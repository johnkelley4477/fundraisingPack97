/*
*	This library will create the menu and header functionality 
*/


/* Show or Hide the menu. 
	The reason that we are moving the menu out of the visable are instead of hiding it is because of SEO.
	Web crawlers ignore hidden elements
*/ 
const mainMenu = $(".main_menu");
$(".item84").on('click',() => {
	if(mainMenu.css('left') === "-300px"){  
		mainMenu.css('left',"0px"); //Show the menu
	}else{
		mainMenu.css('left',"-300px"); //Hide the menu
	}
});
// $(".item84").on('mouseenter',() => {
// 	mainMenu.css('left',"0px"); //Show the menu
// });
//Bind menu items
//bind home menu buttons
$("#mm .item0").on('touchstart click',() => {window.location = '/fundraising'});
//bind Item Management menu buttons
$("#mm .item1").on('touchstart click',() => {window.location = '/fundraising/items'});
//bind Place Order menu buttons
$("#mm .item2").on('touchstart click',() => {window.location = '/fundraising/placeorder'});
//bind Place Order menu buttons
$("#mm .item3").on('touchstart click',() => {window.location = '/fundraising/bulkorder'});
//Add headers where needed

//Leaders page
if (window.location.search.search('Itemid=59') > 0){
	$('#whitebox').html('<div class="contentdescription"><p style="text-align:center;">Cub Scout Pack 97 Leaders</p>	</div>');
}
//Campsites Page
if (window.location.search.search('Itemid=69') > 0){
	const formfilterfields = $("td[colspan='5']")[0];
	$(formfilterfields).hide();
	$('#whitebox').html('<div class="contentdescription"><p style="text-align:center;">Cub Scout Pack 97 Campsites</p>	</div>');
}
//Contact Pages
if (window.location.search.search('com_contact&view=contact') > 0){
	const mainTableArray = $('#component-contact table tbody tr'),
			mainTableTD = $('#component-contact table tbody tr:first-child td');
	mainTableTD.css({'font-size':'30px','padding':'10px','text-align':'center'});
	$(mainTableArray[1]).css({'font-size':'20px','padding':'10px','text-align':'center'});
	$(mainTableArray[2]).hide();
	$(mainTableArray[3]).hide();
}
function addCarousel() {
//Create a carousel that rotates a new panel ever 5secs\
  $('.carousel').slick({
    dots:true,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  });
}

let iScrollPos = 0;

$(window).scroll(function () {
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos) {
        $('.imgHeader').css('top','-170px');
    } else {
       $('.imgHeader').css('top','-3px');
    }
    iScrollPos = iCurScrollPos;
});



