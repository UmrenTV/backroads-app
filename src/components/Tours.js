import Title from "./Title";

import { tours } from "../data";

function Tours() {
    return (
        <section className="section" id="tours">
            <div className="section-title">
                <Title title="our" subtitle="tours" />
            </div>

            <div className="section-center featured-center">
                {tours.map(
                    ({
                        id,
                        image,
                        date,
                        title,
                        description,
                        icon,
                        country,
                        duration,
                        price,
                    }) => {
                        return (
                            <article className="tour-card" key={id}>
                                <div className="tour-img-container">
                                    <img
                                        src={image}
                                        className="tour-img"
                                        alt={title}
                                    />
                                    <p className="tour-date">{date}</p>
                                </div>
                                <div className="tour-info">
                                    <div className="tour-title">
                                        <h4>{title}</h4>
                                    </div>
                                    <p>{description}</p>
                                    <div className="tour-footer">
                                        <p>
                                            <span>
                                                <i className={icon}></i>
                                            </span>
                                            {country}
                                        </p>
                                        <p>{duration}</p>
                                        <p>{price}</p>
                                    </div>
                                </div>
                            </article>
                        );
                    }
                )}
            </div>
        </section>
    );
}
export default Tours;
