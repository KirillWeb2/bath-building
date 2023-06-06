import s from "./Form.module.scss";

export const Form = () => {
  return (
    <div
      className={[
        "relative overflow-hidden bg-cover bg-no-repeat headerbg",
        s.bg,
      ].join(" ")}
      style={{
        backgroundPosition: "50%",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 w-full bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
      >
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">
            <h1 className="mb-6 text-3xl font-bold sm:text-5xl lg:text-6xl">Пора в отпуск!</h1>
            <h3 className="mb-8 text-xl font-normal lg:text-2xl">
              Заполните форму - мы с удовольствием ответим на все Ваши вопросы
            </h3>

            <div className={["flex items-center justify-center", s.form].join(' ')}>
              <div className="px-3">
                <label
                  className="text-left block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Имя
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Имя"
                />
              </div>
              <div className="px-3">
                <label
                  className="text-left block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Телефон
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="tel"
                  placeholder="Телефон"
                />
              </div>
              <div className="px-3">
                <label
                  className="text-left block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Комментарий
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Комментарий"
                />
              </div>
              <button className="mt-[23px] h-full bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-[11px] px-4 border border-blue-500 hover:border-transparent rounded">
                Отправить
              </button>
            </div>
            <div className="hidden text-center text-2xl font-bold bg-red-700 my-10 py-4">Заполните все поля</div>
            <p className="mt-10 text-sm sm:text-xl">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
          </div>
        </div>
      </div>
    </div>
  );
};
