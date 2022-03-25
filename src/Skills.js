function Skills(){
    return(
        <>
        <div className="p-3 mb-2 bg-black bg-gradient text-white">
            <div className="mx-5  my-3 px-5">
                <h1 className="fs-2">Skills</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Recusandae laboriosam ullam accusantium libero facere? 
                Accusantium nesciunt quam facilis repellendus perferendis nihil consequatur ea recusandae excepturi magnam quibusdam,
                 doloremque odio totam.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Recusandae laboriosam ullam accusantium libero facere? 
                Accusantium nesciunt quam facilis repellendus perferendis nihil 
            </p>
            </div>

            <div className="col d-flex mx-5  my-4 px-5">
                <div className=" col-4 py-5 my-3">
                    <h2 className="text-decoration-underline text-warning p-2">My Focus</h2>
                    <p className="p-2">Angular</p>
                    <p className="p-2">Responsive Design</p>
                    <p className="p-2">Web Design</p>
                    
                </div> 
                <div className="col-8 p-4 text-white" >

                    <p>HTML</p>
                    <div className="progress">
                    
                        <div className="progress-bar" role="progressbar"
                        style={{width: "90%"}} 
                        aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div> 
                    <p>CSS</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar"
                        style={{width: "85%"}} 
                        aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    <p>React</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar"
                        style={{width: "60%"}} 
                        aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    <p>Bootstrap</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar"
                        style={{width: "75%" , height:"100px"}} 
                        aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    <p>Java Script</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar"
                        style={{width: "70%"}} 
                        aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )

}

export default Skills;