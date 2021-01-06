// ----------------------------------------------------------------
// Pie Chart with legend

var width = 750, height = 500
var svg = d3.select("body").append("svg")
    .attr("width", width).attr("height", height)
    .style("background", "pink");

var colors = d3.scaleOrdinal(d3.schemeDark2);
var details = [
    { grade: "A+", number: 8 },
    { grade: "A", number: 21 },
    { grade: "B", number: 15 },
    { grade: "C", number: 20 },
    { grade: "D", number: 11 },
    { grade: "F", number: 6 }
];

var data = d3.pie().sort(null).value(function (d) { return d.number; })(details);
console.log(data);
var segments = d3.arc()
    .innerRadius(0)
    .outerRadius(200)
    .padAngle(.05)
    .padRadius(50);

var sections = svg.append("g")
    .attr("transform", "translate(250, 250)")
    .selectAll("path").data(data);

sections.enter()
    .append("path")
    .attr("d", segments)
    .attr("fill", function (d) { return colors(d.data.number); });

var content = d3.select("g").selectAll("text").data(data);
content.enter()
    .append("text")
    .classed("inside", true)
    .each(function (d) {
        var center = segments.centroid(d);
        d3.select(this).attr("x", center[0]).attr("y", center[1]).text(d.data.number);
    });

var legends = svg.append("g")
    .attr("transform", "translate(500, 100)")
    .selectAll(".legends")
    .data(data);

var legend = legends.enter()
    .append("g")
    // .classed("legends", true)
    .attr("transform", function (d, i) { return "translate(0," + (i + 1) * 30 + ")"; });

legend.append("rect")
    .attr("width", 20)
    .attr("height", 20)
    .attr("fill", function (d) { return colors(d.data.number); });

legend.append("text")
    .classed("label", true)
    .text(function (d) { return d.data.grade; })
    .attr("fill", function (d) { return colors(d.data.number); })
    .attr("x", 30)
    .attr("y", 20);


// ----------------------------------------------------------------
// Symbol Generator function.

// var width = 600, height = 500
// var svg = d3.select("body").append("svg")
//     .attr("width", width).attr("height", height)
//     .style("background", "pink");

// var stars = d3.symbol().type(d3.symbolStar).size(150)
// var positions = [[50, 180], [400, 250], [250, 400]];
// var items = svg.selectAll("path").data(positions)
// items.enter().append("path")
//     .attr("transform", function (d) {
//         return `translate(${d[0]},${d[1]})`
//     })
//     .attr("d", stars)
//     .style("fill", "deeppink")



// ----------------------------------------------------------------
// pie Generator function.

// var width = 700, height = 600, fullAngle = 2 * Math.PI;
// var svg = d3.select("body").append("svg")
//     .attr("width", width).attr("height", height)
//     .style("background", "pink");

// var items = [100, 300, 100, 300, 300];
// var data = d3.pie().sort(null)(items);

// console.log(data);

// var segments = d3.arc()
//     .innerRadius(20)
//     .outerRadius(125)
//     .padAngle(.05)
//     .padRadius(50);
// var sections = svg.append("g")
//     .attr("transform", "translate(300, 300)")
//     .selectAll("path")
//     .data(data);
// sections.enter().append("path")
//     .attr("d", segments)
//     .attr("fill", "gray");



// ----------------------------------------------------------------
// Arc Generator function. Part 1 - 3

// var width = 700, height = 600, fullAngle = 2 * Math.PI;
// var svg = d3.select("body")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .style("background", "pink");
// var data = [
//     { day: "Mon", startAngle: 0, endAngle: 1.5 },
//     { day: "Tue", startAngle: 1.5, endAngle: 3.4 },
//     { day: "Wed", startAngle: 3.4, endAngle: 4.2 },
//     { day: "Thu", startAngle: 4.2, endAngle: 5.9 },
//     { day: "Fr", startAngle: 5.9, endAngle: 6.28 }
// ];

// var segments = d3.arc()
//     .innerRadius(20)
//     .outerRadius(125)
//     .padAngle(0.05)
//     .padRadius(50)
//     .cornerRadius(5);

// var sections = svg.append("g")
//     .attr("transform", "translate(300, 300)")
//     .selectAll("path").data(data);

// sections.enter().append("path").attr("d", segments).attr("fill", "gray");

// var content = d3.select("g").selectAll("text").data(data)
// content.enter().append("text").each(function (d) {
//     var center = segments.centroid(d)
//     d3.select(this)
//         .attr("x", center[0])
//         .attr("y", center[1])
//         .attr("dx", "-10px")
//         .text(d.day)
// })

// ----------------------------------------------------------------
// Arc Generator function. Part 1

// var width = 700, height = 600, fullAngle =  Math.PI;
// var svg = d3.select("body").append("svg")
//     .attr("width", width).attr("height", height)
//     .style("background", "pink");
// var circle = d3.arc()
//     .innerRadius(90)
//     .outerRadius(130)
//     .startAngle(0)
//     .endAngle(6.14);

// var halfCircle = d3.arc()(
//     {
//         innerRadius: 90,
//         outerRadius: 100,
//         startAngle: 0,
//         endAngle: fullAngle / 2
//     });

// svg.append("g").attr("transform", "translate(200, 200)").append("path").attr("d", circle).attr("fill", "deeppink");

// svg.append("g").attr("transform", "translate(400, 200)").append("path").attr("d", halfCircle).attr("fill", "indigo");

// ----------------------------------------------------------------
// Stack Generator function
// var data = [{ desktops: 80, laptops: 210, printers: 50, monitors: 60 },
// { desktops: 130, laptops: 150, printers: 30, monitors: 40 },
// { desktops: 40, laptops: 200, printers: 45, monitors: 80 },
// { desktops: 70, laptops: 180, printers: 65, monitors: 70 },
// { desktops: 100, laptops: 160, printers: 70, monitors: 40 },
// { desktops: 90, laptops: 190, printers: 80, monitors: 60 }];

// var width = 600, height = 500;
// var svg = d3.select("body").append("svg")
//     .attr("width", width).attr("height", height)

// var stack = d3.stack().keys(["desktops", "laptops", "printers", "monitors"]).order(d3.stackOrderDescending);
// console.log(data);
// console.log(stack(data));

// var colors = ["indigo", "silver", "green", "purple"];

// var series = svg.selectAll("g").data(stack(data))
//     .enter().append("g")
//     .style("fill", function (d, i) { return colors[i]; });

// series.selectAll("rect").data(function (d) { return d; })
//     .enter().append("rect")
//     .attr("height", 25)
//     .attr("width", function (d) { return d[1] - d[0]; })
//     .attr("x", function (d) { return d[0]; })
//     .attr("y", function (d, i) { return i * 30; })

// ----------------------------------------------------------------
// Area Generator function
// // var points = [[0, 100], [130, 180], [260, 100], [390, 180], [520, 100]]
// var points = [
//     { x0: 40, y0: 230, x1: 40, y1: 230 },
//     { x0: 240, y0: 370, x1: 150, y1: 210 },
//     { x0: 440, y0: 110, x1: 210, y1: 270 },
//     { x0: 290, y0: 80, x1: 320, y1: 220 }
// ];
// var width = 500
// var height = 500
// var svg = d3.select("body")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .style("background", "pink")
//     .style("padding", 40)

// // var area = d3.area().y0(600);
// var area = d3.area()
//     .x0(function (d) { return d.x0 })
//     .x1(function (d) { return d.x1 })
//     .y0(function (d) { return d.y0 })
//     .y1(function (d) { return d.y1 })
//     // .curve(d3.curveBasis)
// svg.append("path").attr("d", area(points))


// ----------------------------------------------------------------
// Line Generator functions
// var points1 = [[0, 20], [100, 250], [260, 90], [450, 40], [320, 140]]
// var points2 = [
//     { x: 100, y: 100 },
//     { x: 130, y: 260 },
//     { x: 300, y: 460 },
//     { x: 500, y: 250 },
// ]
// var width = 600
// var height = 500
// var svg = d3.select("body")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .style("background", "pink")
//     .style("padding", 40)

// var xScale = d3.scaleLinear()
//     .domain([0, 500])
//     .range([0, width])

// var yScale = d3.scaleLinear()
//     .domain([0, 500])
//     .range([height, 0])

// var xAxis = d3.axisBottom(xScale);
// var yAxis = d3.axisLeft(yScale);

// svg.append("g").call(xAxis).attr("transform", `translate(0, ${height})`)
// svg.append("g").call(yAxis)

// var line1 = d3.line()
//     .x(function(d){return xScale(d[0])})
//     .y(function(d){return yScale(d[1])})
// var line2 = d3.line()
//     .x(function (d) { return xScale(d.x) })
//     .y(function (d) { return yScale(d.y) })

// svg.append("path")
//     .attr("class", "line")
//     .attr("d", line1(points1))
//     .style("stroke", "deeppink")
// svg.append("path")
//     .attr("class", "line")
//     .attr("d", line2(points2))
//     .style("stroke", "indigo")


// ----------------------------------------------------------------
// Line Generator
// // var points = [[0, 20], [100, 250], [260, 90], [450, 40], [320, 140]]
// // var points = [[100, 300], [250, 50], [400, 300], [100, 150], [400, 150], [100, 300]]
// var data = [
//     // { x: 100, y: 100 },
//     // { x: 130, y: 260 },
//     // { x: 300, y: 460 },
//     // { x: 500, y: 250 },
//     {point: 100},
//     {point: 150},
//     {point: 80},
//     {point: 220},
//     {point: 130},
// ]
// var width = 600
// var height = 500
// var svg = d3.select("body")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .style("background", "pink")

// // var line = d3.line();
// // svg.append("path")
// //     .attr("d", line(points))

// // var line = d3.line()
// //     .x(function (d) { return d.x })
// //     .y(function (d) { return d.y })
// // svg.append("path").attr("d", line(data))

// var line  = d3.line()
//     .x(function(d){ return d.point})
//     .y(function(d,i){return (i + 1)*50})
//     .curve(d3.curveCardinalClosed)

// svg.append("path").attr("d", line(data))    