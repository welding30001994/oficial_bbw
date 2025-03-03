function confirmAge(isAdult) {
            if (isAdult) {
                document.getElementById("age-verification").style.display = "none";
            } else {
                window.location.href = "https://www.google.com";
            }
        }