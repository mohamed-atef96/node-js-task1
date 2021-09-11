let add  = document.getElementById('add'),
    list = document.getElementById('list'),
    text = document.getElementById('text'),
    state = true;

    //  adding new element from inputs
add.addEventListener('click',function add(e){
    e.preventDefault();
    let value = text.value;
    if(!value){
       alert("Todo can't be Empty")
       return
    }
    creatElement(value);
    text.value="";
})

    //  adding new element from api
fetch('http://localhost:3000')
  .then(response => response.json())
  .then(data => {
      data = JSON.parse(data);
        data.forEach(element => {
            let value = element.title;
            creatElement(value);
        });
  });



    // creat Element function
function creatElement(value){
    let check   =  document.getElementsByClassName('check'),
        remove  =  document.getElementsByClassName('delete'),
        content =  `<div class="item">
                        <label class="container label">${value}
                            <Input type="checkbox" class="check"></Input>
                            <span class="checkmark"></span>
                            <span class="delete" >x</span>
                        </label>
                    </div>`
    list.innerHTML += content;
    let listLength = list.childNodes.length;
    if( listLength> 0){
    list.insertBefore(list.childNodes[listLength-1] , list.childNodes[0]);
    }
    // adding select for item
    for(let i =0 ; i < check.length ; i++){
        check[i].addEventListener('click',function(){
            this.parentElement.classList.toggle('complete')
        });
    }
    // removing an item
    for(let i =0 ; i < remove.length ; i++){
        remove[i].addEventListener('click',function(){
            this.parentElement.parentElement.remove();
        })
    }
}


    // for dark mode
mode.addEventListener('click',function(){
	chngImg();
    document.body.classList.toggle('dark');
    list.classList.toggle('dark');
    text.classList.toggle('dark');
    document.getElementById('back').classList.toggle("back-dark")
})


function chngImg(){
    let mode  = document.getElementById("mode"),
        light = "images/icon-moon.svg",
        dark  = "images/icon-sun.svg";
    if(state){
        mode.src = dark;
        state = false;
    }
    else{
      mode.src = light;
      state = true;
    }
  
}