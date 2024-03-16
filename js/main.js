/* ------------------------- start-function-limited-times ------------------------- */
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 140;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());
    /* ----------------------- end-function-limited-times ----------------------- */

    /* --------------------- start-function-counter-section --------------------- */
    let count = document.querySelectorAll(".count")
    let arr = Array.from(count)
    
    
    
    arr.map(function(item){
      let startnumber = 0
    
      function counterup(){
      startnumber++
      item.innerHTML= startnumber
       
      if(startnumber == item.dataset.number){
          clearInterval(stop)
      }
    }
    
    let stop =setInterval(function(){
      counterup()
    },50)
    
    })
    /* --------------------------- end-function-counter-section -------------------------- */

    /* ------------------------ start-countdowns-section ------------------------ */
    var target_date = new Date().getTime() + (5000*3600*48); // set the countdown date
    var days, hours, minutes, seconds; // variables for time units
    
    var countdown = document.getElementById("tiles"); // get tag element
    
    getCountdown();
    
    setInterval(function () { getCountdown(); }, 1000);
    
    function getCountdown(){
    
      // find the amount of "seconds" between now and target
      var current_date = new Date().getTime();
      var seconds_left = (target_date - current_date) / 1000;
    
      days = pad( parseInt(seconds_left / 86400) );
      seconds_left = seconds_left % 86400;
         
      hours = pad( parseInt(seconds_left / 3600) );
      seconds_left = seconds_left % 3600;
          
      minutes = pad( parseInt(seconds_left / 60) );
      seconds = pad( parseInt( seconds_left % 60 ) );
    
      // format countdown string + set tag value
      countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
    }
    
    function pad(n) {
      return (n < 10 ? '0' : '') + n;
    }
    
    
    /* ------------------------- end-countdowns-section ------------------------- */

  /* --------------------------- start-free-register-form --------------------------- */
  function empty(){
    //var error=""
    if(document.getElementById('req1').value=="")
    {
      //error+="Enter Firstname";
      alert("Enter first name");
    }/*
    if(document.getElementById('req2').value=="")
    {
      alert("Enter last name");
    }*/
    if(document.getElementById('req3').value=="")
    {
      alert("Enter email address");
    }

    if(document.getElementById('req4').value=="")
    {
      alert("Enter contact number");
    }
    if(req4.value.length!=10)
    {
      alert('Note : Contact no must be 10 digits')
    }

    if(document.getElementById('req5').value=="")
    {
      alert("Password");
      return false;
    }
  }


  function emailValidate(element,message)
{
  var emailExp=/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0]{2,4}$/;
  if(element.value.length>0)
  {
    if(element.value.match(emailExp))
    {
      return true;
    }
    else
    {
      alert(message);
      element.focus();
      return false;
    }
    return true;
  }
  /*else
  {
      alert('Please fill email id');
      element.focus();
      return false;
    
  }*/
}

function isNumeric(element,message)
{
  var numericExpression=/^[0-9]+$/;
  if(element.value.match(numericExpression))
  {
    return true;
  }
  else{
    alert(message);
    element.focus();
    return false;
  }
}
function Selection(element,message)
{

  if(element.value == "Gender")
  {
    alert(message);
    element.focus();
    return false;
  }
  else{
  
    return true;
  }

  
}
  /* ------------------------- end-free-register-form ------------------------- */

  /* -------------------------- start-review-section -------------------------- */
  const track = document.querySelector(".carousel__track"); //ul
  const slides = Array.from(track.children); //li items
  const nextButton = document.querySelector(".carousel__button--right ");
  const prevButton = document.querySelector(".carousel__button--left");
  const dotsNav = document.querySelector(".carousel__nav");
  const dots = Array.from(dotsNav.children);
  
  const slideWidth = slides[0].getBoundingClientRect().width;
  const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
  };
  slides.forEach(setSlidePosition);
  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  };
  const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
      prevButton.classList.add("is-hidden");
      nextButton.classList.remove("is-hidden");
    } else if (targetIndex === slides.length - 1) {
      prevButton.classList.remove("is-hidden");
      nextButton.classList.add("is-hidden");
    } else {
      prevButton.classList.remove("is-hidden");
      nextButton.classList.remove("is-hidden");
    }
  };
  const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
  };
  
  nextButton.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex((slide) => slide === nextSlide);
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
  });
  
  prevButton.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex((slide) => slide === prevSlide);
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
  });
  
  dotsNav.addEventListener("click", (e) => {
    const targetDot = e.target.closest("button");
    if (!targetDot) return;
    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const targetIndex = dots.findIndex((dot) => dot === targetDot);
    const targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
  });
  /* --------------------------- end-review-section --------------------------- */