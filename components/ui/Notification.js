import { useContext } from 'react';
import ReactDom from 'react-dom';
import NoteCtx from '@/context/notification';

const Notification = ({ text, state }) => {
  const noteCtx = useContext(NoteCtx);

  return ReactDom.createPortal(
    <div onClick={noteCtx.clearNoteData} className={`${state} note`}>
      {text}
    </div>,
    document.getElementById('notifications')
  );
};

export default Notification;
