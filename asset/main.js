/*subtitle text function*/

let sub = document.getElementById('subtittle');
let searchinput = document.getElementById('sinput');

searchinput.addEventListener('focus', searchbarFocus);
searchinput.addEventListener('blur', searchbarUnfocus);

function searchbarFocus() {
    sub.innerHTML = "Be carefull!, Only URL accepted (e.g. https://mail.google.com; https://www.perpusnas.go.id)." + "<br>" + "If you not sure, use one of these Search Engines below.";
    sub.style.color = '#ff0000';
}

function searchbarUnfocus() {
    sub.innerHTML = "Click on any card for quick access, or" + "<br>" + "Input website URL below.";
    sub.style.color = '#b2b2bb';
}

/*open url function*/

function urlopen(url) {
    window.open(url, "_blank");
}

function urlchecker(url){
    var urlregex = /^(http|https):\/\/(([a-zA-Z0-9$\-_.+!*'(),;:&=]|%[0-9a-fA-F]{2})+@)?(((25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])){3})|localhost|([a-zA-Z0-9\-\u00C0-\u017F]+\.)+([a-zA-Z]{2,}))(:[0-9]+)?(\/(([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*(\/([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*)*)?(\?([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?(\#([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?)?$/;
    return urlregex.test(url);
}

function inputchecker() {
    if (urlchecker(searchinput.value)) {
        sub.innerHTML = "URL is Valid," + '<br>' + "Happy Surfing!";
        sub.style.color = '#00ff00';
    } else {
        sub.innerHTML = "URL is Invalid," + '<br>' + "Please check your input.";
        sub.style.color = '#ff0000';
    }
}

let searchbutton = document.getElementById('sbutton');

searchinput.addEventListener('keyup', searchKeyup && inputchecker);
searchbutton.addEventListener('click', searchClick);
searchbutton.addEventListener('mouseover', inputchecker);
searchbutton.addEventListener('mouseleave', searchbarUnfocus);

function searchKeyup(evt) {
    if (evt.keyCode == 13 && urlchecker(searchinput.value)) {
        urlopen(searchinput.value);
    }
}

function searchClick() {
    if (urlchecker(searchinput.value)) {
        urlopen(searchinput.value);
    }
}