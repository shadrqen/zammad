import { ref } from 'vue'
import FootballApiService from '../services/FootballApi'
import { TopAssistResponse, AssistList } from '../types/api'

// eslint-disable-next-line import/prefer-default-export
/**
 * Fetches football top assists
 * @returns {object} - The assists response or error
 */
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

/**
 * Extract the right objects out of an object inside a list to be usable in a table
 * @param items - List to process
 * @returns {Array} - Processed list that contains objects with correct keys
 */
export function processListItems(items: AssistList[]) {
  return items.map((item: AssistList) => item.player)
}

/**
 * Extracts errors from a response object
 * @param response - API response
 * @returns {string|object|null} - The errors
 */
export function extractRequestErrors(response: TopAssistResponse) {
  if (Array.isArray(response.errors)) {
    return response.errors.length > 0
      ? response.errors.reduce((prev, curr) => prev.concat(curr))
      : null
  }
  return response.errors
}
