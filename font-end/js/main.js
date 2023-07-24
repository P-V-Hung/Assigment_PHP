const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// slide show
const arrBanner = ["./img/banner1.jpg", "./img/banner2.jpg", "./img/banner3.jpg", "./img/banner4.jpg", "./img/banner5.jpg"];
const nextBanner = $("#banner-next");
const preBanner = $("#banner-pre");
const imgBanner = $(".banner-left img");
nextBanner.onclick = function () {
    next();
}
preBanner.onclick = function () {
    pre();
}
setInterval(next, 3000);
let i = 0;
function next() {
    i++;
    if (i > arrBanner.length - 1) {
        i = 0;
    }
    imgBanner.src = arrBanner[i];
}
function pre() {
    i--;
    if (i < 0) {
        i = arrBanner.length - 1;
    }
    imgBanner.src = arrBanner[i];
}


// login-form
let logupLink = $("#dk")
let loginLink = $("#dn");
let addsp = $("#addsp");
let login = $(".log-in");
let logup = $(".log-up");
let loginPre = $("#form-login .pre");
let logupPre = $("#form-logup .pre");
let loginUp = $("#form-login .header-login span");
let logupIn = $("#form-logup .header-logup span");
let addSPPre = $("#addSP .pre");
let addSP = $(".addSP");

addsp.onclick = function(){
    addSP.style.display = "block";
}
addSPPre.onclick = function(){
    addSP.style.display = "none";
}

logupIn.addEventListener("click", function () {
    login.style.display = "block";
    logup.style.display = "none";
});
loginUp.addEventListener("click", function () {
    logup.style.display = "block";
    login.style.display = "none";
});
loginLink.addEventListener("click", function () {
    login.style.display = "block";
    logup.style.display = "none";
});
logupLink.addEventListener("click", function () {
    logup.style.display = "block";
    login.style.display = "none";
});
loginPre.addEventListener("click", function () {
    login.style.display = "none";
});
logupPre.addEventListener("click", function () {
    logup.style.display = "none";
});


// eyeform
let eyePass = $$('form .login-card .fa-regular');
for (let i = 0; i < eyePass.length; i++) {
    let divPass = eyePass[i].parentElement;
    let inputPass = divPass.querySelector('input[type="password"]');
    eyePass[i].onclick = function () {
        if (inputPass.type == "password") {
            inputPass.type = "text";
            eyePass[i].classList.remove('fa-eye');
            eyePass[i].classList.add('fa-eye-slash');
        } else {
            inputPass.type = "password";
            eyePass[i].classList.remove('fa-eye-slash');
            eyePass[i].classList.add('fa-eye');
        }
    }
}


// validate form
const formLogup = $("#form-logup");
const arrInput = ['email', 'tendk', 'passdk', 'repassdk'];
function blur(arr, input, error) {
    $er = true;
    // email
    if (arr == "email") {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
            error.innerText = "Email không hợp lệ!";
            $er= false;
        }
    }

    // passdk and repassdk
    if (arr == "repassdk") {
        const passdk = $("#form-logup #passdk").value;
        if (input.value !== passdk) {
            error.innerText = "Mật khẩu không khớp!";
            $er= false;
        }
    }
    if (input.value == "") {
        error.innerText = "Đây là trường bắt buộc";
        $er= false;
    }
    if($er) {
        error.innerText = "";
    }
}
function validate() {
    for (let i = 0; i < arrInput.length; i++) {
        let inp = $("#form-logup #" + arrInput[i]);
        let err = $("#form-logup #error-" + arrInput[i]);
        inp.onblur = function () {
            blur(arrInput[i], inp, err);
        }
        inp.onkeypress = function () {
            err.innerText = "";
        }
    }
}
validate();
formLogup.onsubmit = function () {
}
