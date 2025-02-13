let noButtonDodgeCount = 0;
const maxDodges = 5;
const messages = [
  "You need to love me ❤️",
  "Don't run away from me! 😢",
  "Come on, just say yes! 🥰",
  "I'm waiting for your love! 💕",
  "Why are you hesitating? 😭"
];

function nextQuestion(accepted, questionNumber) {
    if (accepted) {
        document.querySelector(`#q${questionNumber}`).classList.remove('active');
        if (questionNumber < 3) {
            document.querySelector(`#q${questionNumber + 1}`).classList.add('active');
        } else {
            document.querySelector('#final').classList.add('active');
            celebrateAcceptance();
        }
    }
}

function handleNo() {
    if (noButtonDodgeCount >= maxDodges) {
        document.querySelectorAll('.question').forEach(q => q.classList.remove('active'));
        document.querySelector('#rejected').classList.add('active');
        document.querySelector('.heart').style.display = 'none';
        document.querySelector('.broken-heart').style.display = 'block';
    }
}

function dodgeNo() {
    if (noButtonDodgeCount < maxDodges) {
        const btn = document.querySelector('.btn.no');
        btn.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 100 - 50}px)`;
        noButtonDodgeCount++;
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        alert(randomMessage);
        
    } 
    else 
    {
      const btn = document.querySelector('.btn.no');
      btn.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 100 - 50}px)`;
      noButtonDodgeCount++;
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      alert(randomMessage);
      btn.style.display = "none"; // Hide the button
    }
}

function resetQuestions() {
    document.querySelectorAll('.question').forEach(q => q.classList.remove('active'));
    document.querySelector('#q1').classList.add('active');
    document.querySelector('.heart').style.display = 'block';
    document.querySelector('.broken-heart').style.display = 'none';
    noButtonDodgeCount = 0;
    const noBtn = document.querySelector('.btn.no');
    noBtn.style.transform = 'none';
}

function celebrateAcceptance() {
    const container = document.querySelector('.floating-hearts');
    for (let i = 0; i < 15; i++) {
        createHeart(container);
    }
}

function createHeart(container) {
    const heart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    heart.setAttribute('viewBox', '0 0 100 100');
    heart.style.width = '30px';
    heart.style.height = '30px';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animation = `float ${3 + Math.random() * 3}s linear infinite`;
    
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute('d', 'M50 88.9L16.7 55.6C7.2 46.1 7.2 30.9 16.7 21.4s24.7-9.5 34.2 0L50 20.5l-0.9 0.9c9.5-9.5 24.7-9.5 34.2 0s9.5 24.7 0 34.2L50 88.9z');
    path.style.fill = `hsl(${Math.random() * 60 + 330}, 100%, 65%)`;
    
    heart.appendChild(path);
    container.appendChild(heart);
    
    setTimeout(() => {
        container.removeChild(heart);
    }, 6000);
}


var right = document.getElementsByClassName("right");
    var si = right.length;
    var z=1;
    turnRight();
    function turnRight()
    {
        if(si>=1){
            si--;
        }
        else{
            si=right.length-1;
            function sttmot(i){
                setTimeout(function(){right[i].style.zIndex="auto";},300);
            }
            for(var i=0;i<right.length;i++){
                right[i].className="right";
                sttmot(i);
                z=1;
            }
        }
        right[si].classList.add("flip");
        z++;
        right[si].style.zIndex=z;
    }
    function turnLeft()
    {
        if(si<right.length){
            si++;
        }
        else{
            si=1;
            for(var i=right.length-1;i>0;i--){
                right[i].classList.add("flip");
                right[i].style.zIndex=right.length+1-i;
            }
        }
        right[si-1].className="right";
        setTimeout(function(){right[si-1].style.zIndex="auto";},350);
    }

    function goToPage() {
      window.location.href = "book.html"; // Redirects to book.html in the same directory
  }