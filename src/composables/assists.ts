import { ref } from 'vue'
import FootballApiService from '../services/FootballApi'
import { TopAssistResponse, AssistList } from '../types/api'

// eslint-disable-next-line import/prefer-default-export
export async function getTopAssists() {
  const assistsData = ref()
  const assistsError = ref()
  await FootballApiService.getTopAssists({
    league: '39',
    season: '2020',
  })
    .then((response: TopAssistResponse) => {
      assistsData.value = response
    })
    .catch((e: Error) => {
      assistsError.value = e
    })
  return { assistsData, assistsError }
}

export function processListItems(items: AssistList[]) {
  return items.map((item: AssistList) => item.player)
}
