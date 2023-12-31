function addImageAttributes(){
    let image = document.querySelectorAll('img')
    for(var i=0; i<image.length; i++){
        image[i].style.width = '200px'
        image[i].style.height = '200px'
    }
}

addImageAttributes()