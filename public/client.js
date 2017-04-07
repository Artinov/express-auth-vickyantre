$("#loginButton").click(function() {
    var login = $("[name='login']").val();
    var password = $("[name='password']").val();
    $("#alertSuccess").addClass("display-none");
    $("#alertFale").addClass("display-none");

    $.ajax({
        url: "/login",
        method: "POST",
        data: {
            "login": login,
            "password": password
        },
    }).then(function(res) {
        console.log(res);
        if (res.success) {
            $("#alertSuccess").removeClass("display-none");
        } else {
            $("#alertFale").removeClass("display-none");
        }

        // Handle response here
    })
});