function Portfolio(){
    return(
        <>
        {/* <h3 style={{ height:"300px" , backgroundColor:"white"}}>Hello from Portfolio </h3> */}
        <h1 className="text-start mx-5 my-4 px-5">Portfolio</h1>
        <div className="text-white ">
        <div className="d-flex my-5 ">
            <div className="col-4 bg-secondary w-25  mx-5 py-5 px-5"  >
                <h1>WEB Design</h1>
            </div>
            <div className="col-4 bg-dark mx-5 py-5 px-5 w-25">
            <h1>Mobile Design</h1>
            </div>
            <div className="col-4 bg-secondary mx-5 py-5 px-5 w-25 ">
            <h1>LOGO Design</h1>
            </div>
        </div>
        <div className="d-flex my-5 ">
            <div className="col-4 bg-dark mx-5 py-5 px-5 w-25 ">
            <h1>WEB APPLICATION</h1>
            </div>
            <div className="col-4 bg-secondary mx-5 py-5 px-5 w-25 ">
            <h1>MOBILE APPLICATION</h1>
            </div>
            <div className="col-4 bg-dark mx-5 py-5 px-5 w-25 ">
            <h1>PWA DEVELOPMENT</h1>
            </div>
        </div>
        </div>
        
        
        </>
    )

}

export default Portfolio;