function topFunction() {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 700);
}
function notify(){
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
}
jQuery(document).ready(function($) {
  $('#exampleModal').on('show.bs.modal', function (event) {
    var target = $(event.relatedTarget); // Button that triggered the modal
    var title = target.data('title'); // Extract info from data-* attributes
    var imgSrc = target.data('src');
    var imgAlt = target.data('alt');
    var description = target.data('description');
    var client = target.data('client');
    var duration = target.data('duration');
    var testimonial = target.data('testimonial');
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('#project-title').text(title);
    modal.find('.modal-title').text(title);

    modal.find('#project-description').text(description);
    modal.find('#project-client').text(client);
    modal.find('#project-duration').text(duration);
    modal.find('#project-testimonial').text(testimonial);
    modal.find('#project-image').attr("src", imgSrc);
    modal.find('#project-image').attr("alt", imgAlt);


  })

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
      notify();
      topFunction();
    },'json').fail(function(response) {
      $("#submit").removeAttr("disabled");
      $form[0].reset();
      notify();
      topFunction();

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




  /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
  GitHubCalendar("#github-graph", "sameepsi");


  /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
  GitHubActivity.feed({ username: "sameepsi", selector: "#ghfeed" });


});
