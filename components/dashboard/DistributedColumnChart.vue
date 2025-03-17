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
            parentHeightOffset: 0,
            type: 'bar',
            toolbar: { show: false },
        },

        plotOptions: {
            bar: {
                columnWidth: '32%',
                startingShape: 'square',
                borderRadius: 0,
                distributed: true,
                dataLabels: { position: 'top' },
            },
        },
        grid: {
            show: true,
            padding: {
                top: 0,
                bottom: 0,
                left: -10,
                right: -10,
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
        },
        colors: [
            ...chartColors.donut
        ],
        dataLabels: {
            enabled: true,
            formatter(val) {
                return `${val}k`
            },
            offsetY: -25,
            style: {
                fontSize: '15px',
                colors: [headingColor],
                fontWeight: '600',
                fontFamily: 'Public Sans',
            },
        },
        legend: { show: true },
        tooltip: { enabled: false },
        xaxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
            ],
            axisBorder: {
                show: true,
                color: headingColor,
            },
            axisTicks: { show: false },
            labels: {
                style: {
                    colors: headingColor,
                    fontSize: '14px',
                    fontFamily: 'Public Sans',
                },
            },
        },
        yaxis: {
            labels: {
                offsetX: -15,
                formatter(val) {
                    return `${parseInt(val / 1)}k`
                },
                style: {
                    fontSize: '14px',
                    colors: headingColor,
                    fontFamily: 'Public Sans',
                },
                min: 0,
                max: 60000,
                tickAmount: 6,
            },
        },
        responsive: [
            {
                breakpoint: 1441,
                options: { plotOptions: { bar: { columnWidth: '41%' } } },
            },
            {
                breakpoint: 590,
                options: {
                    plotOptions: { bar: { columnWidth: '61%' } },
                    yaxis: { labels: { show: false } },
                    grid: {
                        padding: {
                            right: 0,
                            left: -20,
                        },
                    },
                    dataLabels: {
                        style: {
                            fontSize: '12px',
                            fontWeight: '400',
                        },
                    },
                },
            },
        ],

    }
})

const series = ref([{
    data: [
        10,
        22,
        27,
        33,
        42,
        32,
    ],
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
