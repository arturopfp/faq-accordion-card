let faqContainers = document.querySelectorAll(".faq-container");

for(let faqContainer of faqContainers) {
    faqContainer.addEventListener('click', event => {
        const eTarget = event.target;

        if(eTarget.classList[1] === undefined) {
            eTarget.classList.add('bold');
        }
        else {
            eTarget.classList.remove('bold');
        }
        
        const answerContainer = eTarget.parentElement.nextElementSibling;
        
        if(answerContainer.classList.length === 1) {
            answerContainer.classList.add('active')
        } else {
            answerContainer.classList.remove('active')
        }
        
        
    })
}