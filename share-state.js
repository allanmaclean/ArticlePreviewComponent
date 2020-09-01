var sharebar = document.querySelectorAll(".card-footer");

for(var i = 0; i < sharebar.length; i++) {
  var shareIcon = sharebar[i].querySelector(".icon-container"), iconCurrent = sharebar[i];

  shareIcon.addEventListener("click", function(){
    iconCurrent.classList.toggle("is-active");
  });
}
