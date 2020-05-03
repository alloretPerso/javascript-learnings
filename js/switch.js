function simpleSwitch() {
  let productId = 2;
  switch (productId) {
    case 1: {
      let message = "Product 1";
      console.log(message);
      break;
    }
    case 3: {
      let message = "Product 2";
      console.log(message);
      break;
    }
    case 2:
      console.log("Product 2");
      break;
    default:
      console.log("Unknow Product");
      break;
  }
}
export { message } from "./message.js";
export { simpleSwitch };
