import storageAvailable from 'storage-available';

class Storage {

  isAvailable() {
    return storageAvailable('localStorage');
  }

  getData(key) {
    if (storageAvailable('localStorage')) {
      // localStorage available
      let data = [];
      if (localStorage.getItem(key) !== null) {
        // there is data in localStorage already
        data = JSON.parse(localStorage.getItem(key));
      }
      return data;
    }
    return null; // no localStorage available
  }

  setData(key, newData) {
    if (storageAvailable('localStorage')) {
      // localStorage available
      let data = this.getData(key);
      if (data !== null) {
        data.push(newData);
        localStorage.setItem(key, JSON.stringify(data));
      }
    }
  }
}

export default new Storage();
