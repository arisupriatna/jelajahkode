function checkResult() {
  var sum = 0;
  answer1 = document.getElementById('d1')
  answer2 = document.getElementById('b2')
  answer3 = document.getElementById('a3')
  answer4 = document.getElementById('a4')
  answer5 = document.getElementById('d5')
  answer6 = document.getElementById('a6')
  answer7 = document.getElementById('c7')
  answer8 = document.getElementById('b8')
  answer9 = document.getElementById('c9')
  answer10 = document.getElementById('d10')

  if (answer1.checked == true) {
    sum++
  }

  if (answer2.checked == true) {
    sum++
  }

  if (answer3.checked == true) {
    sum++
  }

  if (answer4.checked == true) {
    sum++
  }

  if (answer5.checked == true) {
    sum++
  }

  if (answer6.checked == true) {
    sum++
  }

  if (answer7.checked == true) {
    sum++
  }

  if (answer8.checked == true) {
    sum++
  }

  if (answer9.checked == true) {
    sum++
  }

  if (answer10.checked == true) {
    sum++
  }


  document.getElementById('score').innerHTML = sum;

  var percentage = Math.round((sum * 100) / 10);
  document.getElementById('percentage').innerHTML = percentage + "%";
  document.getElementById('percentage').style.color = 'green';

  if (percentage < 50) {
    document.getElementById('percentage').style.color = 'red';
  } else if (percentage == 100) {
    document.getElementById('percentage').innerHTML = percentage + "% Good Job!";
  }

  document.getElementById('jawaban').innerHTML = '<ol> <li>D</li> <li>B</li> <li>A</li> <li>A</li> <li>D</li> <li>A</li> <li>C</li> <li>B</li> <li>C</li> <li>D</li> </ol>';



}

