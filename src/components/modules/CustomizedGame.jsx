import useCustomeGameHandler from "src/hooks/useCustomeGameHandler";

const CustomizedGame = () => {
  const {
    moveCount,
    time,
    custome,
    error,
    setIsOpen,
    onChangeHanddler,
    onSubmitHandler,
  } = useCustomeGameHandler();

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
      <div className="pb-4 border-b">
        <h2 className="text-lg font-bold mb-2 text-center">
          تعداد حرکت و زمان مد نظر خود را تنظیم کنید
        </h2>
        <p className="text-xs text-gray-600 text-center">
          بصورت پیش فرض 40 حرکت و 120 ثانیه در نظر گرفته خواهد شد
        </p>
      </div>
      <div>
        <label
          htmlFor="moveCount"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          تعداد حرکت
        </label>
        <input
          type="text"
          id="moveCount"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none focus:border-gray-500 transition-all duration-300"
          value={custome.moveCount}
          onChange={onChangeHanddler}
        />
        {error.moveCount && (
          <small className="bg-rose-100 text-rose-600 text-[10px] px-2 py-0.5 rounded">
            لطفا عدد استاندارد یا بیشتر از صفر وارد کنید
          </small>
        )}
      </div>
      <div>
        <label
          htmlFor="time"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white relative before:absolute before:content-['(ثانیه)'] before:text-[10px] before:text-gray-500 before:top-1/2 before:-translate-y-1/2 before:right-8"
        >
          زمان
        </label>
        <input
          type="text"
          id="time"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none focus:border-gray-500 transition-all duration-300"
          value={custome.time}
          onChange={onChangeHanddler}
        />
        {error.time && (
          <small className="bg-rose-100 text-rose-600 text-[10px] px-2 py-0.5 rounded">
            لطفا عدد استاندارد یا بیشتر از صفر وارد کنید
          </small>
        )}
      </div>
      <div className="flex items-center gap-2 justify-between">
        <button
          type="submit"
          disabled={Object.values(error).includes(true)}
          className="bg-sky-500 mt-3 hover:bg-sky-600 transition-all duration-300 rounded-lg py-2 px-4 text-white font-semibold disabled:bg-gray-300 text-sm"
        >
          ثبت
        </button>
        <button
          onClick={() => setIsOpen(false)}
          type="button"
          className="bg-rose-500 mt-3 hover:bg-rose-600 transition-all duration-300 rounded-lg py-2 px-4 text-white font-semibold disabled:bg-gray-300 text-sm"
        >
          بستن
        </button>
      </div>
    </form>
  );
};

export default CustomizedGame;
