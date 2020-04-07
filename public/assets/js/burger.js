
//Devour button. Changes status from false to true. Updates database.
$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("devoured");
    
        var newDevouredState = {
            devoured: newDevoured
        };
        console.log(newDevoured);
        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
            console.log("Burger eaten.", newDevoured);
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });
  //Order burger button. Saves string to db & adds to signature creations list.
  $(".create-form").on("submit", function(event) {
    console.log('form submitted');
    // Make sure to preventDefault on a submit event.
    event.preventDefault()

    var newBurger = {
      burger_name: $("#makeBurger").val().trim(),
      devoured: 0
    };
    console.log($("#makeBurger").val().trim());
    // Send the POST request.
    $.ajax("/api/burger", {
      method: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("New signature creation: " + newBurger.name);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});

