$(document).ready(function() {
    var source = $("#card-template").html();
    var cardTemplate = Handlebars.compile(source);
    $('.container').append(cardTemplate);
    // var context = { title: "My New Post", body: "This is my first post!" };
    // var html = template(context);


})
