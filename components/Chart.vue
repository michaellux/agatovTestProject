<template>
  <div>
    <Chart type="bar" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import Chart from 'primevue/chart'

const props = defineProps({
  mode: String
})

onMounted(async () => {
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then(response => response.json())
    .then((data) => {
      const { data: bitcoin } = useFetch('/api/bitcoin', {
        method: 'post',
        body: data
      })
    }
    ).then(() => {
      chartData.value = setChartData(getChartData())
      // chartOptions.value = setChartOptions();
    })
})

const chartData = ref()
const chartOptions = ref()

const setChartData = (data) => {
  console.log(data)
  return {
    labels: ['USD', 'GBP', 'EUR'],
    datasets: [
      {
        label: ['Sales'],
        data: [data.USD, data.GBP, data.EUR],
        backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)'],
        borderWidth: 1
      }
    ]
  }
}
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--text-color')
  const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary')
  const surfaceBorder = documentStyle.getPropertyValue('--surface-border')

  return {
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      }
    }
  }
}

const getChartData = () => {
  if (props.mode === 'now') {
    return getNowData()
  }
  else if (props.mode === 'day') {
    return get
  }
}

const getNowData = () => {
  const { data: bitcoin } = useFetch('/api/bitcoin')
  console.log('bitcoin', bitcoin.value)
  return bitcoin.value
}

</script>

<style lang="scss" scoped>

</style>
