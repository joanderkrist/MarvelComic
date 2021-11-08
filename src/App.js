import './App.css';
import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import DetalleComics from './vistas/DetalleComics'
import Comics from './vistas/Comics'

function App() {
    return (
    <>
        <BrowserRouter>
            <Switch>
                <Route  path="/Comics/:product_id" component={DetalleComics} />
                <Route  path="/" component={Comics} />
            </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;

/*
 <div style={{display: 'flex', justifyContent: 'space-between', flexFlow:'row-wrap'}}>
                <div style={{display:"flex", with:"60%"}}>
                    <input value="hola"  style={{marginRight:10,marginTop:15, height: "3rem"}} type="text" placeholder="iput"></input>
                </div>
                <div style={{with:"60%"}}>
                    <label style={{display:"flex"}}>
                        fecha aqui
                    </label>
                    <div style={{display:"flex",justifyContent: 'flex-end'}}>
                        <button
                            className="btn btn-primary"
                            style={ check2? {backgroundColor:'red',marginTop:15, height: "3rem"}:{backgroundColor:'blue',marginTop:15, height: "3rem"} }
                            onClick={()=>{
                                if(check3)  {
                                    setCheck3(false)
                                    setCheck2(true)
                                }else{
                                    setCheck2(true)
                                }
                            }}
                        >
                            btn 1
                        </button>
                        <button
                            className="btn btn-primary"
                            style={ check3 ? {backgroundColor:'red',marginTop:15, height: "3rem"}:{backgroundColor:'blue',marginTop:15, height: "3rem"} }
                            onClick={()=>{
                                if(check2)  {
                                    setCheck2(false)
                                    setCheck3(true)
                                }else{
                                    setCheck3(true)
                                }
                            }}
                        >
                            btn 2
                        </button>
                    </div>
                </div>
        </div>
*/
