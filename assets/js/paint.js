function configureListeners() {
    let images = document.querySelectorAll('img')

     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners      
        let imgnum = images[i]
        imgnum.addEventListener('mouseover', ()=> {
            imgnum.classList.add('dim')
            console.log(imgnum.id)
            let info = getProductInfo(imgnum.id)
            console.log(info)
            let colnam = document.querySelector('#color-name')
            colnam.textContent = info.c
            let pnam = document.querySelector('#color-price')
            pnam.textContent = info.p
        })
        imgnum.addEventListener('mouseout', ()=> {
            imgnum.classList.remove('dim')
        })
    } 
}


function getProductInfo(paintColor) {
    let price;
    let colorName;  
    switch (paintColor) {
        case 'pn1':           
            colorName = 'Lime Green'
            price =  '$14.99'   
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price  
            colorName = 'Medium Brown'
            price =  '$11.14'    
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            colorName = 'Royal Blue'
            price =  '$22.99'  
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price 
            colorName = 'Solid Red'
            price =  '$13.42'  
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price   
            colorName = 'Solid White'
            price =  '$21.98'  
            break; 
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price 
            colorName = 'Solid Black'
            price =  '$4.99'   
            break; 
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price  
            colorName = 'Solid Cyan'
            price =  '$8.22'       
            break; 
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price    
            colorName = 'Solid Purple'
            price =  '$11.99'      
            break;  
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            colorName = 'Solid Yellow'
            price =  '$14.99'  
            break;   
        default:             
    }
    return {p: price, c: colorName}

}
