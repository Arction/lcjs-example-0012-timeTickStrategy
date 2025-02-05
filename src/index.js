/*
 * LightningChartJS example showcasing the TimeTickStrategy feature which is ideal for displaying timestamp data between couple days all the way down to microseconds level.
 */
// Import LightningChartJS
const lcjs = require('@lightningchart/lcjs')

const xydata = require('@lightningchart/xydata')

// Extract required parts from LightningChartJS.
const { lightningChart, AxisTickStrategies, emptyFill, Themes } = lcjs

// Import data-generators from 'xydata'-library.
const { createProgressiveTraceGenerator } = xydata

const chart = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        })
    .ChartXY({
        theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
    })
    .setTitle('TimeTickStrategy example')

const axisX = chart
    .getDefaultAxisX()
    // Enable TimeTickStrategy for X Axis.
    .setTickStrategy(AxisTickStrategies.Time)

const axisY = chart.getDefaultAxisY()

const series = chart
    .addPointLineAreaSeries({
        dataPattern: 'ProgressiveX',
    })
    .setAreaFillStyle(emptyFill)

const legend = chart
    .addLegendBox()
    .add(chart)
    // Dispose example UI elements automatically if they take too much space. This is to avoid bad UI on mobile / etc. devices.
    .setAutoDispose({
        type: 'max-width',
        maxWidth: 0.3,
    })

// Generate ~8 hours of data for line series.
const numberOfPoints = 100 * 1000
// TimeTickStrategy interprets values as milliseconds (UNIX timestamp).
const xInterval = 8 * 60 * 60 * 1000
createProgressiveTraceGenerator()
    .setNumberOfPoints(numberOfPoints)
    .generate()
    .toPromise()
    .then((data) => {
        data = data.map((p) => ({
            x: (p.x * xInterval) / numberOfPoints,
            y: p.y,
        }))
        series.add(data)
    })
