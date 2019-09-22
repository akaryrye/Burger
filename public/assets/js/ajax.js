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

$(".update-burger").on("click", function(e) {
    e.preventDefault;
    var input = $(`#update${$(this).data("id")}`);
    var id = $(this).data("id");

    $.ajax(`/api/update/${id}`, {
        type: "PUT",
        data: {description: input.val().trim()}
    }).then(function (data) {
        console.log(data);
        input.val("");
        location.reload();
    });
});

$(".delete-burger").on("click", function(e) {
    e.preventDefault();
    var id = $(this).data("id");
    $.ajax(`/api/delete-burger/${id}`, {
        type: "DELETE"
    }).then( function() {
        location.reload();
    });
});