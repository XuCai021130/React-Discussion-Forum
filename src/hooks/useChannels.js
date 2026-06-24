import { useState, useEffect } from "react"
import { getChannelsAPI } from "@/apis/article"

function useChannels() {
  const [channelList, setChannelList] = useState([])
  useEffect(() => {
    async function fetchChannels() {
      const res = await getChannelsAPI()
      setChannelList(res.data.channels)
    }
    fetchChannels()
  }, [])
  return { channelList }
}


export { useChannels }