
let price = 0;
const seats = document.querySelectorAll(".seat");

for (let index = 0; index < seats.length; index++) {
          const seat = seats[index];
          
          seat.addEventListener("click", function () {
                    seat.classList.toggle("bg-[#F7F8F8]");
                    seat.classList.toggle("bg-green-500");
                    const seatName = seat.querySelector("p");
                    const priceCont = document.getElementById("price-container");
                    // const div = document.createElement("div");
                    const p1 = document.createElement("p");
                    const p2 = document.createElement("p");
                    const p3 = document.createElement("p");
                    p1.innerText = seatName.innerText;
                    p2.innerText = "Economoy";
                    p3.innerText = 550;
                    
                    priceCont.appendChild(p1);
                    priceCont.appendChild(p2);
                    priceCont.appendChild(p3);

                    
                    price = price + 550;
                    const totalPrice = document.getElementById("price");
                    totalPrice.innerText = price;
                    // totalPrice.appendChild(price);

          });
}