// let user=[{
//    "name":"Shiv",
//    "age":"20",
//    "roll":"12"

// },{

//     "name":"Shiv",
//     "age":"20",
//     "roll":"12"

// }]
// localStorage.setItem("name",JSON.stringify(user))
// console.log(JSON.parse(localStorage.getItem("name")))
//localStorage.getItem()
let cAll=document.getElementById("cAll")
let main=document.querySelector(".main");
let form=document.querySelector("form");

form.addEventListener("submit",(event)=>{
    let name=event.target.uname.value; 
    let email=event.target.email.value;
    let phone=event.target.phone.value;
    var checkStatus=0;
    let userData=JSON.parse(localStorage.getItem("userDetail")) ?? [];
    for(let v of userData){
        if(v.email==email||v.phone==phone){
           checkStatus=1;
           break;
        }
    }
    if(checkStatus){
    alert("already exist");
    }
    else{
    userData.push({
        'name':name,
        'email':email,
        'phone':phone
    })
    localStorage.setItem("userDetail",JSON.stringify(userData));
    event.target.reset();
    //console.log(userData);
  displayData();
    event.preventDefault();
}
})




let displayData=()=>{
     let userData=JSON.parse(localStorage.getItem("userDetail")) ?? [];
     
     //console.log(userData);
     let finalData='';      
     userData.forEach((element,i)=>{
         finalData+=`<div class="items">
         <span onclick="removeData(${i})">&times;</span>
         <h5>Name</h5>
         <div>${element.name}</div>
         <h5>Email</h5>
         <div>${element.email}</div>
         <h5>Phone</h5>
         <div>${element.phone}</div>
     </div>`
          

     });
    main.innerHTML=finalData;    
}
let removeData=(index)=>{
  let userData=JSON.parse(localStorage.getItem("userDetail")) ?? [];
  userData.splice(index,1);
  localStorage.setItem("userDetail",JSON.stringify(userData))
  displayData();

}
cAll.addEventListener("click",()=>{
    localStorage.clear("userDetail");
    displayData();
})
displayData();