const data = [] 


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
$("#counter").text(data.length +  " Reperes"); 

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