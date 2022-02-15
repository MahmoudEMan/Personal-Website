const pricing = [{
    id: "1",
    src: "images/Work1.png",
    link: "https://mahmoudeman.github.io/wellness/",
    title: "Silent Wellness"
  },
  {
    id: "2",
    src: "images/Work2.png",
    link: "https://mahmoudeman.github.io/StarBucksClone/",
    title: "Starbucks Clone"
  },
  {
    id: "3",
    src: "images/Work3.png",
    link: "https://mahmoudeman.github.io/portfolio/",
    title: "Portfolio Website"
  },
  {
    id: "4",
    src: "images/Work4.png",
    link: "https://mahmoudeman.github.io/CoffeeRoasters/",
    title: "Coffee Roasters"
  }
]


const workContainer = document.querySelector(".work-container");

pricing.forEach((level, idx) => {
  const direction = idx % 2 == 0 ? "left" : "right";
  console.log(direction);
  const div = `<div class="relative work z-10 mb-8 lg:mb-0">
    <img class="w-full" src=${level.src} alt="">
    <div class="absolute duration-300 w-full h-full bg-slate-900 opacity-0 top-0 left-0 z-10 "></div>
    <div class="absolute w-full h-full flex justify-center items-center top-0 left-0 z-20 ">
      <div class="text-center">
        <a data-tooltip-target="tooltip-left${idx + 1}" data-tooltip-placement="left"   class="w-12 h-12 mx-auto mb-6 rounded-full bg-primary-color flex justify-center items-center cursor-pointer work-link" data-href=${level.link}><i class="fa-solid fa-eye text-white text-xs"></i></a>
        <div id="tooltip-left${idx + 1}" role="tooltip" class=" inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Show live
        <div class="tooltip-arrow" data-popper-arrow></div>
        </div>



        <p class="text-2xl text-white opacity-60">${level.title}</p>
      </div>

    </div>
  </div>`
  workContainer.insertAdjacentHTML("beforeend", div)
});

const workLinks = document.querySelectorAll(".work-link");

workLinks.forEach(workLink => {
  workLink.addEventListener("click", (e) => {
    // e.preventDefault();
    openInNewTab(e.currentTarget.dataset.href);
  })
})

function openInNewTab(url) {
  window.open(url, '_blank').focus();
}



// lightGallery(document.getElementById('animated-thumbnails-gallery'), {
//     thumbnail: true,
// });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const $dynamicGallery = document.getElementById("dynamic-gallery-demo");
// const dynamicGallery = window.lightGallery($dynamicGallery, {
//   dynamic: true,
//   plugins: [lgZoom, lgVideo, lgThumbnail],
//   dynamicEl: [
//     {
//       src:
//         "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
//       responsive:
//         "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80 800",
//       thumb:
//         "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
//       subHtml: `<div class="lightGallery-captions">
//                 <h4>Photo by <a href="https://unsplash.com/@brookecagle">Brooke Cagle</a></h4>
//                 <p>Description of the slide 1</p>
//             </div>`
//     },
//     {
//       video: {"source": [{"src":"https://www.lightgalleryjs.com//videos/video1.mp4", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}},
//       thumb:
//         "https://www.lightgalleryjs.com//images/demo/html5-video-poster.jpg",
//       subHtml: `<div class="lightGallery-captions">
//                 <h4>Photo by <a href="https://unsplash.com/@brookecagle">Brooke Cagle</a></h4>
//                 <p>Description of the slide 2</p>
//             </div>`
//     },
//     {
//       src:
//         "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
//       responsive:
//         "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800",
//       thumb:
//         "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
//     },
//     {
//       src: "//www.youtube.com/watch?v=egyIeygdS_E",
//       poster: "https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg",
//       thumb: "https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg"
//     }
//   ]
// });
// $dynamicGallery.addEventListener("click", () => {
//   dynamicGallery.openGallery(0);
// });
