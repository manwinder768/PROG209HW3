document.addEventListener("DOMContentLoaded", function (event) {

    const myCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    }
    let calorie = {
            string: name,
            int: calories = 0,
           int: quantity = 0,
           isValid: function(){
               if( isNaN(this.calories) || isNaN(this.quantity) ){
                   return false;
               }
               else if (this.name == ""){
                   return false;
               }
               else{
                   return true;
               }
           },
               calculate :function(){
                    return this.calories * this.quantity;
               }
           };
    
    document.getElementById("calculate").addEventListener("click", function () {
        calorie.name = document.getElementById("name").value;
        calorie.calories = parseInt(document.getElementById("calories").value);
        calorie.quantity = parseInt(document.getElementById("quantity").value);
        
        if (!calorie.isValid()) {
            alert("Calories and quantity must be numeric and Name can't be left blank");
            const finalMsg = document.getElementById('finalMsg');
            finalMsg.textContent = "Sorry, Invalid Input Data";
        } else {
            document.getElementById("myUL");
            myCode.appendToList(myUL, calorie.name + ","+ calorie.calories + ","+ calorie.quantity);
            finalMsg.textContent = "You have consumed " + calorie.calculate() + " calories"; 
            document.getElementById("clear").focus(); 
        }
    });

document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("name").value = "";
    document.getElementById("calories").value = "";
    document.getElementById("quantity").value = "";
    
    document.getElementById("name").focus();
});
    document.getElementById("name").focus();
});