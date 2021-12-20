
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let all_collapsed_all = document.querySelector(".collapsed_all");


closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    $(".sub-menu").removeClass("show")
    var all_content = document.querySelector(".all_content");
    if(!$(".sidebar").hasClass("open")){
      all_content.style.paddingLeft = "67px";
    }else{
      all_content.style.paddingLeft = "280px";
    }
   

    // menuBtnChange(); //calling the function(optional)
});

// all_collapsed_all.addEventListener("click", () => {
//     all_subMenu = document.getElementsByClassName("sub-menu collapse");
//     // menuBtnChange(); //calling the function(optional)
// });

$(".collapsed_all").click(function() {

 
  if(!$(".sidebar").hasClass("open"))
      $(".sidebar").addClass("open")

  if( $(this).parent().find(".sub-menu").hasClass("show")){
     
      $(".sub-menu").removeClass("show")
      
  }else{
    $(".sub-menu").removeClass("show")
    $(this).parent().find(".sub-menu").addClass("show",1000, "easeInOutQuad")
  }
 
 
});





// searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
//     sidebar.classList.toggle("open");
//     menuBtnChange(); //calling the function(optional)
// });




