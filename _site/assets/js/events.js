$(document).ready(function() {
  $upcoming = $(`<div class="events-list"><h1>upcoming events</h1></div>`);
  $past = $(`<div class="events-list"><h2>past events</h2></div>`);
  $upcomingUl = $('<ul></ul>');
  $('li:not(.past-date)').detach().appendTo($upcomingUl);
  $upcomingUl.appendTo($upcoming);
  $pastUl = $('<ul></ul>');
  $('li.past-date').each(function(i,li){$pastUl.prepend(li)});
  $pastUl.appendTo($past);
  $('.events').append($upcoming);
  $('.events').append($past);
})