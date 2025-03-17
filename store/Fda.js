import { defineStore } from "pinia"


export const useFdaStore = defineStore('fda', () => {
    const route = useRoute()
    const fdaData = ref([{
        id:1,
        name:"Aredia",
        subData:[{id:1,name:"aredia refrence"},{id:2,name:"aredia refrence"},{id:3,name:"aredia refrence"}]
    },
    {
        id:2,
        name:"Paracetamol ",
        subData:[{id:1,name:"Paracetamol refrence"},{id:2,name:"Paracetamol refrence"},{id:3,name:"Paracetamol refrence"}]
    },
    {
        id:3,
        name:"Advil",
        subData:[{id:1,name:"Advil refrence"},{id:2,name:"Advil refrence"},{id:3,name:"Advil refrence"}]
    }
    ])
    const fdaRealData = ref({})
    const name = ref('Eduardo')
    const selectedFdaData =ref(null)
    const getFdaData = computed(() =>  fdaRealData.value?.results)
    const getTitle = computed(() => getFdaData?.value?.map((fdaData) => {
        return { application_number: fdaData?.application_number, marketing_status: fdaData?.products[0]?.marketing_status, brand_name: fdaData?.products[0]?.brand_name, dosage_form: fdaData?.products[0]?.dosage_form, route: fdaData?.products[0]?.route}
    })
)
    async function  fetchFdaData(param) {
        // debugger
        const routePath =  route.fullPath.split('?')[1] 

        try {
            fdaRealData.value =  await $fetch(`https://api.fda.gov/drug/drugsfda.json?search=${routePath}&limit=10`, {
            method: 'GET',
          })    
        } catch (error) {
            alert(error)
        }
        
        console.log(param, "zzzzzzz", route.fullPath, routePath);
    }
  
    return { fdaData, selectedFdaData, name, fetchFdaData, fdaRealData, getFdaData, getTitle }
  })