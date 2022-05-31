

    let su=document.getElementById("signup")
    su.addEventListener("click",update)

    function update() {
        let url = `http://localhost/Group-Project-back-End/updaterest.php/`
        let data = new FormData();
        let rest_name = document.getElementById("rest").value;
        let city = document.getElementById("city").value;
        let type = document.getElementById("type").value;
        let description = document.getElementById("desc").value;
        let picture = document.getElementById("pic").value;
        let id = document.getElementById("id").value;


        data.append('rest_name', rest_name)
        data.append('rest_city', city)
        data.append('type_rest', type)
        data.append('description', description)
        data.append('picture', picture)
        data.append('rest_id', id)


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
