import moment from 'moment';

function IndexedDB() {
  const defaultDBName = 'NotTodoDB';
  const that = {};
  let db = null;

  const init = () => {
    const promise = new Promise((resolve, reject) => {
      // This works on all devices/browsers, and uses IndexedDBShim as a final fallback
      const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
      const open = indexedDB.open(defaultDBName, 1);

      open.onupgradeneeded = () => {
        db = open.result;
        db.createObjectStore(defaultDBName, { keypath: 'date' });
      };

      open.onsuccess = () => {
        db = open.result;
        resolve(true);
      };
    });
    return promise;
  };

  const createNotTodo = (content) => {
    const promise = new Promise((resolve, reject) => {
      const tx = db.transaction([defaultDBName], 'readwrite');
      const store = tx.objectStore(defaultDBName);

      const data = {
        date: moment().format(),
        content: content
      };

      // @Params (data, key)
      store.add(data, data.date).onsuccess = (event) => {
        resolve(event.target.result);
      }
    });
    return promise;
  };

  const getAllNotTodos = () => {
    const promise = new Promise((resolve, reject) => {
      const tx = db.transaction([defaultDBName], 'readonly');
      const store = tx.objectStore(defaultDBName);
      let findResult = [];

      store.openCursor().onsuccess = (event) => {
        const cursor = event.target.result;

        if (cursor) {
          findResult.push(cursor.value);
          cursor.continue();
        } else {
          resolve(findResult);
        }
      };
    });
    return promise;
  };

  const close = () => {
    db.close();
  };

  that.init = init;
  that.close = close;
  that.getAll = getAllNotTodos;
  that.createNotTodo = createNotTodo;
  return that;
}

export default IndexedDB();