import {useEffect} from "react";
import {useLocation, useHistory, useParams} from "react-router-dom";

const DetalleComics = (props) => {

    const navigate = useHistory()
    const {product_id} = useParams();
    const location = useLocation()

    useEffect(() => {
        console.log("title", location.state)
    }, [product_id])

    if (location.state === undefined) {
        return (
            <div>
                Lo siento no hay data
                <button className=" col-md-4 btn btn-warning"
                        onClick={navigate.goBack}>
                    Regresar
                </button>
            </div>
        )
    }

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-4">
                    <div className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-4 me-4">
                                <img src={ location.state.foto }
                                     className="card-img-top img-fluid rounded-start me-4" alt="..."/>
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title">{ location.state.title }</h5>
                                    <p className="card-text">
                                        { location.state.description }
                                    </p>
                                    <p className="card-text">
                                    </p>
                                </div>
                                <button className=" col-md-4 btn btn-warning"
                                        onClick={navigate.goBack}>
                                    Regresar
                                </button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default DetalleComics;
