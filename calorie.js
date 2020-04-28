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