$("document").ready(() => {
  const url = "https://anapioficeandfire.com/api/books/";

  const addBookToDOM = (item) => {
    console.log(item.name);

    $("#books").append(
      $("<div>")
        .css({
          display: "flex",
          flexDirection: "column",
          allignItems: "center",
          marginTop: "20px",
        })
        .append($("<h3>").text(item.name))
        .append($("<p>").text(`by ${item.authors[0]}`))
        .append($("<p>").text(item.released.substr(0, 4)))
        .append($("<p>").text(`${item.numberOfPages} pages`))
    );
  };
  const fetchData = (url) => {
    $.ajax({
      url: url,
      type: "GET",
      success: (data) => {
        console.log(data);

        data.forEach((item) => {
          console.log(item);
          addBookToDOM(item);
        });
      },
      error: (error) => {
        console.error(error);
        $("#books").append(
          $("<p>").text(`An error occured. Please try again.`)
        );
      },
      complete: () => {
        $("#loading").remove();
      },
    });
  };
  fetchData(url);
});
