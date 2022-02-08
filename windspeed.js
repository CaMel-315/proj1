initialize = () => {
document.getElementById("output").style.visibility = "hidden";
document.getElementById("knotsInput").addEventListener("input", function(e) {
    document.getElementById("output").style.visibility = "visible";
    let knots = e.target.value;
document.getElementById("kmhOutput").innerHTML = knots * 1.852;
document.getElementById("msOutput").innerHTML = knots / 1.944;
document.getElementById("mphOutput").innerHTML = knots * 1.151;

})};