import { defineStore } from "pinia";
import { ref } from "vue";

export const useCompanyData = defineStore('companyData', () => {
    const companyData = ref([]);
    const defaultData = ref([
        
            {
              "id": 2,
              "companyName": "GVB",
              "address": "Austria",
              "email": "guntard.gutmann@gvb-gutmann.at",
              "phone": "6644641571",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 3,
              "companyName": "Lk consulting",
              "address": "Spain",
              "email": "Kargwoman@gmail.com",
              "phone": "620798096",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 4,
              "companyName": "Micellae",
              "address": "Canada",
              "email": "sdarvishi@micellae.com",
              "phone": "4165562437",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 5,
              "companyName": "Treadstone Healthcare, LLC",
              "address": "USA",
              "email": "MIKE.BLUME@TREADSTONEHEALTHCARE.COM",
              "phone": "4258682777",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 6,
              "companyName": "Corning Korea",
              "address": "South Korea",
              "email": "kimm@corning.com",
              "phone": "1049216486",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 7,
              "companyName": "PanEuro Technology Ventures",
              "address": "United Kingdom",
              "email": "graham.smith@paneuro.ie",
              "phone": "874129234",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 8,
              "companyName": "Galimedix GmbH",
              "address": "Germany",
              "email": "agebauer@galimedix.com",
              "phone": "1736807126",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 9,
              "companyName": "Manus Pharmaceuticals (Canada) Ltd.",
              "address": "Canada",
              "email": "vdeigin@gmail.com",
              "phone": "4169173109",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 10,
              "companyName": "Ampere Advisers",
              "address": "Ireland",
              "email": "peter@ampereadvisers.com",
              "phone": "7464081079",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 11,
              "companyName": "FoundationMED",
              "address": "United States",
              "email": "mcitron@mac.com",
              "phone": "9196659807",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 12,
              "companyName": "Dr-B-f-P Consulting",
              "address": "Italy",
              "email": "georg2436@gmail.com",
              "phone": "1774781093",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 13,
              "companyName": "Vaxican",
              "address": "Poland",
              "email": "m@mateuszsagan.com",
              "phone": "692182583",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 14,
              "companyName": "Opus-Materia Ltd",
              "address": "Greece",
              "email": "administration@opusmateria.gr",
              "phone": "6944346443",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 15,
              "companyName": "Renco associates",
              "address": "Zambia",
              "email": "gmwananshiku@gmail.com",
              "phone": "979935588",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 16,
              "companyName": "Jenetech Informatics",
              "address": "United States",
              "email": "msekar@jenetechinformatics.com",
              "phone": "4084800804",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 17,
              "companyName": "Jetbio Ltd",
              "address": "UK",
              "email": "dennis@jet-bio.com",
              "phone": "+44 7980 980047",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 18,
              "companyName": "SAMSUNG Electronics",
              "address": "India",
              "email": "veeren.shetty@gmail.com",
              "phone": "+91 99008 14028",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 19,
              "companyName": "Humana medical",
              "address": "Italy",
              "email": "radames.b@humanamedical.it",
              "phone": "3282364233",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 20,
              "companyName": "Cellbricks",
              "address": "Germany",
              "email": "floraguarnotta@gmail.com",
              "phone": "782944219",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 21,
              "companyName": "Grunenthal",
              "address": "Germany",
              "email": "priyatham.salimadugu@grunenthal.com",
              "phone": "",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 22,
              "companyName": "ARKOSANTE",
              "address": "Morocco",
              "email": "Idrissimane79@gmail.com",
              "phone": "661256386",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 23,
              "companyName": "Hopital saint Joseph",
              "address": "France",
              "email": "f.guedj@yahoo.fr",
              "phone": "+33 680117687",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 24,
              "companyName": "AIIMS, NEW DELHI",
              "address": "India",
              "email": "venkyprao@yahoo.com",
              "phone": "26593139",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 25,
              "companyName": "Multiequipos",
              "address": "Costa Rica",
              "email": "jccruz.28@gmail.com",
              "phone": "88136566",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 26,
              "companyName": "Vitality center ltd",
              "address": "Hong Kong",
              "email": "drjayasrivastava@gmail.com",
              "phone": "67028858",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 27,
              "companyName": "Polymath Therapeutics",
              "address": "United States",
              "email": "spollard@codyregionalhealth.org",
              "phone": "3078990585",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 28,
              "companyName": "Medical Solutions",
              "address": "United States",
              "email": "alexr@medicalsolutions.com",
              "phone": "+1 7208925032",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 29,
              "companyName": "Acelis Connected Health",
              "address": "United States",
              "email": "robert.ellis@acelis.com",
              "phone": "+1 9254531928",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 30,
              "companyName": "BabyIMPULSE",
              "address": "Netherlands",
              "email": "k.shih@ifhafund.com",
              "phone": "+31 6295256929",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 31,
              "companyName": "Investment Funds for Health in Africa",
              "address": "Switzerland",
              "email": "selmatribi@babyimpulse.ch",
              "phone": "+41 0798164040",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 32,
              "companyName": "Dewpoint Therapeutics",
              "address": "Germany",
              "email": "tbaier@dewpointx.com",
              "phone": "17689481154",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 33,
              "companyName": "Quadrium",
              "address": "France",
              "email": "v.guarnotta@quadrium.com",
              "phone": "641721890",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 34,
              "companyName": "Mfran Inc",
              "address": "Canada",
              "email": "mfrancis1@sympatico.ca",
              "phone": "416-706-1120",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 35,
              "companyName": "Alpha 1 Advocacy & Action",
              "address": "Canada",
              "email": "mrmworld63@outlook.com",
              "phone": "250 268 0191",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 36,
              "companyName": "ILab",
              "address": "United States",
              "email": "dr_nishi@yahoo.com",
              "phone": "512233232",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 37,
              "companyName": "DTU Tech Transfer Office",
              "address": "Denmark",
              "email": "hcho@dtu.dk",
              "phone": "93511373",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 38,
              "companyName": "Sci Group AS",
              "address": "Norway",
              "email": "bethany.boutin@evernorth.com",
              "phone": "91332242",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 39,
              "companyName": "Evernorth",
              "address": "United States",
              "email": "jj@sci-group.net",
              "phone": "8602266330",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 40,
              "companyName": "UT Southwestern Medical Center at Dallas",
              "address": "United States",
              "email": "qian.wang@utsouthwestern.edu",
              "phone": "2146488925",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 41,
              "companyName": "Private Individual",
              "address": "United States",
              "email": "petra.dorfsmann@gmail.com",
              "phone": "4245005006",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 42,
              "companyName": "CEPMAR Ltd.",
              "address": "Slovakia",
              "email": "martin.cepa@cepmar.eu",
              "phone": "903404094",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 43,
              "companyName": "INK",
              "address": "Germany",
              "email": "h@neuekommunikation.org",
              "phone": "1537374828",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 44,
              "companyName": "Laboratorios LIFE",
              "address": "Ecuador",
              "email": "hector.enriquez@life.com.ec",
              "phone": "999738320",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 45,
              "companyName": "Leukemia Therapeutics, LLC",
              "address": "United States",
              "email": "leukemia.therapeutics@yahoo.com",
              "phone": "617-378-5476",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 46,
              "companyName": "Investor",
              "address": "Australia",
              "email": "scooterocca@yahoo.com",
              "phone": "459739900",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 47,
              "companyName": "Uab",
              "address": "United States",
              "email": "rpillay@uab.edu",
              "phone": "7248755060",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 48,
              "companyName": "Singapore institute of Manufacturing Technology",
              "address": "Singapore",
              "email": "zpwang@simtech.a-star.edu.sg",
              "phone": "65903197",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 49,
              "companyName": "Opdorp Finance BV",
              "address": "Belgium",
              "email": "annie.vereeken@biover2.be",
              "phone": "475708122",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 50,
              "companyName": "Inovigate",
              "address": "Belgium",
              "email": "sarah.rey@inovigate.com",
              "phone": "474314375",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 51,
              "companyName": "PHARMACIST",
              "address": "United Arab Emirates",
              "email": "moncef.kessentini@biotechnica-pharma.com",
              "phone": "561650100",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 52,
              "companyName": "Self Employed",
              "address": "Switzerland",
              "email": "racquelc@icloud.com",
              "phone": "767371137",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 53,
              "companyName": "Malladi",
              "address": "India",
              "email": "balamurugan@malladi.co.in",
              "phone": "9003056434",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 54,
              "companyName": "PlumCare LLC",
              "address": "Singapore",
              "email": "matthew.aujla@plumcarehealth.com",
              "phone": "96266529",
              "websiteUrl": "",
              "userCount": 0
            },
            {
              "id": 55,
              "companyName": "MPL",
              "address": "United States",
              "email": "react231@gmail.com",
              "phone": "8642055932",
              "websiteUrl": "",
              "userCount": 0
            }
          
        // Continue adding the rest of the data in a similar format...
    ]);

    // async function fetchData(param) {
    //    try{
    //     const CompanyRealData = await fetch('http://ec2-54-198-171-80.compute-1.amazonaws.com/api/company',{
    //         method: 'GET',
    //     })
    //    }
    //    catch(error){
    //     companyData.value = defaultData.value; // Use default data on error
    //     alert(error)
    //    }
              
    // };

    
    async function fetchData() {
        try {
            const response = await fetch('http://ec2-54-198-171-80.compute-1.amazonaws.com/api/company',
                {method: 'get'});
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            companyData.value = data; // Set fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
            companyData.value = defaultData.value; // Use default data on error
        }
    }

    return { companyData, fetchData };
});