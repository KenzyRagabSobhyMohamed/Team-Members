var div1=document.getElementById('Web')
var div2=document.getElementById('Electrical');
var div3=document.getElementById('Operation');
var div4=document.getElementById('LogisticsAndPlanning');
var div5=document.getElementById('Mechanical');
var div6=document.getElementById('Autonomous');
var display5=0;
function Show6(){
    if(display5==1)
    {
        div5.style.display='block';
        div2.style.display='none';
        div3.style.display='none';
        div4.style.display='none';
        div1.style.display='none';
        div6.style.display='none';
        display5=0;
    }
    else
    {
        div1.style.display='none';
        div2.style.display='none';
        div3.style.display='none';
        div4.style.display='none';
        div5.style.display='none';
        div6.style.display='none';
        display5=1;    
    }
}