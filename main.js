arrays=[]
function add(){
    var s1=document.getElementById("A1").value 
    var s2=document.getElementById("A2").value
    var s3=document.getElementById("A3").value
    var s4=document.getElementById("A4").value
    
    arrays.push(s1)
    arrays.push(s2)
    arrays.push(s3)
    arrays.push(s4)

    document.getElementById("mostrar").innerHTML=arrays
}
function org(){
    arrays.sort()
    document.getElementById("mostrar").innerHTML=arrays
}