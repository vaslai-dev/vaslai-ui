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
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 0,
                dataLabels: {
                    total: {
                        enabled: true,
                        style: {
                            fontSize: '13px',
                            fontWeight: 900
                        }
                    }
                }
            },
        },
        xaxis: {
            type: 'numbers',
            categories: ['Q1', 'Q2', 'Q3', 'Q4'],
        },
        legend: {
            position: 'bottom',
            top: '100',
            offsetY: 1,
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                strokeColor: '#fff',
                fillColors: undefined,
                radius: 12,
                customHTML: undefined,
                onClick: undefined,
                offsetX: 0,
                offsetY: 0
            },
        },
        fill: {
            opacity: 6
        }
        ,
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