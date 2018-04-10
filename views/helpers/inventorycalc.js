'use strict';

module.exports= (inventory, context)=>{
	let accum = '',
	total_boxes = 0,
	total_loose = 0,
	total_count = 0,
	total_sum = 0;

	inventory.forEach(function(item, index){
		context.data.id = item.id;
		context.data.name = item.name;
		context.data.cost = item.cost;
		context.data.in_box = item.in_box;
		context.data.count = item.count;
		context.data.boxes = Math.floor(item.count/item.in_box);
		context.data.loose = item.count%item.in_box;
		accum += context.fn(this);
		total_boxes += Math.floor(parseInt(item.count)/parseInt(item.in_box));
		total_loose += parseInt(item.count)%parseInt(item.in_box);
		total_count += parseInt(item.count);
		total_sum += parseInt(item.count) * parseInt(item.cost);
	});

	context.data.total_boxes = total_boxes;
	context.data.total_loose = total_loose;
	context.data.total_sum = (total_sum.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	context.data.total_count = total_count;
    return accum;
};