   let url=`http://localhost/Group-Project-back-End/getreview.php/`
     let data=new FormData();


     axios({

         method:'POST',
         url:url,
         data:data,


     })
         .then(function (resp) {
             console.log(resp.data)
             let i = resp.data
             console.log(i);


             var main=document.getElementById("container")

             for (let k=0;k<i.length;k++){

                 let users=document.createElement("h2")
                 users.innerHTML="&#127380;" +i[k].rest_reviewed_id
                  main.appendChild(users)

                 let users1=document.createElement("h2")
                 users1.innerHTML="&#x2B50;" +i[k].review
                 main.appendChild(users1)

                 let buttonn=document.createElement("a")
                 buttonn.innerHTML="Click to delete"
                 buttonn.href="#index"
                 main.appendChild(buttonn)



                 buttonn.addEventListener("click",delet)

                 function delet(){
                      let url=`http://localhost/Group-Project-back-End/viewall_users.php/`
                      let data=new FormData();
                      data.append("rest_reviewed_id",i[k].rest_reviewed_id)


                 axios({

                      method:'POST',
                      url:url,
                      data:data,


             })
                 }

             }

         })
