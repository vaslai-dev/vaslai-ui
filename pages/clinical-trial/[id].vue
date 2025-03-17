<script setup>
definePageMeta({
    layout: 'details'
})
const route = useRoute()
const { data: study, pending, error, refresh } = await useFetch(`https://clinicaltrials.gov/api/v2/studies/${route.params.id}`)
</script>
<template>
    <div class="grid col-span-10">
        <StudyOverview :study="study" />
        <ContactLocation :study="study" />
        <ParticipationCriteria :study="study" />
        <StudyPlan :study="study" />
        <CollaboratorInvestigator :study="study" />
        <Publication :study="study" />
        <StudyRecord :study="study" />
    </div>
</template>