$(document).ready(function() {
  $(document).on("click", ".tabshead .ttab", function(event) {
    var target = $(this).attr("data-target");
    $(this)
      .parents(".tabscon")
      .find(".ttab")
      .removeClass("active");
    $(this)
      .parents(".tabscon")
      .find(".tabs")
      .removeClass("in");
    $(target).addClass("in");
    $(this).addClass("active");
  });

  $(document).on("click", ".inner-tabshead .inner-ttab", function(event) {
    var target = $(this).attr("data-target");
    $(this)
      .parents(".inner-tabscon")
      .find(".inner-ttab")
      .removeClass("active");
    $(this)
      .parents(".inner-tabscon")
      .find(".inner-tabs")
      .removeClass("in");
    $(target).addClass("in");
    $(this).addClass("active");
  });
});
