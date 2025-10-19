var randomQote =0;


function clickQote(){
    var Qote=[`“So many books, so little time.”
― Frank Zappa`,`“Be yourself; everyone else is already taken.”
― Oscar Wilde`,`“If you tell the truth, you don't have to remember anything.”
― Mark Twain`]



for(var i=0 ;i < Qote.length ; i++){
    
    if(i===randomQote){

        document.getElementById("quote").innerHTML = Qote[i]; 
    }
}

  randomQote++;

if (randomQote >= Qote.length) {
       randomQote  = 0; 
      }

}




