const data = {
  key: 'li9XIyEGDAn1wWucHxGucqgUATJEg0Pf3yTzv7Cj',
  urlEarth: 'https://epic.gsfc.nasa.gov/api/natural',
  imageEarth: 'https://epic.gsfc.nasa.gov/epic-archive/jpg/'+ 'id' + '.jpg',
  imageDay: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
  busqueda: 'https://images-api.nasa.gov/search?q='
}


export default{
  nasaSearch(queri){
    return fetch(`${data.busqueda}${queri}`)
    .then(res=>res.json())
  },
  nasaVideo(url){
    return fetch(url)
      .then(res=>res.json())
  },
  get(URL, callback){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if(this.status === 200){
          callback(JSON.parse(this.responseText))
        }else {
          console.log(new Error("Hubo un error"))
        }
      }
    }
    xhr.open('GET', URL);
    xhr.send(null);
  }
}
