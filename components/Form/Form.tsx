import axios from "axios";
import s from "./Form.module.scss";
import { useState } from "react";
import { ApplicationType } from "@/types/Applications";

export const Form = () => {
  const [form, setForm] = useState<ApplicationType>({
    message: "",
    name: "",
    phone: "",
  });

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const send = async () => {
    if (!form.message || !form.name || !form.phone) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 2000);
      return;
    }

    try {
      setIsLoading(true);
      await axios.post("/api/send", form).then((res) => {
        setIsLoading(false);
        setIsSuccess(true);

        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id="form"
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
            <h1 className="mb-6 text-3xl font-bold sm:text-5xl lg:text-6xl">
              Пора в отпуск!
            </h1>
            <h3 className="mb-8 text-xl font-normal lg:text-2xl">
              Заполните форму - мы с удовольствием ответим на все Ваши вопросы
            </h3>

            <div
              className={["flex items-center justify-center", s.form].join(" ")}
            >
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
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>
              <button
                onClick={send}
                className="mt-[23px] h-full bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-[11px] px-4 border border-blue-500 hover:border-transparent rounded"
              >
                {isLoading ? "Отправка..." : "Отправить"}
              </button>
            </div>
            {isError && (
              <div className="text-center text-2xl font-bold bg-red-700 my-10 py-4">
                Заполните все поля
              </div>
            )}
            {isSuccess && (
              <div className="text-center text-2xl font-bold bg-green-700 my-10 py-4">
                Форма отправлена
              </div>
            )}
            <p className="mt-10 text-sm sm:text-xl">
              Нажимая на кнопку, вы даете согласие на обработку персональных
              данных и соглашаетесь c политикой конфиденциальности
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
