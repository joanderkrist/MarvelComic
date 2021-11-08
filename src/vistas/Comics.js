import { useEffect, useState } from "react";
import CardComics from "../compents/CardComics";


const Comics = () => {
    const [ respApi, setRespApi ] = useState([])

    useEffect(() => {
        callApi();
    }, [])

    const callApi = async()=>{
        const url = "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=2c7646b1592cf7f1709584014a70e2b5&hash=e76786c27c33203502f260f6be27384b"
        await fetch(url).then(response => response.json())
            .then(data => {
                console.log("data aqui", data.data.results)
                setRespApi(data.data.results)
            })
            .catch(e=>{
                console.log("error consulta comics", e)
            })
    }

    return (
        <>
            <div className="container">
                <div className="row">

                    {
                        respApi.length >= 1 && respApi.map((k, value) => {
                                console.log("img", `${k.thumbnail.path}.${k.thumbnail.extension}`)
                                return (
                                    <div className="col-sm-4 py-3" key={k.id}>
                                        <CardComics
                                            title={k.title}
                                            description={k.description}
                                            fotoChica={`${k.thumbnail.path}.${k.thumbnail.extension}`}
                                            id={k.id}
                                        />
                                    </div>
                                )

                            }
                        )



                    }



                </div>
            </div>
        </>
    )
}
export default Comics;
