import axios from 'axios'

export const getCatData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/cats')

    return response.data
  } catch (error) {
    console.log(error)
    return { error }
  }
}
