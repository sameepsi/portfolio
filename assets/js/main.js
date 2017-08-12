function topFunction() {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 700);
}

jQuery(document).ready(function($) {


  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document


  var $form = $('form');
  $form.submit(function(){
    $("#submit").attr("disabled", "disabled");
     $.post($(this).attr('action'), $(this).serialize(), function(response){
       $form[0].reset();
       $("#submit").removeAttr("disabled");
           $.notify({
	// options
	icon: 'fa fa-send',
	message: 'Thanks. I will contact you shortly!!'
},{
	// settings
	element: 'body',
	position: null,
	type: "success",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "right"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 5000,
	timer: 1000,
	mouse_over: null,
	animate: {
		enter: 'animated fadeInDown',
		exit: 'animated fadeOutUp'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
	template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
		'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon"></span> ' +

		'<span data-notify="message">{2}</span>' +
		'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +

	'</div>'
});
topFunction();
     },'json').fail(function(response) {
       $("#submit").removeAttr("disabled");

       $.notify({
   // options
   icon: 'fa fa-warning',
   message: 'Failed. Please try again later!!'
   },{
   // settings
   element: 'body',
   position: null,
   type: "warning",
   allow_dismiss: true,
   newest_on_top: false,
   showProgressbar: false,
   placement: {
   from: "top",
   align: "right"
   },
   offset: 20,
   spacing: 10,
   z_index: 1031,
   delay: 5000,
   timer: 1000,
   mouse_over: null,
   animate: {
   enter: 'animated fadeInDown',
   exit: 'animated fadeOutUp'
   },
   onShow: null,
   onShown: null,
   onClose: null,
   onClosed: null,
   icon_type: 'class',
   template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
   '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
   '<span data-notify="icon"></span> ' +

   '<span data-notify="message">{2}</span>' +
   '<div class="progress" data-notify="progressbar">' +
   '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
   '</div>' +

   '</div>'
   });
});

     return false;
  });

    /*======= Skillset *=======*/

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

    });

    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();


    /* jQuery RSS - https://github.com/sdepold/jquery-rss */

    $("#rss-feeds").rss(

        //Change this to your own rss feeds
        "http://feeds.feedburner.com/TechCrunch/startups",

        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 3,

        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFastSynced',

        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='item'>{entries}</div>",

        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'

        }
    );

    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    GitHubCalendar("#github-graph", "sameepsi");


    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "sameepsi", selector: "#ghfeed" });


});
