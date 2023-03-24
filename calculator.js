function calculator(){
   let button = document.querySelectorAll(".btn");
   let screen = document.querySelector(".screen");
   let equalBtn = document.querySelector(".equal");
   let clearBtn = document.querySelector(".clear");

   button.forEach(function(button){
      button.addEventListener("click", function(event){
         let value = event.target.dataset.num;
         // console.log(value)
         screen.value += value;
      });
   });

   equalBtn.addEventListener("click", function(event){
      // screen.value = "Please enter a value";
      if(screen.value === ""){
         screen.value = "Please choose a number";
      }else{
         let data = eval(screen.value);
         screen.value = data;
        // console.log(data);
      }
   });

   clearBtn.addEventListener("click", function(event){
      screen.value = "";
   }) 
}
calculator();