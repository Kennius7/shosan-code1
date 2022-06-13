const NextBtn = document.getElementById("nxt")


NextBtn.addEventListener("click", function (event) {
    const changePage = confirm("This website is malicious! Do you wish to proceed?");

    if(!changePage){
        event.preventDefault();
    }
    console.log(changePage);
})