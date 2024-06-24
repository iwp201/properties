function refreshCaptcha() {
    var newCaptcha = generateCaptcha();
     document.getElementById("captcha").innerText = newCaptcha ;
}
function generateCaptcha() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var captcha = "";

    for (var i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

document.addEventListener("DOMContentLoaded", function() {
    refreshCaptcha();
});
var errorEl = document.getElementById('error')
var form = document.getElementById('form')
var national_id = document.getElementById('national_id').value;
var full_name = document.getElementById('full_name').value;
var birth_date = document.getElementById('birth_date').value;
var mobile_number = document.getElementById('mobile_number').value;
var email = document.getElementById('email').value;
var captcha_input = document.getElementById('captcha_input').value;


form.addEventListener('submit', function(Event){
    
    let error = [];
    if (national_id.trim() === ''){
        alert('purchase completed');
        return false
    }
})

