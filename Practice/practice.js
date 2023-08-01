let c=document.getElementById("submit")
let result;
c.onclick=function(){
    let a=document.getElementById("sideA").value
    let b=document.getElementById("sideB").value
    a=Math.round(a)
    b=Math.round(b)
    result=Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
    document.getElementById("result").innerHTML="Ans:  Hypotenuse= "+result;
}