const submit = document.querySelector('.submit');
const feedbackForm = document.querySelector('.feedback_form');
const feedbackSubmitted = document.querySelector('.feedback_submitted');
const ratingOne = document.querySelector('#rating_1');
const ratingTwo = document.querySelector('#rating_2');
const ratingThree = document.querySelector('#rating_3');
const ratingFour = document.querySelector('#rating_4');
const ratingFive = document.querySelector('#rating_5');
const ratingStatement = document.querySelector('.rating_statement')

const styleSelection = (number) => {
    ratingOne.style.backgroundColor = "hsl(217, 12%,63%,0.08)";
    ratingOne.style.color = "var(--color-neutral-light-grey";
    ratingTwo.style.backgroundColor = "hsl(217, 12%,63%,0.08)";
    ratingTwo.style.color = "var(--color-neutral-light-grey";
    ratingThree.style.backgroundColor = "hsl(217, 12%,63%,0.08)";
    ratingThree.style.color = "var(--color-neutral-light-grey";
    ratingFour.style.backgroundColor = "hsl(217, 12%,63%,0.08)";
    ratingFour.style.color = "var(--color-neutral-light-grey";
    ratingFive.style.backgroundColor = "hsl(217, 12%,63%,0.08)";
    ratingFive.style.color = "var(--color-neutral-light-grey";

    switch (number) {
        case 1:
            ratingOne.style.backgroundColor = "var(--color-neutral-light-grey)";
            ratingOne.style.color = "var(--color-neutral-white)";
            ratingStatement.innerHTML="You selected 1 out of 5";
            break;
        case 2:
            ratingTwo.style.backgroundColor = "var(--color-neutral-light-grey)";
            ratingTwo.style.color = "var(--color-neutral-white)";
            ratingStatement.innerHTML="You selected 2 out of 5";
            break;
        case 3:
            ratingThree.style.backgroundColor = "var(--color-neutral-light-grey)";
            ratingThree.style.color = "var(--color-neutral-white)";
            ratingStatement.innerHTML="You selected 3 out of 5";
            break;
        case 4:
            ratingFour.style.backgroundColor = "var(--color-neutral-light-grey)";
            ratingFour.style.color = "var(--color-neutral-white)";
            ratingStatement.innerHTML="You selected 4 out of 5";
            break;
        case 5:
            ratingFive.style.backgroundColor = "var(--color-neutral-light-grey)";
            ratingFive.style.color = "var(--color-neutral-white)";
            ratingStatement.innerHTML="You selected 5 out of 5";
            break;
    }
}

ratingOne.addEventListener('click', () => {
    styleSelection(1)    
})
ratingTwo.addEventListener('click', () => {
    styleSelection(2)  
})
ratingThree.addEventListener('click', () => {
    styleSelection(3)  
})
ratingFour.addEventListener('click', () => {
    styleSelection(4)  
})
ratingFive.addEventListener('click', () => {
    styleSelection(5)  
})

submit.addEventListener('click', () => {
    feedbackForm.setAttribute("form-visible","false")
    feedbackSubmitted.setAttribute("form-visible","true")
})
