import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetchData = (fromURL: string) => {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fromURL)
      setData(res.data)
    }
    fetchData()
  }, [])

  return [data]
}

export const PutData = (toURL: string, dataBody: any) => {
  async function sendData() {
    await axios.put(toURL, dataBody)
  }

  return sendData()
}
