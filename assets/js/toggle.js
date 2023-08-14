$("#expand-all").click(function() {
  $(".toggle").each(function() {
    $(this).css("display", "block");
  });
  $(this).css("display", "none");
  $("#hide-all").css("display", "block");
});

$("#hide-all").click(function() {
  $(".toggle").each(function() {
    $(this).css("display", "none");
  });
  $(this).css("display", "none");
  $("#expand-all").css("display", "block");
});

$(".toggle-link").click(function() {
  var $to_toggle = $(this)
    .parent()
    .children(".toggle")
    .first();
  if ($to_toggle.is(":visible")) {
    $to_toggle.css("display", "none");
  } else {
    $to_toggle.css("display", "block");
  }
});
