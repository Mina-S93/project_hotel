
//Modal

var img = document.querySelectorAll(".images");                              // get images
var modals = document.querySelector('.modal');                               // get empty invisible modal

for (var i = 0; i < img.length; i++) {                                       // looping through all images
    img[i].onclick = function(e) {                                           // onclick at certain image get it's source
       e.preventDefault();                                                    
    let source = e.target.src;                                               // store it in variable
    modals.style.display = 'block';                                          // display: block the modal
    modals.innerHTML = `<span class="close">&times;</span>                   
                        <img class="modal-content" src="${source}">`         // fill empty modal with HTML template
                                                                             // add stored source to img src
    
    var close = document.querySelector('.close');                            // get closing X
    close.onclick = function () {                                            // onclick at X close the modal
        modals.style.display = 'none';
    }
    }
   }



