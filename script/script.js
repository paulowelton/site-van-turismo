let cont = 1


let btn_nav = document.querySelector(".nav").addEventListener("click", () =>{
    cont++
    if(cont > 3){
        cont = 1
    }
    changeImage()
})

let radio1 = document.getElementById("radio1")
let radio2 = document.getElementById("radio2")
let radio3 = document.getElementById("radio3")
let first = document.querySelector(".first")

setInterval(() =>{
    cont++

    if(cont > 3){
        cont = 1
    }

    changeImage()
}, 3000)

function verify(){
    if(cont == 1){
        radio1.checked = true
    }else if(cont == 2){
        radio2.checked = true
    }else if(cont == 3){
        radio3.checked = true
    }
}

function changeImage(){
 verify()
    if(radio1.checked){
        first.style.marginLeft = "0%"
    }else if(radio2.checked){
        first.style.marginLeft = "-25%"
    }else if(radio3.checked){
        first.style.marginLeft = "-50%"
    }   
}

let inicio = document.getElementById("inicio")

inicio.addEventListener("click", ()=>{
    window.location.reload()
})

let logo = document.querySelectorAll("#logo")

logo.forEach(el => {
    el.addEventListener("click", ()=>{
        window.location.href = "index.html"
    })
});

let insta = document.getElementById("insta")

insta.addEventListener("click", ()=>{
    window.location.href = "https://www.instagram.com/van_turismo_ceara/"
})

let face = document.getElementById("face")

face.addEventListener("click", ()=>{
    window.location.href = "https://www.facebook.com/VanTurismoCeara"
})

let zap = document.getElementById("zap")

zap.addEventListener("click", ()=>{
    window.location.href = "https://wa.me/986061468"
})

let contatos = document.getElementById("contatos")

contatos.addEventListener("click", ()=>{
    Swal.fire({
        title: "Entre em contato com alguma de nossa gerentes",
        html: "<div id='container-whats'> <p id='chat'> Vanessa </p> <div class='chat1' id='link-whats'><img src='imagens/icons8-whatsapp.svg'> <p>(85) 98606-1468</p></div> <p id='chat'> Suzy </p> <div class='chat2' id='link-whats'><img src='imagens/icons8-whatsapp.svg'> <p>(85) 98609-9085</p></div> </div>",
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        didOpen: () => {
            let chat1 = document.querySelector(".chat1")
            chat1.addEventListener("click", ()=>{
                window.location.href = "https://wa.me/986061468"
            })

            let chat2 = document.querySelector(".chat2")
            chat2.addEventListener("click", ()=>{
                window.location.href = "https://wa.me/986099085"
            })
        }
      });
})

let btn = document.querySelector("#btn-entrar-ctt")
btn.addEventListener("click", ()=>{
    Swal.fire({
        title: "Entre em contato com alguma de nossa gerentes",
        html: "<div id='container-whats'> <p id='chat'> Vanessa </p> <div class='chat1' id='link-whats'><img src='imagens/icons8-whatsapp.svg'> <p>(85) 98606-1468</p></div> <p id='chat'> Suzy </p> <div class='chat2' id='link-whats'><img src='imagens/icons8-whatsapp.svg'> <p>(85) 98609-9085</p></div> </div>",
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        didOpen: () => {
            let chat1 = document.querySelector(".chat1")
            chat1.addEventListener("click", ()=>{
                window.location.href = "https://wa.me/986061468"
            })

            let chat2 = document.querySelector(".chat2")
            chat2.addEventListener("click", ()=>{
                window.location.href = "https://wa.me/986099085"
            })
        }
      });
})

function redirect(page){
    window.location.href = page
}

// let pass = document.querySelectorAll(".pass")

// pass.forEach(el => {
//     el.addEventListener("click", ()=>{
//         Swal.fire({
//             title: "Otima escolha!",
//             icon: "success",
//             html:  "<p>Informe seu pedido a uma de nossas vendedoras e finalize seu pedido.</p>" + "<div id='container-whats'> <p id='chat'> Chat 1 </p> <div class='chat1' id='link-whats'><img src='imagens/icons8-whatsapp.svg'> <p>(85) 98606-1468</p></div> <p id='chat'> Chat 2 </p> <div class='chat2' id='link-whats'><img src='imagens/icons8-whatsapp.svg'> <p>(85) 98609-9085</p></div> </div>",
//             showCancelButton: true,
//             showConfirmButton: false,
//             cancelButtonText: 'Cancelar',
//             cancelButtonColor: '#d33',
//             didOpen: () => {
//                 let chat1 = document.querySelector(".chat1")
//                 chat1.addEventListener("click", ()=>{
//                     window.location.href = "https://wa.me/986061468"
//                 })
    
//                 let chat2 = document.querySelector(".chat2")
//                 chat2.addEventListener("click", ()=>{
//                     window.location.href = "https://wa.me/986099085"
//                 })
//             }
//           });
//     })
// })