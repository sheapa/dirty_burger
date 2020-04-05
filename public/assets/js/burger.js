$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newDevoured");
    
        var newDevouredState = {
            devoured: newDevoured
        };

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
});