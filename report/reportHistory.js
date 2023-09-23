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