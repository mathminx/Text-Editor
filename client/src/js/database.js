import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  try {
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    const request = store.put({ text: content });
    const result = await request;
    console.log("Content added to database!", result);
  }
  catch (err) {
  console.error("Unable to add content to the database!", err);
  }
};

export const getDb = async () => {
  console.log('GET all content from the database');
  try {
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const request = store.getAll();
    const result = await request;
    if (!result) {
      console.log("No data to retrieve!")
      return;
    }
  }
  catch (err) {
    console.error('Unable to retrieve data!', err);
  }
};

// Start the database.
initdb();
