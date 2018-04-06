let total;
let currentQty;

$(".quantity").on('keyup',function(){
	let price = $(this).prev().find(".price").html();
	let quantity = $(this).val();
	if(quantity === ""){
		total = 0;
	}else{
		total += (price * quantity);
	}
	if(total === 0){
		$(this).next().find(".total").html("");
	}else{
		$(this).next().find(".total").html(total);
	}

	$('#sub_total').html(getGranTotal());
});

$(".quantity").on('focusin',function(){
	currentQty = $(this).val();
	total = 0;
});

$(".quantity").on('focusout',function(){
	currentQty = 0;
});

function getGranTotal(){
	let grandtotal = 0;
	$.each($(".total"),function(){
		var subtotal = parseInt($(this).html());
		if(subtotal > 1){
			grandtotal += subtotal;
		}
	});
	return grandtotal;
}