var div1=document.getElementById('Web')
var div2=document.getElementById('Electrical');
var div3=document.getElementById('Operation');
var div4=document.getElementById('LogisticsAndPlanning');
var div5=document.getElementById('Mechanical');
var div6=document.getElementById('Autonomous');
var display4=0;
function Show4(){
    if(display4==1)
    {
        div4.style.display='block';
        div2.style.display='none';
        div3.style.display='none';
        div1.style.display='none';
        div5.style.display='none';
        div6.style.display='none';
        display4=0;
    }
    else
    {
        div4.style.display='none';
        div3.style.display='none';
        div5.style.display='none';
        div6.style.display='none';
        div2.style.display='none';
        div1.style.display='none';
        display4=1;    
    }
}