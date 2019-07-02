const textArea = document.querySelector(".text-area");
const lis = document.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function() {
    document.querySelector('.add-class').classList.remove('add-class');
    lis[i].classList.add('add-class');
    if (lis[i].textContent === "Init") {
      textArea.innerHTML = `<span>Welcome to WEB Dictionary <br> Please click on Language</span>`;
    } else {
      var ourRequest = new XMLHttpRequest();
      ourRequest.open(
        'GET',
        `https://raw.githubusercontent.com/Kyounghwan01/Ajax-call-example/master/${lis[i].textContent}`
      );
      ourRequest.onload = function(){
        var ourData = ourRequest.responseText;
        textArea.innerHTML = `<h1 style="color: rgb(16,49,84);">${lis[i].textContent}</h1>${ourData}`; 
      };
      ourRequest.send();
      /*
      CORS 에러로 사용 못함 
      fetch(lis[i].textContent).then(function(res){
        res.text().then(function(text){
          textArea.innerHTML = text;
        })
      }).catch(function(error){
        console.log(error);
      })
      */
    }
  });
}
