//  4 Axes data
var data = [
    { "year": 2010, "loss": 4500 },
    { "year": 2011, "loss": 3000 },
    { "year": 2012, "loss": 5000 },
    { "year": 2013, "loss": 7500 },
    { "year": 2014, "loss": 6000 },
]

var spacing = 50, width = 500, height = 500;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "pink")
    .style("padding", spacing)


var xScale = d3.scaleLinear()
    .domain([d3.min(data, function (d) { return d.year }),
        d3.max(data, function (d) { return d.year })])
    .range([0, width-55])
var yScale = d3.scaleLinear()
    .domain([2500, 8000])
    .range([460, 0])

var xAxis = d3.axisBottom(xScale).ticks(5).tickFormat(function(d){return d})
var yAxis = d3.axisLeft(yScale).tickFormat(function(d){return d+" $"})

svg.append("g").attr("transform", `translate(38, ${height-20})`).call(xAxis)
svg.append("g").attr("transform", "translate(38, 20)").call(yAxis)

var rect = svg.selectAll("rect").data(data);
rect.enter().append("rect")
        .attr("width", 30)
        .attr("height", function(d){return height - yScale(d.loss)})
        .attr("x", function(d){return xScale(d.year) - 15})
        .attr("y", function(d){return yScale(d.loss)})
        .style("fill", "indigo")
// -----------------------------------------------------------------------
// Axes based on User Input

// index.html

{/* <div>
<label for="x">Horizontal </label>
<select id="x" onchange="displayAxis()">
    <option value="select">Select</option>
    <option value="top">Top</option>
    <option value="bottom">Bottom</option>
</select>

<label for="y">Vertical </label>
<select id="y" onchange="displayAxis()">
    <option value="select">Select</option>
    <option value="left">Left</option>
    <option value="right">Right</option>
</select>
</div> */}

// var width = 500;
// var height = 500;

// var svg = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .style("background", "gray")
//     .style("padding", "40px")

// function displayAxis() {
//     var direction = document.getElementById(event.target.id).value;
//     d3.select("g").remove()
//     var scale = d3.scaleLinear()
//         .domain([0, 600])
//         .range([0, width])

//     var ourAxis = "";
//     var distance = 0;
//     if (direction === "select") {
//         d3.select("g").remove()
//     } else if (direction === "top") {
//         ourAxis = d3.axisTop(scale)
//     } else if (direction === "bottom") {
//         ourAxis = d3.axisBottom(scale)
//         distance = height
//     } else if (direction === "left") {
//         ourAxis = d3.axisLeft(scale)
//     } else if (direction === "right") {
//         ourAxis = d3.axisRight(scale)
//         distance = width
//     }

//     svg.append("g")
//         .attr("transform", function(){
//             if(direction === "top" || direction === "bottom") {
//                 return "translate(0," + distance + ")"
//             } else {
//                 return "translate(" + distance + ", 20)"
//             }
//         })
//         .call(ourAxis)
// }

// -----------------------------------------------------------------------
// Adding X and Y Axis

// var xScale = d3.scaleLinear()
//     .domain([0, 100])
//     .range([10, 480])

// // var yScale = d3.scaleLinear()
// //     .domain([0, 100])
// //     .range([480, 0])

// var xAxis = d3.axisBottom(xScale)
//     .ticks(5)
//     .tickValues([0, 10, 20, 50, 100])
//     .tickSizeOuter(15)
//     .tickSizeInner(5)
//     .tickFormat(function (d) { return d + "%" })
//     .tickPadding(10)
// // var yAxis = d3.axisLeft(yScale)

// var svg = d3.select("body").append("svg")
//     .attr("width", 500)
//     .attr("height", 500)
//     .style("background", "gray")
//     .style("padding", "20px")

// svg.append("g")
//     .attr("transform", "translate(0,460)")
//     .call(xAxis);
// // svg.append("g")
// //     .attr("transform", "translate(25,10)")
// //     .call(yAxis);
