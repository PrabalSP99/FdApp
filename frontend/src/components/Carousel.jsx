import React from 'react';

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner" id='carousel' style={{ height: "650px" }}>
                    <div className="carousel-item active">
                        <img src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Doto/egg-fried-rice/" className="d-block w-100" style={{
                            filter: "brightness(30%)", objectFit: "fill"
                        }} alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://plus.unsplash.com/premium_photo-1700751850890-63da65f9ce88?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{ filter: "brightness(30%)", objectFit: "fill" }} alt="Pastry" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHwwfDB8fHww" className="d-block w-100" style={{ filter: "brightness(30%)", objectFit: "fill" }} alt="Meal" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;

// <div>
// <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit:"contain" }} >
//    <div className="carousel-inner" id='carousel' style={{ height: "650px"}}>
//        <div className="carousel-item active">
//            <img src="https://source.unsplash.com/random/600×400/?Pizza" className="d-block w-100" style={{
//                filter: "brightness(30%)",objectFit:"fill"
//            }} alt="..."/>
//        </div>
//        <div className="carousel-item">
//            <img src="https://source.unsplash.com/random/600×400/?Pastry" className="d-block w-100" style={{ filter: "brightness(30%)",objectFit:"fill" }} alt="..." />
//        </div>
//        <div className="carousel-item">
//            <img src="https://source.unsplash.com/random/600×400/?Meal" className="d-block w-100" style={{ filter: "brightness(30%)",objectFit:"fill" }} alt="..." />
//        </div>
//    </div>
//    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//        <span className="visually-hidden">Previous</span>
//    </button>
//    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//        <span className="carousel-control-next-icon" aria-hidden="true"></span>
//        <span className="visually-hidden">Next</span>
//    </button>
// </div>
// </div>






// <div>
// <div id="carouselExampleFade" className="object-cover carousel slide carousel-fade" data-bs-ride="carousel"  >
//    <div className="carousel-inner" id='carousel' style={{ height: "650px"}}>
//        <div className="carousel-item active">
//            <img src="https://source.unsplash.com/random/600×400/?Pizza" className="d-block w-100" style={{
//                filter: "brightness(30%)",objectFit:"fill"
//            }} alt="..."/>
//        </div>
//        <div className="carousel-item">
//            <img src="https://source.unsplash.com/random/600×400/?Pastry" className="d-block w-100" style={{ filter: "brightness(30%)",objectFit:"fill" }} alt="..." />
//        </div>
//        <div className="carousel-item">
//            <img src="https://source.unsplash.com/random/600×400/?Meal" className="d-block w-100" style={{ filter: "brightness(30%)",objectFit:"fill" }} alt="..." />
//        </div>
//    </div>
//    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//        <span className="visually-hidden">Previous</span>
//    </button>
//    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//        <span className="carousel-control-next-icon" aria-hidden="true"></span>
//        <span className="visually-hidden">Next</span>
//    </button>
// </div>
// </div>



