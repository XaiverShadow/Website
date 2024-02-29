<script>
        // Set the date we're counting down to
        var countDownDate = new Date("March 7, 2024 00:00:00").getTime();

        // Update the countdown every 1 second
        var x = setInterval(function() {

            // Get the current date and time
            var now = new Date().getTime();

            // Find the time remaining between now and the count down date
            var timeRemaining = countDownDate - now;

            // Calculate days, hours, minutes and seconds
            var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // Display the result in the element with id="countdown"
            document.getElementById("countdown").innerHTML = `
                <div class="countdown-box">${days} <br> Days</div>
                <div class="countdown-box">${hours} <br> Hours</div>
                <div class="countdown-box">${minutes} <br> Minutes</div>
                <div class="countdown-box">${seconds} <br> Seconds</div>
                `;
    
                // If the countdown is over, display a message
                if (timeRemaining < 0) {
                    clearInterval(x);
                    document.getElementById("countdown").innerHTML = "EXPIRED";
                }
            , 1000);
        </script>
