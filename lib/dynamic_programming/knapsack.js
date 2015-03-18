/**
Input  : Capacity of container
         Sorted array of item [weight, values]
Output : An array of quantity of items, optimized for total values

For example:
knapsack(10,[[1,1],[2,2],[3,3],[10,100]]) =======> [0,0,0,1]
knapsack(11,[[1,1],[2,3],[3,6],[4,10],[5,13]]) =======> [1,0,0,0,2]

**/

//Dynamic Programming Solution
function knapsack(capacity, items){
  var best = {};
  var c = 1;
  var answer = items.map(function(){return 0;});

  var recurse = function(cap,list){
    //Base Case
    if(cap <= 0) return [];
    if(best[cap]) return best[cap];

    //Find Max out of all items
    for(var i = 0; i<items.length; i++){
      //Return if cap is below zero
      if(cap-items[i][0] < 0) return [];

      //set currentValue p to value of item + recurse(rest of cap)
      var pi = items[i][1];
      var po = sumOfItems(recurse(cap-items[i][0],list),items);
      var p  = pi + po;

      //Best of Cap is not already memoized
      if(!best[cap]){
        list[i]++;
        best[cap] = list.slice();
        list[i]--;
      } 
      //Else if current value is greater than old best of cap
      else if (p > sumOfItems(best[cap],items)) {
        //Get best of cap of last memoized item
        var last = best[cap-items[i][0]]
        list[i]++;
        best[cap] = list.slice();
        //matrix add new array with memoized array
        if(last) best[cap] = best[cap].map(function(n,j){return n+last[j]});
        list[i]--;
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


// var things = [[1,1],[2,3],[3,6],[4,10],[5,13]];
// console.log(knapsack(11,things));
// console.log(knapsack(22,things));
// console.log(knapsack(33,things));
// console.log(knapsack(44,things));
// console.log(knapsack(55,things));
