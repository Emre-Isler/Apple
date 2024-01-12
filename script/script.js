const giris_iphone = document.getElementById("giris_iphone");
const slidebar = document.getElementById("slidebar");
const main = document.getElementById("main");
const store = document.getElementById("store");
const urunler = document.querySelectorAll(".card")


// Sidebar elemanları başlangıç


const sidebar = document.getElementById("sidebar");
const sec_imac = document.getElementById("sec_imac");
const sec_macPro = document.getElementById("sec_macPro");
const sec_macAir = document.getElementById("sec_macAir");
const sec_ipad10 = document.getElementById("sec_ipad10");
const sec_ipadAir = document.getElementById("sec_ipadAir");
const sec_ipadPro = document.getElementById("sec_ipadPro");
const sec_iphone15 = document.getElementById("sec_iphone15");
const sec_iphone15Plus = document.getElementById("sec_iphone15Plus");
const sec_iphone15Pro = document.getElementById("sec_iphone15Pro");
const sec_iphone15ProMax = document.getElementById("sec_iphone15ProMax");
const sec_watchSe = document.getElementById("sec_watchSe");
const sec_watch9 = document.getElementById("sec_watch9");
const sec_watchUltra = document.getElementById("sec_watchUltra");
const sec_airpods2e = document.getElementById("sec_airpods2e");
const sec_airpods3e = document.getElementById("sec_airpods3e");
const sec_airpodsPro = document.getElementById("sec_airpodsPro");
const clear = document.getElementById("clear");

// Sidebar elemanları bitiş


// main.style.display = "none";
// setTimeout(() => {
//     giris_iphone.style.opacity = "0.05";
//     giris_iphone.style.transition = "1s";
//     giris_iphone.style.display = "none";
//     main.style.display = "inline";
// }, 1000);

// click event
// store.addEventListener("click", () =>{
//     giris_iphone.style.display = "none";
//     main.style.display = "inline";
// });



// Sidebar elemenları açılması kodları başlangıç

const btn_acil = document.querySelectorAll(".acil");
const acilmis = document.querySelectorAll(".acilmis");
const acil_iler = document.querySelectorAll("i");

const x = document.getElementById("x");
const y = document.getElementById("y");
const video = document.getElementById("video")


document.addEventListener('DOMContentLoaded', () => {

    if (video.classList.contains("d-none")){
        video.classList.toggle("d-none")
    }

});





// bu for döngüsüne dikkat
for (let i of btn_acil){
    i.addEventListener("click",ac);
}

function ac(){
    // console.log(this.nextElementSibling)
    // aşağıdaki ile yukarıdaki aynı işlemi yapar    
    const acilacak = this.parentElement.children[1];
    if (acilacak.classList.contains("goster")){
        //aynısını ekyeyip çıkarmak için kullanıyoruz toggle. Hocaya sormuştun
        acilacak.classList.toggle("goster");
        this.children[0].classList.toggle("dondur");

        sidebar.classList.toggle("sidebarKucuk");
        sidebar.classList.toggle("sidebarBuyuk");
        
    }else{
        acilmis.forEach(kapanacak => kapanacak.classList.remove("goster"));

        sidebar.classList.remove("sidebarBuyuk");
        
        acil_iler.forEach(don => don.classList.remove("dondur"));
        acilacak.classList.toggle("goster");
        this.children[0].classList.toggle("dondur");

        sidebar.classList.toggle("sidebarKucuk");
        sidebar.classList.toggle("sidebarBuyuk");
    }
    
    if (acilacak.classList.contains("macs")){
        urunler.forEach(urun => {
            urun.parentElement.style.display = "inline";
            if(!urun.parentElement.classList.contains("macs")){
                urun.parentElement.style.display = "none";
            }
        });   
    }

    if (acilacak.classList.contains("ipads")){
        urunler.forEach(urun => {
            urun.parentElement.style.display = "inline";
            if(!urun.parentElement.classList.contains("ipads")){
                urun.parentElement.style.display = "none";
            }
        });   
    }

    if (acilacak.classList.contains("iphones")){
        urunler.forEach(urun => {
            urun.parentElement.style.display = "inline";
            if(!urun.parentElement.classList.contains("iphones")){
                urun.parentElement.style.display = "none";
            }
        });   
    }

    if (acilacak.classList.contains("watches")){
        urunler.forEach(urun => {
            urun.parentElement.style.display = "inline";
            if(!urun.parentElement.classList.contains("watches")){
                urun.parentElement.style.display = "none";
            }
        });   
    }

    if (acilacak.classList.contains("airpods")){
        urunler.forEach(urun => {
            urun.parentElement.style.display = "inline";
            if(!urun.parentElement.classList.contains("airpods")){
                urun.parentElement.style.display = "none";
            }
        });   
    }

    
}

// Sidebar elemenları açılması kodları bitiş

//Sidebar Filtreleri Bşlangıç






sec_imac.addEventListener("click", ()=>{
    
    urunler.forEach(urun => {
        urun.parentElement.style.display = "inline";
        if(!urun.parentElement.classList.contains("imac")){
            urun.parentElement.style.display = "none";
        }
    });   
});

sec_macPro.addEventListener("click", ()=>{

    urunler.forEach(urun => {
        urun.parentElement.style.display = "inline";
        if(!urun.parentElement.classList.contains("macPro")){
            urun.parentElement.style.display = "none";
        }
    });   
});

sec_macAir.addEventListener("click", ()=>{

    urunler.forEach(urun => {
        urun.parentElement.style.display = "inline";
        if(!urun.parentElement.classList.contains("macAir")){
            urun.parentElement.style.display = "none";
        }
    });   
});

sec_ipad10.addEventListener("click", ()=>{

    urunler.forEach(urun => {
        urun.parentElement.style.display = "inline";
        if(!urun.parentElement.classList.contains("ipad10")){
            urun.parentElement.style.display = "none";
        }
    });   
});

sec_ipadAir.addEventListener("click", ()=>{

    urunler.forEach(urun => {
        urun.parentElement.style.display = "inline";
        if(!urun.parentElement.classList.contains("ipadAir")){
            urun.parentElement.style.display = "none";
        }
    });   
});

sec_ipadPro.addEventListener("click", ()=>{

    urunler.forEach(urun => {
        urun.parentElement.style.display = "inline";
        if(!urun.parentElement.classList.contains("ipadPro")){
            urun.parentElement.style.display = "none";
        }
    });   
});

sec_iphone15.addEventListener("click", ()=>{

    urunler.forEach(urun => {
        urun.parentElement.style.display = "inline";
        if(!urun.parentElement.classList.contains("iphone15")){
            urun.parentElement.style.display = "none";
        }
    });   
});

sec_iphone15Plus.addEventListener("click", ()=>{

    urunler.forEach(urun => {
        urun.parentElement.style.display = "inline";
        if(!urun.parentElement.classList.contains("iphone15Plus")){
            urun.parentElement.style.display = "none";
        }
    });   
});

sec_iphone15Pro.addEventListener("click", ()=>{

    urunler.forEach(urun => {
        urun.parentElement.style.display = "inline";
        if(!urun.parentElement.classList.contains("iphone15Pro")){
            urun.parentElement.style.display = "none";
        }
    });   
});

sec_iphone15ProMax.addEventListener("click", ()=>{

    urunler.forEach(urun => {
        urun.parentElement.style.display = "inline";
        if(!urun.parentElement.classList.contains("iphone15ProMax")){
            urun.parentElement.style.display = "none";
        }
    });   
});

sec_watchSe.addEventListener("click", ()=>{

    urunler.forEach(urun =>{
        urun.parentElement.style.display = "inline";
        if(!urun.parentElement.classList.contains("watchSe")){
            urun.parentElement.style.display = "none";
        }
    });
});

sec_watch9.addEventListener("click", ()=>{

    urunler.forEach(urun =>{
        urun.parentElement.style.display = "inline";
        if(!urun.parentElement.classList.contains("watch9")){
            urun.parentElement.style.display = "none";
        }
    });
});

sec_watchUltra.addEventListener("click", ()=>{

    urunler.forEach(urun =>{
        urun.parentElement.style.display = "inline";
        if(!urun.parentElement.classList.contains("watchUltra")){
            urun.parentElement.style.display = "none";
        }
    });
});

sec_airpods2e.addEventListener("click", ()=>{

    urunler.forEach(urun =>{
        urun.parentElement.style.display = "inline";
        if(!urun.parentElement.classList.contains("airpods2e")){
            urun.parentElement.style.display = "none";
        }
    });
});

sec_airpods3e.addEventListener("click", ()=>{

    urunler.forEach(urun =>{
        urun.parentElement.style.display = "inline";
        if(!urun.parentElement.classList.contains("airpods3e")){
            urun.parentElement.style.display = "none";
        }
    });
});

sec_airpodsPro.addEventListener("click", ()=>{

    urunler.forEach(urun =>{
        urun.parentElement.style.display = "inline";
        if(!urun.parentElement.classList.contains("airpodsPro")){
            urun.parentElement.style.display = "none";
        }
    });
});

clear.addEventListener("click", ()=>{
    urunler.forEach(urun =>{
        urun.parentElement.style.display = "inline";
    });

});