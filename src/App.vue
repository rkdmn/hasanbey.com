<template>
  <div class="container">
    <product :urun="product" v-for="product in productList" :key="product.id"></product>

    <Navbar> </Navbar>
  </div>

</template>


<script>
import product from "@/components/product";
export default {
  components: {
    product
  },
  data() {
    return {
      productList: [
        {
          id: 1,
          image: {
              samaple: require('@/assets/images/002-9-.jpg')
          },
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },
        
        {
          id: 2,
          img: "../assets/logo.png",
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },
        
        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },
        
        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },
        
        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        },

        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          description: "Açıklama-1"
        },

        {
          id: 2,
          title: "iPhone",
          price: 50,
          description: "Açıklama-2"
        },

        {
          id: 3,
          title: "Klavye",
          price: 10,
          description: "Açıklama-3\n"
        }
      ]
    };
  }
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 15px;
  margin-left: -60px;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>