 ScrollReveal().reveal('.text', {
        duration: 1500,
        easing:'ease-in-out',
        origin:"bottom",
        distance:'25px'

    });


 ScrollReveal().reveal('.service-container', {
        duration: 1500,
        easing:'ease-in-out',
        origin:"left",
        distance:'25px'

    });
 ScrollReveal().reveal('.house', {
        duration: 1000,
        easing:'ease-in-out',
        origin:"bottom",
        distance:'25px'

    });
 ScrollReveal().reveal('.flat', {
        duration: 1500,
        easing:'ease-in-out',
        origin:"bottom",
        distance:'30px'

    });
 ScrollReveal().reveal('.villa', {
        duration: 2000,
        easing:'ease-in-out',
        origin:"bottom",
        distance:'40px'

    });
    (function(){
        const faqButtons = document.querySelectorAll(".faq-question");
        faqButtons.forEach(button => {
          button.addEventListener("click", () => {
            const expanded = button.getAttribute("aria-expanded") === "true";
            // Close all other open answers
            faqButtons.forEach(btn => btn.setAttribute("aria-expanded", "false"));
            if (!expanded) {
              button.setAttribute("aria-expanded", "true");
            }
          });
        });
      })();

    
    
    
    
    