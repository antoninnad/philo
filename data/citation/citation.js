const data = [
    {
        "name": "Galilé Italien XII",
        "contain": "Le grand livre du monde a été écrit en langauge mathématique"
    },
    {
        "name": "Auguste Conte",
        "contain": "Science d'où prévoyance, prévoyance d'où action \n On peut prendre l'exemple de la fille qui a reconnu des signes d'un tsunami"
    },
    {
        "name": "Emil Michel Cioran",
        "contain": "En permettant l’homme, la nature a commis beaucoup plus qu’une erreur de calcul : un attentat contre elle-même."
    }, 
    {   
        "name": "Pascal",
        "contain": "La vie de l'homme est missérablement courte"
    }, {
        "name": "Platon",
        "contain": "La pensée c'est le dialogue intérieur et silencieux de l'âme avec elle-même (version longue). Version courte: penser c'est parler à soi"
    }, {
        "name": "Sophocle",
        "contain": "Entre tant de merveille du monde la grande merveille c'est l'homme."
    }, {
        "name": "La fontaine",
        "contain": "En toute chose il faut considérer la fin. Ce proverbe signifie que c'est la manière dont se termine une chose qui est importante."
    } , {
        "name": "Kant",
        "contain": "L'homme est un animal qui a besoin d'un maître."
    } , {
        "name": "On parle de bon sauvage",
        "Contain": "l'homme est naturelement bon."
    }, {
        "name": "Montaigne",
        "contain": "Chacun juge de barbare ce qui n'est pas de son usage."
    } , {
        "name": "Lévi straus",
        "contain": "Le barbare c'est l'homme qui croit à la barbarie."
    } , {
        "name": "Heidegger",
        "contain": "La nature devient objet pour lequel on prend commande."
    } , {
        "name": "NaN",
        "contain": "Nous n'avons pas le droit d'hypotéquer l'éxistence des générations futures à cquse de notre simple laisser aller."
    } , {
        "name": "Descartes",
        "contain": "Nous rendre comme maîtres et possesseurs de la nature."
    } , {
        'name': "Jonas",
        "contain": "La peur qui fait essentielement partie de la responsabilité n'est pas celle qui nous déconseille d'agir mais celle qui nous invite à agir, cette peur que nous visons pour l'objet de la responsabilité. Jonas nous dit que la peur pour nos descendants nous invite à l'action."
    } , {
        "name": "Kant",
        "contain": "Deux choses remplissent mon esprit d'une admiration et d'un respect incessants : le ciel étoilé au dessus de moi et la loi morale en moi."
    }, {
        'name': "Kant",
        "contain": "Agis de tel sorte que la maxime de ton action soit universalisable."
    } , {
        'name': "Kant",
        "contain": "Agis de façon telle que tu traites l'humanité, aussi bien dans ta personne que dans toute autre, toujours en même temps comme fin, et jamais simplement comme moyen."
    } , {
        'name': "Jonas",
        "contain": "Agit de façon à ce que les effets de tes actions agissent sur la terre"
    } , {
        "name": "Jonas",
        "contain": "Nous n'éritons pas de la terre, nous l'emprentons à nos enfants"
    } , {
        "name" : "Bacon",
        "contain": "On ne commande la nature qu'en lui obéissant"
    } , {
        "name": "Descartes",
        "Contain": "La science nous rendra maître et professeur de la nature."
    } , {
        "name": "Voltaire",
        "contain": "Me travail nous libère de trois maux le besoin , l'ennui et le vice .\n Analyse le travail nous libère de l'ennui => occupation du vice => on travaille, on est occupé donc on ne fait pas d'infraction"
    } , {
        "name": "Hegel",
        "contain": "Le travail nous rend libre"
    } , {
        "name": "Nietzsche",
        "contain": "Ce qui ne me tue pas me rend meilleur"
    } , {
        "name": "Rousseau",
        "contain": "L'adversité est le meilleur maître"
    } , {
        "name": "La Bruyere",
        "contain": "C'est un métier de faire un livre comme de faire une pendule"
    } , {
        "name": "Beithoven",
        "contain": "Croyez vous que je me soucis de vos misérables violons lorsque l'esprit me parle"
    } , {
        "name": "Flaubert",
        "contain": "Génie ou pas c'est une page tous les latins"
    } , {
        "name": "J . Joyce",
        "contain": "Pouvez-vous me justifier chaque mots moi, je peux vous justifier chaques syllabes" 
    } , {
        "name": "Boileau",
        "contain": "Le vrai n peut quelques fois n'être pas vraissemblable" 
    }
];

class Citation {
    constructor () {

    } 

    static #citationstyle(selector, json , i) {
        $(selector).append(`<i>Author: ${json.name}</i><blockquote>${json.contain}<br><a dataarray="${i}" >None</a></blockquote><br>`)
    }

    static showall(selector) {
         
        for (let i = 0; i < data.length; i++) {
            this.#citationstyle(selector, data[i], i);
        }

    } 
    
    static search(selector, author_name) {

        $(selector).html(" ")

        for (let i = 0; i < data.length; i++) {
            if (data[i].name == author_name) {
                this.#citationstyle(selector, data[i], i);
            }
        }

    }
}


//nombre de citations
$("#counter").text(data.length +  " citations"); 

//auto complétion merci jquery

let author_list = [];

for (let element of data) {

    if (!author_list.includes(element.author)) {
        author_list.push(element.name)
    }
}


$("#q").autocomplete({
    source: author_list
});

Citation.showall(".allcitation"); 

$("#submitsearch").on("click", e => {
    Citation.search(".allcitation",$("#q").val());
});