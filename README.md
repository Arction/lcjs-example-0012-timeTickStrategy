# JavaScript Time Ticks Chart

![JavaScript Time Ticks Chart](timeTickStrategy-darkGold.png)

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

-   Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
-   Open the project folder in a terminal:

          npm install              # fetches dependencies
          npm start                # builds an application and starts the development server

-   The application is available at _http://localhost:8080_ in your browser, webpack-dev-server provides hot reload functionality.


## Description

Example that showcases the `TimeTickStrategy` feature.

`TimeTickStrategy` is one of the available options for _automatic axis tick placement and formatting_. It is designed for depicting milliseconds timestamp data with extremely high resolution and flexibility.

The effective range of `TimeTickStrategy` starts from maximum of 100 hours all the way down to individual milliseconds level.

For this entire range, the tick labels are formatted dynamically showing the currently relevant precision with all the required accuracy.

As can be seen from the simplicity of this examples source code, `TimeTickStrategy` is really straightforward to use, and does not require any gimmicks from the user.

```js
// TimeTickStrategy example usage.

// (1) Enable TimeTickStrategy for Axis.
chart.getDefaultAxisX().setTickStrategy(AxisTickStrategies.Time)

// (2) Push data where X is in milliseconds.
series.add([
    { x: 0, y: 0 }, // 00:00:00
    { x: 1000, y: 0 }, // 00:00:01
    { x: 2000, y: 0 }, // 00:00:02
    { x: 2001, y: 0 }, // 00:00:02.001
    { x: 2001.001, y: 0 }, // 00:00:02.001001
])
```

## What is the difference between Time ticks and DateTime ticks?

The effective Axis range; `TimeTickStrategy` is used for depicting high-resolution data within some days max., while `DateTimeStrategy` is used for depicting lower resolution data over the span of long times, like some months or even tens of years.


## API Links

* [LightningChart]
* [Automatic tick placement strategies]
* [Chart XY]
* [Axis XY]
* [Line Series XY]
* [Legend Box]


## Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [LightningChart][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact sales@lightningchart.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@lightningchart.com.

[0]: https://github.com/Arction/
[1]: https://lightningchart.com/lightningchart-js-api-documentation/
[2]: https://lightningchart.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://lightningchart.com/support-services/

© LightningChart Ltd 2009-2022. All rights reserved.


[LightningChart]: https://lightningchart.com/js-charts/api-documentation/v6.0.0/functions/lightningChart-1.html
[Automatic tick placement strategies]: https://lightningchart.com/js-charts/api-documentation/v6.0.0/variables/AxisTickStrategies.html
[Chart XY]: https://lightningchart.com/js-charts/api-documentation/v6.0.0/classes/ChartXY.html
[Axis XY]: https://lightningchart.com/js-charts/api-documentation/v6.0.0/classes/Axis.html
[Line Series XY]: https://lightningchart.com/js-charts/api-documentation/v6.0.0/classes/LineSeries.html
[Legend Box]: https://lightningchart.com/js-charts/api-documentation/v6.0.0/classes/Chart.html#addLegendBox

