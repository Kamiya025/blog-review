import axiosClient from "./axios-client"

const authApi = {
  signInGoogle(code: string): Promise<any> {
    const url = "https://oauth2.googleapis.com/token"

    return axiosClient.post(url, undefined, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: {
        code,
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
        client_secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
        grant_type: "authorization_code",
      },
    })
  },
}
export default authApi
