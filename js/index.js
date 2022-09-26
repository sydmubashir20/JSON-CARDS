const CARD_BODY=document.querySelector("#card-body");
    fetch("json/mobile.json")
    .then(res=> res.json())
    .then(function(mobiles){
      let html="";
      for (let mobile of mobiles) {
          html+=`
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card c-id">
                      <img src="${mobile.image}" alt="tech-pro" class="card-img-top">
                  <div class="card-body body">
                      <h2 class="card-title">${mobile.mobile}</h2>
                      <p class="card-text">${mobile.desc}</p>
                      <h3 class="card-title">Rs:${mobile.price}</h3>
                      <a href="product-spec.html?id=${mobile.id}&img=${mobile.image}&name=${mobile.mobile}&desc=${mobile.desc}&pirce=${mobile.price}" class="btn btn-primary my-btn">View More</a>
                      <a href="checkout.html?img=${mobile.image}&desc=${mobile.desc}&pirce=${mobile.price}" class="btn">Add to cart</a>
                  </div>
                 </div>
            </div>
          `
      }
      CARD_BODY.innerHTML=html;
    });