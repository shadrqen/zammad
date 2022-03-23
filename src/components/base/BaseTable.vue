<template>
  <table class="shadow-lg bg-white table-fixed my-10 mx-10">
    <thead>
      <tr>
        <th
          v-for="(header, index) in headerRows"
          v-bind:key="index"
          class="bg-blue-50 border text-left px-8 py-4"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in items" v-bind:key="index">
        <td
          v-for="(columnVal, columnKey, key) in row"
          v-bind:key="key || columnKey"
          class="border px-8 py-4"
        >
          <div v-if="columnKey === 'photo'" class="bg-indigo-300">
            <img
              class="object-cover"
              v-bind:src="columnVal"
              alt="Player photo"
            />
          </div>
          <div v-else>
            <template v-if="typeof columnVal === 'object'">
              {{ columnVal.date }}
            </template>
            <template v-else>
              {{ columnVal }}
            </template>
          </div>
        </td>
      </tr>
      <table-paginator v-bind:paging="paging" />
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { Player, Paging } from '../../types/api'
import TablePaginator from '../TablePaginator.vue'

defineProps<{
  headerRows: string[]
  items: Player[]
  paging: Paging
}>()
</script>

<style scoped></style>
