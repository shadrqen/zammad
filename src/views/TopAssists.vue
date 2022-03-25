<template>
  <assists-table
    v-if="items"
    v-bind:header-rows="headerRows"
    v-bind:items="items"
    v-bind:paging="paging"
  />
  <div v-else class="loader">
    <div class="lds-ripple">
      <div></div>
      <div></div>
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
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import AssistsTable from '../components/AssistsTable.vue'
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

function setToastValues() {
  toastMessage.value = itemsLoaded.failed
    ? 'Failed to load data from the API'
    : 'Data fetched successfully from the API'
  toastColor.value = itemsLoaded.failed ? 'bg-red-600' : 'bg-green-500'
  toastBodyBorderColor.value = itemsLoaded.failed
    ? 'border-red-500'
    : 'border-green-400'
}

onMounted(async () => {
  const { assistsData, assistsError } = await getTopAssists()
  assistsError.value = extractRequestErrors(assistsData.value)
  items.value = processListItems(assistsData.value.response)
  paging.current = assistsData.value.paging.current
  paging.total = assistsData.value.paging.total
  itemsLoaded.complete = true
  itemsLoaded.failed = !!assistsError.value
  setToastValues()
  setTimeout(() => {
    resetToast()
  }, 5000)
})
</script>

<style scoped>
.loader {
  min-height: 80vh;
  display: flex;
}

.lds-ripple {
  margin: auto;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #130a0a;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
