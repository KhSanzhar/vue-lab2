<template>
  <div class="w-80 bg-teal-500 text-white border rounded-xl">

    <div class="flex justify-center mb-6">
      <h1 class="text-xl">Contacts</h1>
    </div>

    <div class="flex flex-col">
      <span
        v-for="(contact, label) in contacts"
        :key="label"
      >
        {{label}}: {{contact}}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">

const contacts = {
  phone: '+7(707)-101-25-46',
  address: 'Tole Bi, 49',
  email: 'email',
}

</script>