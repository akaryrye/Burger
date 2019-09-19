$('#submit').on('click', function (e) {
    e.preventDefault();
    
    var newBurger = {
        name: $("#name").val().trim(),
        description: $("#description").val().trim()
    };

    $.post("/api/create", newBurger)
        .then( function (data) {
            console.log(data);
        });
    
    $("#name").val("");
    $("#description").val("");
});