
/* tab start */

function setDefaultTab() {
    document.querySelector('.tablinks').click(); // Simulate click on the first tab button
  }

// Call the function when the page finishes loading
window.addEventListener('load', setDefaultTab);

// Rest of your existing JavaScript code
function openCity(evt, cityName) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(cityName).style.display = "block";
// Add fade-in class to the displayed tab content
document.getElementById(cityName).classList.add('fade-in');
evt.currentTarget.className += " active";
}

// Simulate click on the "ALL" button when the page loads
window.onload = function() {
document.querySelector('.tablinks[data-tab="ALL"]').click();
};

/* tab end */