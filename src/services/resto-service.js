export default class RestoService {
  getResource= async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`);
    }

    return await res.json();
  }

  async getMenuItems (url) {
    return await this.getResource(url);
  }

  async getItem(id) {
    const res = await this.getResource('/menu/');
    const item = res.find( (el) => {
        console.log(`el.id: ${el.id}, id: ${id}`);
        return el.id === +id;
    }) 
    return item;
  }
}