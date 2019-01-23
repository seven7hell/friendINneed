/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.body.style.backgroundColor = "white";
}

function MAlert(spaceId,icon,head,tagline){
	var AlertHTML = '<div class="modal fade" id="AlertModal"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-body"><i class="fas fa-'+ icon +' fa-3x faa-tada animated mx-auto d-block"></i><br><h3 class="red-text text-center">'+ head +'</h3><p class="text-center">'+ tagline +'</p></div><div class="modal-footer"><button type="button" class="btn class-btn" onclick="window.location.reload();">OK</button></div></div></div></div>';

	$("#"+spaceId).html(AlertHTML);

	$("#AlertModal").modal();
}

$(document).ready(function() {

    $("#one").animate({left: "0"}, {
    duration: 2000       
    });
    $("#two").animate({right: "0"}, {
    duration: 2000
    });
});