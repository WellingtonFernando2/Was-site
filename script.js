const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})



var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
  modal2.style.display = "block";
};

span2.onclick = function() {
  modal2.style.display = "none"
};

  window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  };


  var modal3 = document.getElementById("myModal3");
  var btn3 = document.getElementById("myBtn3");
  var span3 = document.getElementsByClassName("close3")[0];
  
  btn3.onclick = function() {
    modal3.style.display = "block";
  };
  
  span3.onclick = function() {
    modal3.style.display = "none"
  };
  
    window.onclick = function(event) {
      if (event.target == modal3) {
        modal3.style.display = "none";
      }
    };

  var modal4 = document.getElementById("myModal4");
  var btn4 = document.getElementById("myBtn4");
  var span4 = document.getElementsByClassName("close4")[0];
  
  btn4.onclick = function() {
    modal4.style.display = "block";
  };
  
  span4.onclick = function() {
    modal4.style.display = "none"
  };
  
    window.onclick = function(event) {
      if (event.target == modal4) {
        modal4.style.display = "none";
      }
    };
  
    var modal5 = document.getElementById("myModal5");
    var btn5 = document.getElementById("myBtn5");
    var span5 = document.getElementsByClassName("close5")[0];
    
    btn5.onclick = function() {
      modal5.style.display = "block";
    };
    
    span5.onclick = function() {
      modal5.style.display = "none"
    };
    
      window.onclick = function(event) {
        if (event.target == modal5) {
          modal5.style.display = "none";
        }
      };

      var modal6 = document.getElementById("myModal6");
      var btn6 = document.getElementById("myBtn6");
      var span6 = document.getElementsByClassName("close6")[0];
      
      btn6.onclick = function() {
        modal6.style.display = "block";
      };
      
      span6.onclick = function() {
        modal6.style.display = "none"
      };
      
        window.onclick = function(event) {
          if (event.target == modal6) {
            modal6.style.display = "none";
          }
        };