<template>
  <div>
    <input v-on:change="processFile($event)" ref="fileInput" type="file">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator'

@Component
export default class Upload extends Vue {
  @Prop() private clearFileInput: any;

  $refs!: {
    fileInput: HTMLInputElement;
  };

  @Watch('clearFileInput')
  clear () {
    this.$refs.fileInput.value = ''
  }

  processFile (event: any) {
    const files = event.target.files
    const result = []
    for (var i = 0; i < files.length; i++) {
      result.push(files.item(i))
    }
    this.$emit('file-added', result)
  }
}
</script>
