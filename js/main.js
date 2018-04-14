$('img:nth-child(1)').addClass('current')
$('img:nth-child(2)').addClass('enter')
$('img:nth-child(3)').addClass('enter')
$('img:nth-child(4)').addClass('enter')

let n = 1
setInterval(()=>{
  $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
    .one('transitionend', (e)=>{
    	console.log(1)
      $(e.currentTarget).removeClass('leave').addClass('enter')
    })
  $(`.images > img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
  n += 1
},2000)


function x(n){
  if(n>4){
    n = n%4
    if (n===0){
      n =4
    }
  } // n = 1 2 3 4
  return n
}

