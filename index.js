window.onload = function() {

    let button = document.getElementById("button").onclick = async function() {
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        let send = fetch("http://192.168.4.120:3000/sendemail", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                message: message
            })
        })
        let ress = (await send).json;
        console.log(ress);

    }
}
