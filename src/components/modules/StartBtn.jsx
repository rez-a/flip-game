const StartBtn = () => {
  const reload = () => window.location.reload();
  return (
    <button
      onClick={reload}
      className="bg-yellow-500 mt-3 hover:bg-yellow-600 transition-all duration-300 rounded py-2 px-12 text-white font-semibold"
    >
      شروع دوباره
    </button>
  );
};

export default StartBtn;
