/* Users can select and submit a number rating
   Users can see the "Thank you" card state after submitting a rating
   Users can see hover and focus states for all interactive elements on the page */

 let btn = document.querySelector("button");
 let thankYouCard = document.querySelector(".thank-you-card");
 let submitRating = document.querySelector(".submit-rating");
 let ratings = document.querySelectorAll('input[name="rating"]');
 let userRating = document.querySelector("#selected-rating")

 btn.onclick = () => {
    submitRating.style.display = "none";
    thankYouCard.style.display = "block";
    let selectedRating;

    
    for (let rating of ratings) {
        if (rating.checked) {
            selectedRating = rating.value;
            console.log(selectedRating)
            break;
        }

 }
 userRating.innerHTML = selectedRating;

 return false;

}