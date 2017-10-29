document.querySelector(".new-question").addEventListener('click', () => {
  var ddd = document.querySelector(".surveyblock").cloneNode(true);
 document.body.insertBefore(ddd, document.querySelector(".new-question"));

})
