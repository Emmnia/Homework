import './Tariff.css'

export const Tariff = ({ price, speed, card, onClick, isSelected }) => {
    let priceValue = price
    let nameClass
    let priceClass
    switch (priceValue) {
        case 300:
            nameClass = "name_blue";
            priceClass = "price_blue";
            break;
        case 450:
            nameClass = "name_green";
            priceClass = "price_green";
            break;
        case 550:
            nameClass = "name_red";
            priceClass = "price_red";
            break;
        case 1000:
            nameClass = "name_black";
            priceClass = "price_black";
            break;
    }

    return (
        <div className={"card " + (priceValue == 550 ? "main " : "") + (isSelected ? "selected" : "")} onClick={() => onClick(card)}>
            <div className={"name " + nameClass}><h2>Безлимитный {price}</h2></div>
            <div className={"price " + priceClass}><p><sup>руб</sup> <span className="price-number">{price}</span> <sub>/мес</sub></p></div>
            <div className="speed"><p>до {speed} Мбит/сек</p></div>
            <div className="traffic"><p>Объем включенного трафика не ограничен</p></div>
        </div>
    );
}