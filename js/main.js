$('img:nth-child(1)').addClass('current')
$('img:nth-child(2)').addClass('enter')
$('img:nth-child(3)').addClass('enter')
$('img:nth-child(4)').addClass('enter')

let n = 1
let timerId = setInterval(()=>{
  $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
    .one('transitionend', (e)=>{
      $(e.currentTarget).removeClass('leave').addClass('enter')
    })
  $(`.images > img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
  n += 1
},2000)

document.addEventListener('visibilitychange', function(e) {
  if(document.hidden) {
    clearInterval(timerId)
  } else {
    timerId = setInterval(()=>{
      $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
        .one('transitionend', (e)=>{
          $(e.currentTarget).removeClass('leave').addClass('enter')
        })
      $(`.images > img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
      n += 1
    },2000)    
  }
} )

function x(n){
  if(n>4){
    n = n%4
    if (n===0){
      n =4
    }
  } // n = 1 2 3 4
  return n
}

