import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserData = defineStore('userdata', () => {
    const UserData = ref([]);
    const defaultData = ref([
        
            {
              "id": "1",
              "first_name": "Guntard ",
              "last_name": "Gutmann",
              "email": "guntard.gutmann@gvb-gutmann.at",
              "phone_number": "6644641571",
              "company": {
                "id": 2,
                "companyName": "GVB",
                "address": "Austria",
                "email": "guntard.gutmann@gvb-gutmann.at",
                "phone": "6644641571",
                "websiteUrl": ""
              }
            },
            {
              "id": "2",
              "first_name": "Lucila",
              "last_name": "",
              "email": "Kargwoman@gmail.com",
              "phone_number": "620798096",
              "company": {
                "id": 3,
                "companyName": "Lk consulting",
                "address": "Spain",
                "email": "Kargwoman@gmail.com",
                "phone": "620798096",
                "websiteUrl": ""
              }
            },
            {
              "id": "3",
              "first_name": "Shiva ",
              "last_name": "Darvishi",
              "email": "sdarvishi@micellae.com",
              "phone_number": "4165562437",
              "company": {
                "id": 4,
                "companyName": "Micellae",
                "address": "Canada",
                "email": "sdarvishi@micellae.com",
                "phone": "4165562437",
                "websiteUrl": ""
              }
            },
            {
              "id": "4",
              "first_name": "Michael E",
              "last_name": " Blume",
              "email": "MIKE.BLUME@TREADSTONEHEALTHCARE.COM",
              "phone_number": "4258682777",
              "company": {
                "id": 5,
                "companyName": "Treadstone Healthcare, LLC",
                "address": "USA",
                "email": "MIKE.BLUME@TREADSTONEHEALTHCARE.COM",
                "phone": "4258682777",
                "websiteUrl": ""
              }
            },
            {
              "id": "5",
              "first_name": "Minsung ",
              "last_name": "Kim",
              "email": "kimm@corning.com",
              "phone_number": "1049216486",
              "company": {
                "id": 6,
                "companyName": "Corning Korea",
                "address": "South Korea",
                "email": "kimm@corning.com",
                "phone": "1049216486",
                "websiteUrl": ""
              }
            },
            {
              "id": "6",
              "first_name": "Nora",
              "last_name": "",
              "email": "elgoulli@yahoo.com",
              "phone_number": "2079350484",
              "company": {
                "id": 41,
                "companyName": "Private Individual",
                "address": "United States",
                "email": "petra.dorfsmann@gmail.com",
                "phone": "4245005006",
                "websiteUrl": ""
              }
            },
            {
              "id": "7",
              "first_name": "Graham D ",
              "last_name": "Smith",
              "email": "graham.smith@paneuro.ie",
              "phone_number": "874129234",
              "company": {
                "id": 7,
                "companyName": "PanEuro Technology Ventures",
                "address": "United Kingdom",
                "email": "graham.smith@paneuro.ie",
                "phone": "874129234",
                "websiteUrl": ""
              }
            },
            {
              "id": "8",
              "first_name": "Dr. Alexander ",
              "last_name": "Gebauer",
              "email": "agebauer@galimedix.com",
              "phone_number": "1736807126",
              "company": {
                "id": 8,
                "companyName": "Galimedix GmbH",
                "address": "Germany",
                "email": "agebauer@galimedix.com",
                "phone": "1736807126",
                "websiteUrl": ""
              }
            },
            {
              "id": "9",
              "first_name": "Vladislav ",
              "last_name": "Deigin",
              "email": "vdeigin@gmail.com",
              "phone_number": "4169173109",
              "company": {
                "id": 9,
                "companyName": "Manus Pharmaceuticals (Canada) Ltd.",
                "address": "Canada",
                "email": "vdeigin@gmail.com",
                "phone": "4169173109",
                "websiteUrl": ""
              }
            },
            {
              "id": "10",
              "first_name": "Peter O’",
              "last_name": "Carroll",
              "email": "peter@ampereadvisers.com",
              "phone_number": "7464081079",
              "company": {
                "id": 10,
                "companyName": "Ampere Advisers",
                "address": "Ireland",
                "email": "peter@ampereadvisers.com",
                "phone": "7464081079",
                "websiteUrl": ""
              }
            },
            {
              "id": "11",
              "first_name": "Michael ",
              "last_name": "Citron MD",
              "email": "mcitron@mac.com",
              "phone_number": "9196659807",
              "company": {
                "id": 11,
                "companyName": "FoundationMED",
                "address": "United States",
                "email": "mcitron@mac.com",
                "phone": "9196659807",
                "websiteUrl": ""
              }
            },
            {
              "id": "12",
              "first_name": "Georg ",
              "last_name": "Baier",
              "email": "georg2436@gmail.com",
              "phone_number": "1774781093",
              "company": {
                "id": 12,
                "companyName": "Dr-B-f-P Consulting",
                "address": "Italy",
                "email": "georg2436@gmail.com",
                "phone": "1774781093",
                "websiteUrl": ""
              }
            },
            {
              "id": "13",
              "first_name": "Matt ",
              "last_name": "Sagan",
              "email": "m@mateuszsagan.com",
              "phone_number": "692182583",
              "company": {
                "id": 13,
                "companyName": "Vaxican",
                "address": "Poland",
                "email": "m@mateuszsagan.com",
                "phone": "692182583",
                "websiteUrl": ""
              }
            },
            {
              "id": "14",
              "first_name": "Yannis ",
              "last_name": "Anagnostakis",
              "email": "administration@opusmateria.gr",
              "phone_number": "6944346443",
              "company": {
                "id": 14,
                "companyName": "Opus-Materia Ltd",
                "address": "Greece",
                "email": "administration@opusmateria.gr",
                "phone": "6944346443",
                "websiteUrl": ""
              }
            },
            {
              "id": "15",
              "first_name": "Godfrey ",
              "last_name": "Mwananshiku",
              "email": "gmwananshiku@gmail.com",
              "phone_number": "979935588",
              "company": {
                "id": 15,
                "companyName": "Renco associates",
                "address": "Zambia",
                "email": "gmwananshiku@gmail.com",
                "phone": "979935588",
                "websiteUrl": ""
              }
            },
            {
              "id": "16",
              "first_name": "Michael ",
              "last_name": "Sekar",
              "email": "msekar@jenetechinformatics.com",
              "phone_number": "4084800804",
              "company": {
                "id": 16,
                "companyName": "Jenetech Informatics",
                "address": "United States",
                "email": "msekar@jenetechinformatics.com",
                "phone": "4084800804",
                "websiteUrl": ""
              }
            },
            {
              "id": "17",
              "first_name": "Dennis ",
              "last_name": "Camilleri",
              "email": "dennis@jet-bio.com",
              "phone_number": "+44 7980 980047",
              "company": {
                "id": 17,
                "companyName": "Jetbio Ltd",
                "address": "UK",
                "email": "dennis@jet-bio.com",
                "phone": "+44 7980 980047",
                "websiteUrl": ""
              }
            },
            {
              "id": "18",
              "first_name": "Veeren ",
              "last_name": "Shetty",
              "email": "veeren.shetty@gmail.com",
              "phone_number": "+91 99008 14028",
              "company": {
                "id": 18,
                "companyName": "SAMSUNG Electronics",
                "address": "India",
                "email": "veeren.shetty@gmail.com",
                "phone": "+91 99008 14028",
                "websiteUrl": ""
              }
            },
            {
              "id": "19",
              "first_name": "Radames ",
              "last_name": "Binotto",
              "email": "radames.b@humanamedical.it",
              "phone_number": "3282364233",
              "company": {
                "id": 19,
                "companyName": "Humana medical",
                "address": "Italy",
                "email": "radames.b@humanamedical.it",
                "phone": "3282364233",
                "websiteUrl": ""
              }
            },
            {
              "id": "20",
              "first_name": "flora",
              "last_name": "",
              "email": "floraguarnotta@gmail.com",
              "phone_number": "782944219",
              "company": {
                "id": 20,
                "companyName": "Cellbricks",
                "address": "Germany",
                "email": "floraguarnotta@gmail.com",
                "phone": "782944219",
                "websiteUrl": ""
              }
            },
            {
              "id": "21",
              "first_name": "Priyatham",
              "last_name": "",
              "email": "priyatham.salimadugu@grunenthal.com",
              "phone_number": "",
              "company": {
                "id": 21,
                "companyName": "Grunenthal",
                "address": "Germany",
                "email": "priyatham.salimadugu@grunenthal.com",
                "phone": "",
                "websiteUrl": ""
              }
            },
            {
              "id": "22",
              "first_name": "Imane ",
              "last_name": "idrissi",
              "email": "Idrissimane79@gmail.com",
              "phone_number": "661256386",
              "company": {
                "id": 22,
                "companyName": "ARKOSANTE",
                "address": "Morocco",
                "email": "Idrissimane79@gmail.com",
                "phone": "661256386",
                "websiteUrl": ""
              }
            },
            {
              "id": "23",
              "first_name": "Guedj",
              "last_name": "",
              "email": "f.guedj@yahoo.fr",
              "phone_number": "+33 680117687",
              "company": {
                "id": 23,
                "companyName": "Hopital saint Joseph",
                "address": "France",
                "email": "f.guedj@yahoo.fr",
                "phone": "+33 680117687",
                "websiteUrl": ""
              }
            },
            {
              "id": "24",
              "first_name": "pradeep ",
              "last_name": "v",
              "email": "venkyprao@yahoo.com",
              "phone_number": "26593139",
              "company": {
                "id": 24,
                "companyName": "AIIMS, NEW DELHI",
                "address": "India",
                "email": "venkyprao@yahoo.com",
                "phone": "26593139",
                "websiteUrl": "Global Immunotherapy Drugs Market"
              }
            },
            {
              "id": "25",
              "first_name": "Juan ",
              "last_name": "Cruz",
              "email": "jccruz.28@gmail.com",
              "phone_number": "88136566",
              "company": {
                "id": 25,
                "companyName": "Multiequipos",
                "address": "Costa Rica",
                "email": "jccruz.28@gmail.com",
                "phone": "88136566",
                "websiteUrl": ""
              }
            },
            {
              "id": "26",
              "first_name": "jaya ",
              "last_name": "srivastava",
              "email": "drjayasrivastava@gmail.com",
              "phone_number": "67028858",
              "company": {
                "id": 26,
                "companyName": "Vitality center ltd",
                "address": "Hong Kong",
                "email": "drjayasrivastava@gmail.com",
                "phone": "67028858",
                "websiteUrl": ""
              }
            },
            {
              "id": "27",
              "first_name": "Scott ",
              "last_name": "Pollard",
              "email": "spollard@codyregionalhealth.org",
              "phone_number": "3078990585",
              "company": {
                "id": 27,
                "companyName": "Polymath Therapeutics",
                "address": "United States",
                "email": "spollard@codyregionalhealth.org",
                "phone": "3078990585",
                "websiteUrl": ""
              }
            },
            {
              "id": "28",
              "first_name": "Alex ",
              "last_name": "Ruterbories",
              "email": "alexr@medicalsolutions.com",
              "phone_number": "+1 7208925032",
              "company": {
                "id": 28,
                "companyName": "Medical Solutions",
                "address": "United States",
                "email": "alexr@medicalsolutions.com",
                "phone": "+1 7208925032",
                "websiteUrl": ""
              }
            },
            {
              "id": "29",
              "first_name": "Robert ",
              "last_name": "Ellis",
              "email": "robert.ellis@acelis.com",
              "phone_number": "+1 9254531928",
              "company": {
                "id": 29,
                "companyName": "Acelis Connected Health",
                "address": "United States",
                "email": "robert.ellis@acelis.com",
                "phone": "+1 9254531928",
                "websiteUrl": ""
              }
            },
            {
              "id": "30",
              "first_name": "Kristin ",
              "last_name": "Shih",
              "email": "k.shih@ifhafund.com",
              "phone_number": "+31 6295256929",
              "company": {
                "id": 30,
                "companyName": "BabyIMPULSE",
                "address": "Netherlands",
                "email": "k.shih@ifhafund.com",
                "phone": "+31 6295256929",
                "websiteUrl": ""
              }
            },
            {
              "id": "31",
              "first_name": "Sidi el ",
              "last_name": "Matribi",
              "email": "selmatribi@babyimpulse.ch",
              "phone_number": "+41 0798164040",
              "company": {
                "id": 31,
                "companyName": "Investment Funds for Health in Africa",
                "address": "Switzerland",
                "email": "selmatribi@babyimpulse.ch",
                "phone": "+41 0798164040",
                "websiteUrl": ""
              }
            },
            {
              "id": "32",
              "first_name": "Thomas ",
              "last_name": "Baier",
              "email": "tbaier@dewpointx.com",
              "phone_number": "17689481154",
              "company": {
                "id": 32,
                "companyName": "Dewpoint Therapeutics",
                "address": "Germany",
                "email": "tbaier@dewpointx.com",
                "phone": "17689481154",
                "websiteUrl": ""
              }
            },
            {
              "id": "33",
              "first_name": "GUARNOTTA",
              "last_name": "",
              "email": "v.guarnotta@quadrium.com",
              "phone_number": "641721890",
              "company": {
                "id": 33,
                "companyName": "Quadrium",
                "address": "France",
                "email": "v.guarnotta@quadrium.com",
                "phone": "641721890",
                "websiteUrl": ""
              }
            },
            {
              "id": "34",
              "first_name": "Myrna ",
              "last_name": "Francis",
              "email": "mfrancis1@sympatico.ca",
              "phone_number": "416-706-1120",
              "company": {
                "id": 34,
                "companyName": "Mfran Inc",
                "address": "Canada",
                "email": "mfrancis1@sympatico.ca",
                "phone": "416-706-1120",
                "websiteUrl": ""
              }
            },
            {
              "id": "35",
              "first_name": "Margaret ",
              "last_name": "Millar",
              "email": "mrmworld63@outlook.com",
              "phone_number": "250 268 0191",
              "company": {
                "id": 35,
                "companyName": "Alpha 1 Advocacy & Action",
                "address": "Canada",
                "email": "mrmworld63@outlook.com",
                "phone": "250 268 0191",
                "websiteUrl": ""
              }
            },
            {
              "id": "36",
              "first_name": "Ro ",
              "last_name": "Vis",
              "email": "dr_nishi@yahoo.com",
              "phone_number": "512233232",
              "company": {
                "id": 36,
                "companyName": "ILab",
                "address": "United States",
                "email": "dr_nishi@yahoo.com",
                "phone": "512233232",
                "websiteUrl": ""
              }
            },
            {
              "id": "37",
              "first_name": "Hans Christian ",
              "last_name": "Holländer",
              "email": "hcho@dtu.dk",
              "phone_number": "93511373",
              "company": {
                "id": 37,
                "companyName": "DTU Tech Transfer Office",
                "address": "Denmark",
                "email": "hcho@dtu.dk",
                "phone": "93511373",
                "websiteUrl": ""
              }
            },
            {
              "id": "38",
              "first_name": "Jøran Aulin-",
              "last_name": "Jansson",
              "email": "bethany.boutin@evernorth.com",
              "phone_number": "91332242",
              "company": {
                "id": 38,
                "companyName": "Sci Group AS",
                "address": "Norway",
                "email": "bethany.boutin@evernorth.com",
                "phone": "91332242",
                "websiteUrl": ""
              }
            },
            {
              "id": "39",
              "first_name": "bethany",
              "last_name": "",
              "email": "jj@sci-group.net",
              "phone_number": "8602266330",
              "company": {
                "id": 39,
                "companyName": "Evernorth",
                "address": "United States",
                "email": "jj@sci-group.net",
                "phone": "8602266330",
                "websiteUrl": ""
              }
            },
            {
              "id": "40",
              "first_name": "QIAN ",
              "last_name": "WANG",
              "email": "qian.wang@utsouthwestern.edu",
              "phone_number": "2146488925",
              "company": {
                "id": 40,
                "companyName": "UT Southwestern Medical Center at Dallas",
                "address": "United States",
                "email": "qian.wang@utsouthwestern.edu",
                "phone": "2146488925",
                "websiteUrl": ""
              }
            },
            {
              "id": "41",
              "first_name": "Petra ",
              "last_name": "Dorfsman",
              "email": "petra.dorfsmann@gmail.com",
              "phone_number": "4245005006",
              "company": {
                "id": 41,
                "companyName": "Private Individual",
                "address": "United States",
                "email": "petra.dorfsmann@gmail.com",
                "phone": "4245005006",
                "websiteUrl": ""
              }
            },
            {
              "id": "42",
              "first_name": "Dr. Martin",
              "last_name": "",
              "email": "martin.cepa@cepmar.eu",
              "phone_number": "903404094",
              "company": {
                "id": 42,
                "companyName": "CEPMAR Ltd.",
                "address": "Slovakia",
                "email": "martin.cepa@cepmar.eu",
                "phone": "903404094",
                "websiteUrl": ""
              }
            },
            {
              "id": "43",
              "first_name": "Heinrich ",
              "last_name": "Zimmermann",
              "email": "h@neuekommunikation.org",
              "phone_number": "1537374828",
              "company": {
                "id": 43,
                "companyName": "INK",
                "address": "Germany",
                "email": "h@neuekommunikation.org",
                "phone": "1537374828",
                "websiteUrl": ""
              }
            },
            {
              "id": "44",
              "first_name": "Hector ",
              "last_name": "Enriquez",
              "email": "hector.enriquez@life.com.ec",
              "phone_number": "999738320",
              "company": {
                "id": 44,
                "companyName": "Laboratorios LIFE",
                "address": "Ecuador",
                "email": "hector.enriquez@life.com.ec",
                "phone": "999738320",
                "websiteUrl": ""
              }
            },
            {
              "id": "45",
              "first_name": "Carl Simon Shelley, ",
              "last_name": "DPhil",
              "email": "leukemia.therapeutics@yahoo.com",
              "phone_number": "617-378-5476",
              "company": {
                "id": 45,
                "companyName": "Leukemia Therapeutics, LLC",
                "address": "United States",
                "email": "leukemia.therapeutics@yahoo.com",
                "phone": "617-378-5476",
                "websiteUrl": ""
              }
            },
            {
              "id": "46",
              "first_name": "Kenneth ",
              "last_name": "Bornstein",
              "email": "scooterocca@yahoo.com",
              "phone_number": "459739900",
              "company": {
                "id": 46,
                "companyName": "Investor",
                "address": "Australia",
                "email": "scooterocca@yahoo.com",
                "phone": "459739900",
                "websiteUrl": ""
              }
            },
            {
              "id": "47",
              "first_name": "Rubin ",
              "last_name": "Pillay",
              "email": "rpillay@uab.edu",
              "phone_number": "7248755060",
              "company": {
                "id": 47,
                "companyName": "Uab",
                "address": "United States",
                "email": "rpillay@uab.edu",
                "phone": "7248755060",
                "websiteUrl": ""
              }
            },
            {
              "id": "48",
              "first_name": "Zhiping ",
              "last_name": "Wang",
              "email": "zpwang@simtech.a-star.edu.sg",
              "phone_number": "65903197",
              "company": {
                "id": 48,
                "companyName": "Singapore institute of Manufacturing Technology",
                "address": "Singapore",
                "email": "zpwang@simtech.a-star.edu.sg",
                "phone": "65903197",
                "websiteUrl": ""
              }
            },
            {
              "id": "49",
              "first_name": "Annie ",
              "last_name": "Vereecken",
              "email": "annie.vereeken@biover2.be",
              "phone_number": "475708122",
              "company": {
                "id": 49,
                "companyName": "Opdorp Finance BV",
                "address": "Belgium",
                "email": "annie.vereeken@biover2.be",
                "phone": "475708122",
                "websiteUrl": ""
              }
            },
            {
              "id": "50",
              "first_name": "Sarah ",
              "last_name": "Rey",
              "email": "sarah.rey@inovigate.com",
              "phone_number": "474314375",
              "company": {
                "id": 50,
                "companyName": "Inovigate",
                "address": "Belgium",
                "email": "sarah.rey@inovigate.com",
                "phone": "474314375",
                "websiteUrl": ""
              }
            },
            {
              "id": "51",
              "first_name": "Eline ",
              "last_name": "Kok",
              "email": "eline.kok@inovigate.com",
              "phone_number": "484885860",
              "company": {
                "id": 50,
                "companyName": "Inovigate",
                "address": "Belgium",
                "email": "sarah.rey@inovigate.com",
                "phone": "474314375",
                "websiteUrl": ""
              }
            },
            {
              "id": "52",
              "first_name": "MONCEF ",
              "last_name": "KESSENTINI",
              "email": "moncef.kessentini@biotechnica-pharma.com",
              "phone_number": "561650100",
              "company": {
                "id": 51,
                "companyName": "PHARMACIST",
                "address": "United Arab Emirates",
                "email": "moncef.kessentini@biotechnica-pharma.com",
                "phone": "561650100",
                "websiteUrl": ""
              }
            },
            {
              "id": "53",
              "first_name": "Racquel ",
              "last_name": "Cooper",
              "email": "racquelc@icloud.com",
              "phone_number": "767371137",
              "company": {
                "id": 52,
                "companyName": "Self Employed",
                "address": "Switzerland",
                "email": "racquelc@icloud.com",
                "phone": "767371137",
                "websiteUrl": ""
              }
            },
            {
              "id": "54",
              "first_name": "balamurugan",
              "last_name": "",
              "email": "balamurugan@malladi.co.in",
              "phone_number": "9003056434",
              "company": {
                "id": 53,
                "companyName": "Malladi",
                "address": "India",
                "email": "balamurugan@malladi.co.in",
                "phone": "9003056434",
                "websiteUrl": ""
              }
            },
            {
              "id": "55",
              "first_name": "Matthew ",
              "last_name": "Aujla",
              "email": "matthew.aujla@plumcarehealth.com",
              "phone_number": "96266529",
              "company": {
                "id": 54,
                "companyName": "PlumCare LLC",
                "address": "Singapore",
                "email": "matthew.aujla@plumcarehealth.com",
                "phone": "96266529",
                "websiteUrl": ""
              }
            },
            {
              "id": "56",
              "first_name": "MEGHAL ",
              "last_name": "PATEL",
              "email": "react231@gmail.com",
              "phone_number": "8642055932",
              "company": {
                "id": 55,
                "companyName": "MPL",
                "address": "United States",
                "email": "react231@gmail.com",
                "phone": "8642055932",
                "websiteUrl": ""
              }
            }
          
        
        
       
        // Continue adding the rest of the data in a similar format...
    ]);

    async function fetchData() {
        try {
            const response = await fetch('http://ec2-54-198-171-80.compute-1.amazonaws.com/api/users/',{method: 'get'});
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            UserData.value = data; // Set fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
            UserData.value = defaultData.value; // Use default data on error
        }
    }


    return { UserData, fetchData };
});
