var svg         = d3.select('body').append('svg')
                    .attr('width','500px')
                    .attr('height','500px');

var coordinates1 = [[10,10],[20,20],[30,30]];
var coordinates2 = [[10,10],[50,125],[200,300], [450,400], [450, 10]];


function travelingSalesman(array){
  
}

render(svg,coordinates2);


///////////////////////////////////////////////////////////////////////////////
///////////////////////////      Visualization      ///////////////////////////
///////////////////////////////////////////////////////////////////////////////


function drawCircles(svg, coordinates){
  var dots = svg.selectAll('circle').data(coordinates);

  dots.enter().append('circle');

  dots.attr('cx',function(d){return d[0]})
      .attr('cy',function(d){return d[1]})
      .attr('r',4)
      .attr('fill','red');
}

function drawLines(svg, coordinates){
  var lines = 'M '+coordinates[0][0]+' '+coordinates[0][1];

  for(var i = 1; i < coordinates.length; i++){
    lines+=' L '+coordinates[i][0]+' '+coordinates[i][1]
  }

  svg.selectAll('path').remove();
  svg.append('path')
     .attr('d', lines)
     .attr('stroke-width',2)
     .attr('stroke','blue')
     .attr('fill','none');
}

function render(svg, coordinates){
  drawCircles(svg,coordinates);
  drawLines(svg, coordinates);
}