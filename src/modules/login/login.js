$("#signup-link,#login-link").click(() => {
    $("#login").toggle();
    $("#signup").toggle();
});

function loadPage(page_path) {
    $("#main-content").html('');
    $("#main-content").load(page_path);
}


$('#login-form').submit(function() {
    var $inputs = $('#login-form :input');

    var values = {};
    $inputs.each(function() {
        values[this.name] = $(this).val();
    });

    if(values["email"] == "vikasgola2015@gmail.com" && values["password"] == "thisispassword"){
        loadPage("user/user.html")
    }

});