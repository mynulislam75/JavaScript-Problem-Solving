


// problem one;

//We know 40Seer=1mon.
//Using this concept this function will convert Seer into Moon,Where input will be Seer and output will be Mon.

//Solution:


function seerToMon(seer){

    //Finding the type of input parameter Seer,which will need in 23 line.
    const parameterIs=seer;
    const parameterTypeTest=typeof(parameterIs);
    
    //ERROR-1:
   /*  Seer or Mon value can't be negative.So,if any negative value of Seer is taken as input parameter this if condition will handle this error and give proper instructions */
    if(seer<0){
        const foundFirsterror="Negative value is not acceptable,please enter a positive value";
        return foundFirsterror;
    }
    
    //ERROR-2:
    /* If anyone give an input parameter like strings as Seer,this can't converte into Moon as Seer or Moon can be only number type.
    So this else if condition will handle this kinds of error and give proper instructions. */
    else if(parameterTypeTest!='number'){
        const foundSecondError="Only number type input will convert into Moon,so please check your input again and give a number type input";
        return foundSecondError;
    }

    //For any valid number as input parameter,perfect solution will return successfully.
    const moon=seer/40;
    return moon;
}
var finalConvertresult=seerToMon();
console.log(finalConvertresult)




//problem two
/* Have to calculate total sells in a day of a shop.Have to calculate three kinds of products total sell amount.Products and it's price are,One piece shirt price is 100tk,one piece pant price is 200tk,one piece shoe price is 500tk. */

//Solution:

//Declaration of totalSales named function includes three parameter named shirtQuantity,pantQuantity and shoeQuantity.
function totalSales(shirtQuantity,pantQuantity,shoeQuantity){


    /* One piece shirt price is 100tk,one piece pant price is 200tk,one piece shoe price is 500tk.For andavtage in later,here i've store every single price in a variable. */
    const singleShirtPrice=100;
    const singlePantPrice=200;
    const singleShoePrice=500;
    

    //FINDING ERROR:
   /*  If any user enter a negative quantity any of these three products,this will not acceptable,because products only sale as positive quantity.So handling this kinds of error this if/if else condition will work successfully. */
    
   //ERROR-1:
   //if user enter all products quantity as negative value,this if condition will find these kinds of error and give proper instructions.
    if((shirtQuantity<0)&&(pantQuantity<0)&&(shoeQuantity<0)){
        const allQuantityError="The given input shows that all quantity is negative,which isn't possible.Please enter a positive quantity of all products"
        return allQuantityError;
    }

    //ERROR-2:
    //if user enter shirt and pant quantity as negative value,this else if condition will find these kinds of error and give proper instructions.
    else if((shirtQuantity<0)&&(pantQuantity<0)){
        const ShirtAnsPantQuantityError="The given input shows that shirt and pant quantity in negative,which isn't possible.Please enter a positive quantity of these two products"
        return ShirtAnsPantQuantityError;
    }
    
    //ERROR-3:
    //if user enter shirt and shoe quantity as negative value,this else if condition will find these kinds of error and give proper instructions.
    else if((shirtQuantity<0)&&(shoeQuantity<0)){
        const ShirtAnsShoeQuantityError="The given input shows that shirt and shoe quantity in negative,which isn't possible.Please enter a positive quantity of these two products"
        return ShirtAnsShoeQuantityError;
    }

    //ERROR-4:
    //if user enter pant and shoe quantity as negative value,this else if condition will find these kinds of error and give proper instructions.
    else if((pantQuantity<0)&&(shoeQuantity<0)){
        const pantAnsShoeQuantityError="The given input shows that pant and shoe quantity in negative,which isn't possible.Please enter a positive quantity of these products"
        return pantAnsShoeQuantityError;
    }

    //ERROR-5:
    //if user enter shirt quantity as negative value,this else if condition will find these kinds of error and give proper instructions.
    else if(shirtQuantity<0){
        const shirtQuantityError="The given input shows that shirt quantity in negative,which isn't possible.Please enter a positive quantity of shirt"
        return shirtQuantityError;
    }

    //ERROR-6:
    //if user enter pant quantity as negative value,this else if condition will find these kinds of error and give proper instructions.
    else if(pantQuantity<0){
        const pantQuantityError="The given input shows that pant quantity in negative,which isn't possible.Please enter a positive quantity of pant"
        return pantQuantityError;
    }

    //ERROR-7:
    //if user enter shoe quantity as negative value,this else if condition will find these kinds of error and give proper instructions.
    else if(shoeQuantity<0){
        const shoeQuantityError="The given input shows that shoe quantity in negative,which isn't possible.Please enter a positive quantity of shoe"
        return shoeQuantityError;
    }


    //if user enter valid (positive) value as products quantity then from line 113 to 124 successfully calculate total sales and return it.
    
    //calculating all sells shirt prices
    const allShirtPrice=shirtQuantity*singleShirtPrice;

    //calculating all sells pant prices
    const allPantPrice=pantQuantity*singlePantPrice;

    //calculating all sells shoe prices
    const allShoePrice=shoeQuantity*singleShoePrice;
    
    //Now,calculating total sells
    const totalSalesPrice=allShirtPrice+allPantPrice+allShoePrice;
    return totalSalesPrice;
}
const sellsFinalResult=totalSales();
console.log(sellsFinalResult);




// problem three
/* Finding the total delivery cost for items.Where,less than 100 every items delivery cost is 100tk,from 101 to 200 every items delivery cost is 80 tk,and above 200 every items delivery cost is 50 tk. */

//Solution:

//Declare a function which name is deliveryCost and in it numbersOfItems named parameter taken
function deliveryCost(numbersOfItems){
    
    //Finding the type of function parameter,which will need later in 156 number line.
    const typeOfParameter=typeof(numbersOfItems);
   
    
    //ERROR-1:
    /* Number of Items should not be a negative value.But,if any negative value as input parameter then this if-condition will successfully detect it and give proper instructions. */
    if(numbersOfItems<0){
        const foundAnError="Number of items can't be negative.Please enter a positive value";
        return foundAnError;
    }


    //ERROR-2:
    /* 
    User's input parameter have to be 'number' type.Otherwise,without number type input this function can't work.But,if without number type parameter is taken this else-if condition will perfectly detect it,and give proper instruction. */
    else if(typeOfParameter!='number'){
        const foundAnErrorTwo="Numbers of items can be only number type.Please input a number type parameter";
        return foundAnErrorTwo;
    }


   /*  Less than 100,every items delivery cost is 100tk.From 101 to 200,every items delivery cost is 80 tk.Above 200,every items delivery cost is 50 tk.For later advantage each of this value is store in a variable here. */
    const lessHundredEachItemsCost=100;
    const hundredPlusUnderTwoHundedEachItemsCost=80;
    const twoHundredMoreEachItemsCosts=50;

    //If numbers of Items is not more than 100.
   if(numbersOfItems<=100){
       var totalDeliveryCost=numbersOfItems*lessHundredEachItemsCost;
       return totalDeliveryCost;
   }

   //If the numbers of Items is more than 100 but less than or equal 200.
   else if(numbersOfItems<=200 && numbersOfItems>100){
       //delivery cost for first 100 items.
       const costForHundredItems=lessHundredEachItemsCost*100;

       //100 more items remaining.
       var oneHundredMoreItems=numbersOfItems-100;

       //delivery cost for remaining 100 more items.
       var costForHundredMoreItems=oneHundredMoreItems*hundredPlusUnderTwoHundedEachItemsCost;

       //total delivery cost
       var totalDeliveryCost=costForHundredItems+costForHundredMoreItems;
       return totalDeliveryCost;

   }

   //If number of items in more than 200
   else if(numbersOfItems>200){
     //delivery cost first for 100 items.
     const costForHundredItems=lessHundredEachItemsCost*100;
    
     //delivery cost for 101 to 200 items.
    const costForHundredPlusToTwoHundredItems= hundredPlusUnderTwoHundedEachItemsCost*100;

    //200 more items remaining.
    var twoHundredMoreItems=numbersOfItems-200;

    //delivery cost for remaining 200 more items
    var costForTwoHundredMoreItems=twoHundredMoreItems*twoHundredMoreEachItemsCosts;
    
    //total delivery cost
    var totalDeliveryCost=costForHundredItems + costForHundredPlusToTwoHundredItems + costForTwoHundredMoreItems;
    return totalDeliveryCost;
   }
}
const deliveryResult=deliveryCost();
console.log(deliveryResult);



/* 
problem four
Declare an array which includes perfect friends name.From this array by using function five character named perfect friend will return.If five character named perfect friends belongs more than one in the array the function will return only the first name which it will detect. */

//Solution:

//declaring of an array which includes all perfect friends names.
var names=['Salman','Rafi','Mahmudul','Rahim','Shahinur','Turag','Shudipto','Sujon','Bappy','Raju']

//additional array for ERROR-2 testing
// var numbers=[1,3,4,5,7,6,5,4,3,2,4,4,5,6,,665,5,5,44,4,4]


//perfectFriend named function declaration which includes namesOfFriends parameter.
function perfectFriend(namesOfFriends){
    
    //We have to know parameter type in line 237.So here I've tested it for later advantage.
    const givenParameterIs= namesOfFriends;
    const typeOfParameterIs=typeof(givenParameterIs);

    //ERROR-1:
   /*  According to condition this function have to return 'string',and parameter input have to be an array.So,without array parameter this function will not work properly.If without array any types of things take as input parameter this 'if' condition will successfully detect it and give proper instructions */
   //For an example you can uncomment this variable given bellow and then take it as input parameter and test.
   // const numbers=5
    if(typeOfParameterIs!='object'){
        const findUnValidInput="According to condition this function parameter have to be an array,but you've enter others type.So,please correct your input."
        return findUnValidInput;
    }

      //ERROR-2:
    //According to condition the taken array have to contain names.If the taken array contains numbers in it's all element,this function can't give proper result.So,if an array contains numbers is taken as input parameter this following code will detect it and give proper instructions.
    //For an example you can uncomment 223 lined variable and then take it as input parameter and test.
    let sum=0;
    for(let i=0;i<namesOfFriends.length;i++){
        var singleNames=namesOfFriends[i]
        sum=singleNames+sum;
    }
    var typeOfTakenArray=typeof(sum)

        if(typeOfTakenArray=='number'){
            var findError="The taken array containes number in its all element.Please enter an array which contains names "
            return findError;
        }
    

    /* Here the name of outputName variable store emty element and which type is string.According to condition if any name containes five character then it has to return.So,for this case,this variable will store the name and as condition it'll return. */
       let outputName='';

    /*When input parameter is an array which store names,this for loop will start to run.This loop will run untill five character name will find out in if-condition(line 269),and after finding five character name in if-condition(line 269) this name will return from this function. */
    for(let i=0;i<namesOfFriends.length;i++){
        let singleNames=namesOfFriends[i]
        if(singleNames.length==5){
         outputName=singleNames;
         return outputName;
        }
    }
}
const finalResultOfNames=perfectFriend(); 
console.log(finalResultOfNames);