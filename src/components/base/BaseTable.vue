<template>
  <div class="container">
    <table
      class="w-full flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-10"
    >
      <thead>
        <tr
          class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
        >
          <slot name="header"></slot>
        </tr>
      </thead>
      <tbody class="flex-1 sm:flex-none">
        <slot name="body"></slot>
        <table-paginator v-bind:paging="paging" />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import TablePaginator from '../TablePaginator.vue'
import { Paging } from '../../types/api'

defineProps<{
  paging: Paging
}>()
</script>

<style scoped></style>
