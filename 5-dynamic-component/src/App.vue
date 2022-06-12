<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center my-3">
      <button class="btn btn-sm btn-danger me-2" @click="activeComponent = 'RedColor'">Red</button>
      <button class="btn btn-sm btn-success me-2" @click="activeComponent = 'GreenColor'">Green</button>
      <button class="btn btn-sm btn-primary" @click="activeComponent = 'BlueColor'">Blue</button>
    </div>
    <!-- <RedColor v-if="activeComponent == 'Red'" />
    <GreenColor v-if="activeComponent == 'Green'" />
    <BlueColor v-if="activeComponent == 'Blue'" /> -->

    {{activeComponent}}
    
    <keep-alive>
    <component :is="activeComponent" msg="RedColor Component" >  <!-- is icindeki deger butun import edilen component'lerde calisir.-->
      <h3 class="bg-success p-2 text-white">green component</h3>
    </component>
    </keep-alive>

    <!-- component'lerden birisi aktif oldugunda digerleri silinir yani sadece bir component render edilir. pasif olanlar DOM uzerinden kaldirilir. -->
    <!-- yukaridaki durumda state'i kaybetmis oluyoruz. component'ler bilgisini tutmak icin keep-alive ile ilgili komponentleri sarmalariz. -->
    <!-- keep alive kullanildiginda component state'lerini tutabiliyoruz ancak ilgili komponent'e tekrar tiklandiginda mounted yapilmiyor,
    bu istenmeyen bir durumdur cunku component'e tiklandiginda icindekilerin mounted edilmesini isteyebiliriz
    bunun icin keep alive kullandigimizda bize ekstradan iki adet life-cycle-hooks verir. (activated, deactivated) -->

  </div>
</template>

<script>
import RedColor from "@/components/RedColor";
import GreenColor from "@/components/GreenColor";
import BlueColor from "@/components/BlueColor";
export default {
  components: {
    RedColor,
    GreenColor,
    BlueColor
  },

  data() {
    return {
      activeComponent: "RedColor"
    }
  }
}
</script>