import { Box } from "@skynexui/components";
import { useState } from "react";
import sticker_array from '../../Stickers.json';
import paleta_cores from '../../paleta_cores.json';

export default function Botao_sticker(props){
    const [controle_sticker,set_controle_sticker] = useState(false);
    return(
        <>
            { controle_sticker && (
                <Box as='ul' styleSheet={{
                    backgroundColor:paleta_cores.section.cinza_escuro,
                    padding:'10px',
                    position:'absolute',
                    marginTop:'-155px',
                    width:'10vw',
                    height:'20vh'
                }}>
                    {sticker_array.lista_stickers.map((stickers,index)=>{
                        return (
                            <Box >
                                <li key={index}>
                                    <img src={stickers} 
                                    onClick={()=>{
                                        props.onStickerClick(`:sticker:${stickers}`);
                                        set_controle_sticker(!controle_sticker)}
                                    }/>
                                </li>
                                <style jsx>{`
                                    li{
                                        list-style:none;
                                    }
                                    li img{
                                        width:4vw;
                                        height:9vh;
                                    }
                                    li img:hover{
                                        width:5vw;
                                        height:10vh;
                                        transition:.7s;
                                    }
                                `}</style>
                            </Box>
                        )
                    })}
                </Box>
            )}
            <Box>
                <input type='button' value='😁' onClick={()=>set_controle_sticker(!controle_sticker)}/>    
            </Box>
        </>
    )
}