function deleteB(){
    let butons = document.querySelectorAll(".delete");
    for(let i = 0; i < butons.length; i++){
        butons[i].addEventListener("click", (event) =>{
            let name = butons[i].value;
            let del = document.getElementById(`${name}`);
            del.remove();            
        })
    }    
}
function checkB(){
    let butons = document.querySelectorAll(".check");
    for(let i = 0; i < butons.length; i++){
        butons[i].addEventListener("click", (event) =>{
            let name = butons[i].value;            
            let che = document.getElementById(`${name}`);
            console.log(che.class);
            if (che.classList.contains('line-through'))
                che.classList.remove('line-through')
            else
                che.classList.add('line-through')           
        })
    }    
}
function addDetection(){
    let productForm = document.querySelector('form');

    productForm.addEventListener( 'submit', ( event ) => {
        event.preventDefault();
        //let list = document.getElementsByClassName("results")[0];
        let list = document.querySelector("ul");
        let inp = document.querySelector("input");
        prod = inp.value
        console.log(list.innerHTML);
        if (prod != "")
        list.innerHTML = list.innerHTML/*.slice(0,-5)*/ + 
        `<li id="${prod}"> 
            <div class="product ">
                ${prod}
            </div>
            <button class="check" value="${prod}"> check </button>
            <button class="delete" value="${prod}"> delete </button>
         </li> 
        </ul>`;
        inp.value = "";
        checkB();
        deleteB();
        
    });
}
function init(){
    addDetection();
    //deleteB();
};

init();