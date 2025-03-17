import { defineStore } from "pinia"


export const useClinicalTrial = defineStore('clinical', () => {
    const route = useRoute()
    const apiQueryData = ref('');

    const getApiQuery = computed(() => {
        return apiQueryData.value
    })

    async function  filterClinicalTrial(param) {
        const routePath =  route.fullPath.split('?')[1] 
        apiQueryData.value = route.query?.aggFilters
        console.log(param, "zzzzzzz", route.fullPath, routePath);
    }
  
    return { filterClinicalTrial, getApiQuery, apiQueryData }
  })