export type ProviderDetail = {
  display_priority: number
  logo_path: string
  provider_id: number
  provider_name: string
}

export type WatchProviderType = {
  link: string
  flatrate: ProviderDetail
  rent: ProviderDetail
  buy: ProviderDetail
}

type Region = string
export type WatchProvidersType = {
  id: number
  results: Partial<Record<Region, WatchProviderType>>
}
