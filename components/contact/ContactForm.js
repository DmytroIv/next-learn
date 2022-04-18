import { useState, useContext } from 'react';
import NoteCtx from '@/context/notification';

const ContactForm = () => {
  const [userData, setUserData] = useState(null);
  const noteCtx = useContext(NoteCtx);

  const sendMessageHandler = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        ...userData,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    console.log(data);

    noteCtx.setNoteData({
      message: 'Message is saved.',
      state: 'success',
    });
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="contact-form">
      <h1>How can I help you?</h1>
      <form onSubmit={sendMessageHandler}>
        <label>
          <span>Email</span>
          <input onChange={inputChangeHandler} value={userData?.email || ''} type="email" name="email" />
        </label>
        <label>
          <span>Name</span>
          <input onChange={inputChangeHandler} value={userData?.name || ''} type="text" name="name" />
        </label>
        <label className="contact-form-textarea">
          <span>Message</span>
          <textarea onChange={inputChangeHandler} value={userData?.message || ''} name="message" cols="30" rows="10" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
