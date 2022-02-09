$(document)
.ready(function() {

  // fix menu when passed
  $('.masthead')
    .visibility({
      once: false,
      onBottomPassed: function() {
        $('.fixed.menu').transition('fade in');
      },
      onBottomPassedReverse: function() {
        $('.fixed.menu').transition('fade out');
      }
    })
  ;

  // create sidebar and attach to menu open
  $('.ui.sidebar')
    .sidebar('attach events', '.toc.item')
  ;

})
;

document.getElementById('emailBtn').addEventListener('click', function () {
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value

  location.href =`mailto:bennetwilson@gmail.com?subject=${subject}&body=${message}`
})