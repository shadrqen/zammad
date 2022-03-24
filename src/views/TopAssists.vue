<template>
  <base-table
    v-if="items"
    v-bind:header-rows="headerRows"
    v-bind:items="items"
    v-bind:paging="paging"
  />
  <div
    v-else
    class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mt-10"
  >
    <div class="animate-pulse flex space-x-4">
      <div class="rounded-full bg-slate-200 h-10 w-10"></div>
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 bg-slate-200 rounded"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  </div>
  <base-toast
    v-if="itemsLoaded.complete"
    v-bind:toast-color="toastColor"
    toast-title="Fetching Data"
    v-bind:toast-message="toastMessage"
    toast-id="ultimate-team-toast"
    v-bind:body-border-color="toastBodyBorderColor"
  />
  {{ itemsLoaded }}
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import BaseTable from '../components/base/BaseTable.vue'
import BaseToast from '../components/base/BaseToast.vue'
import {
  getTopAssists,
  extractRequestErrors,
  processListItems,
} from '../composables/assists'

const headerRows = reactive([
  'ID',
  'Name',
  'Firstname',
  'Lastname',
  'Age',
  'Birth',
  'Nationality',
  'Weight',
  'Height',
  'Injured',
  'Photo',
])
const items = ref()
const toastColor = ref()
const toastBodyBorderColor = ref()
const toastMessage = ref()
const paging = reactive({
  current: 0,
  total: 0,
})
const itemsLoaded = reactive({
  complete: false,
  failed: false,
})

function resetToast() {
  itemsLoaded.complete = false
  itemsLoaded.failed = false
}

function setToastMessage() {
  toastMessage.value = itemsLoaded.failed
    ? 'Failed to load data from the API'
    : 'Data fetched successfully from the API'
}

onMounted(async () => {
  const { assistsData, assistsError } = await getTopAssists()
  assistsError.value = extractRequestErrors(assistsData.value)
  items.value = processListItems(assistsData.value.response)
  paging.current = assistsData.value.paging.current
  paging.total = assistsData.value.paging.total
  itemsLoaded.complete = true
  itemsLoaded.failed = !!assistsError.value
  setToastMessage()
  toastColor.value = itemsLoaded.failed ? 'bg-red-600' : 'bg-green-500'
  toastBodyBorderColor.value = itemsLoaded.failed
    ? 'border-red-500'
    : 'border-green-400'
  setTimeout(() => {
    resetToast()
  }, 5000)
})
</script>

<style scoped></style>
