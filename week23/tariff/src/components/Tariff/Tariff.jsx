import './Tariff.css'

export const Tariff = ({ price, speed }) => {
    let priceValue = price
    let nameSection
    let priceSection
    switch (priceValue) {
        case 300:
            nameSection = <div className="name name_blue"><h2>Безлимитный {price}</h2></div>;
            priceSection = <div className="price price_blue"><p><sup>руб</sup> <span className="price-number">{price}</span> <sub>/мес</sub></p></div>;
            break;
        case 450:
            nameSection = <div className="name name_green"><h2>Безлимитный {price}</h2></div>;
            priceSection = <div className="price price_green"><p><sup>руб</sup> <span className="price-number">{price}</span> <sub>/мес</sub></p></div>;
            break;
        case 550:
            nameSection = <div className="name name_red"><h2>Безлимитный {price}</h2></div>;
            priceSection = <div className="price price_red"><p><sup>руб</sup> <span className="price-number">{price}</span> <sub>/мес</sub></p></div>;
            break;
        case 1000:
            nameSection = <div className="name name_black"><h2>Безлимитный {price}</h2></div>;
            priceSection = <div className="price price_black"><p><sup>руб</sup> <span className="price-number">{price}</span> <sub>/мес</sub></p></div>;
            break;
    }

    return (
        <div className={"card " + (priceValue == 550 ? "main" : "")}>
            {nameSection}
            {priceSection}
            <div className="speed"><p>до {speed} Мбит/сек</p></div>
            <div className="traffic"><p>Объем включенного трафика не ограничен</p></div>
        </div>
    );
}




