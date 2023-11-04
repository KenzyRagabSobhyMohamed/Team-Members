var div1=document.getElementById('Web')
var div2=document.getElementById('Electrical');
var div3=document.getElementById('Operation');
var div4=document.getElementById('LogisticsAndPlanning');
var div5=document.getElementById('Mechanical');
var div6=document.getElementById('Autonomous');
var display2=0;
function Show2(){
    if(display2==1)
    {
        div2.style.display='block';
        div1.style.display='none';
        div3.style.display='none';
        div4.style.display='none';
        div5.style.display='none';
        div6.style.display='none';
        display2=0;
    }
    else
    {
        div2.style.display='none';
        div1.style.display='none';
        div5.style.display='none';
        div6.style.display='none';
        div3.style.display='none';
        div4.style.display='none';
        display2=1;    
    }
}