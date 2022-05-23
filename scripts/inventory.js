function append(){
    let data=JSON.parse(localStorage.getItem("products")) || [];

    let allProduct= document.getElementById("all_products");

    allProduct.innerHTML=null;

    data.forEach(function (el, index) {
        
        let div= document.createElement("div")
        let typ=document.createElement("p");
        typ.innerText=el.type
        let dec=document.createElement("p");
        dec.innerText=el.desc
        let pri=document.createElement("p");
        pri.innerText=el.price
        let img=document.createElement("img");
        img.src=el.image
        let btn=document.createElement("button")
        btn.innerText="Remove"
        btn.addEventListener("click", function(){
            remove(index);

        });

        div.append(typ,dec,pri,img,btn);
        allProduct.append(div);

    });
}
append();
function remove(index){
    let data=JSON.parse(localStorage.getItem("products")) || [];

    let remo =data.filter(function(el,i){
if(i===index){
    let del=JSON.parse(localStorage.getItem("remo")) || [];
    del.push(el);
    localStorage.setItem("del",JSON.stringify(del))
}else{
    return i!==index;
}
});
localStorage.setItem("products",JSON.stringify(remo));
append();

}
