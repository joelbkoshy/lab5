var fullName = document.getElementById('Fname')
var email = document.getElementById('Email')
var phoneNo = document.getElementById('Phone')
var password = document.getElementById('Password')
var cpassword = document.getElementById('CPassword')
var span =document.getElementsByTagName('span')

fullName.oninput = function () {
   var num = /[0-9]/
   if (fullName.value.match(num)) {
       nameLen = fullName.value.length
       fullName.value = fullName.value.slice(0, nameLen - 1)
   }
}
email.oninput=function()
{
   const regex1=/^([a-z0-9\.-]+)@([a-z0-9]+)\.([a-z]{1,8})$/;
   const regex2= /^([a-z0-9\.-]+)@([a-z0-9]+)\.([a-z]{1,8})(.[a-z]{1,8})$/;
   if(regex1.test(email.value)||regex2.test(email.value))
   {
     span[0].innerText="Your Email is Valid";
     span[0].style.color="lime";  
   }
   else{
       span[0].innerText="Invalid Email Id";
       span[0].style.color="red";
   }}