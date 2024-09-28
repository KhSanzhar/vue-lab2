<template>
  <div>
    <a-header @open-side-menu="isOpen = true"/>
    <side-menu :is-open="isOpen" @close="isOpen = false"/>
    <RouterView/>
  </div>
</template>
<script setup lang="ts">
import AHeader from '@/components/AHeader.vue'
import SideMenu from '@/components/SideMenu.vue'
import { ref } from 'vue'

const isOpen = ref<boolean>(false);


</script>