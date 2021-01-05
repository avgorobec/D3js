//  Ordinal Scale 
var myData = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var linearScale = d3.scaleLinear()
                            .domain([0, 25])
                            .range([0,780]);
        var ordinalScale = d3.scaleOrdinal()
                            .domain(myData)
                            .range(["red", "green", "blue", "aqua", "orange", "indigo"]);
        
        var svg = d3.select("body").append("svg")
                    .attr("width", 800).attr("height", 50).style("background", "pink");
        var info = svg.selectAll("text").data(myData);
        info.enter().append("text")
            .attr("x", function(d,i){return linearScale(i)+5;})
            .attr("y",20)
            .text(function(d){return d;})
            .style("fill", function(d){return ordinalScale(d);})



//             QuantizeScale 
// var width = 500;
// var height = 200;
// var quantizeData = [1, 15, 26, 48, 51, 57, 63, 79, 82, 99]
// var quantileData = [100, 220, 2650, 39689, 51485, 576892, 633402, 7965320, 8269467, 99568235]
// var thresholdData = [2, 95, 125, 550, 6200, 9853, 13678, 645251, 5862303, 96587983]
// var outputRange = ["red", "green", "deeppink", "blue", "yellow"]

// var quantizeScale = d3.scaleQuantize()
//     .domain([0, 100])
//     .range(outputRange)

// var quantileScale = d3.scaleQuantile()
//     .domain(quantileData)
//     .range(outputRange)

// var thresholdScale = d3.scaleThreshold()
//     .domain([0, 10, 1000, 100000, 10000000])
//     .range(outputRange)

// var svg = d3.select('body')
//     .append('svg')
//     .attr('height', height)
//     .attr("width", width)
//     .style("background", "pink")

// var circle = svg.selectAll('circle');
// circle.data(quantizeData).enter().append("circle")
//     .attr("r", 20)
//     .attr("cx", function (d, i) { return (i + 1) * 45 })
//     .attr("cy", 40)
//     .style("fill", function (d) { return quantizeScale(d) })

// circle.data(quantileData).enter().append("circle")
//     .attr("r", 20)
//     .attr("cx", function (d, i) { return (i + 1) * 45 })
//     .attr("cy", 100)
//     .style("fill", function (d) { return quantileScale(d) })


// circle.data(thresholdScale).enter().append("circle")
//     .attr("r", 20)
//     .attr("cx", function (d, i) { return (i + 1) * 45 })
//     .attr("cy", 160)
//     .style("fill", function (d) { return thresholdScale(d) })

//              ScaleSequential + Interpolate

// var width = 800;
// var height = 400;
// var radius = 50;
// var myData = d3.range(0, 110, .5)
// var linearScale = d3.scaleLinear()
//     .domain([0, 100])
//     .range([30, width-200])

// var colorScale = d3.scaleSequential(d3.interpolatePlasma)
//     .domain([0,100])
//     // .interpolator(d3.interpolate('deeppink', "indigo"))

// var svg = d3.select('body')
//     .append('svg')
//     .attr('height', height)
//     .attr("width", width)
//     .style("background", "pink")

// var circle = svg.selectAll('circle').data(myData)
// circle.enter().append("circle")
//     .attr("r", radius)
//     .attr("cx", function (d) { return linearScale(d) + radius})
//     .attr("cy", 100)
//     .style("fill", function(d){ return colorScale(d)})



//              TimeScale

// var spacing = 80;
// var width = 700;
// var height = 600;
// var details = [
//     { "date": "2017-06-30", "tax": 20000 },
//     { "date": "2017-09-31", "tax": 10000 },
//     { "date": "2017-12-31", "tax": 30000 },
//     { "date": "2017-03-31", "tax": 15000 }]
// var startDate = d3.min(details, function (d) { return new Date(d.date) })
// var endDate = d3.max(details, function (d) { return new Date(d.date) })

// var timeScale = d3.scaleTime()
//     .domain([startDate, endDate])
//     .range([0, width-spacing])

// var yScale = d3.scaleLinear()
//     .domain([0, d3.max(details, function (d) { return new Date(d.tax) })])
//     .range([0, height])

// var svg = d3.select('body')
//     .append('svg')
//     .attr('height', height)
//     .attr("width", width)
//     .style("background", "pink")

// var rectangles = svg.selectAll('rect').data(details)
// rectangles.enter().append("rect")
//     .attr("x", function (d) { return 20 + timeScale(new Date(d.date)) })
//     .attr("y", function (d) { return height - 40 - yScale(d.tax) })
//     .attr("width", 25)
//     .attr("height", function(d){return yScale(d.tax)})
//     .style("fill", "green")

// var info = svg.selectAll("text").data(details);
// info.enter().append("text")
//     .attr("x", function(d){ return timeScale(new Date(d.date))})
//     .attr("y", function(d){ return height - 20})
//     .text(function(d){ return d.tax})
//     .style("stroke", "green")
