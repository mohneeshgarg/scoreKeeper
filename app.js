let s1 = document.getElementById('score1');
let s2 = document.getElementById('score2');
let b1 = document.getElementById('p1');
let b2 = document.getElementById('p2');
let res = document.getElementById('reset');
let cnt1 = 0;
let cnt2 = 0;
let max = document.getElementById('options');
let maxi = max.value;
max.addEventListener('change', function(){
  alert('You change the winning score so we will reset the game for you!!');
  res.click();
})
max.addEventListener('input', function(){
  maxi = max.value;
})
b1.addEventListener('click', function(){
  s1.innerText = ++cnt1;
  if(cnt1 > maxi){
    alert('Hurray ! Player 1 won the match!!');
    res.click();
    b1.disabled = true;
    b2.disabled = true;
    
  }
})
b2.addEventListener('click', function(){
  s2.innerText = ++cnt2;
  if(cnt2 > maxi){
    alert('Hurray ! Player 2 won the match!!');
    res.click();
    b1.disabled = true;
    b2.disabled = true;
  }
})
res.addEventListener('click', function(){
  s1.innerText = 0;
  s2.innerText = 0;
  cnt1 = 0, cnt2 = 0;
  b1.disabled = false;
    b2.disabled = false;
})