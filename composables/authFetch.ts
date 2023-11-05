type Headers = {[key: string] : string}

export default async function <T>(path: string, options: {}) {
  const config = useRuntimeConfig()
  const headers : Headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }

  return await useFetch<T>(path, {
    ...options,
    baseURL: config.public.apiBaseURL,
    headers
  })
}