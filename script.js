'use strict';

regenPassword()

function generatePassword() {
    let charset = "0123456789";
    let retVal = "";
    for (var i = 0, n = charset.length; i < 9; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

function format(number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1 `);
}

function copytext(el) {
    var $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy");
    $tmp.remove();
}

function regenPassword(){
    const code = generatePassword();
    const codeText = document.getElementById("textCode")
    const hiddenText = document.getElementById("hiddenCode")
    codeText.innerText = format(code);
    hiddenText.innerHTML = code;
}