function initializeSkillsTabs() {
    const tabs = document.querySelectorAll('[data-target]');
    const tabContents = document.querySelectorAll('[data-content]');

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target);

            tabContents.forEach(tabContent => {
                tabContent.style.display = 'none'; 
            });

            target.style.display = 'block'; 

            tabs.forEach(tab => {
                tab.classList.remove("skills_active");
            });

            tab.classList.add('skills_active');
        });
    });
}













initializeSkillsTabs();



let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});


const linkWork = document.querySelectorAll('.work_item'); 

function activeWork() {
  
    linkWork.forEach(item => {
    
        item.classList.remove('active-work');
    });
    

    this.classList.add('active-work');
}

linkWork.forEach(item => {
    item.addEventListener('click', activeWork);
});










function togglePortfolioPopup() {
    document.querySelector(".portfolio_popup").classList.toggle("open");
}
document.querySelector(".portfolio_popup-close").addEventListener("click", togglePortfolioPopup);

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work_button") || e.target.parentElement.classList.contains("work_button")) {

        togglePortfolioPopup();
   
        populatePortfolioItemDetails(e.target.closest(".work_card"));
    }
});

function populatePortfolioItemDetails(portfolioItem) {
    const popupDetails = document.querySelector(".portfolio_item-details");

    const detailsTitle = portfolioItem.querySelector(".work_title").textContent;
    const detailsDescription = portfolioItem.querySelector(".details_description").textContent;
    const infoItems = portfolioItem.querySelectorAll(".details_info li");

    popupDetails.querySelector(".details_title").textContent = detailsTitle;
    popupDetails.querySelector(".details_description").textContent = detailsDescription;

    const detailsInfo = popupDetails.querySelector(".details_info");

    detailsInfo.innerHTML = "";

    infoItems.forEach((item) => {
        const clonedItem = item.cloneNode(true);
        detailsInfo.appendChild(clonedItem);
    });
}


















const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value === "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});





document.addEventListener('DOMContentLoaded', function () {
    // Select the welcome popup and overlay elements
    const welcomePopup = document.getElementById('welcomePopup');
    const overlay = document.getElementById('overlay');

    // Show the overlay and welcome popup
    overlay.style.display = 'block';
    welcomePopup.style.display = 'block';

    // Close the welcome popup and hide the overlay when the close button is clicked
    const closeWelcomePopupBtn = document.getElementById('closeWelcomePopup');
    closeWelcomePopupBtn.addEventListener('click', function () {
        welcomePopup.style.display = 'none';
        overlay.style.display = 'none';
    });
});
