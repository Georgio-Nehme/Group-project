

        let log=document.getElementById("login");
        log.addEventListener("click",login)


            function login() {
                let url = `http://localhost/Group-Project-back-End/signin.php/`
                let data = new FormData;
                let e=document.getElementById("emaill").value;
                let p=document.getElementById("passwordd").value;
                data.append('email',e)
                data.append('password',p)


                axios({

                    method: 'POST',
                    url: url,
                    data:data


                })
                    .then(function (resp) {
                        console.log(resp.data)
                        let i = resp.data
                        console.log(i);
                        let r=i.type;
                        if (r=="user"){
                          window.location.assign("user_main.html")
                        }

                        else {
                            window.location.assign("admin_main.html")
                        }

                    })
        }

        s=document.getElementById("second")
        s.addEventListener("click", direct)
        function direct(){
            window.location.assign("sign_up_page.html")
        }
        localstorage.setItem("user_id",i.user_id)





