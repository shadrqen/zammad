import http from '../http-common'
import { TopAssistRequest, TopAssistResponse } from '../types/api'
import topAssistsResponseJSON from './response.json'

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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // return topAssistsResponseJSON
  }
}
