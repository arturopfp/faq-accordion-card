let questionContainers = document.querySelectorAll(".question");
let answerContainers = document.querySelectorAll('.answer-container');


for(let questionContainer of questionContainers) {
    questionContainer.addEventListener('click', event => {
        const eTarget = event.target;
        const answerContainer = eTarget.parentElement.nextElementSibling;
        const arrow = eTarget.nextElementSibling;


        if(eTarget.classList[1] === undefined) {
            eTarget.classList.add('bold');
        }
        else {
            eTarget.classList.remove('bold');
        }   

        if(eTarget.classList.length >= 2) {
            answerContainer.classList.add('active')
            arrow.classList.add('rotate');
        } else {
            answerContainer.classList.remove('active')
            arrow.classList.remove('rotate');
        }        
        
    })
}

for(let answerContainer of answerContainers) {
    answerContainer.addEventListener('click', () => {
        const question = answerContainer.previousSibling.previousSibling.firstChild.nextSibling;
        const imgArrow = question.nextSibling.nextSibling;

        if(answerContainer.classList.length >= 2) {
            answerContainer.classList.remove('active')
            question.classList.remove('bold');
            imgArrow.classList.remove('rotate');
        } else {
            answerContainer.classList.add('active')
            question.classList.add('bold');
            arrow.classList.add('rotate');
        }

       
    })
}