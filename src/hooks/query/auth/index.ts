import authApi from "@/api/auth"
import { useQuery } from "@tanstack/react-query"

export const authKeys = {
  getAccessTokenGoogle: (code: string) =>
    ["getAccessTokenGoogle", code] as const,
}

export function useGetAccessTokenGoogle(code: string) {
  return useQuery({
    queryKey: authKeys.getAccessTokenGoogle(code),
    queryFn: () => authApi.signInGoogle(code),
  })
}
