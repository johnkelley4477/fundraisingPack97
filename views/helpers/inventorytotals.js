'use strict';

module.exports= (inventory, context)=>{
	let total_boxes = 0,
		total_loose = 0,
		total_count = 0,
		total_sum = 0,
		data = {};

	inventory.forEach(function(item, index){
		total_boxes += Math.floor(parseInt(item.count)/parseInt(item.in_box));
		total_loose += parseInt(item.count)%parseInt(item.in_box);
		total_count += parseInt(item.count);
		total_sum += parseInt(item.count) * parseInt(item.cost);
		
	});
	console.log(total_count);
	data['total_boxes'] = total_boxes;
	data['total_loose'] = total_loose;
	data['total_count'] = total_count;
	data['total_sum'] = total_sum;
	return context.fn(data);
};