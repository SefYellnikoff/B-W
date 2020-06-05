$('#button_submit').on('click', function() {
    validate();
});


function validate() {

    var mail = $('#mail_newsletter').val();
    var radio_button = $('input[name="radio_button"]:checked').val();
    var success_form = $('alert_success');
    var showSuccess = true;

    //controllo mail
    if (mail == "") {
        $('#alert_mail').removeAttr('hidden');
        $('#mail_newsletter').removeClass('is-valid');
        $('#mail_newsletter').addClass('is-invalid');
        showSuccess = false;
        $('#alert_mail_validation').attr('hidden', true);
    } else {
        $('#alert_mail').attr('hidden', true);
        if (IsEmail(mail) == false) {
            $('#alert_mail_validation').removeAttr('hidden');
            $('#mail_newsletter').removeClass('is-valid');
            $('#mail_newsletter').addClass('is-invalid');
            showSuccess = false;
        } else {
            $('#mail_newsletter').removeClass('is-invalid');
            $('#mail_newsletter').addClass('is-valid');
        }

    }

    //controllo radio
    if (radio_button == undefined) {
        $('#alert_radio').removeAttr('hidden');
        showSuccess = false;
    } else {
        $('#alert_radio').attr('hidden', true);
    }


    //test per alert success
    if (showSuccess) {
        $('#alert_success').removeAttr('hidden');
    } else {
        $('#alert_success').attr('hidden', true);
    }

}

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    } else {
        return true;
    }
}

$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    var new_value = urlParams.get('mail_input');
    $('#mail_newsletter').val(new_value);

});