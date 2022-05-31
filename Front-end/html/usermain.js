

        let request = new XMLHttpRequest();
      request.open("GET", "http://localhost/test/viewall.php");
      request.send();
      request.onload = () => {
          console.log(request);
          if (request.status === 200) {
              // by default the response comes in the string format, we need to parse the data into JSON
              console.log(JSON.parse(request.response));
          } else {
              console.log(`error ${request.status} ${request.statusText}`);
          }
          var i = JSON.parse(request.response)
          console.log(i)



          var main=document.getElementById("container")
          let title=document.getElementById("title")
          title.innerHTML="Grab Some Food!"


          for(let k=0;k<i.length;k++) {
              var name = (i[k].rest_name)
              var city = (i[k].rest_city)
              var description = (i[k].description)
              var id=(i[k].rest_id)


//event.prevent default (add event listener)


          let listt=document.createElement("div")
          listt.setAttribute("id","box")
          listt.style.backgroundImage= "url(./styles/images/food1.jpg)"
          listt.style.backgroundSize="150%"
          main.appendChild(listt)


          let tt=document.createElement("h3")
          tt.innerHTML= name +","+city
          listt.appendChild(tt)

          let buttonn=document.createElement("a")
          buttonn.setAttribute("id","press")
          buttonn.innerHTML="view more details"
          buttonn.href= "viewrest.html?rest_id="+ id;
          listt.appendChild(buttonn)

          }


         }





