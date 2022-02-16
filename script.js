// const shownMenuBtn = document.querySelector(".burger-menu");
// const menuPanel = document.querySelector("#contact-menu");
//
//
// shownMenuBtn.addEventListener("click" , () =>
// {
//   menuPanel.classList.toggle("open");
//   shownMenuBtn.classList.toggle("open");
// })
//
// //
//
// const headerArrow = document.querySelector(".headerArrow");
// const section2 = document.querySelector("#about-me");
//
//
// headerArrow.addEventListener("click",()=>{
//   section2.scrollIntoView();
// })
//
// //
// const header = document.querySelector("header > div");
//
// function changeLogoColor(){
//   console.log(window.scrollY , section2.offsetHeight );
//   if (window.scrollY >= section2.offsetHeight ) {
//
//     header.classList.add("py-4");
//     header.classList.remove("py-8");
//   }else
//   {
//     header.classList.add("py-8");
//     header.classList.remove("py-4");
//   }
// }
//
//
//
//
// window.addEventListener("scroll" , () =>{
//   changeLogoColor()
// })

const shownMenuBtn=document.querySelector(".burger-menu"),menuPanel=document.querySelector("#contact-menu");shownMenuBtn.addEventListener("click",()=>{menuPanel.classList.toggle("open"),shownMenuBtn.classList.toggle("open")});const headerArrow=document.querySelector(".headerArrow"),section2=document.querySelector("#about-me");headerArrow.addEventListener("click",()=>{section2.scrollIntoView()});const header=document.querySelector("header > div");function changeLogoColor(){window.scrollY>=section2.offsetHeight?(header.classList.add("py-4"),header.classList.remove("py-8")):(header.classList.add("py-8"),header.classList.remove("py-4"))}window.addEventListener("scroll",()=>{changeLogoColor()});



// var form = document.getElementById("my-form");
//
//     async function handleSubmit(event) {
//       event.preventDefault();
//       var status = document.getElementById("my-form-status");
//       var data = new FormData(event.target);
//       fetch(event.target.action, {
//         method: form.method,
//         body: data,
//         headers: {
//             'Accept': 'application/json'
//         }
//       }).then(response => {
//         if (response.ok) {
//           status.innerHTML = "Thanks for your submission!";
//           form.reset()
//         } else {
//           response.json().then(data => {
//             if (Object.hasOwn(data, 'errors')) {
//               status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
//             } else {
//               status.innerHTML = "Oops! There was a problem submitting your form"
//             }
//           })
//         }
//       }).catch(error => {
//         status.innerHTML = "Oops! There was a problem submitting your form"
//       });
//     }
//     form.addEventListener("submit", handleSubmit)
