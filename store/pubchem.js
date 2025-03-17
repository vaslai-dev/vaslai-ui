export const usePubChem = defineStore('pubChem', () => {
  const pubChemData = ref([])
  const referenceData = ref([])
  const sideBarData = ref([])
  const getSideBarData = computed(() => sideBarData.value || [])

  function fetchSideBarData(data) {
    referenceData.value = data?.Reference
    pubChemData.value = data
    sideBarData.value = data?.Section?.map((ele, index) => {
      const subData = ele?.Section?.map((ele, indexs) => {
        const level2SubData = ele?.Section?.map((ele, index2) => {
          return { index: index + 1 + '.' + (indexs + 1) + '.' + (index2 + 1), title: ele.TOCHeading }
        })

        return { index: index + 1 + '.' + (indexs + 1), title: ele.TOCHeading, subData: level2SubData||[] }
      })
      return { index: index + 1, title: ele.TOCHeading, subData }
    })
  }

  return { sideBarData, getSideBarData, fetchSideBarData, pubChemData, referenceData }
})