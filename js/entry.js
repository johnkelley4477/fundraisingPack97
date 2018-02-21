const entry = {
	"today":()=>{
		const today = new Date();
		$('#date').val(today.getFullYear()  + '-' +  ("0" + (today.getMonth() + 1)).slice(-2) + '-' + ("0" + today.getDate()).slice(-2));
	},
	"mapProgressButton":$("#progress").on('click',()=>{
		window.location.replace("/exercisetracker/progress");
	})
}
$(document).ready(()=>{
	entry.today()
	entry.mapProgressButton;
});