var sharebar = document.querySelectorAll(".author-and-share-container");

for(var i = 0; i < sharebar.length; i++) {
  var shareIcon = sharebar[i].querySelector(".icon-container"), iconCurrent = sharebar[i];

  shareIcon.addEventListener("click", function(){
    iconCurrent.classList.toggle("is-active");
  });
}
