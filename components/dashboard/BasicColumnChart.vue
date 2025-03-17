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
            '#64748b',
            '#9333ea',
        ],
    }

    return {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '60%',

            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May'],
        },
        // yaxis: {
        //     title: {
        //         text: '$ (thousands)'
        //     }
        // },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }

    }
})
// const options = ref({
//     chart: {
//         type: 'donut',
//     },
//     chartOptions: {
//         labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
//     },
//     plotOptions: {
//         bar: {
//             borderRadius: 10,
//             borderRadiusApplication: 'around',
//         },
//         pie: {
//             expandOnClick: false
//         }
//     },

// });
const series = ref([{
    name: 'Net Profit',
    data: [44, 55, 57, 56,],
    color: '#4d3a96'
}, {
    name: 'Revenue',
    data: [76, 85, 101, 98,],
    color: '#c36bbe'
}, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26,],
    color: '#1e3a8a'
}]);
// const updateChart = () => {
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
