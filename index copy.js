const tour = new Shepherd.Tour({
    defaultStepOptions: {
        classes: 'tooltipSkello',
        scrollTo: true
    }, 
    useModalOverlay : true,
});

tour.addStep({
    id: 'example-step',
    title: 'Start',
    text: 'This step is attached to the bottom of the <code>.debutIntro</code> element.',
    attachTo: {
        element: '.debutIntro',
        on: 'bottom'
    },
    buttons: [
        {
            text: 'Next',
            action: tour.next
        }
    ]
});

tour.addStep({
    id: 'example-step',
    title: 'The text',
    text: 'Look at the text ! OMG',
    attachTo: {
        element: '.continueIntro',
        on: 'bottom'
    },
    buttons: [
        {
            text: 'Next',
            action(){
                window.location.href = 'finish.html';
            }
        }
    ]
});

tour.addStep({
    id: 'example-step',
    title: 'Go to contacts',
    text: 'Now click to the button to go to the contacts',
    attachTo: {
        element: '#goToContacts',
        on: 'bottom'
    },
    beforeShowPromise: function(){
        document.getElementById('goToContacts').setAttribute("href", "contact.html?multipage=true");
    }
});


document.getElementById('goToContacts').setAttribute("href", "contact.html?multipage=true");

tour.start();