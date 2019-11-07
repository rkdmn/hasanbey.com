<template>
  <div class="urun">
    <div >
      <a href="https://www.hasanbey.com/tr/gurme-paketi">
        <img v-bind:src= "urun.img" />
      </a>
    </div>
    
    <div>
      <h3 class="urun-isim">{{urun.title}}</h3>
      <h5 class="urun-alt-isim">{{urun.description}}</h5>
    </div>

    <div class="fiyat-at-sepete">
      <div>
        <h3 class="urun-fiyat">{{urun.price}}</h3>
      </div>
      <a onclick="pop()" class="at-sepete-buton">
        <img src="images/banner/at_sepete_sprite.png" />
      </a>

      <div id="box">
        <h3>Ürün sepete eklendi !</h3>
        <a onclick="pop()" class="close">Kapat</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props : ["urun"]
  }
</script>


<style>
    .urun{
    height: 400px;
    border: 1px;
    border-style: ridge;
    border: 1px solid #dcdcdc;
    border-style: solid;
    padding: 3px;
    margin: 2px;
    display: grid;
    grid-template-rows: 5fr 2fr 1fr;
}

.urun:hover{
    height: 400px;
    border: 1px;
    border-style: ridge;
    border-color: #d53235;
    border-style: solid;
    padding: 3px;
    margin: 2px;
    display: grid;
    grid-template-rows: 5fr 2fr 1fr;
}

.urun-isim{

    margin-top: -0.3px;
    margin-left: 6px;
}

.fiyat-at-sepete{

    display: grid;
    grid-template-columns: 1fr 1fr;
}

.urun-fiyat{

    font-size: 25px;
    color: #d53235;
    margin-left: 6px;
    margin-top: 9px;

}

.at-sepete-buton{
    margin-left: 30px;
    cursor: pointer;
    float: right;
    border: 0px;
    background-color: transparent;
}

#box{
    width: 500px;
    height: 150px;
    overflow: hidden;
    background: #f1f1f1;
    box-shadow: 0 0 20px black;
    border-radius: 8px;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    text-align: center;
    display: none;
}

.close{
    font-size: 18px;
    color: #d53235;
    padding: 10px 30px;
    cursor: pointer;
    background: transparent;
    display: inline-block;
    border-radius: 4px;
}

.at-sepete-buton img{
    height: 36px;
    width: 115px;
}

.at-sepete-button{
    cursor: pointer;
    margin-top: -55px;
    margin-left: 185px;
    float: right;
    border: 0px;
    background-color: transparent;
}

.at-sepete-button img{
    height: 36px;
    width: 115px;
}

.at-sepete-buton:active, .at-sepete-buton:focus{

    border: 0px;
}
</style>