(function () {

    /**
     * 1. On click on button we want to get the value
     *      a. Add click event to the buttons.
     *      b. Get the value of the clicked button.
     * 
     * 
     * 2. Display the value in result section.
     *      a. Add only values which are between 0-9
     * 
     * 3. Add operator based functionality.
     *      a. Addition
     *      b. Substraction
     *      c. Division
     *      d. Multiplication
     *      e. Enter
     */

    // Added a click event listner to button element.
    $(document).ready( Calculator );


    function Calculator () {

        $('button').click(function (event) {

            // Get the user input value.
            var userInputValue = event.target.value;


            if(userInputValue >= 0 && userInputValue <= 9) {
                // Get the value of result.
                var getResultData = $('#result').val();

                // Set the value of result.
                $('#result').val(getResultData+userInputValue);
            } else {

                if(userInputValue === '+') {

                    var getResultData = $('#result').val();
                    
                    addition(getResultData);

                }

            }
        });
    }


    function addition (value) {
        console.log(value);
    }


})();
