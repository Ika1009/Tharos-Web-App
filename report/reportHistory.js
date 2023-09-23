async function getReport(userId) {
    try {
        const response = await fetch(`../DB_APIs/get_reports.php?user_id=${userId}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (!Array.isArray(data.reports) || !data.reports.length) {
            console.error('No reports found');
            return;
        }

        const reportContainer = document.querySelector('.grid'); // Container for the reports

        // Clear any existing report cards
        reportContainer.innerHTML = '';

        data.reports.forEach(report => {
            const card = document.createElement('div');
            card.classList.add('bg-white', 'rounded-lg', 'p-4', 'shadow');

            const title = document.createElement('h3');
            title.classList.add('text-xl', 'font-medium', 'mb-2');
            title.textContent = report.facilityName || `Report Title ${report.id}`; 

            const address = document.createElement('p');
            address.classList.add('text-gray-700', 'mb-2');
            address.textContent = report.address || `Report Description ${report.id}`;

            const link = document.createElement('a');
            link.href = `#`; // Add your report link here
            link.classList.add('text-blue-600', 'hover:underline');
            link.textContent = 'View Report';

            card.appendChild(title);
            card.appendChild(address);
            card.appendChild(link);

            reportContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Error fetching the reports:', error);
    }
}

getReport(userSessionId);
