const createBarChart = (data) => {
const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 1200 400")
    .style("border", "1px solid black");
// layout settings
const leftMargin = 40; // space for labels later
const topMargin = 20;
const barHeight = 16;
const barSpacing = 8; // space between bars

svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => `bar bar-${d.count}`)
    .attr("x", leftMargin) // all bars start at same x (left margin)
    .attr("y", (d, i) => topMargin + i * (barHeight + barSpacing))
    .attr("width", d => d.count) // uses your numeric column directly
    .attr("height", barHeight);
};