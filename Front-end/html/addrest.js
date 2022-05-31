    let su=document.getElementById("sign-up")
    su.addEventListener("click",add)

    function add() {
        let url = `http://localhost/Group-Project-back-End/addrest.php/`
        let data = new FormData();
        let rest_name = document.getElementById("name").value;
        let typee = document.getElementById("typee").value;
        let city = document.getElementById("city").value;
        let description = document.getElementById("desc").value;
        let picture = document.getElementById("picture").value;



        data.append('rest_name', rest_name)
        data.append('rest_city', city)
        data.append('type', typee)
        data.append('description', description)
        data.append('picture', picture)



        axios({

            method: 'POST',
            url: url,
            data: data,


        })
            .then(function (resp) {
                console.log(resp.data)
                let i = resp.data
                console.log(i);

            })


    }