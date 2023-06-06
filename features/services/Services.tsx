import baths1 from "../../assets/img/baths/1.jpg";
import baths2 from "../../assets/img/baths/2.jpg";
import baths3 from "../../assets/img/baths/3.jpg";

import water_zones1 from "../../assets/img/water_zones/1.jpg";
import water_zones2 from "../../assets/img/water_zones/2.jpg";
import water_zones3 from "../../assets/img/water_zones/3.jpg";

import billiard1 from "../../assets/img/billiard/1.jpg";
import { List } from "@/components/List/List";
import { ServiceType } from "@/types/Sevice";
import { Form } from "@/components/Form/Form";
import { useCallback, useState } from "react";
import { Modal } from "@/components/modal/Modal";

const baths: ServiceType[] = [
  {
    id: 1,
    image: baths1,
    text: "Традиционный хаммам",
    desc: "Полюбившаяся за века парная",
    modalText:
      "Древний секрет хорошего самочувствия и молодости. Отдых на горячем мраморе в облаке невесомой мыльной пены, пилинг и мыльный массаж очистят душу и тело, придадут сил и вернут хорошее настроение.",
  },
  {
    id: 2,
    image: baths2,
    text: "Грязевой хаммам",
    desc: "Парная с 3 видами глин, 2 видами грязей и кофейным жмыхом",
    modalText:
      "Вы можете воспользоваться одной из 3 видов целебных глин, двух видов грязей и кофейным жмыхом, а после хорошенько прогреться следуя инструкциям на входе. Такая процедура делает кожу упругой, тонизирует мышцы, стимулирует обменные процессы организма.",
  },
  {
    id: 3,
    image: baths3,
    text: "Хаммам мыльный",
    desc: "Баня с косметической грязью, мыльной пеной и органическим скрабом",
    modalText: `После посещения мыльного хаммама гарантировано очищение и омоложение кожи.
    Отличительная особенность этого вида бани — ритуал по нанесению на тело натуральных компонентов: косметической грязи, органического скраба и натуральной мыльной пены. В городском курорте TERMOLAND каждый подберет для себя оптимальную процедуру. Вы сможете провести её самостоятельно или совместно со SPA-мастером.`,
  },
];

const water_zones: ServiceType[] = [
  {
    id: 1,
    image: water_zones3,
    text: "Большой гидромассажный бассейн",
    desc: "лучшее место для релакса после парных",
    modalText: `Самое подходящее место для отдыха после банных процедур.
    Бассейн наполнен тёплой водой, имеет глубину — 1,3 м. и размер 22×11 м.
    Температура воды — 34 ℃.`,
  },
  {
    id: 2,
    image: water_zones2,
    text: "Детский бассейн",
    desc: "Безопасный и с водными аттракционами",
    modalText: `Самое подходящее место для игры в морских пиратов и веселых дельфинов. Скатиться с горки, поиграть с фонтанами, принести маме воды в ладошках — самые дорогие моменты с вашими детьми в TERMOLAND. И это не считая оздоровительного эффекта, который оказывает вода — закаляйтесь и укрепляйте иммунитет своих деток.
    Детский бассейн предназначен для детей от 3-х лет в присутствии родителей или ответственных сопровождающих.
    Температура бассейна +35С`,
  },
  {
    id: 3,
    image: water_zones1,
    text: "Душ впечатлений",
    desc: "Сеанс цветотерапии в приятной атмосфере",
    modalText: `Ничего так не улучшает настроение, как цветотерапия. А если сочетать её с правильной температурой, напором воды и с приятными звуками, то эффект превзойдет все ожидания! Душ впечатлений состоит из нескольких программ: пение птиц, раскаты грома, сверкание молнии, шум океана и другие звуки не оставят вас равнодушными.`,
  },
];

const billiard: ServiceType[] = [
  {
    id: 1,
    image: billiard1,
    text: "Бильярд",
    desc: "Стандартный",
    modalText: "",
  },
];
// flex flex-wrap justify-around

export const Services = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [activeService, setActiveService] = useState<ServiceType | null>(null);

  const hiddenModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const visibleModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  return (
    <div id="service">
      <div className="py-20 mx-auto max-w-screen-xl">
        <div className="py-12 bg-gray-100">
          <p className="text-center text-2xl text-black font-bold">
            Бани и сауны
          </p>
          <List
            openModal={visibleModal}
            setActiveService={setActiveService}
            list={baths}
          />
        </div>
        <div className="py-12 bg-gray-100">
          <p className="text-center text-2xl text-black font-bold">
            Водные зоны
          </p>
          <List
            openModal={visibleModal}
            setActiveService={setActiveService}
            list={water_zones}
          />
        </div>
        <div className="py-12 bg-gray-100">
          <p className="text-center text-2xl text-black font-bold">
            Бильярдные зоны
          </p>
          <List
            openModal={visibleModal}
            setActiveService={setActiveService}
            list={billiard}
          />
        </div>
      </div>
      <div className="pt-20">
        <Form />
      </div>
      {modalVisible && (
        <Modal activeService={activeService} hiddenModal={hiddenModal} />
      )}
    </div>
  );
};
