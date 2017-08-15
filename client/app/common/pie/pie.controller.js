import template from "./pie.html"
import * as d3 from 'd3';
var margin = 20,
    width = 960,
    height = 500 - .5 - margin,
    color = d3.interpolateRgb("#f77", "#77f");

class pieDirective {
    /*@ngInject*/
    constructor($interval) {
        //this.template = template;
        this.restrict = 'E';
        this.scope = {
            values: '='
        }
        this.$interval = $interval;
    }
    link(scope, element, attrs) {

        scope.$watch('values', function(values) {
            if(values) {
                console.log('values from directive: ', values);

                var width = 960,
                height = 500,
                radius = Math.min(width, height) / 2;

                var color = d3.scale.ordinal()
                    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

                var arc = d3.svg.arc()
                    .outerRadius(radius - 10)
                    .innerRadius(0);

                var pie = d3.layout.pie()
                    .sort(null)
                    .value(function(d) {
                        return d.population;
                    });

                var svg = d3.select("body").append("svg")
                    .attr("width", width)
                    .attr("height", height)
                    .append("g")
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");



                    values.forEach(function(d) {
                        d.population = +d.population;
                    });

                    var g = svg.selectAll(".arc")
                        .data(pie(values))
                        .enter().append("g")
                        .attr("class", "arc");

                    g.append("path")
                        .attr("d", arc)
                        .style("fill", function(d) { return color(d.data.age); });

                    g.append("text")
                        .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
                        .attr("dy", ".35em")
                        .style("text-anchor", "middle")
                        .text(function(d) { return d.data.age; });

            }
        })
    }
}
export default pieDirective