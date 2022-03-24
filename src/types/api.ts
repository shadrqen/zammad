export interface Paging {
  current: number
  total: number
}

export interface TopAssistRequest {
  league: string
  season: string
}

export interface TopAssistResponse {
  errors: string | string[]
  get: string
  paging: Paging
  parameters: TopAssistRequest
  response: string[]
  results: number
}

export interface Player {
  id: number
  name: string
  firstname: string
  lastname: string
  age: number
  birth: {
    date: string
    place: string
    country: string
  }
  nationality: string
  height: string
  weight: string
  injured: boolean
  photo: string
}

export interface AssistList {
  player: Player
  statistics: string[]
}
