<script setup >
const chartOptions = computed(() => {
    const currentTheme = '#2f6a48'
    const variableTheme = '#9999bb'
    // const labelSuccessColor = `rgba(${hexToRgb(currentTheme.success)},0.2)`
    const headingColor = '#734854'

    const chartColors = {
        donut: {
            series1: '#1e3a8a',
            series2: '#0ea5e9',
            series3: '#c36bbe',
            series4: '#ffe4e6',
            series5: '#64748b',
            series6: '#9333ea',
        },
    }

    return {
        chart: {
            parentHeightOffset: 0,
            type: 'donut',
        },
        labels: [
            'Product 1',
            'Product 2',
            'Product 3',
            'Product 4',
            'Product 5',
            'Product 6'
        ],
        colors: [
            chartColors.donut.series1,
            chartColors.donut.series2,
            chartColors.donut.series3,
            chartColors.donut.series4,
            chartColors.donut.series5,
            chartColors.donut.series6,
        ],
        stroke: { width: 0 },
        dataLabels: {
            enabled: true,
            formatter(val) {
                return `${parseInt(val)}%`
            },
            style: {
                colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']
            }

        },
        legend: { show: false },
        tooltip: { theme: false },
        grid: {
            padding: {
                top: 15,
                right: -20,
                left: -20,
            },
        },
        states: { hover: { filter: { type: 'none' } } },
        plotOptions: {
            pie: {
                donut: {
                    size: '50%',
                    labels: {
                        show: true,
                        value: {
                            fontSize: '1.375rem',
                            fontFamily: 'Public Sans',
                            color: headingColor,
                            fontWeight: 700,
                            offsetY: -15,
                            formatter(val) {
                                return `${parseInt(val)}%`
                            },
                        },
                        name: {
                            offsetY: 20,
                            fontFamily: 'Public Sans',
                        },
                        total: {
                            show: true,
                            showAlways: false,
                            color: currentTheme.success,
                            fontSize: '.8125rem',
                            label: 'Total',
                            fontFamily: 'Public Sans',
                            formatter() {
                                return '184'
                            },
                        },
                    },
                },
            },
        },
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
const series = ref([44, 55, 41, 17, 10, 40]);
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
        <apexchart :options="chartOptions" :series="series"></apexchart>
    </ClientOnly>
</template>
