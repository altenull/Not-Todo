// It is a library created to make it easier to use IndexedDB by altenull

export default class IndexedDB {
  // #0 Constructor
  constructor() {
    // This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
    this.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
    this.defaultDBName = 'NotTodo';
    this.defaultStoreName = 'notTodoList';
  }

  // #1 Open (or create) the IndexedDB
  openDB = () => {
    const { indexedDB, defaultDBName } = this;
    return indexedDB.open(defaultDBName, 2);
  }

  // #2 Create the schema
  // This function makes an ObjectStore with keyPath.

  // Also, you can make index to search by <key>
  // name may have duplicates, so we can't use a unique index.
  // objectStore.createIndex("name", "name", { unique: false });

  // create an index to search by id.
  // no two people have the same id, so use a unique index.
  // objectStore.createIndex("id", "id", { unique: true });
  createSchema = (indexedDBConn, tempData) => {
    const { defaultStoreName } = this;
    indexedDBConn.onupgradeneeded = (event) => {
      const db = event.target.result;
      const objectStore = db.createObjectStore(defaultStoreName, { keyPath: 'date' });
      for (let i in tempData) {
        objectStore.add(tempData[i]);
      }
    };
  }

  // #3 Add the item to IndexedDB
  addNotTodo = (indexedDBConn) => {
    const { defaultStoreName } = this;
    indexedDBConn.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(defaultStoreName, 'readwrite');
      const objectStore = transaction.objectStore(defaultStoreName);

      // objectStore.put({ something here });

      // Close the DB when the transaction is done
      transaction.oncomplete = () => {
        db.close();
      }
    }
  }

  // #4 get all items from IndexedDB
  getAllNotTodos = (indexedDBConn) => {
    const { defaultStoreName } = this;
    let resultArray = [];
    indexedDBConn.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction([defaultStoreName]);
      const objectStore = transaction.objectStore(defaultStoreName);

      objectStore.openCursor().onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          resultArray.push(cursor.value.date, cursor.value.content);
          cursor.continue();
        }
      }
    }
    return resultArray;
  }

}