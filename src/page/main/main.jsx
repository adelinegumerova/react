import Image from "/main/pngegg.png";
import SliderMain from "../../component/slider/slider";
import Accordion from "../../component/accordion/accordion";


export default function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main_content">
          <br></br>  <br></br>
          <div className="info">
            <img src={Image} alt="" className="img" />
            <div className="info_content">
              <h2 >PetsShop</h2>
              <p className="text">
              Для счастливой жизни ваших домашних питомцев
              </p>
            </div>
          </div>
          <SliderMain />
          <div className="accordion">
            <Accordion title="Какие виды товаров вы предлагаете?
" content="Наш зоомагазин предлагает широкий ассортимент товаров" />
            <Accordion title="Какие бренды кормов представлены?
" content="Royal Canin, Hill's, Purina, Acana, Orijen" />
            <Accordion title="Есть ли у вас услуги по консультации?" content="У нас есть профессиональные консультанты" />
            <Accordion title="Какие акции и скидки у вас действуют на данный момент?
" content="Мы регулярно проводим акции и предлагаем скидки на различные товары для животных" />
          </div>
        </div>
      </div>
    </main>
  );
}
