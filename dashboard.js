


document.addEventListener("DOMContentLoaded", () => {
    const reloadButtons = document.querySelectorAll(".reload");
    const profileButtons = document.querySelectorAll(".self-profile-button");
    const searchbar = document.querySelector(".searchbar");
    const searchButton = document.getElementById("search-button");
    const moreButton = document.querySelector(".more-button");
    const moreMenu = document.getElementById("more-button-after-click-dialogue-box");
    const selfprofilename = document.querySelectorAll(".self-profile-name");
    const profilecountstext = document.querySelectorAll(".box-count-followers-following-posts");
    const profilecounts = document.querySelectorAll(".counts-inside-box-count");
    const postcontent = document.querySelector(".post-content");
    const postbutton = document.querySelector(".post-button");
    const expandcaption = document.getElementById("article-2-content-section-post-caption");
    const expandcaptionbutton = document.getElementsByClassName("more-caption-button");
    const interactbutton = document.querySelector(".interact-button");
    const interactbuttons = document.querySelectorAll(".interact-button");
    const interacticon = document.querySelector(".interact-icon");
    const reviewsbutton = document.querySelector(".review-button");
    const addreviewbox = document.getElementById("reviews-post-section");
    const reviewstextarea = document.querySelector(".post-reviews-textarea");
    const reviewpostbutton = document.querySelector(".reviews-post-button");
    const postsharebutton = document.querySelector(".share-button");
    const postsharedialoguebox = document.getElementById("share-post-section");
    const backtotop = document.getElementById("footer-section-1");
    



    function handleInputAndButtons(inputElement, buttonElement) {       // Function to display post/share button, whenever something is typed in the input box!!
        const toggleButtonDisplay = () => {
            const inputValue = inputElement.value.trim();
            if (inputValue !== '') {
                buttonElement.style.display = "flex";
            } else {
                buttonElement.style.display = "none";
            }
        };

        toggleButtonDisplay();

        inputElement.addEventListener("input", toggleButtonDisplay);
    }

    function handleToggleButtons(toggleButton, toggleMenu) {     // Function to display the dialogue box , when clicked on some specific buttons..
        toggleButton.addEventListener("click", (event) => {
            if (toggleMenu.style.display === "none" || !toggleMenu.style.display) {
                toggleMenu.style.display = "flex";
            } else {
                toggleMenu.style.display = "none";
            }
            event.stopPropagation();
        });

        document.addEventListener("click", (event) => {
            if (event.target !== toggleMenu && !toggleMenu.contains(event.target) && event.target !== toggleButton) {
                toggleMenu.style.display = "none";
            }
        });

        toggleMenu.addEventListener("click", (event) => {
            event.stopPropagation();
        });
    };

    reloadButtons.forEach((button) => {
        button.addEventListener("click", () => {
            window.location.reload();
        });
    });

    profileButtons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log("Profile button clicked");
        });
    });

    function profileredirect(profilelink) {      // Function to redirect to the profilepage !
        profilelink.forEach((profilelink) => {
            profilelink.addEventListener("click", (event) => {
                console.log("profile button clicked");
            });
        });
    };

        // Here you can write the code to display the profile bio of the interacting user/////



    //Here you can write code to manage the profile picture/ profile name/ caption of post being shown
        
    Array.from(expandcaptionbutton).forEach((expandcaptionbutton) => {
        expandcaptionbutton.addEventListener("click", () => {
            expandcaption.style.maxHeight = "max-content";
            expandcaptionbutton.style.display = "none";
        });
    });


    // Here you can write the code to display the post did by another user..

    // Here code for the counts of interactions, reviews,and shares on post //



    let initialcolor = "";
    interactbuttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (interacticon.style.color === initialcolor) {
                interacticon.style.color = "#82bcd6";
            }
            else {
                interacticon.style.color = initialcolor;
            };
        });
    });

    backtotop.addEventListener("click", () => {
        window.location.href = "/Dashboard/dashboard.html";
    })





    // Here can write code to handel the reviews section !!

    



  // Here code to redirect to the various pages on click to the footer !!








    handleInputAndButtons(searchbar, searchButton);
    handleToggleButtons(moreButton, moreMenu);
    profileredirect(selfprofilename);
    profileredirect(profilecounts);
    profileredirect(profilecountstext);
    handleInputAndButtons(postcontent, postbutton);
    handleToggleButtons(reviewsbutton, addreviewbox);
    handleInputAndButtons(reviewstextarea, reviewpostbutton);
    handleToggleButtons(postsharebutton, postsharedialoguebox);
});
