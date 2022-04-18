const Notification = ({ text, state }) => {
  return <div className={`${state} note`}>{text}</div>;
};

export default Notification;
