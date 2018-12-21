<template>
  <div>
    <input v-on:change="processFile($event)" type="file" />
    <span>fileData: {{ base64String }}</span>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Prop,
    Vue,
    Emit
  } from 'vue-property-decorator';
  
  @Component
  export default class Upload extends Vue {
    base64String: string;
  
    constructor() {
      super();
      this.base64String = '';
    }
  
    processFile(event: any) {
      const files = event.target.files;
      const result = [];
      for (var i = 0; i < files.length; i++) {
        result.push(files.item(i));
      }
      this.$emit('file-added', result);
    }
  
  }
</script>
