async function getReport(userId) {
    try {
        const response = await fetch(`../DB_APIs/get_reports.php?user_id=${userId}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        console.log(data);

        if (data.error) {
            console.error(data.error);
            return;
        }

        const answers = JSON.parse(data.answers);
        const comments = JSON.parse(data.comments);

        // Assuming you have some elements to populate in your HTML
        /*for (let i = 2; i <= 111; i++) {
            let answerElement = document.getElementById('q' + i);  // Example elements
            let commentElement = document.getElementById('comment' + i);

            answerElement.value = answers[i - 2];
            commentElement.value = comments[i - 2];
        }*/
    } catch (error) {
        console.error('Error fetching the report:', error);
    }
}
