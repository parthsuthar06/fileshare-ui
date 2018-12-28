<template>
  <div class="home row h-100 justify-content-center align-items-center">
    <div class="box-image">
      <span>{{uploadData.data.name}}</span>
      <img v-bind:src="uploadData.data.url" v-bind:alt="uploadData.data.name">
      <button type="button" class="btn btn-default" @click="deleteFile(uploadData.data.id)">delete</button>
    </div>
    <div v-if="!uploadData.data.name && uploadData.isLoaded">
      No File Exist!
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { homeService } from '@/services/home.service'

@Component
export default class DeleteFile extends Vue {
  fileData:any={};
  uploadData: any = {
    isLoaded: false,
    data: {}
  };
  async mounted () {
    const res = await homeService.getById(this.$route.params.id)
    this.uploadData.data = res.data
    this.uploadData.isLoaded = true
  }

  async deleteFile (id:string) {
    const res = await homeService.deleteById(this.$route.params.id)
    this.$router.push({ path: '/' })
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
