 document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-image");
    let current = 0;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
      });
    }

    document.getElementById("next").addEventListener("click", () => {
      current = (current + 1) % images.length;
      showImage(current);
    });

    document.getElementById("prev").addEventListener("click", () => {
      current = (current - 1 + images.length) % images.length;
      showImage(current);
    });

   
    showImage(current);
  })

  
