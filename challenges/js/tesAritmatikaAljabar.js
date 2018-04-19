function checkResult(){
    var sum = 0;
    answer1 = document.getElementById('a1')
    answer2 = document.getElementById('d2')
    answer3 = document.getElementById('d3')
    answer4 = document.getElementById('d4')
    answer5 = document.getElementById('e5')

    if(answer1.checked == true){
        sum++
    } 
    
    if(answer2.checked == true){
        sum++
    }
    
    if(answer3.checked == true){
        sum++
    }
    
    if(answer4.checked == true){
        sum++
    }
    
    if(answer5.checked == true){
        sum++
    }
  
    document.getElementById('score').innerHTML = sum;
    
    var percentage = Math.round((sum * 100) / 5);
    document.getElementById('percentage').innerHTML = percentage + "%";
    document.getElementById('percentage').style.color = 'green';
    
    if(percentage < 50){
      document.getElementById('percentage').style.color = 'red';
    } else if(percentage == 100){
      document.getElementById('percentage').innerHTML = percentage + "% Good Job!";
    }
  
    document.getElementById('jawaban').innerHTML = '<ol> <li>A</li> <li>D</li> <li>D</li> <li>D</li> <li>E</li> </ol>';
    
  
    
  }
  
  