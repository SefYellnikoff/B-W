$('#aboutus').on('click', function() {
    $('#about_us_modal').modal('show');

})

$('#button_m').on('click', function() {
    var mail = $('#mail').val();
    var mail_input = '?mail_input=' + mail;
    window.location = `index2.html${mail_input}`;
})