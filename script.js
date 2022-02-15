const shownMenuBtn = document.querySelector(".burger-menu");
const menuPanel = document.querySelector("#contact-menu");


shownMenuBtn.addEventListener("click" , () =>
{
  menuPanel.classList.toggle("open");
  shownMenuBtn.classList.toggle("open");
})

//

const headerArrow = document.querySelector(".headerArrow");
const section2 = document.querySelector("#about-me");


headerArrow.addEventListener("click",()=>{
  section2.scrollIntoView();
})

//
const header = document.querySelector("header > div");

function changeLogoColor(){
  console.log(window.scrollY , section2.offsetHeight );
  if (window.scrollY >= section2.offsetHeight ) {

    header.classList.add("py-4");
    header.classList.remove("py-8");
  }else
  {
    header.classList.add("py-8");
    header.classList.remove("py-4");
  }
}




window.addEventListener("scroll" , () =>{
  changeLogoColor()
})
