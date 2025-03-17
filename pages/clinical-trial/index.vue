<script setup>
import { mapActions } from 'pinia';
// import * as XLSX from 'xlsx';
import * as XLSX from 'xlsx/xlsx.mjs';
import { useClinicalTrial } from '~/store/clinicalTrial';

const query = ref('')
const title = ref(undefined)
const clinicalStore = useClinicalTrial()
const {apiQueryData, getApiQuery} = storeToRefs(clinicalStore)


const { data: studies, pending, error, refresh } = await useFetch('https://clinicaltrials.gov/api/v2/studies',  {
 query:{'query.term':title, 'query.cond':undefined, 'query.locn': undefined, 'query.titles': undefined, 'query.intr': undefined,
  'query.outc': undefined, 'query.spons': undefined, 'query.lead': undefined, 'query.id': undefined, 'query.patient': undefined, 'aggFilters': apiQueryData }}

)
const mappingData = computed(() => {
    // console.log(studies); 
    return extractKeys(studies?.value.studies[0])
})
const count = ref(0)

const router = useRouter()
const headerData = computed(() => {
    const headData = {
        0: "Study Title",
        1: "Sponsor",
        2: "nct Id",
        // 3: "orgStudyIdInfo",
        // 5: "organization",
        // 7: "class",
        // 8: "briefTitle",
        // 9: "officialTitle",
        // 10: "acronym",
        // 11: "statusModule",
        // 12: "statusVerifiedDate",
        13: "Status",
        // 14: "expandedAccessInfo",
        // 15: "hasExpandedAccess",
        // 16: "startDateStruct",
        // 17: "date",
        // 18: "type",
        // 19: "primaryCompletionDateStruct",
        // 20: "date",
        // 21: "type",
        // 22: "completionDateStruct",
        // 23: "date",
        // 24: "type",
        // 25: "studyFirstSubmitDate",
        // 26: "studyFirstSubmitQcDate",
        // 27: "studyFirstPostDateStruct",
        // 28: "date",
        // 29: "type",
        // 30: "lastUpdateSubmitDate",
        // 31: "lastUpdatePostDateStr,uct",
        // 32: "date",
        // 33: "type",
        // 34: "sponsorCollaboratorsModule",
        // 35: "responsibleParty (type)",
        // 36: "type",
        // 37: "leadSponsor",
        // 38: "name",
        // 39: "class",
        55: "collaborators",
        // 41: "0",
        // 42: "name",
        // 43: "class",
        // 44: "1",
        // 45: "name",
        // 46: "class",
        // 47: "oversightModule",
        // 48: "oversightHasDmc",
        // 49: "isFdaRegulatedDrug",
        // 50: "isFdaRegulatedDevice",
        // 51: "descriptionModule",    Description Module
        // 52: "briefSummary",
        // 53: "detailedDescription",
        // 54: "conditionsModule",
        44: "conditions",// conditionsModule
        // 56: "0",
        // 57: "keywords",
        // 58: "0",
        // 59: "designModule",
        60: "study Type", //designModule
        61: "phases",
        // 62: "0",
        // 63: "designInfo",
        // 64: "allocation", //designInfo
        // 65: "interventionModel",
        // 66: "interventionModelDescription",
        // 67: "primaryPurpose",
        // 68: "maskingInfo",
        // 69: "masking", //maskingInfo
        // 70: "maskingDescription",
        // 71: "whoMasked",
        // 72: "0",
        // 73: "1",
        // 74: "enrollmentInfo",
        // 75: "enroll count", //enrollmentInfo
        // 76: "type",
        // 77: "armsInterventionsModule",
        // 78: "armGroups", //armsInterventionsModule
        // 79: "0",
        // 80: "armGroups label", //armsInterventionsModule
        // 81: "armGroups type",
        // 82: "armGroups description",
        // 83: "armGroups interventionNames",
        // 84: "0",
        // 85: "1",
        // 86: "label",
        // 87: "type",
        // 88: "description",
        // 89: "interventionNames",
        // 90: "0",
        // 91: "intervention type",
        // 92: "0",
        // 93: "type",
        // 94: "intervention name",
        // 95: "intervention description",
        // 96: "armGroupLabels",
        // 97: "0",
        // 98: "1",
        // 99: "type",
        // 100: "name",
        // 101: "description",
        // 102: "armGroupLabels",
        // 103: "0",
        // 104: "outcomesModule",
        // 105: "primaryOutcomes", //outcomesModule
        // 106: "0",
        // 107: "measure",
        // 108: "description",
        // 109: "timeFrame",
        // 110: "1",
        // 111: "measure",
        // 112: "description",
        // 113: "timeFrame",
        // 114: "secondaryOutcomes",
        // 115: "0",
        // 116: "measure",
        // 117: "description",
        // 118: "timeFrame",
        // 119: "1",
        // 120: "measure",
        // 121: "description",
        // 122: "timeFrame",
        // 123: "2",
        // 124: "measure",
        // 125: "description",
        // 126: "timeFrame",
        // 127: "3",
        // 128: "measure",
        // 129: "description",
        // 130: "timeFrame",
        // 131: "4",
        // 132: "measure",
        // 133: "description",
        // 134: "timeFrame",
        // 135: "5",
        // 136: "measure",
        // 137: "description",
        // 138: "timeFrame",
        // 139: "6",
        // 140: "measure",
        // 141: "description",
        // 142: "timeFrame",
        // 143: "7",
        // 144: "measure",
        // 145: "description",
        // 146: "timeFrame",
        // 147: "8",
        // 148: "measure",
        // 149: "description",
        // 150: "timeFrame",
        // 151: "eligibilityModule",
        // 152: "eligibilityCriteria",
        // 153: "healthyVolunteers",
        154: "sex",
        // 155: "minimumAge",
        // 156: "maximumAge",
        // 157: "stdAges",
        // 158: "0",
        // 159: "1",
        // 160: "contactsLocationsModule",
        // 161: "Contact overallOfficials",
        // 162: "0",
        // 163: "name",
        // 164: "affiliation",
        // 165: "role",
        // 166: "Contact locations",
        // 167: "0",
        // 168: "facility",
        // 169: "city",
        // 170: "state",
        // 171: "zip",
        // 172: "country",
        // 173: "geoPoint",
        // 174: "lat",
        // 175: "lon",
        // 176: "referencesModule",
        // 177: "references",
        // 178: "0",
        // 179: "pmid",
        // 180: "type",
        // 181: "citation",
        // 182: "1",
        // 183: "pmid",
        // 184: "type",
        // 185: "citation",
        // 186: "2",
        // 187: "pmid",
        // 188: "type",
        // 189: "citation",
        // 190: "3",
        // 191: "pmid",
        // 192: "type",
        // 193: "citation",
        // 194: "4",
        // 195: "pmid",
        // 196: "type",
        // 197: "citation",
        // 198: "5",
        // 199: "pmid",
        // 200: "type",
        // 201: "citation",
        // 202: "6",
        // 203: "type",
        // 204: "citation",
        // 205: "7",
        // 206: "type",
        // 207: "citation",
        // 208: "8",
        // 209: "pmid",
        // 210: "type",
        // 211: "citation",
        // 212: "9",
        // 213: "pmid",
        // 214: "type",
        // 215: "citation",
        // 216: "10",
        // 217: "pmid",
        // 218: "type",
        // 219: "citation",
        // 220: "11",
        // 221: "pmid",
        // 222: "type",
        // 223: "citation",
        // 224: "ipdSharingStatementModule",
        // 225: "ipdSharing",
        // 226: "description",
        // 227: "infoTypes",
        // 228: "0",
        // 229: "1",
        // 230: "2",
        // 231: "timeFrame",
        // 232: "accessCriteria",
        // 233: "url",
        // 234: "documentSection",
        // 235: "largeDocumentModule",
        // 236: "largeDocs",
        // 237: "0",
        // 238: "typeAbbrev",
        // 239: "hasProtocol",
        // 240: "hasSap",
        // 241: "hasIcf",
        // 242: "label",
        // 243: "date",
        // 244: "uploadDate",
        // 245: "filename",
        // 246: "size",
        // 247: "derivedSection",
        // 248: "miscInfoModule",
        // 249: "versionHolder",
        // 250: "conditionBrowseModule",
        // 251: "meshes",
        // 252: "0",
        // 253: "id",
        // 254: "term",
        // 255: "1",
        // 256: "id",
        // 257: "term",
        // 258: "ancestors",
        // 259: "0",
        // 260: "id",
        // 261: "term",
        // 262: "1",
        // 263: "id",
        // 264: "term",
        // 265: "browseLeaves",
        // 266: "0",
        // 267: "id",
        // 268: "name",
        // 269: "relevance",
        // 270: "1",
        // 271: "id",
        // 272: "name",
        // 273: "relevance",
        // 274: "2",
        // 275: "id",
        // 276: "name",
        // 277: "relevance",
        // 278: "3",
        // 279: "id",
        // 280: "name",
        // 281: "relevance",
        // 282: "4",
        // 283: "id",
        // 284: "name",
        // 285: "asFound",
        // 286: "relevance",
        // 287: "5",
        // 288: "id",
        // 289: "name",
        // 290: "asFound",
        // 291: "relevance",
        // 292: "6",
        // 293: "id",
        // 294: "name",
        // 295: "relevance",
        // 296: "browseBranches",
        // 297: "0",
        // 298: "abbrev",
        // 299: "name",
        // 300: "1",
        // 301: "abbrev",
        // 302: "name",
        // 303: "2",
        // 304: "abbrev",
        // 305: "name",
        // 306: "hasResults",
    }
    return Object.values(headData)
})
function downloadExcel() {
      let sheetData = studies.value?.studies?.map((study) => ({
          'Study Title': study?.protocolSection?.identificationModule?.briefTitle ,
          "Sponsor":  study?.protocolSection?.sponsorCollaboratorsModule?.leadSponsor?.name,
          "NctId": study?.protocolSection?.identificationModule?.nctId,
          'Status':  study?.protocolSection?.statusModule?.overallStatus,
          'Conditions': (study.protocolSection?.conditionsModule?.conditions)?.toString(),
          "Collaborators": (study?.protocolSection?.sponsorCollaboratorsModule?.collaborators?.map(colo => colo.name)?.toString()),
          "Study Type": study?.protocolSection?.designModule?.studyType,
          "Phases": study?.protocolSection?.designModule?.phases,
          "Sex":  study?.protocolSection?.eligibilityModule?.sex
        }));
        let workbook = XLSX.utils.book_new();
        let workbook_sheet = XLSX.utils.json_to_sheet(sheetData);
        XLSX.utils.book_append_sheet(workbook, workbook_sheet, "sheet", {
          level: 2,
        });
        XLSX.writeFile(
          workbook,
          `Clinical_trials_${new Date().toISOString().substr(0, 10)}.xlsx`
        );
    }
const extractKeys = (obj) => {
    let keys = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);
            if (typeof obj[key] === 'object') {
                const nestedKeys = extractKeys(obj[key]);
                keys = keys.concat(nestedKeys.map(nestedKey => `${key}.${nestedKey}`));
            }
        }
    }
    console.log(keys);
    return keys;
}

</script>
<template>
    <TitleHeader class="mx-10 my-2" v-model="title" :isSearch="true" :isDownload="true" :isFilter="true"  @downloadExcel="downloadExcel" >Clinical Trial  </TitleHeader>
    <div class="relative overflow-x-auto mx-8 rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-[#dce5f6] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-5 border-r-2" v-for="head in headerData">
                        {{ head }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b text-gray-700 dark:bg-gray-800 dark:border-gray-700 text-sm cursor-pointer" @click="() => {
                    navigateTo(`clinical-trial/${study.protocolSection.identificationModule.nctId}`)
                }" v-for="(study, index) in  studies?.studies" :key="index">
                    <!-- protocolSection.identificationModule  -->
                    <td class="px-6 py-4 border-r">
                        {{ study.protocolSection.identificationModule.briefTitle }}
                    </td>
                    <td class="px-6 py-4 border-r">
                        {{ study.protocolSection?.sponsorCollaboratorsModule?.leadSponsor?.name }}
                    </td>
                    <td class="px-6 py-4 border-r">
                        {{ study.protocolSection.identificationModule.nctId }}
                    </td>
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.identificationModule.orgStudyIdInfo.id }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.identificationModule.organization.fullName }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.identificationModule.organization.class }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.identificationModule.briefTitle }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.identificationModule.officialTitle }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.identificationModule.acronym }}
                    </td> -->
                    <!-- protocolSection.statusModule  -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.statusModule.statusVerifiedDate }}
                    </td> -->
                    <td class="px-6 py-4 border-r">
                        {{ study.protocolSection.statusModule.overallStatus }}
                    </td>
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.statusModule?.expandedAccessInfo?.hasExpandedAccess }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.statusModule.startDateStruct.date }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.statusModule.startDateStruct.type }}
                    </td>
                    <td class="px-6 py-4">
                        {{ study.protocolSection.statusModule.primaryCompletionDateStruct?.date }}
                    </td>
                    <td class="px-6 py-4">
                        {{ study.protocolSection.statusModule.primaryCompletionDateStruct?.type }}
                    </td>
                    <td class="px-6 py-4">
                        {{ study.protocolSection.statusModule.completionDateStruct?.date }}
                    </td>
                    <td class="px-6 py-4">
                        {{ study.protocolSection.statusModule.completionDateStruct?.type }}
                    </td>
                    <td class="px-6 py-4">
                        {{ study.protocolSection.statusModule.studyFirstSubmitDate }}
                    </td>
                    <td class="px-6 py-4">
                        {{ study.protocolSection.statusModule.studyFirstSubmitQcDate }}
                    </td>
                    <td class="px-6 py-4">
                        {{ study.protocolSection.statusModule.studyFirstPostDateStruct?.date }}
                    </td>
                    <td class="px-6 py-4">
                        {{ study.protocolSection.statusModule.studyFirstPostDateStruct?.type }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.statusModule.lastUpdateSubmitDate }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.statusModule.lastUpdatePostDateStruct?.date }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.statusModule.lastUpdatePostDateStruct?.type }}
                    </td> -->


                    <!-- protocolSection.sponsorCollaboratorsModule  -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.sponsorCollaboratorsModule?.responsibleParty?.type }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.sponsorCollaboratorsModule.responsibleParty.type }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.sponsorCollaboratorsModule.leadSponsor?.name }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.sponsorCollaboratorsModule.leadSponsor?.class }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        <li v-for=" collaborator in study.protocolSection.sponsorCollaboratorsModule?.collaborators">
                            {{ collaborator.name }}
                        </li>
                    </td> -->
                    <!-- protocolSection.oversightModule  -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.oversightModule?.oversightHasDmc }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.oversightModule?.isFdaRegulatedDrug }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.oversightModule?.isFdaRegulatedDevice }}
                    </td> -->

                    <!-- protocolSection.descriptionModule  -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.descriptionModule?.briefSummary }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.descriptionModule?.detailedDescription }}
                    </td> -->

                    <!-- protocolSection.conditionsModule  -->
                    <td class="px-6 py-4 border-r">
                        <li v-for="condition in study.protocolSection?.conditionsModule?.conditions">
                            {{ condition }}
                        </li>
                    </td>
                    <td class="px-6 py-4 border-r">
                        <li v-for=" collaborator in study.protocolSection?.sponsorCollaboratorsModule?.collaborators">
                            {{ collaborator.name }}
                        </li>
                    </td>
                    <!-- <td class="px-6 py-4">
                        <li v-for="keyword in  study.protocolSection.conditionsModule?.keywords">
                            {{ keyword }}
                        </li>

                    </td> -->
                    <!-- protocolSection.designModule  -->
                    <td class="px-6 py-4 border-r">
                        {{ study.protocolSection?.designModule?.studyType }}
                    </td>

                    <td class="px-6 py-4 border-r">
                        <li v-for="phase in study.protocolSection.designModule.phases">
                            {{ phase }}
                        </li>
                    </td>
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.designModule?.designInfo?.allocation }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.designModule.designInfo?.interventionModel }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.designModule.designInfo?.interventionModelDescription }}
                    </td>
                    <td class="px-6 py-4">
                        {{ study.protocolSection.designModule.designInfo?.primaryPurpose }}
                    </td>
                    <td class="px-6 py-4">
                        {{ study.protocolSection.designModule.designInfo?.maskingInfo?.masking }}
                    </td>
                    <td class="px-6 py-4">
                        <li v-for="mask in study.protocolSection.designModule?.designInfo?.maskingInfo?.whoMasked">
                            {{ mask }}
                        </li>
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection.designModule?.enrollmentInfo?.count }}
                    </td>
                    <td class="px-6 py-4">
                        {{ study.protocolSection.designModule?.enrollmentInfo?.type }}
                    </td> -->


                    <!-- protocolSection.armsInterventionsModule  -->
                    <!-- <td class="px-6 py-4">
                        <li v-for="armLabel in study.protocolSection?.armsInterventionsModule?.armGroups">
                            {{ armLabel.label }}
                        </li>
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        <li v-for="armType in study.protocolSection?.armsInterventionsModule?.armGroups">
                            {{ armType.type }}
                        </li>
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        <li v-for="armDescription in study.protocolSection?.armsInterventionsModule?.armGroups">
                            {{ armDescription.description }}
                        </li>
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        <span v-for="armDescription in study.protocolSection?.armsInterventionsModule?.armGroups">
                            <li v-for="interventionName in armDescription.interventionNames">
                                {{ interventionName }}
                            </li>
                        </span>
                    </td> -->

                    <!-- <td class="px-6 py-4">
                        <li v-for="interventionType in study.protocolSection?.armsInterventionsModule?.interventions">
                            {{ interventionType.type }}
                        </li>
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        <li v-for="interventionName in study.protocolSection?.armsInterventionsModule?.interventions">
                            {{ interventionName.name }}
                        </li>
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection?.armsInterventionsModule?.interventions?.description }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        <span v-for="armGroupLabels in study.protocolSection?.armsInterventionsModule?.interventions">
                            <li v-for=" armLabel in armGroupLabels.armGroupLabels ">
                                {{ armLabel }}
                            </li>
                        </span>
                    </td> -->
                    <!-- protocolSection.outcomesModule  -->
                    <!-- <td class="px-1 py-4">
                        <li v-for="primaryOutcome in study.protocolSection?.outcomesModule?.primaryOutcomes">
                            <div> <span style="font-weight: 500;">Measure:</span> {{ primaryOutcome?.measure }}</div>
                            <div> <span style="font-weight: 500;"> Time Frame: </span>{{ primaryOutcome?.timeFrame }}
                            </div>
                        </li>
                    </td> -->

                    <!-- <td class="px-1 py-4">
                        <li v-for="secondaryOutcome in study.protocolSection.outcomesModule?.secondaryOutcomes">
                            <div> <span style="font-weight: 500;">Measure:</span> {{ secondaryOutcome?.measure }}</div>
                            <div> <span style="font-weight: 500;"> Time Frame: </span>{{ secondaryOutcome?.timeFrame }}
                            </div>
                        </li>
                    </td> -->
                    <!-- protocolSection.eligibilityModule  -->
                    <td class="pl-5 py-4">
                        <!-- <div>
                            <span style="font-weight: 500;"> Healthy Volunteers:</span> {{
                            study.protocolSection.eligibilityModule.healthyVolunteers }}
                        </div> -->
                        {{
                        study.protocolSection.eligibilityModule.sex }}
                        <!-- <div>
                            <span style="font-weight: 500;"> Sex: </span>{{
                            study.protocolSection.eligibilityModule.sex }}
                        </div>
                        <div>
                            <span style="font-weight: 500;"> MinimumAge: </span>{{
                            study.protocolSection.eligibilityModule.minimumAge }}
                        </div>
                        <div>
                            <span style="font-weight: 500;"> MaximumAge: </span>{{
                            study.protocolSection.eligibilityModule.maximumAge }}
                        </div>
                        <div>
                            <span style="font-weight: 500;"> stdAges: </span>{{
                            study.protocolSection.eligibilityModule.stdAges }}
                        </div> -->
                    </td>
                    <!-- protocolSection.contactsLocationsModule  -->
                    <!-- <td class="px-6 py-4">
                        <div
                            v-for="overallOfficial in study.protocolSection?.contactsLocationsModule?.overallOfficials">
                            <span style="font-weight: 500;"> Name: </span>{{
                            overallOfficial?.name }}
                            <span style="font-weight: 500;"> Affiliation: </span>{{
                            overallOfficial?.affiliation }}
                            <span style="font-weight: 500;"> Role: </span>{{
                            overallOfficial?.role }}
                        </div>
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        <div v-for="location in study.protocolSection?.contactsLocationsModule?.locations">
                            <span style="font-weight: 500;"> Facility: </span>{{
                            location?.facility }}
                            <span style="font-weight: 500;"> City: </span>{{
                            location?.city }}
                            <span style="font-weight: 500;"> State: </span>{{
                            location?.state }}
                            <span style="font-weight: 500;"> Zip: </span>{{
                            location?.zip }}
                            <span style="font-weight: 500;"> country: </span>{{
                            location?.country }}
                            <span style="font-weight: 500;"> GeoPoint: </span>{{
                            location?.geoPoint?.lat + ", " + location?.geoPoint?.lon }}
                        </div>
                    </td> -->
                    <!-- protocolSection.referencesModule  -->
                    <!-- <td class="px-6 py-4">
                        <li v-for="reference in study.protocolSection?.referencesModule?.references">
                            <span style="font-weight: 500;"> pmid: </span>{{
                            reference?.pmid }}
                            <span style="font-weight: 500;"> type: </span>{{
                            reference?.type }}
                        </li>
                    </td> -->
                    <!-- protocolSection.ipdSharingStatementModule  -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection?.ipdSharingStatementModule?.ipdSharing }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection?.ipdSharingStatementModule?.infoTypes }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection?.ipdSharingStatementModule?.timeFrame }}
                    </td> -->
                    <!-- <td class="px-6 py-4">
                        {{ study.protocolSection?.ipdSharingStatementModule?.url }}
                    </td> -->

                    <!-- protocolSection.documentSection  -->
                    <!-- <td class="px-6 py-4">
                        <li v-for="largeDoc in study.documentSection?.largeDocumentModule?.largeDocs">
                            <div> <span style="font-weight: 500;"> typeAbbrev:</span> {{ largeDoc?.typeAbbrev }} </div>
                            <div> <span style="font-weight: 500;">hasProtocol:</span> {{ largeDoc?.hasProtocol }} </div>
                            <div> <span style="font-weight: 500;">hasSap:</span> {{ largeDoc?.hasSap }} </div>
                            <div> <span style="font-weight: 500;">hasIcf:</span> {{ largeDoc?.hasIcf }} </div>
                            <div> <span style="font-weight: 500;">label:</span> {{ largeDoc?.label }} </div>
                        </li>
                    </td> -->


                    <!-- Derived Section -->
                    <!-- <td class="px-6 py-4">
                        {{ study?.derivedSection?.miscInfoModule?.versionHolder }}
                    </td> -->
                    <!-- <td class="px-6 py-4 w-36">
                        <li v-for="mesh in study.derivedSection?.conditionBrowseModule?.meshes">
                            <div> <span style="font-weight: 500;"> Id:</span> {{ mesh.id }} </div>
                            <div> <span style="font-weight: 500;">Term:</span> {{ mesh.term }} </div>
                        </li>
                    </td> -->
                    <!-- Ancestors -->
                    <!-- <td class="px-6 py-4 w-36">
                        <li v-for="ancestor in study.derivedSection?.conditionBrowseModule?.ancestors">
                            <div> <span style="font-weight: 500;"> Id:</span> {{ ancestor.id }} </div>
                            <div> <span style="font-weight: 500;">Term:</span> {{ ancestor.term }} </div>
                        </li>
                    </td> -->
                    <!-- browseLeaves -->
                    <!-- <td class="px-6 py-4 w-36 h-6">
                        <li v-for="browseLeave in study.derivedSection?.conditionBrowseModule?.browseLeaves">
                            <div> <span style="font-weight: 500;"> Id:</span> {{ browseLeave.id }} </div>
                            <div> <span style="font-weight: 500;">Name:</span> {{ browseLeave.name }} </div>
                            <div> <span style="font-weight: 500;">relevance:</span> {{ browseLeave.relevance }} </div>
                            <div> <span style="font-weight: 500;">AsFound:</span> {{ browseLeave.asFound }} </div>

                        </li>
                    </td> -->
                    <!-- browseBranches -->
                    <!-- <td class="px-6 py-4 w-36">
                        <li v-for="browseBranche in study.derivedSection?.conditionBrowseModule?.browseBranches">
                            <div> <span style="font-weight: 500;"> Abbrev:</span> {{ browseBranche.abbrev }} </div>
                            <div> <span style="font-weight: 500;">Name:</span> {{ browseBranche.name }} </div>

                        </li>
                    </td> -->

                    <!-- <td class="px-6 py-4">
                        {{ study.hasResults }}
                    </td> -->

                </tr>


            </tbody>
        </table>
    </div>
</template>