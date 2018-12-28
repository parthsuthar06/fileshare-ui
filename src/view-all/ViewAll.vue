<template>
  <div class="home row h-100 justify-content-center align-items-center">
    <!-- <span>{{uploadData | json }}</span> -->
    <div class="box-image" @click="navigateTo(item.id)" v-for="(item,index) in uploadData.data" :key="index">
      <span>{{index+1}}.  {{item.name}}</span>
      <img v-bind:src="item.url" v-bind:alt="item.name">
    </div>
    <div v-if="!uploadData.data.length && uploadData.isLoaded">
      No File uploaded!
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { homeService } from '@/services/home.service'

@Component
export default class ViewAll extends Vue {
  uploadData: any = {
    isLoaded: false,
    data: []
  };
  async mounted () {
    const res = await homeService.getAll()
    this.uploadData.data = res.data
    this.uploadData.isLoaded = true
  }

  navigateTo (id:string) {
    this.$router.push({ path: `delete-file/${id}` })
  }
  /* lifecycle hooks
  beforeCreate () {
    console.log('beforeCreate')
  }

  created () {
    console.log('created')
  }

  beforeMount () {
    console.log('beforeMount')
  }

  mounted () {
    console.log('mounted')
  }

  beforeUpdate () {
    console.log('beforeUpdate')
  }

  updated () {
    console.log('updated')
  }

  beforeDestroy () {
    console.log('beforeDestroy')
  }

  destroyed () {
    console.log('destroyed')
  }
  */
}
</script>

<style lang="scss" scoped>
  .box-image {
    display: flex;
    align-items:center;
    span {
      padding: 10px;
    }
    img {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 5px;
      width: 150px;
    }
  }

</style>
