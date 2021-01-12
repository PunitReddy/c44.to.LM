class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Start');
      this.title = createElement('h2');
      
      this.count = 0

    }
    hide(){
      
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }

    display(){
      this.title.html("Drivers Test");
      this.title.position(displayWidth/2 - 50, 100);

      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);

      this.button.mousePressed(()=>{
      //input.hide();
      //button.hide();

      console.log(candidateCount)
      candidateCount = candidateCount + 1
      candidate.updateCount(candidateCount)
      candidate.name = this.input.value()
      candidate.update()
      this.input.hide()
      this.button.hide()

      gameState = 1
      game.update(1)

      });
  
    }

    questions(){

      gameState = 2

      //SELECTED OPTIONS
      var s1, a1

      this.count = this.count + 1
      if(this.count === 1){

        //FIRST QUESTION
      var q1 = createElement('h3');
      q1.html("What is the minimum age for driving a motorcycle without gear?")
      q1.position(150, 150)
      var op1 = createRadio()
      op1.position(150, 200)
      op1.option("16 years")
      op1.option("18 years")
      op1.option("21 years")

      a1 = "16 years"
      
      }

      else if(this.count === 2){

        //SECOND QUESTION
      var q2 = createElement('h3');
      q2.html("What should you do when you see a traffic sign of a school nearby?")
      q2.position(150, 150)
      var op2 = createRadio()
      op2.position(150, 200)
      op2.option("Stop the vehicle")
      op2.option("Slow down and proceed carefully")
      op2.option("Press horn and proceed in the same speed")

      a2 = "Slow down and proceed carefully"

      }

      else if(this.count === 3){

        var q3 = createElement('h3');
     q3.html("Before you overtake a vehicle what should you keep in mind?")
     q3.position(150, 150)
     var op3 = createRadio()
     op3.position(150, 200)
     op3.option("The road ahead should be clearly visible and overtaking should be safe")
     op3.option("The road is not safe")
     op3.option("There are no vehicles ahead")
 
     a3 = "The road ahead should be clearly visible and overtaking should be safe"

      }

      else if(this.count === 4){

        var q4 = createElement('h3');
        q4.html("If a driver sees the sign for ‘slippery road ahead’, he/she must")
        q4.position(150, 150)
        var op4 = createRadio()
        op4.position(150, 200)
        op4.option("Drive faster")
        op4.option("Change gear and reduce speed")
        op4.option("Apply brake but proceed in the same speed")
    
        a4 = "Change gear and reduce speed"
   
      }

      else if(this.count === 5){

        var q5 = createElement('h3');
        q5.html("Overspeeding is...")
        q5.position(150, 150)
        var op5 = createRadio()
        op5.position(150, 200)
        op5.option("Not an offence and can be neglected")
        op5.option("Is an offence but no charges are pressed against you")
        op5.option("An offence that could lead to your driving licence being cancelled or suspended")
    
        a5 = "An offence that could lead to your driving licence being cancelled or suspended"
   
      }

      else if(this.count === 6){

        var q6 = createElement('h3');
        q6.html("In case you see a vehicle that has met with an accident with injured passengers inside, you should")
        q6.position(150, 150)
        var op6 = createRadio()
        op6.position(150, 200)
        op6.option("Stop your vehicle and report the matter to the nearest police station")
        op6.option("Take the vehicle to the closest police station and report the accident")
        op6.option("Take measures to secure medical attention to those injured and report the accident to the closest police station within a period of 24 hours")
    
        a6 = "Take measures to secure medical attention to those injured and report the accident to the closest police station within a period of 24 hours"
   
      }

      else if(this.count === 7){

        var q7 = createElement('h3');
        q7.html("The only vehicle which is allowed to drive at a speed of 60km/ hour is")
        q7.position(150, 150)
        var op7 = createRadio()
        op7.position(150, 200)
        op7.option("Motor car")
        op7.option("Heavy bus/trucks")
        op7.option("All of the above")
    
        a7 = "Motor car"
   
      }

      else if(this.count === 8){

        var q8 = createElement('h3');
        q8.html("Suppose you are driving on a road with two lanes. The vehicle to the front of you is driving slowly and the road ahead is clear and safe to overtake. What should you do?")
        q8.position(150, 150)
        var op8 = createRadio()
        op8.position(150, 200)
        op8.option("Overtake the vehicle from the left side of the vehicle ahead")
        op8.option("Overtake the vehicle from the right side of the vehicle ahead")
        op8.option("Overtake if the road is wide enough")
    
        a8 = "Overtake the vehicle from the right side of the vehicle ahead"
   
      }

      else if(this.count === 9){

        var q9 = createElement('h3');
        q9.html("If you see a yellow light at the traffic signal, you should")
        q9.position(150, 150)
        var op9 = createRadio()
        op9.position(150, 200)
        op9.option("Reduce your vehicle speed and proceed with caution")
        op9.option("Stop the vehicle")
        op9.option("Apply brake but proceed in the same speed")
    
        a9 = "Reduce your vehicle speed and proceed with caution"
   
      }

      else if(this.count === 10){

        var q10 = createElement('h3');
        q10.html("Be careful while overtaking vehicles marked with ‘L’( learner driver) because")
        q10.position(150, 150)
        var op10 = createRadio()
        op10.position(150, 200)
        op10.option("You might crash into them")
        op10.option("You might crash into people on the road")
        op10.option("The learner driver might get nervous and make a mistake")
    
        a10 = "The learner driver might get nervous and make a mistake"
   
      }
      var button = createButton('Next');

      button.position(displayWidth/2 , displayHeight/2 - 50);
      button.mousePressed(() => {
        
        s1 = op1.value()
        if(a1 === s1){

          score = score + 100
        }

        q1.hide()
        op1.hide()

        gameState = 1
        //button.hide()
      })
      
      var button1 = createButton('Next');
      
    }
}