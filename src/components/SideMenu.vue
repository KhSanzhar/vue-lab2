<template>
  <div v-show="isOpen">
    <div class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="close"></div>

    <div class="fixed top-0 left-0 h-full bg-blue-100 shadow-lg z-50">
      <div class="my-4 mx-5">
        <div class="w-80 border rounded-xl bg-teal-500 flex justify-center mb-5">
          <span class="text-white text-2xl font-bold">Menu</span>
        </div>

        <div class="bg-white border rounded-xl">
          <div class="flex flex-col gap-5 mb-16">
            <a-button
              v-for="category in categories"
              :key="category.id"
              class="text-white"
              @click="selectedCategory(category)"
            >
              {{category.name}}
            </a-button>
          </div>

          <contacts-block/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AButton from '@/components/AButton.vue'
import type { Category } from '@/models/categories'
import { useCategories } from '@/composables/useCategories'
import ContactsBlock from '@/components/ContactsBlock.vue'

const props = defineProps<{ isOpen: boolean }>()

const emit = defineEmits(['close', 'selectedCategory'])

const close = () => {
  emit('close')
}

const selectedCategory = (category: Category): void => {
  emit('selectedCategory', category)
}

const categories: Category[] = useCategories();
</script>
