
         $("a").click(function(){
             $("a").css("color","");
             $(this).css("color", "lightgoldenrodyellow");
            
         });
             $("a").click(function(){
             $(this).css("text-decoration", "underline");
            
         });
            
            
            const toggleButton = document.getElementsByClassName("toggle-button")[0]
            const navbarLinks = document.getElementsByClassName("nav_links")[0]
            toggleButton.addEventListener('click', ()=>{
                navbarLinks.classList.toggle('active')
            })