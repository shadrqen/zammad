import http from '../http-common'
import { TopAssistRequest, TopAssistResponse } from '../types/api'

export default class FootballApiService {
  static async getTopAssists(
    payload: TopAssistRequest,
    timeout = 60000,
  ): Promise<TopAssistResponse> {
    const { data } = await http.get(
      `/players/topassists?season=${payload.season}&league=${payload.league}`,
      {
        timeout,
      },
    )
    return data
  }
}
