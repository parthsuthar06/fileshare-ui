<template>
  <div class="container h-100">
    <div class="home row h-100 justify-content-center align-items-center">
      <div class="input-group col-6">
        <span class="form-control">
          <Upload :clearFileInput="!clearFileInput" v-on:file-added="OnFileAdded"/>
        </span>
        <span class="input-group-btn">
          <button type="button" class="btn btn-default" v-on:click="uploadFiles">Upload</button>
          <button type="button" class="btn btn-default" @click="clearUploadFiles">Clear</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Upload from '@/components/Upload.vue' // @ is an alias to /src
import { homeService } from '@/services/home.service'

@Component({
  components: {
    Upload
  }
})
export default class Home extends Vue {
  files: any = [];
  clearFileInput:boolean=true;

  OnFileAdded (files: any) {
    this.files = [...files, ...this.files]
  }

  async uploadFiles () {
    const promises: Promise<any>[] = []
    this.files.forEach((file: any) => {
      promises.push(homeService.uploadFile(file))
    })
    try {
      const result = await Promise.all(promises)
      this.files = []
      this.clearFileInput = !this.clearFileInput
    } catch (e) {
      console.log('api error--->', e)
    }
  }

  clearUploadFiles () {
    this.files = []
    this.clearFileInput = !this.clearFileInput
  }
}
</script>

<style lang="scss" scoped>
  .form-control {
    border: none
  }
</style>
