const questions = [
    "Is the outer perimeter well defined with physical barriers?",
    "Does the outer perimeter have key card access control for employees?",
    "How many access points are located in the outer perimeter?",
    "How much distance in feet from the outer perimeter to the inner perimeter?",
    "Does the outer perimeter have 100% CCTV coverage with no dead spots/zones?",
    "Does the outer perimeter have any obvious vulnerability to terrorist attack?",
    "Does the outer perimeter have posted security guards or conduct roving patrols around the outer perimeter?",
    "Does the outer perimeter have posted security signs to direct access control?",
    "Is there any high-threat facility located within reasonable proximity to the facility being assessed?",
    "Does the outer perimeter have access control procedures for vendor/delivery loading dock access?",
    "Is the outer perimeter afforded with enough external lighting to illuminate the entire facility perimeter?",
    "Does this facility have a parking lot near the building or a garage adjacent to the primary structure?",
    "Does this facility have a parking garage beneath the primary structure?",
    "Are all vehicles screened before accessing the parking area?",
    "Do employees have specific parking spots and are their names listed by the parking spot?",
    "Is employee access into the garage controlled (i.e. keys, card readers etc.)?",
    "Do the parking areas have public access parking? If so. which?",
    "Are visitor vehicles searched before being allowed access into the garage?",
    "What type of vehicle clearance is the parking garage limited to? (Height/width)",
    "Does the parking garage have security guards posted at the entrance to the facility?",
    "Are criminal backgrounds checks made on all employees prior to hiring?",
    "Are any employees known to associate, sympathize with or otherwise show support towards known terrorist or radical organizations?",
    "Are all employees issued ID badges?",
    "Do ID badges have unique identification numbers and photographs of the employee?",
    "Are there procedures in place to retrieve security badges and keys for employees that quit and/or are terminated?",
    "Are all visitors required to 'sign-in' at the facility and present a photo ID?",
    "Are all visitors issued a visitor's badge for access into the facility?",
    "Are all employees, visitors, and their possessions screened upon accessing the facility (i.e., x-ray machines, magnetometers etc.)?",
    "Are all visitors subject to search if they do not pass other screening procedures?",
    "Are all visitors required to have security escorts during their entire visit?",
    "Are all visitors required to 'sign-out' after their visit is complete?",
    "Do outside contractors receive open access to the facility?",
    "Are there procedures in place for reporting suspicious persons, packages or activities in or around the facility?",
    "Are all interior/exterior doors locked to prevent unauthorized access?",
    "What types of locking systems are used on the perimeter doors?",
    "Is the mailroom located in a remote part of the building that is isolated from key infrastructure assets?",
    "Is all mail screened before being disseminated throughout the facility (i.e. to protect against potential chemical, biological, explosive or other threatening exposures)? If so, what type of screening?",
    "Have mail room handlers been trained in recognition of suspicious packages?",
    "Have mailroom handlers been trained in response to the discovery of suspicious packages?",
    "Does the mailroom have x-ray machines to screen mail?",
    "Is mail separated before being scanned through the x-ray?",
    "Are all packages (FedEx, UPS, US Mail, Airborne Express, etc.) screened before being disseminated throughout the building?",
    "Does the guard force have lethal or less-lethal weapons? If so, what type?",
    "How many security guards are at the facility 24/7?",
    "What type of background checks are used to investigate new security guards?",
    "Who monitors the CCTV system?",
    "Are the perimeter cameras supported by infrared illuminators (for night vision) and with uninterruptible power supply, battery, or building emergency power?",
    "Are exterior Intrusion Detection System (IDS) used?",
    "What is the backup power supply source for the access control systems? (battery, uninterruptible power supply)",
    "What access control system equipment is used (i.e. electromagnetic key cards)?",
    "Are panic/duress alarm sensors used / Where are they located?",
    "Are intercom call boxes or a building intercom system used throughout the building?",
    "Are interior IDS sensors used?",
    "Are mechanical, electrical, gas, power supply, hazardous material storage, telecommunication system nodes, security, elevator controls and critical system panels, and other sensitive rooms continuously locked, under electronic security, CCTV camera and intrusion alarm systems surveillance?",
    "Are manual and electromagnetic cipher, keypad, pushbutton, panic bar, door strikes, and related hardware and software used?",
    "Are any potentially hazardous chemicals, combustible, or toxic materials stored on site in non-secure and non-monitored areas?",
    "Is there off-site 24-hour monitoring of intrusion detection systems?",
    "What are the means by which facility and security personnel can communicate with one another (e.g., portable radio, pager, cell phone, personal data assistants (PDAs)?",
    "Are vaults or safes in the building? If so, where are they located?",
    "What contingency plans have been developed or are in place to deal with security control center redundancy and backup operations?",
    "Are security systems decentralized, centralized, or integrated?",
    "Are there maintenance or service agreements for security systems?",
    "Are there fire detectors, smoke detectors or manual pull station alarm systems located throughout the facility? If so, list if they are battery or hardwired.",
    "Is there a fire suppression sprinkler system located throughout the facility?",
    "Is there a fire suppression standpipe system located throughout the facility?",
    "Are there fire extinguishers located throughout the facility and readily accessible to employees?",
    "Is there a designated security control room and console in place to monitor security, fire alarm, and other building systems?",
    "Is the location of the security room in a secure area with controlled and restricted access?",
    "Are the security control room access doors continuously locked to prevent unauthorized entry? ",
    "Does the security control room have adequate environment controls (e.g., a/c, lighting, heating, air circulation, backup power)? Is it ergonomically designed?",
    "How many CCTV cameras are installed and monitored in the Security Control Room?",
    "Are the security cameras recorded on a 24-hour basis?",
    "Are all general security questions routed to the security control room?",
    "How many security control room personnel are assigned to manage security functions by shift?",
    "Are there any other security functions managed from the control room that prevent the operators from performing their primary mission (i.e. call screening, greeting visitors etc.)?",
    "Do panic/duress alarms alert security personnel in the control room?",
    "How often are panic/duress alarms tested?",
    "Does the security control room have emergency HVAC shut-off switches?",
    "Are HVAC system intakes accessible to the public? Where are they located?",
    "Are emergency HVAC shut-off switches accessible to employees? Where are they located?",
    "Does the facility house a cafeteria or restaurant?",
    "Are incoming food supplies inspected for potential tampering?",
    "Are all food supplies maintained in a secure area (e.g. locked room or area not accessible to public)?",
    "Is there a fire evacuation plan in place? How often are drills or exercises conducted?",
    "Is there a bomb threat plan in place? How often are drills or exercises conducted?",
    "Is there a medical emergency plan in place? How often are drills or exercises conducted?",
    "Is there a workplace violence plan in place? How often are drills or exercises conducted?",
    "Is there a response plan in place for suspicious powder incidents? How often are drills or exercises conducted?",
    "Is there a shelter in place plan? How often are drills or exercises conducted?",
    "Is there a plan in place for weather-related emergencies? How often are drills or exercises conducted?",
    "Where is the gas entry point to the facility?",
    "Is the gas entry point in view of or accessible to the public?",
    "Are the interior access/controls for the gas located in a secure room?",
    "Where is the emergency shut-off to the gas line?",
    "Where is the electrical power entry point to the facility?",
    "Is the electrical power entry point in view of or accessible to the public?",
    "Are the interior access/controls for the electrical power located in a secure room?",
    "Where is the emergency shut-off to the electrical power line?",
    "Where is the water entry point to the facility?",
    "Is the water entry point in view of or accessible to the public?",
    "Are the interior access/controls for the water located in a secure room?",
    "Where is the emergency shut-off to the water line?",
    "Where is the water entry point to the facility?",
    "Is the water entry point in view of or accessible to the public?",
    "Are the interior access/controls for the water located in a secure room?",
    "Where is the emergency shut-off to the water line?",
    "Where is the telephone service entry point to the facility?",
    "Is the telephone service entry point in view of or accessible to the public?",
    "Are the interior access/controls for the telephone service located in a secure room?",
    "Are redundancy measures taken to ensure continuation of service in the event of failure?",
    "Is additional information attached to the Vulnerability Assessment?"
];

let facilityName, neighborhood, city, state, zip, latitude, longitude, values = [];

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

            const image = document.createElement('img');
            image.src = report.image; // Set the image source to the report's image path
            image.alt = 'Report Image';
            image.classList.add('max-w-full', 'my-2'); // Add styling for the image

            const link = document.createElement('a');
            link.href = `#`; // Prevent page navigation
            link.classList.add('text-blue-600', 'hover:underline');
            link.textContent = 'View Report';
            link.addEventListener('click', (e) => {
                e.preventDefault();
                generatePDF(report);
            });

            card.appendChild(title);
            card.appendChild(address);
            card.appendChild(image); // Add the image to the card
            card.appendChild(link);

            reportContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Error fetching the reports:', error);
    }
}


getReport(userSessionId);


function generatePDF(report) {
    function safeString(value) {
        return value !== null && value !== undefined ? value : '';
    }

    facilityName = safeString(report.facilityName);
    address = safeString(report.address);
    neighborhood = safeString(report.neighborhood);
    city = safeString(report.city);
    state = safeString(report.state);
    zip = safeString(report.zip);
    latitude = safeString(report.latitude);
    longitude = safeString(report.longitude);    
    const allAnswers = JSON.parse(report.answers);
    const allComments = JSON.parse(report.comments);
    values = JSON.parse(report.textboxValues);
    
    var props = {
        outputType: jsPDFInvoiceTemplate,
        returnJsPDFDocObject: true,
        fileName: "Report - Tharros Security Solutions",
        orientationLandscape: false,
        compress: true,
        invoice: {
            headerBorder: false,
            tableBodyBorder: false,
            header: [
                {
                  title: "#", 
                  style: { 
                    width: 10 
                  } 
                }, 
                { 
                  title: "Item",
                  style: {
                    width: 100
                  } 
                }, 
                { 
                  title: "Answer",
                  style: {
                    width: 30
                  } 
                }, 
                { 
                  title: "Comment",
                  style: {
                    width: 60
                  }
                }
              ],
              table: Array.from(Array(111), (item, index) => ([
                index + 1,
                safeString(questions[index]),
                safeString(allAnswers[index]),
                safeString(allComments[index])
            ])),
        },
        footer: {
            text: "The invoice is created on a computer and is valid without the signature and stamp.",
        },
        pageEnable: true,
        pageLabel: "Page ",
    };

    var pdfObject = jsPDFInvoiceTemplate.default({ ...props });

    addWatermark(pdfObject, "../images/watermark.png");

    fetch('firstPage.pdf')
      .then(response => response.arrayBuffer())
        .then(async existingPdfBytes => {
            const mergedPdfBytes = await mergePDFs(pdfObject, existingPdfBytes);
            // Create a Blob from the merged PDF bytes
            const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });

            // Create a URL for the Blob and use it to create a downloadable link
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'Report - Tharros Security Solutions.pdf';
            document.body.appendChild(a);
            a.click();

            // Release the URL
            window.URL.revokeObjectURL(url);
    });
}

function addWatermark(pdf, logoSrc) {
    // Add new page
    pdf.jsPDFDocObject.addPage();

    // Set text color to light blue (RGB values: 11, 193, 245)
    pdf.jsPDFDocObject.setTextColor(11, 193, 245);

    // Set font size to 16 points
    pdf.jsPDFDocObject.setFontSize(16);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Site description', 20, 40);

    // Set text color to black (RGB values: 0, 0, 0)
    pdf.jsPDFDocObject.setTextColor(0, 0, 0);

    // Set font size to 10 points
    pdf.jsPDFDocObject.setFontSize(10);

    // Add text to the PDF
    let text = `This is a physical security assessment of ${facilityName}, ${address}, using principles of Crime Prevention Through Environmental Design (CPTED) and Situational Crime Prevention. This assessment was requested by Milos Heights. It was conducted on ${new Date().toUTCString()} by Tharros Security Solutions.`;

    let margin = 20;
    let maxWidth = pdf.jsPDFDocObject.internal.pageSize.getWidth() - 2 * margin;

    // Use splitTextToSize to split lines and ensure they fit within page width
    let finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 47);

    // Here goes image from database

    //pdf.jsPDFDocObject.addImage('', `${extension}`, 70, 59, 60, 80);

    // Set text color to light blue (RGB values: 11, 193, 245)
    pdf.jsPDFDocObject.setTextColor(11, 193, 245);

    // Set font size to 16 points
    pdf.jsPDFDocObject.setFontSize(16);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('What is CPTED', 20, 148);

    // Set text color to black (RGB values: 0, 0, 0)
    pdf.jsPDFDocObject.setTextColor(0, 0, 0);

    // Set font size to 10 points
    pdf.jsPDFDocObject.setFontSize(10);

    text = "Crime Prevention Through Environmental Design (CPTED) is defined as the proper design and effective use of the built environment that can lead to a reduction in the fear and incidents of crime, and an improvement in the quality of life."

    finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 155);

    // Set text color to light blue (RGB values: 11, 193, 245)
    pdf.jsPDFDocObject.setTextColor(11, 193, 245);

    // Set font size to 16 points
    pdf.jsPDFDocObject.setFontSize(16);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('CPTED Strategies', 20, 183);

    // Set text color to black (RGB values: 0, 0, 0)
    pdf.jsPDFDocObject.setTextColor(0, 0, 0);

    // Set font size to 11 points
    pdf.jsPDFDocObject.setFontSize(11);

    // Set font type to bold
    pdf.jsPDFDocObject.setFont(undefined, 'bold');

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Natural Surveillance', 20, 190);

    // Draw a filled circle
    pdf.jsPDFDocObject.setFillColor(0, 0, 0); // Black color fill
    pdf.jsPDFDocObject.circle(25, 197, 0.6, 'F'); // 'F' means fill the circle

    // Set font type to normal
    pdf.jsPDFDocObject.setFont(undefined, 'normal');

    text = "Natural surveillance is a design concept directed primarily at discouraging criminal activity by ensuring that public spaces are easily observable. Formal surveillance techniques may involve hidden cameras, but physical features that maximize the visibility of people, parking areas and entrances to the property. The overall sense of safety improves when people can easily see others and be seen. Examples:"

    margin = 30;
    maxWidth = pdf.jsPDFDocObject.internal.pageSize.getWidth() - margin - 20;

    finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 198.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 221, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Doors and windows that look out onto the street and parking areas.', 45, 222.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 226, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Sidewalks and streets that are open and inviting to pedestrians.', 45, 227.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 231, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Unobstructed sight lines.', 45, 232.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 236, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Open design concepts (avoid hidden spaces).', 45, 237.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 241, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Front porches and activity areas that encourage visibility with the street and neighbors.', 45, 242.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 246, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Adequate nighttime lighting.', 45, 247.35);

    // Add new page 
    pdf.jsPDFDocObject.addPage();

    // Set font size to 11 points
    pdf.jsPDFDocObject.setFontSize(11);

    // Set font type to bold
    pdf.jsPDFDocObject.setFont(undefined, 'bold');

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Natural Access Control', 20, 40);

    // Draw a filled circle
    pdf.jsPDFDocObject.setFillColor(0, 0, 0); // Black color fill
    pdf.jsPDFDocObject.circle(25, 47, 0.6, 'F'); // 'F' means fill the circle

    // Set font type to normal
    pdf.jsPDFDocObject.setFont(undefined, 'normal');

    text = 'Natural access control is a design concept directed primarily at decreasing crime opportunities by discouraging access to crime targets and creating a perception of risk to offenders. This is a logicalextension of the idea of territorial reinforcement. It is gained by designing streets, sidewalks, building entrances, and neighborhood gateways to clearly indicate public routes, and by discouraging access to private areas with structural elements. Examples:';

    finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 48.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 75, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Avoid walling off your entire property.', 45, 76.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 80, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Access should be limited. (Who has access to the building)', 45, 81.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 85, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Entrances, exits, fences, landscaping, and lighting.', 45, 86.35);

    // Set font size to 11 points
    pdf.jsPDFDocObject.setFontSize(11);

    // Set font type to bold
    pdf.jsPDFDocObject.setFont(undefined, 'bold');

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Territorial Reinforcement', 20, 102);

    // Draw a filled circle
    pdf.jsPDFDocObject.setFillColor(0, 0, 0); // Black color fill
    pdf.jsPDFDocObject.circle(25, 109, 0.6, 'F'); // 'F' means fill the circle

    // Set font type to normal
    pdf.jsPDFDocObject.setFont(undefined, 'normal');

    text = 'Historically the idea of territorial reinforcement lies in the need to defend an area against attack. In our context our hope is that the homeowner develops a sense of territorial control for your property, while potential offenders, perceiving this control, are discouraged from committing a crime. Examples:';

    finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 110.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 128, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Landscaping', 45, 129.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 133, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Pavement designs', 45, 134.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 138, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Fences without compromising natural surveillance.', 45, 139.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 143, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Property designed with elements that encourage interaction with neighbors and the public.', 45, 144.35);

    // Set font size to 11 points
    pdf.jsPDFDocObject.setFontSize(11);

    // Set font type to bold
    pdf.jsPDFDocObject.setFont(undefined, 'bold');

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Maintenance and Image', 20, 160);

    // Draw a filled circle
    pdf.jsPDFDocObject.setFillColor(0, 0, 0); // Black color fill
    pdf.jsPDFDocObject.circle(25, 167, 0.6, 'F'); // 'F' means fill the circle

    // Set font type to normal
    pdf.jsPDFDocObject.setFont(undefined, 'normal');

    text = 'The maintenance and image of a property shows ownership of the property. Crime is more prevalent in areas that are not maintained. Also known as the Broken Window Theory. Examples:';

    finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 168.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 182, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Well maintained yard.', 45, 183.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 187, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Exterior lighting.', 45, 188.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 192, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Maintained property.', 45, 193.35);

    // Set font size to 11 points
    pdf.jsPDFDocObject.setFontSize(11);

    // Set font type to bold
    pdf.jsPDFDocObject.setFont(undefined, 'bold');

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Order Maintenance', 20, 209);

    // Draw a filled circle
    pdf.jsPDFDocObject.setFillColor(0, 0, 0); // Black color fill
    pdf.jsPDFDocObject.circle(25, 216, 0.6, 'F'); // 'F' means fill the circle

    // Set font type to normal
    pdf.jsPDFDocObject.setFont(undefined, 'normal');

    text = 'Attending to minor unacceptable acts and providing measures that clearly state acceptable behavior.';

    finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 217.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 226, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Signage that state expectations and the consequences of unacceptable behavior.', 45, 227.35);

    // Set font size to 11 points
    pdf.jsPDFDocObject.setFontSize(11);

    // Set font type to bold
    pdf.jsPDFDocObject.setFont(undefined, 'bold');

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Activity Support', 20, 243);

    // Draw a filled circle
    pdf.jsPDFDocObject.setFillColor(0, 0, 0); // Black color fill
    pdf.jsPDFDocObject.circle(25, 250, 0.6, 'F'); // 'F' means fill the circle

    // Set font type to normal
    pdf.jsPDFDocObject.setFont(undefined, 'normal');

    text = 'Design formal and informal support for increasing the level of human activity in a particular space as a crime prevention strategy.';

    finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 251.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 260, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Outside dining.', 45, 261.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 265, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Street vendors.', 45, 266.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 270, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Taxi stands.', 45, 271.35);

    // Draw an empty circle
    pdf.jsPDFDocObject.circle(40, 275, 0.6);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Designated areas for pickup and drop-off.', 45, 276.35);

    // Add new page
    pdf.jsPDFDocObject.addPage();

    // Set font size to 11 points
    pdf.jsPDFDocObject.setFontSize(11);

    // Set font type to bold
    pdf.jsPDFDocObject.setFont(undefined, 'bold');

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Wayfinding', 20, 40);

    // Set font type to normal
    pdf.jsPDFDocObject.setFont(undefined, 'normal');

    text = 'The concept of wayfinding is to move pedestrians and/or vehicles to and from or through buildings and sites using roadway transitions, sidewalks, signage, and focal points.';

    margin = 20;
    maxWidth = pdf.jsPDFDocObject.internal.pageSize.getWidth() - 2 * margin;

    finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 48);

    // Set font size to 11 points
    pdf.jsPDFDocObject.setFontSize(11);

    // Set font type to bold
    pdf.jsPDFDocObject.setFont(undefined, 'bold');

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Activity Generators', 20, 70);

    // Set font type to normal
    pdf.jsPDFDocObject.setFont(undefined, 'normal');

    text = 'Items or activities placed in strategic locations where natural surveillance is limited or unavailable. Activity generators help to attract capable individuals to the areas where they can over watch and deter potential crime. Bicycle racks, gazebos, benches, dining, or designated smoking areas encourage activity in the established environment. ';

    finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 78);

    // Set font size to 11 points
    pdf.jsPDFDocObject.setFontSize(11);

    // Set font type to bold
    pdf.jsPDFDocObject.setFont(undefined, 'bold');

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Lighting', 20, 110);

    // Set font type to normal
    pdf.jsPDFDocObject.setFont(undefined, 'normal');

    text = 'Lighting is the number one deterrent for crime during nighttime hours. A well-lit parking lot, pathway, exterior building, or outdoor facility by a white light source with good uniformity contributes to the perceived safety of pedestrians. High Intensity Discharge bulbs such as Metal Halide and High Pressure Sodium offer good lighting; however, LED provides the best coverage. LED lighting has quickly become the dominant bulb on the market, offering superior light emittance, uniformity, and color rendering for witness identification. ';

    finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 118);

    // Set font size to 11 points
    pdf.jsPDFDocObject.setFontSize(11);

    // Set font type to bold
    pdf.jsPDFDocObject.setFont(undefined, 'bold');

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Natural v. Organized v. Mechanical', 20, 160);

    // Set font type to normal
    pdf.jsPDFDocObject.setFont(undefined, 'normal');

    text = 'CPTED focuses on the organic and natural modification of the built environment to accomplish its strategies. Organized strategies utilize the human element to complement the natural goal by way of security guards, receptionist, and property managers. Mechanical elements can be built to further harden a target. Security gates, security cameras, and alarm systems all contribute to the mechanical strategy of crime prevention. ';

    finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 168);

    pdf.jsPDFDocObject.addPage();

    // Set text color to light blue (RGB values: 11, 193, 245)
    pdf.jsPDFDocObject.setTextColor(11, 193, 245);

    // Set font size to 16 points
    pdf.jsPDFDocObject.setFontSize(16);

    pdf.jsPDFDocObject.text("Signage and Wayfinding", 20, 40);

    // Set font size to 12 points
    pdf.jsPDFDocObject.setFontSize(12);

    // Set text color to black (RGB values: 0, 0, 0)
    pdf.jsPDFDocObject.setTextColor(0, 0, 0);

    finalText = pdf.jsPDFDocObject.splitTextToSize(values[0], maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 55);

    pdf.jsPDFDocObject.addPage();

    // Set text color to light blue (RGB values: 11, 193, 245)
    pdf.jsPDFDocObject.setTextColor(11, 193, 245);

    // Set font size to 16 points
    pdf.jsPDFDocObject.setFontSize(16);

    pdf.jsPDFDocObject.text("Perimeter Observations", 20, 40);

    // Set font size to 12 points
    pdf.jsPDFDocObject.setFontSize(12);

    // Set text color to black (RGB values: 0, 0, 0)
    pdf.jsPDFDocObject.setTextColor(0, 0, 0);

    finalText = pdf.jsPDFDocObject.splitTextToSize(values[1], maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 55);

    pdf.jsPDFDocObject.addPage();

    // Set text color to light blue (RGB values: 11, 193, 245)
    pdf.jsPDFDocObject.setTextColor(11, 193, 245);

    // Set font size to 16 points
    pdf.jsPDFDocObject.setFontSize(16);

    pdf.jsPDFDocObject.text("Exterior Lighting Observations", 20, 40);

    // Set font size to 12 points
    pdf.jsPDFDocObject.setFontSize(12);

    // Set text color to black (RGB values: 0, 0, 0)
    pdf.jsPDFDocObject.setTextColor(0, 0, 0);

    finalText = pdf.jsPDFDocObject.splitTextToSize(values[2], maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 55);

    pdf.jsPDFDocObject.addPage();

    // Set text color to light blue (RGB values: 11, 193, 245)
    pdf.jsPDFDocObject.setTextColor(11, 193, 245);

    // Set font size to 16 points
    pdf.jsPDFDocObject.setFontSize(16);

    pdf.jsPDFDocObject.text("Activity Generators Observations", 20, 40);

    // Set font size to 12 points
    pdf.jsPDFDocObject.setFontSize(12);

    // Set text color to black (RGB values: 0, 0, 0)
    pdf.jsPDFDocObject.setTextColor(0, 0, 0);

    finalText = pdf.jsPDFDocObject.splitTextToSize(values[3], maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 55);

    pdf.jsPDFDocObject.addPage();

    // Set text color to light blue (RGB values: 11, 193, 245)
    pdf.jsPDFDocObject.setTextColor(11, 193, 245);

    // Set font size to 16 points
    pdf.jsPDFDocObject.setFontSize(16);

    pdf.jsPDFDocObject.text("Recommendations", 20, 40);

    // Set font size to 12 points
    pdf.jsPDFDocObject.setFontSize(12);

    // Set text color to black (RGB values: 0, 0, 0)
    pdf.jsPDFDocObject.setTextColor(0, 0, 0);

    finalText = pdf.jsPDFDocObject.splitTextToSize(values[4], maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 55);

    // Add new page
    pdf.jsPDFDocObject.addPage();

    // Set text color to black (RGB values: 0, 0, 0)
    pdf.jsPDFDocObject.setTextColor(0, 0, 0);

    // Set font size to 11 points
    pdf.jsPDFDocObject.setFontSize(11);

    // Set font type to bold
    pdf.jsPDFDocObject.setFont(undefined, 'bold');

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Other Considerations:', 20, 40);

    // Set font type to normal
    pdf.jsPDFDocObject.setFont(undefined, 'normal');

    // Set font size to 10 points
    pdf.jsPDFDocObject.setFontSize(10);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Create an Emergency Operations Plan that is defined by these four mission areas.', 33, 47);

    // Set font type to bold
    pdf.jsPDFDocObject.setFont(undefined, 'bold');

    // Add text to the PDF
    pdf.jsPDFDocObject.text('1. Deterrence', 39, 55);

    // Set font type to normal
    pdf.jsPDFDocObject.setFont(undefined, 'normal');

    // Set font size to 9 points
    pdf.jsPDFDocObject.setFontSize(9);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('a.', 50, 60);

    margin = 56;
    maxWidth = pdf.jsPDFDocObject.internal.pageSize.getWidth() - margin - 25;

    text = 'Deterrence means the capabilities necessary to avoid, prevent or stop a threatened or real mass shooting before it occurs.';

    finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 60);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('b.', 50, 68.5);

    text = 'Capabilities might include a program designed to uncover threats before they materialize, such as creating an educational program or a process to review the social media accounts of “at risk” individuals. They might include implementing overt physical security measures designed to deter a mass shooter from ever considering your property as a target.';

    finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 68.5);

    // Set font type to bold
    pdf.jsPDFDocObject.setFont(undefined, 'bold');

    // Set font size to 10 points
    pdf.jsPDFDocObject.setFontSize(10);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('2. Protection', 39, 85);

    // Set font type to normal
    pdf.jsPDFDocObject.setFont(undefined, 'normal');

    // Set font size to 9 points
    pdf.jsPDFDocObject.setFontSize(9);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('a.', 50, 90);

    text = 'All the physical and procedural capabilities designed to stop or inhibit a mass shooter from successfully carrying out plans if your property is targeted';

    finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 90);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('b.', 50, 98.5);

    text = 'Capabilities may include hardening-up the physical structure of your institution, installing active countermeasures or a procedural response such as an enhanced lockdown. Capabilities may also include designating specific rooms as protected “safe rooms” pre-staged with certain equipment and designating and training staff members or volunteers for an armed response.';

    finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 98.5);

    // Set font type to bold
    pdf.jsPDFDocObject.setFont(undefined, 'bold');

    // Set font size to 10 points
    pdf.jsPDFDocObject.setFontSize(10);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('3. Response', 39, 118.5);

    // Set font type to normal
    pdf.jsPDFDocObject.setFont(undefined, 'normal');

    // Set font size to 9 points
    pdf.jsPDFDocObject.setFontSize(9);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('a.', 50, 123.5);

    text = 'How individuals, staff members and those in leadership or assigned positions should respond to a mass shooter making entry into your house of worship, school or business.';

    finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 123.5);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('b.', 50, 132);

    text = 'Include the immediate implementation of the lockdown procedures and the active countermeasures detailed under the protection mission, immediate (or automated) communication with law enforcement, immediate response by individuals to run, hide or fight, and the activation of on-scene armed responders using the procedures also outlined in the protection mission.';

    finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 132);

    // Set font type to bold
    pdf.jsPDFDocObject.setFont(undefined, 'bold');

    // Set font size to 10 points
    pdf.jsPDFDocObject.setFontSize(10);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('4. Mitigation', 39, 152);
    
    // Set font type to normal
    pdf.jsPDFDocObject.setFont(undefined, 'normal');

    // Set font size to 9 points
    pdf.jsPDFDocObject.setFontSize(9);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('a.', 50, 157);

    text = 'A plan designed to mitigate the loss of life when an attack has occurred.';

    finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 157);

    // Add text to the PDF
    pdf.jsPDFDocObject.text('b.', 50, 162);

    text = 'Example: implementation of a triage system and emergency first-aid treatment of victims by on-scene personnel before emergency services arrive on the scene.';

    finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 162);

    // Set font size to 11 points
    pdf.jsPDFDocObject.setFontSize(11);

    // Set font type to bold
    pdf.jsPDFDocObject.setFont(undefined, 'bold');

    // Add text to the PDF
    pdf.jsPDFDocObject.text('Conclusion:', 20, 250);

    // Set font type to normal
    pdf.jsPDFDocObject.setFont(undefined, 'normal');

    // Set font size to 9 points
    pdf.jsPDFDocObject.setFontSize(9);

    pdf.jsPDFDocObject.text('It is proven that if a building is secure and well maintained, it is less likely to experience criminality.', 43.5, 250);

    text = 'Addressing the recommendations in this report can eliminate the risk or reduce the impact if an incident occurs. We  believe that if schools, houses of worship, and public and private businesses were to implement the steps outlined  here, criminals would give up plans entirely';

    margin = 20;
    maxWidth = pdf.jsPDFDocObject.internal.pageSize.getWidth() - 2 * margin - 5;

    finalText = pdf.jsPDFDocObject.splitTextToSize(text, maxWidth);

    pdf.jsPDFDocObject.text(finalText, margin, 254);

    for (let i = 1; i <= pdf.pagesNumber + 9; i++) {
        pdf.jsPDFDocObject.setPage(i);
        pdf.jsPDFDocObject.addImage(logoSrc, 'png', 0, 0, 210, 297);
    }
}

function toggleMenu() {
    const navbarCta = document.getElementById('navbar-cta');
    navbarCta.classList.toggle('hidden');
}

async function mergePDFs(jspdfDocument, existingPdfBytes) {
    // Load the existing PDF as a Uint8Array
    const existingPdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);
  
    // Create a new PDF from the jsPDF document
    const jspdfPdfBytes = new Uint8Array(jspdfDocument.jsPDFDocObject.output('arraybuffer'));
    const jspdfPdfDoc = await PDFLib.PDFDocument.load(jspdfPdfBytes);
  
    // Create a new PDF document to combine both
    const mergedPdf = await PDFLib.PDFDocument.create();
  
    // Copy pages from the existing PDF to the merged one
    const existingPdfPages = await mergedPdf.copyPages(existingPdfDoc, existingPdfDoc.getPageIndices());
    for (const page of existingPdfPages) {
        mergedPdf.addPage(page);
    }
  
    // Copy pages from the jsPDF PDF to the merged one
    const jspdfPages = await mergedPdf.copyPages(jspdfPdfDoc, jspdfPdfDoc.getPageIndices());
    for (const page of jspdfPages) {
        mergedPdf.addPage(page);
    }
  
    // Serialize the merged PDF to bytes
    const mergedPdfBytes = await mergedPdf.save();
  
    return mergedPdfBytes;
}