//inputting the date
let isValid=false; 
let searchDay=document.querySelector("#input-date")
let searchMonth=document.querySelector("#input-month")
let searchYear=document.querySelector("#input-year")
let submitButton=document.getElementById("search")
//outputting the day
let outputYear=document.querySelector(".output-year")
let outputMonth=document.querySelector(".output-month")
let outputDay=document.querySelector(".output-day")
//error
let errorDay=document.querySelector(".error-day")
let errorMonth=document.querySelector(".error-month")
let errorYear=document.querySelector(".error-year")

//submit

submitButton.addEventListener("click",calculateDate)
//cheking validity at the beginning

//day
searchDay.addEventListener("input", ()=>{
   if(+searchDay.value > 31 || +searchDay.value <1){
    errorDay.textContent="Enter a valid day"  
    isValid=false; 
    return;
   }
   else {
    isValid=true;
    errorDay.textContent=""
   }
   if(+searchDay.value==0){
    isValid=false;
    errorDay.textContent="this field is required"
    isValid=false
    return;

   }
   else{
    errorDay.textContent=""//reset
   }

})
//month
searchMonth.addEventListener("input", ()=>{
    if(+searchMonth.value > 12|| +searchDay.value <1){
     errorMonth.textContent="Enter a valid Month"  
     isValid=false; 
     return;
    }
    else {
     isValid=true;
     errorMonth.textContent=""
    }
    if(+searchDay.value==0){
     isValid=false;
     errorMonth.textContent="this field is required"
     isValid=false
     return;
 
    }
    else{
     errorMonth.textContent=""//reset
    }
 
 })
//year
searchYear.addEventListener("input", ()=>{
    if(+searchYear.value > new Date().getFullYear()){
     errorYear.textContent="Enter a valid Year" 
     isValid=false; 
     return;  
    }
    else {
        isValid=true;
        errorYear.textContent=""
       }
       if(+searchDay.value==0){
        isValid=false;
        errorYear.textContent="this field is required"
        isValid=false
        return;
    
       }
       else{
        errorYear.textContent=""//reset
       }
 })

// outputting values

 
function calculateDate(){
    if(isValid){
        let birthday=`${searchMonth.value}/${searchDay.value}/${searchYear.value}`
        let birthdayObj=new Date(birthday)//converting birthday input to day
        let ageDifferencemill=Date.now() - birthdayObj//get in milliseconds
        let ageDate=new Date(ageDifferencemill)//convert milliseconds to date
   
        let ageYears=ageDate.getFullYear()-1970;
        let ageMonth=ageDate.getMonth();
        let ageDay=ageDate.getDay() - 1;
   
        outputDay.textContent=ageDay;
        outputMonth.textContent=ageMonth;
        outputYear.textContent=ageYears;
    }
    else{
alert("error input correct data")
    }


}


