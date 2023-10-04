const Detail = ({detail}) => {
    const {image_url,title, details } = detail;
    return (
        <div>
            <h1 className="text-xl font-bold">Dragon Details</h1>
                    <img src={image_url} alt="" />
                    <p>{title}</p>
                    <p>{details}</p>
        </div>
    );
};

export default Detail;