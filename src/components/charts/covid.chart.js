import { Bar } from "vue-chartjs";
import { Chart } from "chart.js";

Chart.defaults.global.defaultFontSize = 14;

export default {
    extends: Bar,
    props: ["type"],
    data() {
        return {
            options: {
                cutoutPercentage: 0,
                responsive: true,
                legend: {
                    display: false,
                    position: "bottom",
                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[0].data[tooltipItem.index];
                            if (parseInt(value) >= 1000) {
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            } else {
                                return value;
                            }
                        },
                    },
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            callback: function(value) {
                                if (parseInt(value) >= 1000) {
                                    return value
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                } else {
                                    return value;
                                }
                            },
                        },
                    }, ],
                },
            },
            chartdata: null,
            labeldata: null,
        };
    },
    async mounted() {
        await this.OnQuery();
        await this.renderChart({
                labels: this.labeldata,
                datasets: [{
                    data: this.chartdata,
                    backgroundColor: [
                        "#8e5ea2",
                        "#E53935",
                        "#3cba9f",
                        "#0288D1",
                        "#F4511E",
                        "#FF80AB",
                    ],
                    borderWidth: [0, 0, 0, 0, 0, 0],
                    hoverBackgroundColor: [
                        "#8e5ea2",
                        "#E53935",
                        "#3cba9f",
                        "#0288D1",
                        "#F4511E",
                        "#FF80AB",
                    ],
                }, ],
            },
            this.options
        );
    },
    methods: {
        async OnQuery() {
            try {
                let chartArr = [];
                let labelArr = [];
                let find_data = await this.$restApi.get("all");
                if (this.type == "all") {
                    chartArr.push(
                        find_data.active,
                        find_data.deaths,
                        find_data.recovered
                    );
                    labelArr.push("All Active", "All Deaths", "All Recovered");
                } else {
                    chartArr.push(
                        find_data.todayCases,
                        find_data.todayDeaths,
                        find_data.todayRecovered
                    );
                    labelArr.push("Today Cases", "Today Deaths", "Today Recovered");
                }
                this.chartdata = chartArr;
                this.labeldata = labelArr;
            } catch (error) {
                console.log(error);
            }
        },
    },
};