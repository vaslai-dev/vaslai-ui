<script setup>
definePageMeta({
    layout: 'daily-med-layout'
})
import { ref, onMounted } from "vue";
import Galleria from 'primevue/galleria';

const route = useRoute()
const setId = route.query?.id
const { data: mediaData, pending, error, refresh } = await useFetch(`https://dailymed.nlm.nih.gov/dailymed/services/v2/spls/${setId}/media.json`, {
    lazy: true,
})

const activeIndex = ref(0);
const responsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
]);
const displayCustom = ref(false);

const imageClick = (index) => {
    activeIndex.value = index;
    displayCustom.value = true;
};
</script>
<template>
    <div>
        <TitleHeader class="mx-10 my-2" :isSearch="false" :isDownload="false" :isFilter="false">{{ mediaData?.data?.title}}</TitleHeader>

    <div class="card flex justify-center">
        <!-- <Galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="mediaData?.data?.media" :responsiveOptions="responsiveOptions" :numVisible="7"
            containerStyle="max-width: 850px" :circular="false" :fullScreen="true" :showItemNavigators="true" :showThumbnails="true">
            <template #item="slotProps">
                <img :src="slotProps.item.url" :alt="slotProps.item.name" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.url" :alt="slotProps.item.name" style="display: block" />
            </template>
        </Galleria> -->
        <div v-if="mediaData" class="flex flex-wrap w-full" style="width: 900px;">
            <div v-for="(image, index) of mediaData?.data?.media" :key="index" class="w-100 p-3">
                <img :src="image.url" :alt="image.name" style="cursor: pointer" @click="imageClick(index)" />
            </div>
        </div>
    </div>
</div>
</template>


