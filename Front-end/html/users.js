
        let url=`http://localhost/Group-Project-back-End/viewall_users.php/`
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


             var main=document.getElementById("userss")

             for (let k=0;k<i.length;k++){
                 let users=document.createElement("h2")
                 users.innerHTML="&#x2B50;"+i[k].sname+ "&nbsp" +i[k].fname
                 main.appendChild(users)

             }

         })




