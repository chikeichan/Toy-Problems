function knapsack(capacity, items){
  var best = {};
  var c = 1;
  var answer = items.map(function(){return 0;});

  var recurse = function(cap,list){
    if(cap <= 0) return [];
    if(best[cap]) {
      return best[cap];
    }
    for(var i = 0; i<items.length; i++){
      console.log(c++);
      if(cap-items[i][0] < 0) return [];
      var p = items[i][1] + sumOfItems(recurse(cap-items[i][0],list),items);

      if(!best[cap]){
        list[i]++;
        best[cap] = list.slice();
        list[i]--;
      } else {
        if ( p > sumOfItems(best[cap],items) ) {
          var old = best[cap-items[i][0]]
          list[i]++;
          best[cap] = list.slice();
          if(old){
            best[cap] = best[cap].map(function(n,j){return n+old[j]});
          }
          list[i]--;
        }
      }
    }
    return best[cap];
  }

  recurse(capacity, answer.slice());
  return best[capacity];

  function sumOfItems(list,items){
    if(list.length === 0) return 0;
    return list.reduce(function(a,b,i){return a+b*items[i][1]},0);
  }
}


// var things = [[1,1],[22,30],[43,50],[14,18],[25,35]];
// console.log(knapsack(2023,things));
