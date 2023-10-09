<template>
  <div class="Cartt">
    <h1>ตะกร้าสินค้า</h1>
    <div class="body">
      <table class="cart-table">
        <thead>
          <tr>
            <th>สินค้า</th>
            <th>รูปภาพ</th>
            <th>ราคาต่อหน่วย</th>
            <th>จำนวน</th>
            <th>ราคารวม</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cart" :key="item.id">
            <td>{{ item.name }}</td>
            <td><img :src="item.image" alt="Product Image" /></td>
            <td>{{ item.price }} บาท</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.price * item.quantity }} บาท</td>
            <td>
              <button @click="incrementQuantity(item)">
                <i class="fas fa-cart-plus"></i>
              </button>
              <button @click="removeItem(index)">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <table class="vertical-table">
      <tbody>
        <tr>
          <th>ราคารวม</th>
          <td>{{ calculateTotal() }} บาท</td>
        </tr>
        <tr>
          <th>ส่วนลด</th>
          <td>{{ calculateDiscount() }} บาท</td>
        </tr>
        <tr>
          <th>ราคาทั้งหมด</th>
          <td>{{ calculateTotal() - calculateDiscount() }} บาท</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="footer">
    <div class="ff">
      <p class="pp">Contact</p>
      <p>Name : Napat Thongsak</p>
      <p>Email : winzeieizgg@gmail.com</p>
      <p>Phone : 0949205599</p>
      <p>GitHub : https://github.com/Mekimanshot</p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "CartView",
  computed: {
    ...mapState(["cart"]),
  },
  methods: {
    calculateDiscount() {
      if (this.cart.length === 0) {
        return 0; 
      }
      const itemQuantities = this.cart.map((item) => item.quantity);

      let count = 0;
      let check = true;
      let pairs = [];

      while (check) {
        let i = 0;
        itemQuantities.forEach((quantity) => {
          if (quantity > 0) {
            itemQuantities[i]--;
            count++;
          }
          i++;
        });
        if (count != 0) pairs.push(count);

        if (count <= 1) check = false;
        else count = 0;
      }

      let discountPrice = 0;
      const bookPrice = this.cart[0].price;

      pairs.forEach((pair) => {
        discountPrice += pair * bookPrice * (((pair - 1) * 10) / 100);
      });

      return discountPrice;
    },
    calculateTotalPriceByType() {
      const totalPriceByType = {};
      this.cart.forEach((item) => {
        const productType = item.Product_type;
        if (!(productType in totalPriceByType)) {
          totalPriceByType[productType] = 0;
        }
        totalPriceByType[productType] += item.price * item.quantity;
      });

      let total = 0;
      for (const productType in totalPriceByType) {
        total += totalPriceByType[productType];
      }

      return total;
    },
    incrementQuantity(item) {
      this.$store.dispatch("incrementQuantity", item);
    },
    removeItem(index) {
      this.cart.splice(index, 1);
    },
    calculateTotalPrice(cart) {
      let totalPrice = 0;
      cart.forEach((item) => {
        totalPrice += item.price * item.quantity;
      });
      return totalPrice;
    },
    calculateTotal() {
      return this.calculateTotalPrice(this.cart);
    },
  },
};
</script>

<style src="./Cart.css" scoped></style>
