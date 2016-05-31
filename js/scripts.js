// $(function () {
//   $("a#operators").click(function() {
//     $("p#operators").toggle();
//   });
// });

$(function () {
  $("a.reveal").click(function() {
    // debugger;
    var cardName = $(this).attr("name");
    console.log(cardName);
    $('#' + cardName).toggle();
        // $('p.definition').toggle();
  });
});
