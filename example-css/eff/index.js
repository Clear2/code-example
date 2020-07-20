typingMethod (str) {
    let arr = []
    for (let i =0; i < str.length; i++) {
      arr[i] = str[i]
    }
    let num = 0
    let timer = setInterval(() => {
      let el = document.getElementById('text')
      let span = document.createElement('span')
      span.innerText = arr[num]
      span.setAttribute('class', 'tip animated fadeInRight')
      el.append(span)
      num++
      if (num===arr.length){
        clearInterval(timer)
      }
      // $(typewriter.box).append('<span style="display: inline-block;" class="tip">' + arr[num] + '</span>');

    }, 200)
  }