(function () {

    /**
     * 1. On click on button we want to get the value
     *      a. Add click event to the buttons.
     *      b. Get the value of the click button.
     * 
     * 
     * 2. Display the value in result section.
     */

    // Added a click event listner to button element.

    $(document).ready( function () {
        $('button').click(function () {
            alert('Button is clicked');
        });
    });

})();