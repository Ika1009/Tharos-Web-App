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
            link.href = `#`; // Prevent page navigation
            link.classList.add('text-blue-600', 'hover:underline');
            link.textContent = 'View Report';
            link.addEventListener('click', (e) => {
                e.preventDefault();
                generatePDF(report);
            });

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


function generatePDF(report) {
    const facilityName = report.facilityName;
    const address = report.address;
    const neighborhood = report.neighborhood;
    const city = report.city;
    const state = report.state;
    const zip = report.zip;
    const latitude = report.latitude;
    const longitude = report.longitude;
    const allAnswers = JSON.parse(report.answers);
    const allComments = JSON.parse(report.comments);

    var props = {
        outputType: jsPDFInvoiceTemplate.OutputType.Save,
        returnJsPDFDocObject: true,
        fileName: "Report - Tharros Security Solutions",
        orientationLandscape: false,
        compress: true,
        logo: {
            src: "../images/ICON_1-768x767.png",
            type: 'PNG', //optional, when src= data:uri (nodejs case)
            width: 26.66, //aspect ratio = width/height
            height: 26.66,
            margin: {
                top: 0, //negative or positive num, from the current position
                left: 0 //negative or positive num, from the current position
            }
        },
        business: {
            name: "Tharros Security Solutions",
            address: "9420 Towne Square Ave, Suite 4 Blue Ash, Ohio 45242",
            phone: "(+513) 964-0836",
            email: "ContactUs@Tharros.net",
            website: "https://tharros.net/",
        },
        contact: {
            label: "Invoice issued for:",
            name: facilityName,
            address: address,
            otherInfo: `${state}, ${city}, ${neighborhood}, ${zip}, ${longitude}, ${latitude}`
        },
        invoice: {
            label: "Invoice #: ",
            num: 1,
            invGenDate: `Invoice Date: ${new Date()}`,
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
              table: Array.from(Array(111), (item, index)=>([
                index + 1,
                questions[index],
                allAnswers[`q${index + 1}`],
                allComments[index]
            ])),
            invDescLabel: "Invoice Note",
            invDesc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        },
        footer: {
            text: "The invoice is created on a computer and is valid without the signature and stamp.",
        },
        pageEnable: true,
        pageLabel: "Page ",
    };

    var pdfObject = jsPDFInvoiceTemplate.default({ ...props });

    // Commented this part of code because quality of image is low

    //addWatermark(pdfObject, "../images/watermark.png");

    //pdfObject.jsPDFDocObject.save("Report"); 
}



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