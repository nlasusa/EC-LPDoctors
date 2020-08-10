

// page navigation on click events
$("#patient-seemore").on('click', function(){
  window.location = "patient.html";    
});

$("#doctor-login").on('click', function(){
  window.location = "doctor.html";  
});

$("#doctor-signup").on('click', function(){
  window.location = "doctor.html";
});
// end of page navigation on click events// 


function toggleIcon(e) {
  $(e.target)
      .prev('.panel-heading')
      .find(".more-less")
      .toggleClass('fa-plus fa-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);