document.getElementById('roverImageButton').addEventListener('click', curiosityData)
//document.getElementsByClassName('opportunityClass').addEventListener('click', curiosityData)
//document.getElementsByClassName('spiritClass').addEventListener('click', curiosityData)

function curiosityData() {
    const inputDate = document.getElementById('roverInput').value
    console.log(inputDate)

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${inputDate}&api_key=QsTBJMtghdtw7B5arGkS4XoINcHdRPWbb9VMShHM`

    fetch(url)
        .then(res => res.json())


        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.photos[0].img_src
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}