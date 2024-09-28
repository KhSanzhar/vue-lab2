<template>
  <header class="flex gap-5 p-3 shadow-lg h-16 items-center">
    <div class="cursor-pointer" @click="openSideMenu">Menu</div>

    <div class="flex flex-grow justify-center">This laboratory work 2</div>

    <div class="cursor-pointer">Profile</div>
  </header>
</template>
<script setup lang="ts">

const emit = defineEmits(['openSideMenu']);

const openSideMenu = () => {
  emit('openSideMenu');
}

</script>
