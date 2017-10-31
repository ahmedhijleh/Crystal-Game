
                //variables
      var counter = 3;
      var wins = 0;
      var losses = 0;
      var sum=0;


       
$(".Start").on("click", function() {
         
      
      // functions and values realated

      function randomnumber() {
        return Math.floor(Math.random() * 101) + 19;   //value been used 
                }
           var randomsum=randomnumber();                

      function crystalvalue() {
        return Math.floor((Math.random()*11) + 1 ); 
                }
           var crystal1=crystalvalue();
           var crystal2=crystalvalue();   
           var crystal3=crystalvalue();      
             function win(){
              alert("You Won!!!!!!!");
              wins=wins++;
             }
             function lost(){
              alert("you lost!! Keep trying ....");
              losses=losses++;
             }
               function reset() {
              randomsum=0;
              sum=0;
              counter=3;
              crystal1=0;
              crystal2=0;
              crystal3=0;
            }
           

              
            $('#diamond1').on ('click', function() {

              if counter>0                 {
                 sum = sum + crystal1;
                  counter=counter-1;
                              

              if sum==randomsum  {
                        win();
                                }

                                                                                     
              else {
                lose();
                reset();
                   }
                                              } // this only if the counter is 0 so it will go to lose function  not if the sum is not equal to the random value 
                                                   }


            $('#diamond2').on ('click', function() {

              if counter>0                 {
                 sum = sum + crystal2;
                  counter=counter-1;
                              

              if sum==randomsum  {
                        win();
                                }

                                                                                     
              else {
                lose();
                reset();
                   }
                                              } // this only if the counter is 0 so it will go to lose function  not if the sum is not equal to the random value 
                                                   }

            $('#diamond3').on ('click', function() {

              if counter>0                 {
                 sum = sum + crystal3;
                  counter=counter-1;
                              

              if sum==randomsum  {
                        win();
                                }

                                                                                     
              else {
                lose();
                reset();
                   }
                                              } // this only if the counter is 0 so it will go to lose function  not if the sum is not equal to the random value 
                                                   }       




          }; 
        



         
    
  



