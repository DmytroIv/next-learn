import { createContext, useEffect, useState } from 'react';

const NoteCtx = createContext({});

export const NoteProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data) {
      const noteTimer = setTimeout(() => {
        setData(null);
      }, 3000);

      return () => {
        clearTimeout(noteTimer);
      };
    }
  }, [data]);

  const clearNoteData = () => setData(null);
  const setNoteData = (data) => setData(data);

  const providerVal = {
    data,
    clearNoteData,
    setNoteData,
  };

  return <NoteCtx.Provider value={providerVal}>{children}</NoteCtx.Provider>;
};

export default NoteCtx;
