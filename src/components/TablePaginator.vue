<template>
  <nav aria-label="Page navigation">
    <ul class="inline-flex">
      <li>
        <button v-bind:class="`${btnClass.inactive}`">Prev</button>
      </li>
      <li v-for="index in btnCount" v-bind:key="index">
        <button
          v-bind:class="
            props.paging.current === index ? btnClass.active : btnClass.inactive
          "
        >
          {{ index }}
        </button>
      </li>
      <li v-if="props.paging.total > 3">
        <button v-bind:class="`${btnClass.inactive}`">...</button>
      </li>
      <li v-if="props.paging.total > 3">
        <button v-bind:class="`${btnClass.inactive}`">
          {{ props.paging.total }}
        </button>
      </li>
      <li>
        <button v-bind:class="`${btnClass.inactive}`">Next</button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Paging } from '../types/api'

const props = defineProps<{
  paging: Paging
}>()

const btnCount = ref()
const shareBtnClasses = ref(
  'h-10 px-5 transition-colors duration-150 focus:shadow-outline',
)
const btnClass = reactive({
  active: `text-white bg-indigo-600 ${shareBtnClasses.value}`,
  inactive: `text-indigo-600 bg-white hover:bg-indigo-100 ${shareBtnClasses.value}`,
})

btnCount.value = props.paging.total > 3 ? 3 : props.paging.total
</script>

<style scoped></style>
