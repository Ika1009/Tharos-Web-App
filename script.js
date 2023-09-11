function generatePDF() {
    const facilityName = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const neighborhood = document.getElementById('neighborhood').value;
    const city = document.getElementById('city').value;
    const state = document.querySelector('select').value;
    const zip = document.getElementById('zip').value;
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;

    const pdfContent = `
        Name: ${facilityName}
        Address: ${address}
        Neighborhood: ${neighborhood}
        City / Township: ${city}
        State: ${state}
        Zip: ${zip}
        Latitude: ${latitude}
        Longitude: ${longitude}
    `;

    var props = {
        outputType: jsPDFInvoiceTemplate.OutputType.Save,
        returnJsPDFDocObject: true,
        fileName: "Report",
        orientationLandscape: false,
        compress: true,
        logo: {
            src: "images/ICON_1-768x767.png",
            type: 'PNG', //optional, when src= data:uri (nodejs case)
            width: 26.66, //aspect ratio = width/height
            height: 26.66,
            margin: {
                top: 0, //negative or positive num, from the current position
                left: 0 //negative or positive num, from the current position
            }
        },
        stamp: {
            inAllPages: true, //by default = false, just in the last page
            src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
            type: 'JPG', //optional, when src= data:uri (nodejs case)
            width: 20, //aspect ratio = width/height
            height: 20,
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
            city: city,
            zip: zip,
            //phone: "(+355) 069 22 22 222",
            //email: "client@website.al",
            //otherInfo: "www.website.al",
        },
        invoice: {
            label: "Invoice #: ",
            num: 1,
            invGenDate: `Invoice Date: ${new Date()}`,
            headerBorder: false,
            tableBodyBorder: false,
            invDescLabel: "Invoice Note",
            invDesc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        },
        footer: {
            text: "The invoice is created on a computer and is valid without the signature and stamp.",
        },
        pageEnable: true,
        pageLabel: "Page ",
    };

    var pdfObject = jsPDFInvoiceTemplate.default(props); //returns number of pages created
}