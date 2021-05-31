studentarray=[];

function submit(){
 var displayarray=[]; 
 for(var i=1; i<=4; i++){
     var name=document.getElementById("Guest_"+i).value;
     studentarray.push(name);
     
 }
 
 for(var i=0; i<studentarray.length; i++){
     var namewithoutcommas=studentarray[i];
     displayarray.push("<h4> "+namewithoutcommas+"</h4>");
 }
 document.getElementById("display_name_with_commas").innerHTML=displayarray;
var removecommas=displayarray.join(" ");
document.getElementById("display_name_without_commas").innerHTML=removecommas;
}
function sort(){
    studentarray.sort();
    document.getElementById("sort").innerHTML=sort;
    }
