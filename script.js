const alertButton = document.getElementById("alertButton");

function showAlertOnce() {
    alert("Button Clicked only one time only");
    alertButton.removeEventListener("click", showAlertOnce);
}

alertButton.addEventListener("click", showAlertOnce);

const favoriteLink = document.getElementById("favoriteLink");

favoriteLink.addEventListener("click", function(event) {
    event.preventDefault();
    alert("No distractions! Im coding!");
});

console.log();