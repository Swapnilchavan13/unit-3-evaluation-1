//store the products array in localstorage as "products"

// function products(t,d,p,i){
//     this.type=t;
//     this.description=d;
//     this.price=p;
//     this.image=i;
// }


function storeData(event){
    event.preventDefault();
    let form=document.getElementById("products");

    let type=form.type.value;
    let description=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;

    

    let s1=new products(type,description,price,image);

    let data=JSON.parse(localStorage.getItem("products")) || [];
    data.push(s1);
    localStorage.setItem("products", JSON.stringify(data));
    location.reload();
    

    console.log(s1)
}
function products(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}
