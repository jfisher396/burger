$(function () {
  $(".change-devoured").on("click", function (event) {
    console.log('button clicked')
    const id = $(this).data("id");
    const newDevoured = $(this).data("newdevoured");
    const newDevouredState = {
      devoured: !newDevoured,
    };
  
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {

      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    const burgerNameInput = $("#ca").val().trim();
    const wordsArr = burgerNameInput.split(" ");

    const capitalizedBurgerName = wordsArr.map((word) => {
      return word[0].toUpperCase() + word.substring(1)
    }).join(" ");

    let newBurger = {
      name: capitalizedBurgerName,
      devoured: 0,
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      
      location.reload();
    });
  });
});
