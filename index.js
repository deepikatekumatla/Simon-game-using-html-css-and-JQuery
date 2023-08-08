
var arr=["red","blue","green","yellow"];
var pattern=[];
var userr=[];
var j=1;
var userlevel=0;
$(document).keydown(function(event){
    if(event.key=="a")
    {  
       nextSequence();}}
    
);
function nextSequence(){
    $("h1").text("Level "+j);
    var x=Math.random();
    x=Math.floor(x*4);
    var y=arr[x];
    pattern.push(y);
    sound(y);
    shadowbutton(y);
}
$(".btn").click(function(){
    userlevel+=1;
    var op=$(this).attr('id');
    userr.push(op);
    sound(op);
    shadowbutton(op);
    userinput();
});
    
    
 
function arrayEquals() {
    if(pattern.length===userr.length)
    {
    return Array.isArray(pattern) &&
        Array.isArray(userr) &&
        pattern.every((val, index) => val === userr[index]);
    }
    else
    {
        if(pattern.length>userr.length)
        {
            for(var c=0;c<userr.length;c++)
            {
                if(pattern[c]!=userr[c])
              {
                    return "false";
             }
            }
            return "true";
        }
        else
        {
            for(var c=0;c<pattern.length;c++)
            {
                if(pattern[c]!=userr[c])
              {
                    return "false";
             }
            }
            return "true";
        }
    }
}

function userinput()
{

    
        var nxt=arrayEquals();
        if(nxt==="false")
        {
            sound("wrong");

            $("h1").text("Game Over,Press a Key To Restart"); 
                pattern=[];
                userr=[];
                  j=1;
                  userlevel=0;
        }
       if(nxt==true)
       {
        ++j;
        userr=[];
        userlevel=0;
        setTimeout(function () {
            nextSequence();
          }, 1000);
       }
      if(nxt==false)
         {
            sound("wrong");
                $("h1").text("Game Over,Press a Key To Restart"); 
                pattern=[];
                userr=[];
    
                  j=1;
                  userlevel=0;
        }
       

}
function sound(currentColor)
{
    var audio=new Audio("sounds/"+currentColor+".mp3");
    audio.play();
}
function shadowbutton(currentColor) {
    $("#"+currentColor).addClass("pressed");
    setTimeout(function () {
      $("#"+currentColor).removeClass("pressed");
    }, 100);
  }