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
    { name: "Supplemental information", questionNumber: 111, subCategory: "no" }
];

let facilityName, neighborhood, city, state, zip, latitude, longitude;
  
// Get a reference to the table body where you want to insert the rows
const tableBody = document.querySelector('tbody');
let index = 1;

// Create 100 rows and insert them into the table
for (let i = 2; i <= 111; i++) {
  // Check if there is a category for this question number
  const subcategory = categories.find(cat => cat.questionNumber === i && cat.subCategory === "no");
  if (subcategory) {
    const categoryRow = document.createElement('tr');
    const categoryCell = document.createElement('td');
    categoryCell.className = 'border text-center px-4 py-2 bg-gray-700 font-bold uppercase';
    categoryCell.textContent = subcategory.name;
    categoryCell.setAttribute('colspan', '4'); // Assuming you have 4 columns
    categoryRow.appendChild(categoryCell);
    tableBody.appendChild(categoryRow);
  }

  const category = categories.find(cat => cat.questionNumber === i && cat.subCategory === "yes");
  if (category) {
    const categoryRow = document.createElement('tr');
    const categoryCell = document.createElement('td');
    categoryCell.className = 'border px-4 py-2 bg-custom-dark-blue text-white';
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

async function uploadReport(answers, comments, facilityName, address, neighborhood, city, state, zip, latitude, longitude, file) {
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

  // Creating a FormData object to hold all the payload data including the file.
  const formData = new FormData();
  Object.keys(payload).forEach(key => {
      formData.append(key, payload[key]);
  });
  // Appending the file to the FormData object
  formData.append('image', file);

  // Setting up the fetch options
  const options = {
      method: 'POST',
      body: formData
  };

  // Sending the request
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
    facilityName = document.getElementById('name').value;
    address = document.getElementById('address').value;
    neighborhood = document.getElementById('neighborhood').value;
    city = document.getElementById('city').value;
    state = document.querySelector('select').value;
    zip = document.getElementById('zip').value;
    latitude = document.getElementById('latitude').value;
    longitude = document.getElementById('longitude').value;
    const allAnswers = collectAnswers();
    const allComments = collectComments();
    uploadReport(allAnswers, allComments, facilityName, address, neighborhood, city, state, zip, latitude, longitude, FILE);

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
              table: Array.from(Array(111), (item, index)=>([
                index + 1,
                questions[index],
                allAnswers[`q${index + 1}`],
                allComments[index]
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

    pdfObject.jsPDFDocObject.save("Report - Tharros Security Solutions");
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

    const parts = FILE.name.split('.');
    const extension = parts[parts.length - 1].toLowerCase();
    const elements = document.getElementsByName("userImage");

    pdf.jsPDFDocObject.addImage(`${elements.id}`, `${extension}`, 70, 59, 60, 80);

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

    pdf.jsPDFDocObject.addPage();

    // Set text color to light blue (RGB values: 11, 193, 245)
    pdf.jsPDFDocObject.setTextColor(11, 193, 245);

    // Set font size to 16 points
    pdf.jsPDFDocObject.setFontSize(16);

    pdf.jsPDFDocObject.text("Perimeter Observations", 20, 40);

    pdf.jsPDFDocObject.addPage();

    // Set text color to light blue (RGB values: 11, 193, 245)
    pdf.jsPDFDocObject.setTextColor(11, 193, 245);

    // Set font size to 16 points
    pdf.jsPDFDocObject.setFontSize(16);

    pdf.jsPDFDocObject.text("Exterior Lighting Observations", 20, 40);

    pdf.jsPDFDocObject.addPage();

    // Set text color to light blue (RGB values: 11, 193, 245)
    pdf.jsPDFDocObject.setTextColor(11, 193, 245);

    // Set font size to 16 points
    pdf.jsPDFDocObject.setFontSize(16);

    pdf.jsPDFDocObject.text("Activity Generators Observations", 20, 40);

    pdf.jsPDFDocObject.addPage();

    // Set text color to light blue (RGB values: 11, 193, 245)
    pdf.jsPDFDocObject.setTextColor(11, 193, 245);

    // Set font size to 16 points
    pdf.jsPDFDocObject.setFontSize(16);

    pdf.jsPDFDocObject.text("Recommendations", 20, 40);

    for (let i = 1; i <= pdf.pagesNumber + 8; i++) {
        pdf.jsPDFDocObject.setPage(i);
        pdf.jsPDFDocObject.addImage(logoSrc, 'png', 0, 0, 210, 297);
    }
}

function toggleMenu() {
    const navbarCta = document.getElementById('navbar-cta');
    navbarCta.classList.toggle('hidden');
}

const fileTempl = document.getElementById("file-template"),
  imageTempl = document.getElementById("image-template"),
  empty = document.getElementById("empty"),
  gallery = document.getElementById("gallery"),
  overlay = document.getElementById("overlay"),
  hidden = document.getElementById("hidden-input");

let FILE;

function addFile(target, file) {
  FILE = undefined;
  target.innerHTML = ''; // Clear the previous file
  
  const isImage = file.type.match("image.*"),
    objectURL = URL.createObjectURL(file);

  const clone = isImage
    ? imageTempl.content.cloneNode(true)
    : fileTempl.content.cloneNode(true);

  clone.querySelector("h1").textContent = file.name;
  clone.querySelector("li").id = objectURL;
  clone.querySelector(".delete").dataset.target = objectURL;
  clone.querySelector(".size").textContent = 
    file.size > 1048576 
      ? Math.round(file.size / 1048576) + "mb" 
      : Math.round(file.size / 1024) + "kb";

  isImage && Object.assign(clone.querySelector("img"), {
    src: objectURL,
    alt: file.name
  });

  empty.classList.add("hidden");
  target.prepend(clone);

  FILE = file;
}

document.getElementById("button").onclick = () => hidden.click();
hidden.onchange = (e) => {
  const file = e.target.files[0];
  if (file) addFile(gallery, file);
};

function dropHandler(ev) {
  ev.preventDefault();
  const file = ev.dataTransfer.files[0];
  if (file) {
    addFile(gallery, file);
    overlay.classList.remove("draggedover");
  }
}

function dragEnterHandler(e) {
  e.preventDefault();
  overlay.classList.add("draggedover");
}

function dragLeaveHandler(e) {
  overlay.classList.remove("draggedover");
}

function dragOverHandler(e) {
  e.preventDefault();
}

gallery.onclick = ({ target }) => {
  if (target.classList.contains("delete")) {
    const ou = target.dataset.target;
    document.getElementById(ou).remove();
    FILE = undefined;
    empty.classList.remove("hidden");
  }
};

document.getElementById("cancel").onclick = () => {
  gallery.innerHTML = ''; // Clear the gallery
  FILE = undefined;
  empty.classList.remove("hidden");
  gallery.append(empty);
};