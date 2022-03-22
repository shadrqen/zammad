<template>
  <div>Api</div>
</template>

<script setup lang="ts">
import FootballApiService from '../services/FootballApi'
import { TopAssistsResponse } from '../types/api'

async function getTopAssists() {
  await FootballApiService.getTopFootballAssists({
    season: 2020,
    league: 61,
  })
    .then((response: TopAssistsResponse) => {
      console.log(response)
    })
    .catch((error: Error) => {
      console.log(error)
    })
}

getTopAssists()
</script>

<style scoped></style>
