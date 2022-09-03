alert('connected')
function validation  (){
   
  var detail1 =document.getElementById("put1").value;
  var detail2 =document.getElementById("put2").value;
var detail3 =document.getElementById("put3").value;
var detail4 =document.getElementById("put4").value;
  var paragraph= document.getElementById("paragraph");
  var paragraph2= document.getElementById("paragraph2");
var paragraph3= document.getElementById("paragraph3");
var paragraph4= document.getElementById("paragraph4");

  if( detail1.length < 1){
    paragraph.innerHTML ="Field cannot be empty"
  }else{
    paragraph.innerHTML="";
}
if( detail2.length < 1){
    paragraph2.innerHTML = "Field cannot be empty"
  }else{
    paragraph2.innerHTML="";
}
if( detail3.length <1){
    paragraph3.innerHTML ="Field cannot be empty";
  }else{
    paragraph3.innerHTML="";
}
if( detail4.length < 1 ){
    paragraph4.innerHTML ="Field cannot be empty";
  }else{
    paragraph4.innerHTML="",
    alert(`Welcome  ${detail4} Your Registration was done successfully, return to Home page to Login`);
}
}