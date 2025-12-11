<template>
  <!-- //inside vue code// -->
  <q-page class="flex flex-center">
    
    <q-input
    v-model="nama"
    outlined
    label="Masukkan Nama"
    />
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

// outside vue code
const nama = ref('Gilbert Tirta Baskara')

</script>