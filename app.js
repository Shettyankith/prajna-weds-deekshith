

  document.getElementById("openImageBtn").addEventListener("click", function() {
    document.getElementById("imageModal").style.display = "block";
  });

  document.getElementById("closeModalBtn").addEventListener("click", function() {
    document.getElementById("imageModal").style.display = "none";
  });


  const scrollers=document.querySelectorAll(".scroller")

  if(!window.matchMedia("(prefers-reduced-motion:reduce)").matches){
    addAnimation();
  }

  function addAnimation(){
    scrollers.forEach((scroller) =>{
      scroller.setAttribute('data-animated',true);

      const scrollerInner=scroller.querySelector(".inner_scroller");
      const scrollerContent=Array.from(scrollerInner.children);
      
      scrollerContent.forEach(item=>{
        const duplicateItem=item.cloneNode(true);
        duplicateItem.setAttribute("aria-hidden",true);
        scrollerInner.appendChild(duplicateItem);
      });
    });
  }


   // Set the wedding date and time (year, month (0-11), day, hour, minute, second)
   const weddingDate = new Date(2023, 10, 29, 11, 45, 0);

   function updateCountdown() {
     const now = new Date();
     const timeRemaining = weddingDate - now;
 
     if (timeRemaining <= 0) {
       document.getElementById("countdown").textContent = "The wedding has started!";
     } else {
       const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
       const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
 
       document.getElementById("days").textContent = days;
       document.getElementById("hours").textContent = hours;
       document.getElementById("minutes").textContent = minutes;
     }
   }
 
   // Update the countdown every second
   setInterval(updateCountdown, 1000);
 
   // Initial update
   updateCountdown();

