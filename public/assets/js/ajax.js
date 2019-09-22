$("#submit").on("click", function (e) {
    e.preventDefault();
    var newBurger = {
        name: $("#name").val().trim(),
        description: $("#description").val().trim()
    };

    $.post("/api/create", newBurger)
        .then( function (data) {
            console.log(data);
            $("#name").val("");
            $("#description").val("");
            location.reload();
        });
});

$(".devour-burger").on("click", function(e) {
    e.preventDefault();
    var id = $(this).data("id");
    var newState = {devour:true};

    $.ajax(`/api/devour/${id}`, {
        type: "PUT",
        data: newState
    }).then( function () {
        console.log("Burger Devoured");
        location.reload();
    });
});

/* $(".update-burger").on("click", function(e) {
    e.preventDefault;
    var updateBurger = {
        id: $(this).data("id"),
        description: 
    }
}); */

$(".delete-burger").on("click", function(e) {
    e.preventDefault();
    var id = $(this).data("id");
    $.ajax(`/api/delete-burger/${id}`, {
        type: "DELETE"
    }).then( function() {
        location.reload();
    });
});