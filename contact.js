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
    text: 'Welcome to contacts',
    attachTo: {
        element: '.introContacts',
        on: 'bottom'
    },
    buttons: [
        {
            text: 'Next',
            action: tour.next
        }
    ],
    highlightClass: 'skello'
});

tour.addStep({
    id: 'example-step',
    title: 'Contacts',
    text: 'Look at thoses contacts amazing',
    attachTo: {
        element: '#Jean',
        on: 'bottom'
    },
    advanceOn: { 
        selector: '.custom-control-input', 
        event: 'click' 
    },
    highlightClass: 'skello'
});

tour.addStep({
    id: 'example-step',
    title: 'Start',
    text: 'Add input',
    attachTo: {
        element: '#inputText',
        on: 'bottom'
    },
    highlightClass: 'skello',
    when: {
        show: function () {
            let typingTimer;   
            const doneTypingInterval = 1000;
            const $input = $("#inputText");

            //on keyup, start the countdown
            $input.on('keyup', function () {
                clearTimeout(typingTimer);
                typingTimer = setTimeout(doneTyping, doneTypingInterval);
            });

            //on keydown, clear the countdown 
            $input.on('keydown', function () {
                clearTimeout(typingTimer);
            });

            //user is "finished typing," go to next step
            function doneTyping() {
                tour.next()
            }
        }
    }
});

tour.addStep({
    id: 'example-step',
    title: 'Finish !',
    text: 'You can go back home now',
    attachTo: {
        element: '.backHome',
        on: 'bottom'
    },
    buttons: [
        {
            text: 'Finish',
            action() {
                window.location.href = 'finish.html';
            }
        }
    ],
    highlightClass: 'skello'
});

if (RegExp('multipage', 'gi').test(window.location.search)) {
    tour.start();
}
