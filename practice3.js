//100万を預けたとき、お金が１年で５％増える。１０年後増えた総額を求める//

var before = 1000000;
var mul =1.06 ** 10;
var after = before * mul;
var answer = after - before;
document.write(answer);