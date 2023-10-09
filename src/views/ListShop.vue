<template>
   <div class="Promotion">
      <div class="Pro">
      <h1>Promotion!!!</h1>
      <p>
        ซื้อเล่มไม่ซํ้ากัน 2 เล่ม ลด 10% ของ 2 เล่มนั้น<br />
        ซื้อเล่มไม่ซํ้ากัน 3 เล่ม ลด 20% ของ 3 เล่มนั้น<br />
        ซื้อเล่มไม่ซํ้ากัน 4 เล่ม ลด 30% ของ 4 เล่มนั้น<br />
        ซื้อเล่มไม่ซํ้ากัน 5 เล่ม ลด 40% ของ 5 เล่มนั้น<br />
        ซื้อเล่มไม่ซํ้ากัน 6 เล่ม ลด 50% ของ 6 เล่มนั้น <br />ซื้อเล่มไม่ซํ้ากัน
        7 เล่ม ลด 60% ของ 7 เล่มนั้น
      </p>
    </div>
    </div>
  <div class="body">
   
    <h1>รายการสินค้า</h1>
    <div class="container">
      <ul>
        <li v-for="product in products" :key="product.id">
          <img :src="product.image" alt="Product Image" />
          <h2>{{ product.name }}</h2>
          <p>ราคา {{ product.price }} บาท</p>
          <button @click="addToCart(product)">  <i class="fas fa-shopping-cart"></i> </button>
        </li>
      </ul>
    </div>
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
export default {
  name: "BookshopListShop",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์ เล่ม 1",
          price: 100,
          Product_type: 1,
          image: "image/1.jpg",
        },
        {
          id: 2,
          name: "แฮร์รี่ พอตเตอร์ กับห้องแห่งความลับ เล่ม 2",
          price: 100,
          Product_type: 2,
          image: "image/2.jpg",
        },
        {
          id: 3,
          name: "แฮร์รี่ พอตเตอร์ กับนักโทษแห่งอัซคาบัน เล่ม 3",
          price: 100,
          Product_type: 3,
          image: "image/3.jpg",
        },
        {
          id: 4,
          name: "แฮร์รี่ พอตเตอร์ กับถ้วยอัคนี เล่ม 4",
          price: 100,
          Product_type: 4,
          image: "image/4.jpg",
        },
        {
          id: 5,
          name: "แฮร์รี่ พอตเตอร์ กับภาคีนกฟีนิกซ์ เล่ม 5",
          price: 100,
          Product_type: 5,
          details: "",
          image: "image/5.jpg",
        },
        {
          id: 6,
          name: "แฮร์รี่พอตเตอร์กับเจ้าชายเลือดผสม เล่ม 6 ",
          price: 100,
          Product_type: 6,
          details: "",
          image: "image/6.jpg",
        },
        {
          id: 7,
          name: "แฮร์รี่ พอตเตอร์ กับเครื่องรางยมทูต เล่ม 7",
          price: 100,
          Product_type: 7,
          details: "",
          image: "image/7.jpg",
        },
      ],
    };
  },

  mounted() {},

  methods: {
    addToCart(product) {
      this.$store.commit("addToCart", product);
    },
  },
};
</script>
<style src="./Shop.css" scoped></style>
