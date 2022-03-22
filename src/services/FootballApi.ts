import http from '../http-common'
import { TopAssistsRequest, TopAssistsResponse } from '../types/api'

export default class FootballApiService {
  static async getTopFootballAssists(
    payload: TopAssistsRequest,
    timeout = 60000,
  ): Promise<TopAssistsResponse> {
    const { data } = await http.get(
      `/players/topassists?season=${payload.season}&league=${payload.league}`,
      {
        timeout,
      },
    )
    return data
  }
}
