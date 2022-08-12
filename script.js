$("#myCarousel").carousel({
    interval: false
});

function ShowHide() {
    var chkok = document.getElementById("Hiring");
    Hiringtext.style.display = chkok.checked ? "block" : "none";
}

function submitForm() {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signup.email.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)

}