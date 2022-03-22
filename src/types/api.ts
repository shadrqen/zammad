export interface TopAssistsRequest {
  season: number
  league: number
}

interface Paging {
  current: number
  total: number
}

export interface TopAssistsResponse {
  errors: string[]
  get: string
  paging: Paging
  parameters?: TopAssistsRequest
  response: string[]
  results: number
}
