

// page navigation on click events
$("#patient-seemore").on('click', function(){
  window.location = "patient.html";    
});

$("#doctor-login").on('click', function(){
  window.location = "doctor.html";  
});

$("#doctor-signup").on('click', function(){
  window.location = "sign-up.html";
});

$("#seeFAQS").on('click', function(){
	window.location = "facts-stats.html";
	});
	
	$("#seeSponsors").on('click', function(){
		window.location = "advertisement.html";
	});

	$("#seeLegalStates").on('click', function(){
		window.location = "legalstates.html";
	});
	$("#seeConditions").on('click', function(){
		window.location = "conditions.html";
	});
	$("#seeContact").on('click', function(){
		window.location = "contact.html";
	});
	$("#seeAbout").on('click', function(){
		window.location = "about.html";
	});
// end of page navigation on click events// 

// patient LP on click events // not nav bar//
$(".cannabinoid-learn-more").on('click', function(){
	window.location = "facts-stats.html";
});
$(".terpenes-learn-more").on('click', function(){
	window.location = "facts-stats.html";
});
$(".cann-terp-diff-learn-more").on('click', function(){
	window.location = "facts-stats.html";
});
// end of patient LP on click events // not nav bar//

// legal states on click events
$("#alaska").on('click', function(){
	window.location = "legalstates/alaska.html";
});
$("#arizona").on('click', function(){
	window.location = "legalstates/arizona.html";
});
$("#arkansas").on('click', function(){
	window.location = "legalstates/arkansas.html";
});
$("#california").on('click', function(){
	window.location = "legalstates/california.html";
});
$("#colorado").on('click', function(){
	window.location = "legalstates/colorado.html";
});
$("#delaware").on('click', function(){
	window.location = "legalstates/delaware.html";
});
$("#florida").on('click', function(){
	window.location = "legalstates/florida.html";
});
$("#hawaii").on('click', function(){
	window.location = "legalstates/hawaii.html";
});
$("#illinois").on('click', function(){
	window.location = "legalstates/hawaii.html";
});
$("#louisiana").on('click', function(){
	window.location = "legalstates/louisiana.html";
});
$("#maine").on('click', function(){
	window.location = "legalstates/maine.html";
});
$("#massachusetts").on('click', function(){
	window.location = "legalstates/massachusetts.html";
});
$("#maryland").on('click', function(){
	window.location = "legalstates/maryland.html";
});
$("#michigan").on('click', function(){
	window.location = "legalstates/michigan.html";
});
$("#minnesota").on('click', function(){
	window.location = "legalstates/minnesota.html";
});
$("#missouri").on('click', function(){
	window.location = "legalstates/missouri.html";
});
$("#montana").on('click', function(){
	window.location = "legalstates/montana.html";
});
$("#nevada").on('click', function(){
	window.location = "legalstates/nevada.html";
});
$("#newhampshire").on('click', function(){
	window.location = "legalstates/newhampshire.html";
});
$("#newjersey").on('click', function(){
	window.location = "legalstates/newjersey.html";
});
$("#newmexico").on('click', function(){
	window.location = "legalstates/newmexico.html";
});
$("#newyork").on('click', function(){
	window.location = "legalstates/newyork.html";
});
$("#northdakota").on('click', function(){
	window.location = "legalstates/northdakota.html";
});
$("#ohio").on('click', function(){
	window.location = "legalstates/ohio.html";
});
$("#oklahoma").on('click', function(){
	window.location = "legalstates/oklahoma.html";
});
$("#oregon").on('click', function(){
	window.location = "legalstates/oregon.html";
});
$("#pennsylvania").on('click', function(){
	window.location = "legalstates/pennsylvania.html";
});
$("#rhodeisland").on('click', function(){
	window.location = "legalstates/rhodeisland.html";
});
$("#utah").on('click', function(){
	window.location = "legalstates/utah.html";
});
$("#vermont").on('click', function(){
	window.location = "legalstates/vermont.html";
});
$("#washington").on('click', function(){
	window.location = "legalstates/washington.html";
});
$("#westvirginia").on('click', function(){
	window.location = "legalstates/westvirginia.html";
});
// end of legal states on click events 


// accordian toggle on patient LP
function toggleIcon(e) {
  $(e.target)
      .prev('.panel-heading')
      .find(".more-less")
      .toggleClass('fa-plus fa-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);
// end of accoridan toggle on patient LP 


// numbers count section on patient stats & FAQS // 
(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});
// end of numbers count section on patient stats & FAQS// 

// patient contact form 
$(document).ready(function(){
	$('.form-input').on('keyup, paste, cut, focusout', function(){
		var $parent = $(this).parents('.form-line');
		var input_value = $.trim($(this).val());
		var required = $(this).is(':required');

		if (input_value.length > 0) {
			$parent.find('label').addClass('top');

			$parent
				.removeClass('error')
				.addClass('success');
		}	else {
			$parent.find('label').removeClass('top');
			$parent.removeClass('success')

			if (required) {
				$parent.addClass('error');
			}
		}
	});
});
// end of patient contact form 

