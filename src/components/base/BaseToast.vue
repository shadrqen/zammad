<template>
  <div class="fixed bottom-0 right-0">
    <div
      v-bind:id="toastId"
      v-bind:class="`${toastColor} ${toastClass.header}`"
      role="alert"
    >
      <div v-bind:class="`${toastColor} ${toastClass.body} ${bodyBorderColor}`">
        <p class="font-bold text-white flex items-center">
          {{ toastTitle }}
        </p>
      </div>
      <div v-bind:class="`${toastColor} ${toastClass.content}`">
        {{ toastMessage }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

defineProps<{
  toastColor: string
  toastTitle: string
  toastMessage: string
  toastId: string
  bodyBorderColor: string
}>()

const toastClass = reactive({
  header:
    'shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3',
  body: 'flex justify-between items-center py-2 px-3 bg-clip-padding border-b rounded-t-lg',
  content: 'rounded-b-lg break-words text-white p-3 align-start',
})
</script>

<style scoped></style>
