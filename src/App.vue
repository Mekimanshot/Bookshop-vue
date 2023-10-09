<template>
  <link
    rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <header>
    <div class="logo">
      <h1>บ้านนายดิน</h1>
    </div>
    <nav class="nav">
      <router-link to="/"> <i class="fas fa-box"></i> สินค้า</router-link>
      <router-link to="/Cart">
        <i class="fas fa-shopping-cart"></i> ตะกร้าสินค้า</router-link>
    </nav>
  </header>
  
  <router-view />
</template>

<style>
ul li {
  list-style: none;
}
nav {
  display: flex;
  gap: 15px;
  align-items: center;
}
.nav a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  transition: 500ms;
}

.nav a:hover {
  color: rgb(0, 230, 31);
}

header {
  display: flex;
  justify-content: space-between;
  min-height: 20px;
  align-items: center;
  background-color: #333;
  padding: 15px;
  font-weight: bold;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 20px;
  color: white;
  margin-left: 7px;
  cursor: pointer;
}
i {
  padding: 5px;
}

.footer {
  left: 0;
  bottom: 0;
  padding: 5px;
  height: 200px;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  display: grid;
  align-items: center;
}

.ff {
  text-align: center; 
}
.pp{
  font-size: 35px;
  font-weight: bold;
}

.footer p {
  line-height: 1; 
  margin: 10px 0; 
}
</style>
