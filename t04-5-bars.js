//const createBarChart = (data) => {
//const svg = d3.select(".responsive-svg-container")
    //.append("svg")
    //.attr("viewBox", "0 0 1200 400")
    //.style("border", "1px solid black");
// layout settings
//const leftMargin = 40; // space for labels later
//const topMargin = 20;
//const barHeight = 16;
//const barSpacing = 8; // space between bars

//svg
    //.selectAll("rect")
    //.data(data)
    //.join("rect")
    //.attr("class", d => `bar bar-${d.count}`)
    //.attr("x", leftMargin) // all bars start at same x (left margin)
    //.attr("y", (d, i) => topMargin + i * (barHeight + barSpacing))
    //.attr("width", d => d.count) // uses your numeric column directly
    //.attr("height", barHeight);
//};

const createBarChart = (data) => {
const viewW = 500, viewH = 1600;
const displayW = 640, displayH = 420;
const svg = d3.select(".responsive-svg-container")
.append("svg")
.attr("viewBox", `0 0 ${viewW} ${viewH}`)
.attr("width", displayW)
.attr("height", displayH)
.style("border", "1px solid black");
// X scale (numeric)
const xMax = d3.max(data, d => d.count);
const xScale = d3.scaleLinear()
.domain([0, xMax])
.range([0, viewW]);
// Y scale (categorical) — change 'brand' if your category column differs
const yScale = d3.scaleBand()
.domain(data.map(d => d.brand))
.range([0, viewH])
.paddingInner(0.2)
.paddingOuter(0.1);
// Bars
svg.selectAll("rect")
.data(data)
.join("rect")
.attr("class", d => `bar bar-${d.count}`)
.attr("x", 0)
.attr("y", d => yScale(d.brand))
.attr("width", d => xScale(d.count))
.attr("height", yScale.bandwidth())
.attr("fill", "steelblue");
};