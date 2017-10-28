document.getElementById("btnsurvey").onclick = function clickthree() {
var parent = document.getElementById('surveyblock');
var elem = parent.getElementById('threefields');
var clone = elem.cloneNode(true);
parent.appendchild(clone);
console.log(clone);
};