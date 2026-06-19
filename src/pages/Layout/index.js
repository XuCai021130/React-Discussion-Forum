import { request } from "@/utils"
import { useEffect } from "react"

const Layout = () => {
  useEffect(() => {
    request.get('/user/profile')
  }, [])
  return <h1>This is layout page</h1>
}

export default Layout