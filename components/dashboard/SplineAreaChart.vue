<script setup >
const chartOptions = computed(() => {
    const currentTheme = '#2f6a48'
    const variableTheme = '#9999bb'
    // const labelSuccessColor = `rgba(${hexToRgb(currentTheme.success)},0.2)`
    const headingColor = '#734854'

    const chartColors = {
        donut: [
            '#1e3a8a',
            '#0ea5e9',
            '#c36bbe',
            '#ffe4e6',
        ],
    }

    return {
        chart: {
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: [
                "2018-09-19T00:00:00.000Z",
                "2018-09-19T01:30:00.000Z",
                "2018-09-19T02:30:00.000Z",
                "2018-09-19T03:30:00.000Z",
                "2018-09-19T04:30:00.000Z",
                "2018-09-19T05:30:00.000Z",
                "2018-09-19T06:30:00.000Z"
            ]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    }
})

const series = ref([{
    name: 'PRODUCT A',
    data: [44, 55, 41, 67, 22, 43],
    color: '#4d3a96'

}, {
    name: 'PRODUCT B',
    data: [13, 23, 20, 8, 13, 27],
    color: '#c36bbe'
}, {
    name: 'PRODUCT C',
    data: [21, 7, 25, 13, 22, 8],
    color: '#1e3a8a'
}],);
//     //generate array of random numbers of length 10
//     const data = Array.from({ length: 10 }, () =>
//         Math.floor(Math.random() * 100)
//     );
//     options.value = {
//         ...options.value,
//         xaxis: {
//             categories: Array.from(
//                 { length: 10 },
//                 (_, i) => new Date().getFullYear() - i
//             ), // array of last 10 years
//         },
//     };
//     series.value = [
//         {
//             name: 'Score',
//             data: data,
//         },
//     ];
// };
// onMounted(() => {
//     //generate array of random numbers of length 10
//     updateChart();
// });
</script>

<template>
    <ClientOnly>
        <apexchart height="300" :options="chartOptions" :series="series"></apexchart>
    </ClientOnly>
</template>