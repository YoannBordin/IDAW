// Does not work

let textarea = document.getElementById('source');
const file = document.getElementById(
        new File()
    ).files[0];

let reader = new FileReader();
reader.onload = function(event){
    textarea.innerHTML = reader.result;
};
reader.readAsText(fileName);
