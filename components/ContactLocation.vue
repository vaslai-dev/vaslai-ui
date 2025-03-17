<script setup>
const props = defineProps(["study"]);
</script>
<template>
    <div class="container w-[97%] my-3 mx-6 px-6 gap-5 border-4 border-white pb-10 shadow-lg hover:shadow-2xl" id="Contacts">
        <div class="max-w-4xl mt-16">

            <div class="">
                <h2 class="font-semibold text-primary text-3xl">Contacts and Locations</h2>
                <p class="  mt-2 text-gray-500">This section provides the contact details for those
                    conducting the study, and information on where this study is being conducted.
                </p>
            </div>


            <div class="grid md:grid-cols-1 gap-10 mt-10">


                <div class="flex gap-4 items-start"
                    v-for="location in props.study?.protocolSection?.contactsLocationsModule?.locations" :key="location">
                    <span class=" text-violet-600 bg-violet-500/10 p-3 rounded-full">
                        <svg class="h-3 w-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg></span>
                    <div>
                        <h3 class="font-semibold text-xl">{{ location?.country }}</h3>
                        <p class="mb-3 text-primary border-b-2">
                            <strong>{{location?.state}} Locations </strong>
                        </p>
                        <p class="mt-1 text-gray-500"> {{ `${location?.city}, ${location?.state}, ${location?.country},
                            ${location?.zip}` }}
                        <p>{{ location?.facility }}</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>