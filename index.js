function Form(){
    let forms=document.getElementsByTagName("form")[0];
    forms.style.display="block"
   
    

}
var obj={
    name:"",
    email:"",
    password:"",
    cpassword:""
   
}
function fun(event){
    obj.name=event.target.value
    console.log(event.target.value);
    
}

function Email(event){
    obj.email=event.target.value
    console.log(event.target.value);
}
function Password(event){
    obj.password=event.target.value
    console.log(event.target.value);
}
function CPassword(event){
    obj.cpassword=event.target.value
    console.log(event.target.value);
}

function Submit(event) {
    const form=event.target;
    event.preventDefault();
    console.log(obj)
    form.reset();
}
function Rotate(){
    let btn=document.getElementsByClassName("card1")[0];
    btn.style.transform="rotateY(180deg)"
}
function Rotate_Opp() {
    let btn1=document.getElementsByClassName("card1")[0];
    btn1.style.transform="rotateY(360deg)"
}
function Rotate1(){
    let btn=document.getElementsByClassName("card2")[0];
    btn.style.transform="rotateY(180deg)"
}
function Rotate_Opp1() {
    let btn1=document.getElementsByClassName("card2")[0];
    btn1.style.transform="rotateY(360deg)"

}
function Rotate2(){
    let btn=document.getElementsByClassName("card3")[0];
    btn.style.transform="rotateY(180deg)"
}
function Rotate_Opp2() {
    let btn1=document.getElementsByClassName("card3")[0];
    btn1.style.transform="rotateY(360deg)"

}

