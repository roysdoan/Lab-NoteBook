// Exercise #1:

$("document").ready(() => {
  $("#copy").on("click", () => {
    $("#output1").text($("#userInput1").val());
  });
});

// Exercise #2:

$("document").ready(() => {
  $("#userInput2").on("input", (event) => {
    $("#output2").text($("#userInput2").val());
  });
});
