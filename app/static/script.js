(function(win, doc) {
    'use strict';
    // confirmação para deletar o dado
    if(doc.querySelector('.btnDel')) {
        let btnDel = doc.querySelectorAll('.btnDel')
        btnDel.forEach(element => {
            element.addEventListener('click', (ev) =>{
                if(confirm("Deseja apagar este dado?")) {
                    return true
                }else {
                    ev.preventDefault()
                }
            })
        }); 
    }
    
})(window, document)