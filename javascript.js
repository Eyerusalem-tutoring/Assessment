    
    function sendMessage() {
        var tutor_name = document.getElementById('tutorName').value;
        var evaluator_name = document.getElementById('evaluatorName').value;
        var evaluation_date = document.getElementById('evaluationDate').value;
        var micro_teaching_total = document.getElementById('micro_teaching_total').textContent; // Use textContent
        var home_take_total = document.getElementById('home_take_total').textContent; // Use textContent
        var evaluators_agreement = "I confirm that all the points I provided are correct and free from bias.";
        
        
        // Check if all required fields are filled before submitting
        const requiredFields = document.querySelectorAll("[required]");
        let allValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                allValid = false;
                alert('Please fill all the required fields.');
                return;
            }
        }
        
    );

    var agreementCheckbox = document.getElementById('agreement');
    if (!agreementCheckbox.checked) {
        alert("Please fill all the required fields.");
        return false; // Prevent form submission if the checkbox is not checked
    }
    
    
    if (allValid) {
        
        var botToken = '7217696059:AAEoch06f0sP30wtikmhH_ov1NHsJ6PXxGE';
        var chatId = '@tutorsassessment';
        
        var text = "NEW ASSESSMENT SUBMITTED" + "\n\nEvaluator name: <b>" + evaluator_name + "</b>" +
        "\nTutor name: <b>" + tutor_name + "</b>" +
        "\nEvaluation date: <b>" + evaluation_date + "</b>" +
        "\nMicroteaching total: <b>" + micro_teaching_total + "</b>" +
        "\nHome take total: <b>" + home_take_total + "</b>" +
        "\n\n<i>" + evaluators_agreement + "</i>";
        
        // Ensure you specify parse_mode=HTML in the API call.
        
        
        var url = "https://api.telegram.org/bot" + botToken + 
        "/sendMessage?chat_id=" + chatId + 
        "&text=" + encodeURIComponent(text) + 
        "&parse_mode=HTML"; // Or use Markdown if using Markdown formatting.
        
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send();
        
        xhr.onload = function () {
            if (xhr.status == 200) {
                alert("Message sent successfully!");
                // Clear the form fields
                document.getElementById('tutorName').value = '';
                document.getElementById('evaluatorName').value = '';
                document.getElementById('evaluationDate').value = '';
                document.getElementById('micro_teaching_total').textContent = '0'; // Reset total to 0
                document.getElementById('home_take_total').textContent = '0'; // Reset total to 0
                
                // Redirect to new.html if all required fields are filled
                window.location.href = "new.html";
            } else {
                alert("Error sending message.");
            }
        };
        
    }
}

