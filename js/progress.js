'use strict';
const colors = [
		'rgb(255, 0, 0)',
		'rgb(0, 255, 0)',
		'rgb(0, 0, 255)',
		'rgb(255, 255, 0)',
		'rgb(255, 0, 255)',
		'rgb(0, 255, 255)'
	];
const colorsBK = [
		'rgba(255, 0, 0,0.5)',
		'rgba(0, 255, 0,0.5)',
		'rgba(0, 0, 255,0.5)',
		'rgba(255, 255, 0,0.5)',
		'rgba(255, 0, 255,0.5)',
		'rgba(0, 255, 255,0.5)'
	];
const progress = {
	"drawChart":(i,data,labels)=>{
		var ctx = $("#canvas_" + i)[0].getContext('2d'),
			chart = new Chart(ctx,{
				type:'line',
				data:{
					labels:labels,
					datasets: [{
			            label: exercise,
			            backgroundColor: colorsBK[i],
			            borderColor: colors[i],
			            data: data
			        }]
				},
				options:{}
			});
	},
	"showTable":(i)=>{
		$("#table_btn_" + i).on('click',()=>{
			if($("#table_" + i + ":hidden").length === 1){
				$("#table_" + i).show(); 
				$("#table_btn_" + i).val("hide data");
			}else{
				$("#table_" + i).hide(); 
				$("#table_btn_" + i).val("show data");
			}
		});
	}
}