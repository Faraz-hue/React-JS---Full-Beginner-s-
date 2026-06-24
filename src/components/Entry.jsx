
export default function Entry() {
    return (
        <article className="journal-entry">
            <div className="main-img-container"><img className="main-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRPrYK6quI-mqIsnpJKQp4wPxrXU1rry0Koeyv0j1QlUP2WAMvNis&usqp=CAE&s" alt="" srcset="" />
            </div>
            <div className="main-content">
                <img src="data:image/png;base64,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" width="30px" alt="" srcset="" />
                <span>Japan</span>
                <a href="https://www.britannica.com/place/Japan">
                    View on google</a>
                <h2>Mount Fuji</h2>
                <p>12 Jan, 2021 -24 jan, 2021</p>
                <p>Mount Fouji is the tallest mountain in japan, standing at 3</p>
            </div>

        </article>
    )
}