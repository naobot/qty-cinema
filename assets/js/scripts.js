$(document).ready(function() {
  $('.navbar-expand').click(function() {
    $('#main-menu').toggle();
    if ($(this).find('a[aria-label="menu"]').attr('aria-expanded') == 'false') {
      $(this).removeClass('down-arrow').addClass('up-arrow');
      $(this).children('a').attr('aria-expanded', 'true');
    }
    else {
      $(this).removeClass('up-arrow').addClass('down-arrow');
      $(this).children('a').attr('aria-expanded', 'false');
    }
  });
})