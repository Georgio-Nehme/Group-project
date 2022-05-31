
     let up=document.getElementById("signup")
     up.addEventListener("click",signup)

     function signup() {

         let url = `http://localhost/Group-Project-back-End/signup.php/`
         let data = new FormData;
         let sname = document.getElementById("sname").value;
         let fname = document.getElementById("fname").value;
         let phone_number = document.getElementById("phone").value;
         let email = document.getElementById("email").value;
         let password = document.getElementById("password").value;
         let city = document.getElementById("city").value;
         let type = document.getElementById("type").value;

         data.append('sname', sname)
         data.append('fname', fname)
         data.append('phone_number', phone_number)
         data.append('email', email)
         data.append('type', type)
         data.append('city', city)
         data.append('password', password)


         axios({

             method: 'POST',
             url: url,
             data: data


         })
             .then(function (resp) {
                 console.log(resp.data)
                 let i = resp.data
                 console.log(i);


             })
         window.location.assign("start.html")
     }



