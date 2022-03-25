<template>
  <base-table v-bind:paging="paging">
    <template #header>
      <th
        v-for="(header, index) in headerRows"
        v-bind:key="index"
        class="p-3 text-left"
      >
        {{ header }}
      </th>
    </template>
    <template #body>
      <tr
        v-for="(row, index) in items"
        v-bind:key="index"
        class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
      >
        <td
          v-for="(columnVal, columnKey, key) in row"
          v-bind:key="key || columnKey"
          class="border-grey-light border hover:bg-gray-100 p-3"
        >
          <div v-if="columnKey && columnKey === 'photo'" class="bg-indigo-300">
            <img
              v-if="typeof columnVal === 'string'"
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
    </template>
  </base-table>
</template>

<script setup lang="ts">
import BaseTable from './base/BaseTable.vue'
import { Paging, Player } from '../types/api'

defineProps<{
  headerRows: string[]
  items: Player[]
  paging: Paging
}>()
</script>

<style scoped>
@media (min-width: 640px) {
  table {
    display: inline-table !important;
  }

  thead tr:not(:first-child) {
    display: none;
  }
}

td:not(:last-child) {
  border-bottom: 0;
}

th:not(:last-child) {
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}
</style>
