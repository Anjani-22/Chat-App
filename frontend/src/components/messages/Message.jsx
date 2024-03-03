function Message() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500">I hate you!</div>
      <div className="chat-footer opacity-50 text-lg flex gap-1 items-center">
        Seen at 12:46
      </div>
      s
    </div>
  );
}

export default Message;
