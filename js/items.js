$('.item_row').on('click',function(){
	$('#id').val($(this).find('.item_id').html());
	$('#name').val($(this).find('.item_name').html());
	$('#cost').val($(this).find('.item_cost').html());
	$('#price').val($(this).find('.item_price').html());
	$('#desc').val($(this).find('.item_desc').html());
});