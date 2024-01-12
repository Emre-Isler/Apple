const card = document.getElementsByClassName("card");
const btnAdd = document.getElementsByClassName("btn-info");
const btnCart = document.getElementById("cart-btn");
const shopTitle = document.getElementsByClassName("card-title");
const totalPrice = document.getElementById("totalPrice");

let cartHeight = 150;
let cartTitle
let cartPrice = 0;
let total = 0;
let fiyat = 0;

const cartList = document.querySelector(".shopping-cart-list");


function cartToggle() {
  btnCart.addEventListener("click", () => {
    cartList.classList.toggle("d-none");
  })
}

cartToggle();

class Shopping {
  constructor(title, price, image) {
    this.title = title;
    this.price = price;
    this.image = image;
  }
}
let a = 0
let disCartPrice = 0;
class UI {
  addToCart(shopping) {
    const listItem = document.createElement("div");
    listItem.classList = "list-item";

    listItem.innerHTML =
      `
        <hr style="color: gray;" class="ms-3 me-3">
        <div class="row align-items-center text-light-50">
        <div class="col-md-3">
          <img src="${shopping.image}" alt="product" class="img-fluid ps-2">
        </div>
        <div class="col-md-5">
          <div class="title text-light">${shopping.title}</div>
        </div>
        <div class="col-md-2">
          <div class="price text-light ">${shopping.price}</div>
        </div>
        <div class="col-md-2">
          <button class="btn btn-delete">
            <i class="fas fa-trash-alt text-danger "></i>
          </button>
        </div>
        </div>
        `
    cartList.appendChild(listItem);

    if (cartHeight <= 500) {
      cartHeight = cartHeight + 100;
      cartList.style.height = `${cartHeight}px`
    }

    total = total + Number(shopping.price);

    totalPrice.innerHTML = `Total Price : ${total} €`;
  }

  removeCart() {
      let btnRemove = document.getElementsByClassName("btn-delete");
      let self = this;
  
      for (let i = 0; i < btnRemove.length; i++) {
          btnRemove[i].addEventListener("click", function () {
              
              if (this.parentElement.parentElement.classList.contains("processed")) {
                  return;
              }
  
              this.parentElement.parentElement.classList.add("processed");
  
              let cartTitle = this.parentElement.parentElement.children[1].textContent;
              let cartPrice = this.parentElement.parentElement.children[2].textContent;
  
              total = total - cartPrice;
  
              console.log("Total after deletion:", total);
  
              this.parentElement.parentElement.parentElement.remove();
  
              cartTitle = cartTitle.trim();
  
              for (let j = 0; j < shopTitle.length; j++) {
                  let shptitle = shopTitle[j].textContent;
  
                  if (cartTitle == shptitle) {
                      btnAdd[j].classList.remove("disabled");
                      btnAdd[j].textContent = "Add to Cart";
                  }
              }
  
              self.cartCount();
              totalPrice.innerHTML = `Total Price : ${total} €`;
              if (cartHeight >= 200) {
                cartHeight = cartHeight - 100;
                cartList.style.height = `${cartHeight}px`
              }
          });
      }
  }

  cartCount() {
    let cartListItem = cartList.getElementsByClassName("list-item");
    let itemCount = document.getElementById("item_count");
    itemCount.innerHTML = cartListItem.length;
  }
}

for (let i = 0; i < card.length; i++) {
  btnAdd[i].addEventListener("click", function (e) {
    let image = card[i].getElementsByClassName("card-img-top")[0].src;
    let title = card[i].getElementsByClassName("card-title")[0].textContent;
    let price = card[i].getElementsByClassName("price")[0].textContent;

    btnAdd[i].classList.add("disabled");
    btnAdd[i].textContent = "In Cart";

    let shopping = new Shopping(title, price, image);
    let ui = new UI;

    ui.addToCart(shopping);
    ui.removeCart();
    ui.cartCount();


    e.preventDefault();
  })
}