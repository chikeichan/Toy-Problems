/**
Input  : Capacity of container
         Sorted array of item [weight, values]
Output : highest values

For example:
knapsack(10,[[1,1],[2,2],[3,3],[10,100]]) =======> 100
knapsack(11,[[1,1],[2,3],[3,6],[4,10],[5,13]]) =======> 27

**/

//Dynamic Programming Solution
function knapsack(capacity,items){
  //Object to store optimal values of different capacity
  var best = {};
  var c = 1;

  //Find optimal value based on given capacity
  var recurse = function(cap){
    c++;
    //Base case
    if(cap <= 0 )  return 0;

    // Return Memo-ized
    if(best[cap])  return best[cap];

    //Iterate over items
    items.forEach(function(item){
      //Return if cap is negative after subtracting item weight
      if(cap - item[0] < 0) return;

      //Set value equal to item value + recurse(new capacity)
      var value = item[1] + recurse(cap-item[0]);

      //Ternary operation 
      //IF best[cap] doesn't exit, 
      //  set value
      //otherwise set greater of value OR best[cap]
      best[cap] = !best[cap] ? value : value > best[cap] ? value : best[cap];
    })

    return best[cap]
  };

  recurse(capacity);
  console.log(capacity + ' capacity without memo-ized: ' + c);
  return best[capacity]
};

// var things = [[1,1],[2,3],[3,5]];
// console.log(knapsack(5,things));

