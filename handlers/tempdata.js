'use strict'
const data = {
	"items" : [
		{"id":"pd0","name":"Military Donation ","desc":"stuff","cost":"0.00","price":"50.00","in_box":"0"},
		{"id":"pd1","name":"Military Donation ","desc":"stuff","cost":"0.00","price":"30.00","in_box":"0"},
		{"id":"pd2","name":"Chocolate Lover's Tin","desc":"stuff","cost":"35.00","price":"60.00","in_box":"4"},
		{"id":"pd3","name":"Cheeze Lover's Tin","desc":"stuff","cost":"20.00","price":"35.00","in_box":"4"},
		{"id":"pd4","name":"Chocolate Caramel Crunch","desc":"stuff","cost":"10.00","price":"25.00","in_box":"4"},
		{"id":"pd5","name":"White Choc Pretzels","desc":"stuff","cost":"10.00","price":"25.00","in_box":"10"},
		{"id":"pd6","name":"Kettle Corn","desc":"stuff","cost":"5.00","price":"10.00","in_box":"10"},
		{"id":"pd7","name":"Unbelievable Butter","desc":"stuff","cost":"5.00","price":"10.00","in_box":"10"},
		{"id":"pd8","name":"Butter Light","desc":"stuff","cost":"5.00","price":"10.00","in_box":"10"},
		{"id":"pd9","name":"Salted Caramel","desc":"stuff","cost":"5.00","price":"10.00","in_box":"10"},
		{"id":"pd10","name":"Premium Salted Caramel Corn","desc":"stuff","cost":"5.00","price":"10.00","in_box":"10"},
		{"id":"pd11","name":"Choc Crunch","desc":"stuff","cost":"5.00","price":"10.00","in_box":"10"},
		{"id":"pd12","name":"Caramel Corn","desc":"stuff","cost":"5.00","price":"10.00","in_box":"10"}
	],
	"inventory" : [
		{"id":"pd2","name":"Chocolate Lover's Tin","cost":"35.00","price":"60.00","in_box":"4","count":"30"},
		{"id":"pd3","name":"Cheeze Lover's Tin","desc":"stuff","cost":"20.00","price":"35.00","in_box":"4","count":"42"},
		{"id":"pd4","name":"Chocolate Caramel Crunch","cost":"10.00","price":"25.00","in_box":"4","count":"45"},
		{"id":"pd5","name":"White Choc Pretzels","cost":"5.00","price":"25.00","in_box":"10","count":"40"},
		{"id":"pd6","name":"Kettle Corn","cost":"5.00","price":"10.00","in_box":"10","count":"90"},
		{"id":"pd7","name":"Unbelievable Butter","cost":"5.00","price":"10.00","in_box":"10","count":"54"},
		{"id":"pd8","name":"Butter Light","cost":"5.00","price":"10.00","in_box":"10","count":"47"},
		{"id":"pd9","name":"Salted Caramel","cost":"5.00","price":"10.00","in_box":"10","count":"21"},
		{"id":"pd10","name":"Premium Salted Caramel Corn","cost":"5.00","price":"10.00","in_box":"10","count":"21"},
		{"id":"pd11","name":"Choc Crunch","cost":"5.00","price":"10.00","in_box":"10","count":"24"},
		{"id":"pd12","name":"Caramel Corn","cost":"5.00","price":"10.00","in_box":"10","count":"8"}
	],
	"scouts" : [
		{"id":"1234560","name":"Cameron Songhurst-Kelley"},
		{"id":"1234561","name":"Cooper Songhurst-Kelley"},
		{"id":"1234562","name":"Travis Forbes"},
		{"id":"1234563","name":"Cameron Fray"},
		{"id":"1234564","name":"Charlie Pless"}
	],
	"orders" : [
		{ "scout": '1234562',"note": 'test address',"user": '78965523',"pd0": '2',"pd1": '',"pd2": '',"pd3": '',"pd4": '',"pd5": '',"pd6": '1',"pd7": '',"pd8": '',"pd9": '',"pd10": '',"pd11": '',"pd12": '',"timestamp": "Thu Apr 12 2018 10:38:25 GMT-0400 (EDT)" }
		{ "scout": '1234562',"note": 'test address',"user": '78965523',"pd0": '',"pd1": '1',"pd2": '',"pd3": '',"pd4": '',"pd5": '',"pd6": '1',"pd7": '',"pd8": '',"pd9": '',"pd10": '',"pd11": '',"pd12": '',"timestamp": "Thu Apr 12 2018 10:38:25 GMT-0400 (EDT)" }
		{ "scout": '1234562',"note": 'test address',"user": '78965523',"pd0": '2',"pd1": '',"pd2": '',"pd3": '',"pd4": '',"pd5": '',"pd6": '1',"pd7": '',"pd8": '',"pd9": '',"pd10": '',"pd11": '',"pd12": '',"timestamp": "Thu Apr 12 2018 10:38:25 GMT-0400 (EDT)" }
		{ "scout": '1234561',"note": 'test address',"user": '78965522',"pd0": '2',"pd1": '',"pd2": '',"pd3": '',"pd4": '',"pd5": '',"pd6": '1',"pd7": '',"pd8": '',"pd9": '',"pd10": '',"pd11": '',"pd12": '',"timestamp": "Thu Apr 12 2018 10:38:25 GMT-0400 (EDT)" }
		{ "scout": '1234561',"note": 'test address',"user": '78965522',"pd0": '',"pd1": '1',"pd2": '',"pd3": '',"pd4": '',"pd5": '',"pd6": '1',"pd7": '',"pd8": '',"pd9": '',"pd10": '',"pd11": '',"pd12": '',"timestamp": "Thu Apr 12 2018 10:38:25 GMT-0400 (EDT)" }
		{ "scout": '1234560',"note": 'test address',"user": '78965522',"pd0": '2',"pd1": '',"pd2": '',"pd3": '',"pd4": '',"pd5": '',"pd6": '1',"pd7": '',"pd8": '',"pd9": '',"pd10": '',"pd11": '',"pd12": '',"timestamp": "Thu Apr 12 2018 10:38:25 GMT-0400 (EDT)" }
		{ "scout": '1234562',"note": 'test address',"user": '78965523',"pd0": '',"pd1": '',"pd2": '',"pd3": '',"pd4": '',"pd5": '',"pd6": '1',"pd7": '',"pd8": '',"pd9": '',"pd10": '',"pd11": '',"pd12": '',"timestamp": "Thu Apr 12 2018 10:38:25 GMT-0400 (EDT)" }
		{ "scout": '1234560',"note": 'test address',"user": '78965522',"pd0": '2',"pd1": '',"pd2": '',"pd3": '',"pd4": '',"pd5": '',"pd6": '1',"pd7": '',"pd8": '',"pd9": '',"pd10": '',"pd11": '',"pd12": '',"timestamp": "Thu Apr 12 2018 10:38:25 GMT-0400 (EDT)" }
		{ "scout": '1234563',"note": 'test address',"user": '78965524',"pd0": '',"pd1": '80',"pd2": '',"pd3": '',"pd4": '',"pd5": '',"pd6": '1',"pd7": '',"pd8": '',"pd9": '',"pd10": '',"pd11": '',"pd12": '',"timestamp": "Thu Apr 12 2018 10:38:25 GMT-0400 (EDT)" }
	]
}

exports.data = data;