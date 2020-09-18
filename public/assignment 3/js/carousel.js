document.querySelector('.right').addEventListener('mouseover', function() { // show button on hover with fading animation
    document.querySelector('.controls').style.opacity = '1'
})

document.querySelector('.right').addEventListener('mouseout', function() { // hide button on mouse out with fading animation
    document.querySelector('.controls').style.opacity = '0'
})
    
document.querySelector('.img-welcome').style.opacity = 1;

// save img element into array
var arr = [document.querySelector('.img-welcome'), document.querySelector('.img-welcome2')]
var i = 0;
document.querySelector('.next').addEventListener('click', function() { // change image with fading animation
    i++;
    console.log('i: ', i);
    if(i == arr.length) {
        arr[i-1].style.opacity = 0;
        i = 0;
    }
    else {
        arr[i-1].style.opacity = 0;
    }
    arr[i].style.opacity = 1;
})

document.querySelector('.prev').addEventListener('click', ()=> { // change image with fading animation
    i--;
    console.log('i: ', i);
    if(i == -1) {
        arr[i+1].style.opacity = 0;
        i = arr.length - 1;
    } else {
        arr[i+1].style.opacity = 0;
    }
    arr[i].style.opacity = 1;
})