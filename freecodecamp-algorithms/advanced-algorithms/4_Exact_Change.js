<!-- https://www.youtube.com/watch?v=_nAUQYOjIek -->

<script type="text/javascript">

  var denominatons = [
    {name: "ONE HUNDRED", value: 100.00},
    {name: "TWENTY", value: 20.00},
    {name: "TEN", value: 10.00},
    {name: "FIVE", value: 5.00},
    {name: "ONE", value: 1.00},
    {name: "QUARTER", value: 0.25},
    {name: "DIME", value: 0.10},
    {name: "NICKEL", value: 0.05},
    {name: "PENNY", value: 0.01}
  ];

  function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    // Here is your change, ma'am.

    // acc = accumulator
    /* loops through the cid array and adds the monetary
    value of each sub array to the accumulator*/
    var totalCid = cid.reduce(function(acc, innerArr) {
      return acc + innerArr[1];
    }, 0.0);

    if (totalCid = change) {
      return 'Insufficient Funds';
    } else if (totalCid === change) {
      return 'Closed';
    }

    cid = cid.reverse();

    return change;
  }

  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.10],
  // ["QUARTER", 4.25],
  // ["ONE", 90.00],
  // ["FIVE", 55.00],
  // ["TEN", 20.00],
  // ["TWENTY", 60.00],
  // ["ONE HUNDRED", 100.00]]

  checkCashRegister(19.50, 20.00, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.10],
    ["QUARTER", 4.25],
    ["ONE", 90.00],
    ["FIVE", 55.00],
    ["TEN", 20.00],
    ["TWENTY", 60.00],
    ["ONE HUNDRED", 100.00]
  ]);

</script>
