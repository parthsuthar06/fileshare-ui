<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="File upload View and upload" />
    <Upload v-on:file-added="OnFileAdded" />
    <button v-on:click="uploadFiles">Upload</button>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
  import Upload from '@/components/Upload.vue';
  import {
    homeService
  } from '@/services/home.service';
  
  @Component({
    components: {
      HelloWorld,
      Upload
    },
  })
  export default class Home extends Vue {
    files: any = [];
  
    OnFileAdded(files: any) {
      this.files = [...files, ...this.files];
      console.log("here")
    }
  
    async uploadFiles() {
      const promises: Promise < any > [] = [];
      this.files.forEach((file:any) => {
        promises.push(homeService.uploadFile(file));
      });
      try {
        const result = await Promise.all(promises);
        console.log("api response--->", result);
      } catch (e) {
        console.log("api error--->", e);
      }
    }
  }
</script>
