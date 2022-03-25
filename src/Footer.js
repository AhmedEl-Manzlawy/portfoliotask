function Footer(){
    return(
        <>
        {/* <h3 style={{ height:"300px" , backgroundColor:"black"}}>Hello from Footer </h3> */}
        <div className="bg-gradien bg-black t text-white d-flex">
            <div className=" col-4 my-5">
                <div>
                <h2 className="text-center">Get In Touch</h2>
                <p className="text-center"><i class="fas fa-envelope"></i> ahmedelmanzlawy248@gmail.com</p>
                <p className="text-center"> <i class="far fa-address-book"></i> 01090983503</p>
                </div>
            </div>
            <div className=" col-4 my-5 py-5">
                <button className="btn-register btn btn-lg btn-outline-light   rounded-pill border-light fw-bold fs-6 ">CONTACT ME</button>
            </div>
            <div className=" col-4 my-5 py-5">
                <p ><i class="fab fa-linkedin"></i>  <i class="fab fa-facebook-square"></i>  <i class="fab fa-twitter-square"></i></p>
                <p>COPY RIGHT@2022</p>
            </div>
        </div>
        
        </>
    )

}

export default Footer;