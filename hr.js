function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    //var hora =14 
    var d1 = document.getElementsByTagName('div')[0]
    var d2 = document.getElementsByTagName('div')[1]
    let d3 = document.getElementsByTagName('div')[2]
    var titulo = document.getElementsByTagName('h1')[0]
    let res = document.querySelector('div#res')
    res.innerHTML = `Agora são ${hora} e ${min} min.`
    if (hora >= 0 && hora <= 12) {
        msg.innerHTML = 'Bom dia.'
        img.src = "fotomanha.jpg"
        document.body.style.background = 'yellow'
        d1.style.background = 'yellow'
        d2.style.background = 'yellow'
        d3.style.background = 'yellow'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = 'Boa tarde!'
        img.src = "fototarde.jpg"
        document.body.style.background = '#87CEFA'
        d1.style.background = '#87CEFA'
        d2.style.background = '#87CEFA'
        d3.style.background = '#87CEFA'


    } else {
        msg.innerHTML = 'Boa noite!'
        img.src = "fotonoite.jpg"
        document.body.style.background = 'black'
        d1.style.background = 'black'
        d2.style.background = 'black'
        d3.style.background = 'black'
        d3.style.color = 'white'
        titulo.style.color = 'yellow'
        msg.style.color = '#DCDCDC'
    }

}