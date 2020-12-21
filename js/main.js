
var frases = [
    "Forma parte de esta noche la alegría por la cercanía de Dios. Damos gracias porque el Dios niño se pone en nuestras manos, mendiga, por decirlo así, nuestro amor, infunde su paz en nuestro corazón.",
    "Con la humildad de los pastores, pongámonos en camino, en esta Noche santa, hacia el Niño en el establo. Toquemos la humildad de Dios, el corazón de Dios. Entonces su alegría nos alcanzará y hará más luminoso el mundo.",
    "No permitamos que esta llama luminosa, encendida en la fe, se apague por las corrientes frías de nuestro tiempo. Custodiémosla fielmente y ofrezcámosla a los demás.",
    "El mensaje de Navidad nos hace reconocer la oscuridad de un mundo cerrado y con ello, se nos muestra sin duda una realidad que vemos cotidianamente. Pero nos dice también que Dios no se deja encerrar fuera. Él encuentra un espacio, entrando tal vez por el establo; hay hombres que ven su luz y la transmiten.",
    "Entre tantos regalos que compramos y recibimos no olvidemos el verdadero regalo: darnos mutuamente algo de nosotros mismos. Darnos mutuamente nuestro tiempo. Abrir nuestro tiempo a Dios. Así la agitación se apacigua. Así nace la alegría, surge la fiesta.",
    "El cielo no pertenece a la geografía del espacio, sino a la geografía del corazón. Y el corazón de Dios, en la Noche santa, ha descendido hasta un establo: la humildad de Dios es el cielo. Y si salimos al encuentro de esta humildad, entonces tocamos el cielo. Entonces, se renueva también la tierra.",
    "Señor, abre los ojos de nuestro corazón, para que estemos vigilantes y con ojo avizor y podamos llevar así tu cercanía a los demás",
    "El establo del mensaje de Navidad representa la tierra maltratada. Cristo no reconstruye un palacio cualquiera. Él vino para volver a dar a la creación, al cosmos, su belleza y su dignidad: esto es lo que comienza con la Navidad y hace saltar de gozo a los ángeles.",
    "Dios nos enseña así a amar a los pequeños. A amar a los débiles. A respetar a los niños. El niño de Belén nos hace poner los ojos en todos los niños que sufren y son explotados en el mundo, tanto los nacidos como los no nacidos.",
    "A quien abre el corazón a este 'niño envuelto en pañales' y acostado 'en un pesebre' (cf. Lc 2, 12), él le brinda la posibilidad de mirar de un modo nuevo las realidades de cada día. Podrá gustar la fuerza de la fascinación interior del amor de Dios, que logra transformar en alegría incluso el dolor.",
    "El verdadero misterio de la Navidad es el resplandor interior que viene de este Niño. Dejemos que este resplandor interior llegue a nosotros, que se encienda en nuestro corazón la llamita de la bondad de Dios; llevemos todos, con nuestro amor, la luz al mundo.",
    "Forma parte de esta noche la alegría por la cercanía de Dios. Damos gracias porque el Dios niño se pone en nuestras manos, mendiga, por decirlo así, nuestro amor, infunde su paz en nuestro corazón.",
    "Que María nos ayude a mantener el recogimiento interior indispensable para gustar la alegría profunda que trae el nacimiento del Redentor.",
    "Podemos imaginar con cuánta preparación interior, con cuánto amor, esperó María aquella hora. Pidamos que nos conceda mirarlo con el amor con el cual María lo contempló, roguémosle que nos dé la humildad y la fe con la que san José miró al niño que María había concebido del Espíritu Santo.",
    "La Palabra eterna se ha hecho pequeña, tan pequeña como para estar en un pesebre. Se ha hecho niño para que la Palabra esté a nuestro alcance. Dios se ha hecho pequeño para que nosotros pudiéramos comprenderlo, acogerlo, amarlo.",
    "Con su mirar hacia abajo, Él me levanta, me toma benévolamente de la mano y me ayuda a subir, precisamente yo, de abajo hacia arriba.",
    "Él nos ve y me ve. Este mirar hacia abajo es más que una mirada desde lo alto. El mirar de Dios es un obrar. El hecho que Él me ve, me mira, me transforma a mí y al mundo que me rodea."
]

var golpe = 0

const numGolpes = () => {
    
    $(".img-fluid").toggleClass("animate__animated animate__shakeX")

    var num = Math.floor((Math.random() * (16 - 0 + 1)) + 0)

    if(golpe == 10){
        $("img").attr("src", "images/piñata_rota.png")
    }

    if(golpe == 20){
        $("#message").css("display", "block")
        $(".img-fluid").removeClass("animate__animated animate__shakeX")
        $(".img-fluid").addClass("animate__animated animate__bounce")
        $("img").attr("src", "images/piñata_dulces.png")
        $(".frase").text(frases[num])
    }   
    
    golpe += 1

}

document.getElementById('image').addEventListener('click', numGolpes)


