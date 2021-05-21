// const valid= document.querySelector(".signup");
// $('.footer2 a').click(function(){
// $('#form').animate((height: "toggle", opacity:"toggle"), "slow");
// });

let stmt = document.querySelector(".hide");

let text = document.querySelector("#text");

// valid.addEventListener("click", matchPassword);

function matchPassword(event) {
    event.preventDefault()
    let fname = document.querySelector("#fname").value;
    let email = document.querySelector("#email").value;
    let pw1 = document.querySelector("#password").value;
    let pw2 = document.querySelector("#confirm").value;
    if (pw1 !== pw2) {
        stmt.innerHTML = "** Incorrect password";
        stmt.style.color = "red";
        // return false;
    } else {
        stmt.innerHTML = "";
        stmt.style.color = "black";
        createAccount(fname, email, pw1);

    }
}

function createAccount(fname, email, pw1) {
    const userDetailsObject = {
        fname,
        email,
        pw1
    }

    const userDetailString = JSON.stringify(userDetailsObject)
    window.localStorage.setItem("loginapp", userDetailString)

    console.log(userDetailString)

}
console.log(window.localStorage.getItem("loginapp"))

// const signIn = document.querySelector("#signin");

// signIn.addEventListener("click", signin);


function signIn(event) {
    event.preventDefault();
    let emails = document.querySelector("#email").value;
    let pwd1 = document.querySelector("#password").value;
    if (pwd1 == "") {

        text.innerHTML = "** Incorrect password";
        text.style.color = "red";
        
    } else {
        text.innerHTML = "fshfshyhthjfetyju";
        text.style.color = "black";
        // signinAccount(emails, pwd1);

    }


    console.log(window.localStorage.getItem("loginapp", email , pw1));
}


function signinAccount(emails, pwd1) {
    const usersDetailObject = {
        emails,
        pwd1
    }

    const usersDetailsString = JSON.stringify(usersDetailObject);
    // window.localStorage.setItem("loginapps", usersDetailsString);

    console.log(usersDetailsString);
}

console.log(window.localStorage.getItem("loginapps"))

