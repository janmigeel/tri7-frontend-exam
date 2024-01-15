import axios from 'axios'

const apiUrl = 'https://super7tech.com/developer_exam/api'

export const getGlobalData = async () => {
  try {
    const response = await axios.get(`${apiUrl}/global`)
    return response.data
  } catch (error) {
    console.error('Error fetching global data:', error)
  }
}

export const getHomePageData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/homePage`);
      return response.data;
    } catch (error) {
      console.error('Error fetching home page data:', error);
      throw error;
    }
  };
