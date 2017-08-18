import template from "./pie.html"
import * as d3 from 'd3';

class pieDirective {
    /*@ngInject*/
    constructor($interval) {
        this.restrict = 'E';
        this.scope = {
            values: '=',
            title: '='
        }
        this.$interval = $interval;
    }
    link(scope, element, attrs) {

        scope.$watch('values', function(values) {
            if(values) {
                const n = 7;
                console.log('values from directive: ', values, scope.title);

                var width = 200,
                    height = 320,
                    radius = Math.min(width) / 2;
                var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

                var arc = d3.arc()
                    .outerRadius(radius - 10)
                    .innerRadius(0);

                var pie = d3.pie()
                    .sort(null)
                    .value(function(d) {
                        return d.sum;
                    });

                var svg = d3.select("pie").append("svg")
                    .attr("width", width)
                    .attr("height", height)
                    .append("g")
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


                    values.forEach(function(d) {
                        d.sum = +d.sum;
                    });

                    var g = svg.selectAll(".arc")
                        .data(pie(values))
                        .enter().append("g")
                        .attr("class", "arc");                        

                    g.append("path")
                        .attr("d", arc)
                        .style("fill", function(d) {
                            return color(d.data.title);
                        });

                    g.append("text")
                        .attr("transform", function(d) {
                            return "translate(" + arc.centroid(d) + ")";
                        })
                        .attr("dy", ".35em")
                        .style("text-anchor", "middle")
                        .text(function(d) {
                            return d.data.title;
                        });
                    g.append("text")
                        .attr("dy", ".35em")
                        .attr("y", -120)
                        .style("text-anchor", "middle")
                        .style("font-size", "24px")
                        .text(scope.title);
            }
        })
    }
}
export default pieDirective