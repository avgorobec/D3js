// ---------------------------------------------------------------------------
// Tweening

function showNumbers()
{
    d3.select("#content").transition().duration(5000)
            .ease(d3.easeLinear)
            //.attr("value", 100)
            .attrTween("value", function(){
                var numbers = d3.interpolateRound(0, 100);
                return function(i){return numbers(i);};
            })
            .styleTween("font-size", function(){
                var size = d3.interpolateString("10px", "60px");
                return function(i){return size(i);};
            });
}


// ---------------------------------------------------------------------------
// transition Chaining

// var svg = d3.select("body").append("svg")
//     .attr("width", 600)
//     .attr("height", 500)
//     .style("background", "gray");
// var circle = svg.append("circle")
//     .attr("cx", 50).attr("cy", 50)
//     .attr("r", 40).style("fill", "pink");

// function methodChainig() {
//     d3.select("circle")
//     .transition().duration(2000)
//     .attr("cx", 500).attr("cy", 400)
//     .transition().duration(2000)
//     .attr("r", 80).style("fill", "deeppink")
//     .transition().duration(2000)
//     .attr("cx", 50).attr("cy", 50)
//     .attr("r", 40).style("fill", "pink");
// }
// methodChainig()
// setInterval(() => {
//     methodChainig() 
// }, 6000);



// ---------------------------------------------------------------------------
// Animated BarChart

// function animateChart() {
//     var numbers = [31, 25, 35, 18, 9, 14];
//     var bars = d3.select("body").selectAll("div").data(numbers);
//     bars.enter().append("div")
//         .style("width", "5px").style("opacity", 0)
//         .transition()
//         .delay(function (d, i) { return i * 2000; })
//         .duration(2000)
//         .style("width", function (d) { return (d * 10) + "px"; })
//         .style("opacity", 1)
//         .text(function (d) { return d; })
// }



// ---------------------------------------------------------------------------
// Control speed of animation

// var data = [d3.easeCubic, d3.easePolyIn, d3.easeQuad, d3.easeBack, d3.easeBounce]
// var colors = d3.scaleOrdinal(d3.schemeDark2)

// boxes = d3.selectAll("div").data(data)
// boxes.enter()
//     .append("div")
//     .style("background-color", function (d, i) { return colors(i) })
//     .style("top", function (d, i) { return (i + 0.3) * 120 + "px" })

// function moveBoxes() {
//     d3.selectAll("div")
//         .each(function (d) {
//             console.log(this);
//             d3.select(this)
//                 .transition()
//                 .duration(3000)
//                 .ease(d)
//                 .style("left", "500px")
//         })
// }