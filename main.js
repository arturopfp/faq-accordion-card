let questionContainers = document.querySelectorAll(".question");
let answerContainers = document.querySelectorAll('.answer-container');
let bgPattern = document.getElementById('bg-pattern');
let illustration = document.getElementById('illustration');

console.log(bgPattern);

const windowResize = () => {

    if(window.innerWidth < 770) {
        illustration.src = 'images/illustration-woman-online-mobile.svg';
        bgPattern.src = 'images/bg-pattern-mobile.svg';
    } else {
        illustration.src = 'images/illustration-woman-online-desktop.svg';
        bgPattern.src = 'images/bg-pattern-desktop.svg';
    }
}

window.addEventListener('resize', windowResize);

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