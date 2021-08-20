export default class RestoService {
  getResources = async (url) => {
    const res = await fetch(url)
    
    if (!res.ok) {
      throw new Error("Could not fetch")
    }

    return await res.json();
  }
} 

