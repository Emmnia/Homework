import "./Card.css";

export const Card = ({ name, universe, alterego, occupation, friends, superpowers, url, info }) => {
  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <div class="info">
        <p><b>Вселенная:</b> {universe}</p>
        <p><b>Альтер эго:</b> {alterego}</p>
        <p><b>Род деятельности:</b> {occupation}</p>
        <p><b>Друзья:</b> {friends}</p>
        <p><b>Суперсилы:</b> {superpowers}</p>
        <details>
          <summary><b>История</b></summary>
          <p>{info}</p>
        </details>
      </div>
      <div className="image-container">
        <img src={url} alt="hero-image" />
      </div>
    </div>
  );
};
