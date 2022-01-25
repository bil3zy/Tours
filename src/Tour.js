import React, {useState} from "react";

const Tour = ({id, image, name, price, info, removeTour}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tours-info">
          {readMore ? info : info.substring(0, 200)}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? `Show Less` : `Read More`}
          </button>
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
          <button className="delete-btn" onClick={() => removeTour(id)}>
            Delete
          </button>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
