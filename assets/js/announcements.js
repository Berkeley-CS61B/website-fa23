function show(el) {
  el.removeClass("hide");
  el.addClass("show");
}

function hide(el) {
  el.removeClass("show");
  el.addClass("hide");
}

function updateArrows(curr) {
  if (curr.prev().length == 0) {
    $("div.prev").addClass("unreleased");
  } else {
    $("div.prev").removeClass("unreleased");
  }

  if (curr.next().length == 0) {
    $("div.next").addClass("unreleased");
  } else {
    $("div.next").removeClass("unreleased");
  }
}

$("div.next").click(function() {
  var curr = $(".show");
  var next = curr.next();
  if (next.length == 0) {
    return;
  }
  hide(curr);
  show(next);
  updateArrows(next);
});

$("div.prev").click(function() {
  var curr = $(".show");
  var prev = curr.prev();
  if (prev.length == 0) {
    return;
  }
  hide(curr);
  show(prev);
  updateArrows(prev);
});

$(document).ready(function() {
  updateArrows($(".show"));
});
