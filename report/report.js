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

const categories = [
    { name: "Perimeter control", questionNumber: 1, subCategory: "no" },
    { name: "Outer Perimeter", questionNumber: 1, subCategory: "yes" },
    { name: "Parking", questionNumber: 12, subCategory: "yes" },
    { name: "Access to facility", questionNumber: 21, subCategory: "no" },
    { name: "Access Controls", questionNumber: 21, subCategory: "yes" },
    { name: "Mail Handling Procedures" , questionNumber: 36, subCategory: "yes" },
    { name: "Security / Safety", questionNumber: 43, subCategory: "yes" },
    { name: "Security Control Room", questionNumber: 67, subCategory: "yes" },
    { name: "Health and emergency planning", questionNumber: 79, subCategory: "no" },
    { name: "Air and Food Supply", questionNumber: 79, subCategory: "yes" },
    { name: "Emergency Action / Response Planning", questionNumber: 84, subCategory: "yes" },
    { name: "Utilities", questionNumber: 91, subCategory: "no" },
    { name: "Gas", questionNumber: 91, subCategory: "yes" },
    { name: "Electric", questionNumber: 95, subCategory: "yes" },
    { name: "Water", questionNumber: 99, subCategory: "yes" },
    { name: "Fire Suppression / Sprinkler System", questionNumber: 103, subCategory: "yes" },
    { name: "Telephone", questionNumber: 107, subCategory: "yes" },
    { name: "Supplemental information", questionNumber: 91, subCategory: "yes" }
];
  
// Get a reference to the table body where you want to insert the rows
const tableBody = document.querySelector('tbody');
let index = 1;

// Create 100 rows and insert them into the table
for (let i = 2; i <= 111; i++) {
  // Check if there is a category for this question number
  const category = categories.find(cat => cat.questionNumber === i);
  if (category) {
    const categoryRow = document.createElement('tr');
    const categoryCell = document.createElement('td');

    if (category.subCategory == "yes") {
        categoryCell.className = 'border px-4 py-2 bg-stone-400 font-bold';
    }

    else {
        categoryCell.className = 'border text-center px-4 py-2 bg-custom-dark-blue text-white';
    }
    
    categoryCell.textContent = category.name;
    categoryCell.setAttribute('colspan', '4'); // Assuming you have 4 columns
    categoryRow.appendChild(categoryCell);
    tableBody.appendChild(categoryRow);
  }

  const newRow = document.createElement('tr');

  // Create cells for the row
  const cellNo = document.createElement('td');
  cellNo.className = 'border text-center px-4 py-2';
  cellNo.textContent = `${i}.`;

  const cellQuestion = document.createElement('td');
  cellQuestion.className = 'border text-center px-4 py-2';
  cellQuestion.textContent = `${questions[index]}`;

  const cellOptions = document.createElement('td');
  cellOptions.className = 'border text-center px-4 py-2';
  const selectOptions = document.createElement('select');
  selectOptions.name = `q${i}`;
  selectOptions.className = 'form-select h-10 w-full rounded-md shadow-sm cursor-pointer';

  // Option for Select
  const optionSelect = document.createElement('option');
  optionSelect.value = '';
  optionSelect.textContent = 'Select an option';
  optionSelect.setAttribute('selected', ''); // Set the selected attribute
  optionSelect.setAttribute('disabled', ''); // Set the disabled attribute
  selectOptions.appendChild(optionSelect);

  // Option for Yes
  const optionYes = document.createElement('option');
  optionYes.value = 'yes';
  optionYes.textContent = 'Yes';
  selectOptions.appendChild(optionYes);

  // Option for No
  const optionNo = document.createElement('option');
  optionNo.value = 'no';
  optionNo.textContent = 'No';
  selectOptions.appendChild(optionNo);

  // Option for No Answer
  const optionNoAnswer = document.createElement('option');
  optionNoAnswer.value = 'no-answer';
  optionNoAnswer.textContent = 'No Answer';
  selectOptions.appendChild(optionNoAnswer);

  cellOptions.appendChild(selectOptions);

  const cellComment = document.createElement('td');
  cellComment.className = 'border px-2 py-2';
  const commentTextarea = document.createElement('textarea');
  commentTextarea.placeholder = 'Add a comment...';
  commentTextarea.className = 'form-input w-full h-20 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-lg focus:shadow-outline-blue focus:border-blue-300 focus:placeholder-gray-600 focus:text-gray-700 sm:text-sm sm:leading-5 resize-none';
  cellComment.appendChild(commentTextarea);

  // Append cells to the row
  newRow.appendChild(cellNo);
  newRow.appendChild(cellQuestion);
  newRow.appendChild(cellOptions);
  newRow.appendChild(cellComment);

  // Append the row to the table body
  tableBody.appendChild(newRow);
  index++;
}

const rows = document.querySelectorAll('tbody tr');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentPage = 1;
const questionsPerPage = 10; // You want to show 10 questions per page

// Initial setup
function displayPage(page) {
    rows.forEach((row, index) => {
        if (index >= (page - 1) * questionsPerPage && index < page * questionsPerPage) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });

    const submitButton = document.getElementById('submitButton');

    // Update button visibility
    if (page <= 1) {
        prevButton.style.visibility = 'hidden';
    } else {
        prevButton.style.visibility = 'visible';
    }

    if (page * questionsPerPage >= rows.length) {
        nextButton.style.visibility = 'hidden';
        submitButton.classList.remove('hidden');
    } else {
        nextButton.style.visibility = 'visible';
        submitButton.classList.add('hidden');
    }
}

nextButton.addEventListener('click', () => {
    currentPage += 1;
    displayPage(currentPage);
});

prevButton.addEventListener('click', () => {
    currentPage -= 1;
    displayPage(currentPage);
});

// Display the first page initially
displayPage(1);

function scrollToFormTop() {
    const formElement = document.getElementById('formTop');
    formElement.scrollIntoView({ behavior: 'smooth' });  // smooth scroll to the top of the form
}

function collectAnswers() {
    let answers = {};

    for (let i = 1; i <= 111; i++) {
        const selectName = `q${i}`;
        const selectedOption = document.querySelector(`select[name="${selectName}"] option:checked`);

        if (selectedOption) {
            answers[selectName] = selectedOption.value;
        } else {
            // If no option is selected for a question, you can set a default value
            answers[selectName] = 'no-answer'; 
        }
    }
    
    return answers;
}

function collectComments() {
    // Initialize an empty array to store comments
    const comments = [];

    // Get a NodeList of all textarea elements within the table
    const commentTextareas = document.querySelectorAll('tbody textarea');

    // Loop through the NodeList and push the content of each textarea into the comments array
    commentTextareas.forEach(textarea => {
        comments.push(textarea.value);
    });

    return comments;
}

// Commented this part of code because we don't want to work with cookies 

/*function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}*/

function getSessionValue() {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'getSession.php', true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(xhr.responseText);
            } else if (xhr.readyState == 4) {
                reject(new Error(`Failed with status: ${xhr.status}`));
            }
        };
        xhr.send();
    });
}

async function uploadReport(answers, comments, facilityName, address, neighborhood, city, state, zip, latitude, longitude) {
    if (typeof answers !== 'object' || !Object.keys(answers).length || !Array.isArray(comments) || !comments.length) {
        console.error("Invalid answers or comments array");
        return;
    }

    let userId;
    try {
        userId = await getSessionValue();
        
        if(!userId) {
            console.error("No user_id, not logged in!");
            return;
        }
        
    } catch (error) {
        console.error('Error in main:', error);
        return;
    }

    const payload = {
        user_id: userId, 
        facilityName: facilityName,
        address: address,
        neighborhood: neighborhood,
        city: city,
        state: state,
        zip: zip,
        latitude: latitude,
        longitude: longitude
    };

    for (let i = 1; i <= 111; i++) {
        payload['q' + i] = answers['q' + i];
        payload['comment' + i] = comments[i - 1];
    }
    

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(payload).toString()
    };

    fetch('../DB_APIs/upload_report.php', options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log('Data successfully uploaded:', data);
        })
        .catch(error => {
            console.error('There was a problem uploading the report:', error);
        });
}


function generatePDF() {
    const facilityName = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const neighborhood = document.getElementById('neighborhood').value;
    const city = document.getElementById('city').value;
    const state = document.querySelector('select').value;
    const zip = document.getElementById('zip').value;
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const allAnswers = collectAnswers();
    const allComments = collectComments();
    uploadReport(allAnswers, allComments, facilityName, address, neighborhood, city, state, zip, latitude, longitude);

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

// Commented this part of code because quality of image is low

/*function addWatermark(pdf, logoSrc) {
    for (let i = 1; i <= 5; i++) {
        pdf.jsPDFDocObject.setPage(i);
        pdf.jsPDFDocObject.addImage(logoSrc, 'png', 0, 0, 210, 297);
    }
}*/

function toggleMenu() {
    const navbarCta = document.getElementById('navbar-cta');
    navbarCta.classList.toggle('hidden');
}