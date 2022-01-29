import { Box, Button, Text, TextField } from "@skynexui/components";
import { createClient} from "@supabase/supabase-js";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import paleta_cores from '../paleta_cores.json';
export default function Prox_pagina(){
    const roteamento_index = useRouter()
    const [lista_mensagem, set_lista_mensagem] = useState([]);
    const [mensagem_txt, set_mensagem_txt] = useState('');
    const chave_anon = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQ4MTE0MywiZXhwIjoxOTU5MDU3MTQzfQ.g0aDLczyn3UMOO7pXIP51-OCcEUTGFg5vhwFHW2PfuI';
    const url = 'https://hdejpuyftsbathlcxmpz.supabase.co';
    const ligacao = createClient(url,chave_anon);
    useEffect(()=>{
        atualizar_mensagem(ligacao,set_lista_mensagem);
    },[lista_mensagem]);
    return(
        <Box 
        as='section'
        styleSheet={{
            backgroundColor:`${paleta_cores.section.cinza_escuro}`,
            width:'70vw',
            height:'80vh',
            padding:'10px',
            margin:'auto',
            marginTop:'50px',
            borderRadius:'15px'
        }}>
            <Header_page>
                <Box>
                    <Logo_chat/>
                </Box>
                <Box>
                    <Botao_voltar roteamento={roteamento_index}/>
                </Box>
            </Header_page>
            <Caixa_mensagem>
                <Box className='mensagens' as='ul'>
                    {lista_mensagem.map((infosMensagem)=>{
                        return (
                            <>
                                <li key={infosMensagem.id}>
                                    <p className='de'><img src={`https://github.com/${infosMensagem.de}.png`}/>{infosMensagem.de}</p>
                                    <p className='text'>{infosMensagem.texto}</p>
                                    <p className='data'>{infosMensagem.data}</p>
                                </li>
                                <style jsx>{`
                                    li{
                                        color:white;
                                        text-shadow:1px 1px 2px black;
                                        font-size:18px;
                                        padding:10px;
                                        border-radius:15px;
                                        background:${paleta_cores.background_componentes.roxo_claro};
                                        list-style:none;
                                        width:20vw;
                                        margin-bottom:10px;
                                    }
                                    li p img{
                                        height:30px;
                                        width:30px;
                                        margin-right:5px;
                                        border-radius:7px;
                                    }
                                    li p {
                                        padding:5px;
                                        margin:0;
                                    }
                                    p.de{
                                        text-align:left;
                                        width:60%;
                                        border:1px solid white;
                                        border-radius:10px;
                                        display:flex;
                                    }
                                    p.text{
                                        text-align:center;
                                    }
                                    p.data{
                                        text-align:right;
                                    }
                                `}</style>
                            </>
                        );
                    })}
                </Box>
            </Caixa_mensagem>
            <Caixa_inputs>
                <TextField as='textarea'
                value={mensagem_txt}
                styleSheet={{
                    width:'90%',
                    border:`1px solid ${paleta_cores.section.roxo_escuro_pastel}`,
                    hover:{
                        border:`2px solid ${paleta_cores.section.roxo_escuro_pastel}`,
                    }, 
                    focus:{
                        border:`2px solid ${paleta_cores.section.roxo_escuro_pastel}`,
                    }
                }}
                onChange={(evento)=>set_mensagem_txt(evento.target.value)}
                onKeyPress={(evento)=>{
                    if(evento.key == 'Enter'){
                        evento.preventDefault()
                        cria_mensagem(ligacao,mensagem_txt,set_lista_mensagem,lista_mensagem);
                        set_mensagem_txt('');
                    }
                }}
                />
                <Botao_enviar_mensagem ligacao_BD={ligacao} mensagem={mensagem_txt} muda_lista={set_lista_mensagem} lista={lista_mensagem}/>
            </Caixa_inputs>
        </Box>
    );
};
function cria_mensagem(ligacao_BD,mensagem,muda_lista,lista){
    const obj_msg = {
        de:'ChristianDev123',
        texto:mensagem,
        data:'29/01/2022'
    };
    ligacao_BD
    .from('mensagens')
    .insert([obj_msg]);
    muda_lista([...lista,obj_msg]);
};
function Header_page(props){
    return(
        <>
            <header>{props.children}</header>
            <style jsx>{`
                header{
                    background-color:${paleta_cores.background_componentes.cinza_avermelhado};
                    width:90%;
                    height:10%;
                    margin:auto;
                    padding:20px;
                    border-top-left-radius:10px;
                    border-top-right-radius:10px;
                    margin-top:20px;
                    display:flex;
                    justify-content:space-between;
                }
            `}</style>
        </>
    );
};
function Caixa_mensagem(props){
    return(
        <>
            <Box styleSheet={{
                background:`${paleta_cores.background_componentes.cinza_avermelhado}`,
                width:'90%',
                height:'50%',
                margin:'auto',
                borderTop:'1px solid white',
                padding:'20px',
            }}>{props.children}</Box>
        </>
    );
};
function Caixa_inputs(props){
    return(
        <>
            <Box styleSheet={{
                background:`${paleta_cores.background_componentes.cinza_avermelhado}`,
                width:'90%',
                height:'10%',
                margin:'auto',
                padding:'20px',
                borderTop:'1px solid white',
                borderBottomRightRadius:'15px',
                borderBottomLeftRadius:'15px',
                display:'flex',
            }}>{props.children}</Box>
        </>
    );
}
function Logo_chat(){
    return(
        <>
            <Text styleSheet={{
                textAlign:'center',
                padding:'10px',
                color:paleta_cores.section.roxo_escuro_pastel,
                fontWeigth:'bolder',
                fontFamily:'times',
                fontSize:'30px',
                border:'1px solid white',
                borderRadius:'5px',
                background:'whitesmoke'
            }
            }>
                Chat Chris
            </Text>
        </>
    );
};
function Botao_voltar(props){
    return(
            <Button
            iconName="ArrowLeft"
            variant="secondary"
            styleSheet={{
                background:paleta_cores.cor_inputs.roxo_escuro_pastel,
                border:`1px solid ${paleta_cores.cor_inputs.roxo_escuro_pastel}`,
                color:'white',
                borderColor:paleta_cores.cor_inputs.roxo_escuro_pastel,
                hover:{
                    background:paleta_cores.div_imagem.Roxo_escuro,
                    borderColor:paleta_cores.div_imagem.Roxo_escuro,
                },
                focus:{
                    background:paleta_cores.cor_inputs.roxo_escuro_pastel,
                    borderColor:paleta_cores.cor_inputs.roxo_escuro_pastel,
                }
            }}
             onClick={()=>props.roteamento.push('/')}
            />
    );
};
function Botao_enviar_mensagem(props){
    return(
        <Button
        iconName="arrowUp"
        variant="secondary"
        styleSheet={{
            background:paleta_cores.cor_inputs.roxo_escuro_pastel,
            border:`1px solid ${paleta_cores.cor_inputs.roxo_escuro_pastel}`,
            color:'white',
            borderColor:paleta_cores.cor_inputs.roxo_escuro_pastel,
            hover:{
                background:paleta_cores.div_imagem.Roxo_escuro,
                borderColor:paleta_cores.div_imagem.Roxo_escuro,
            },
            focus:{
                background:paleta_cores.cor_inputs.roxo_escuro_pastel,
                borderColor:paleta_cores.cor_inputs.roxo_escuro_pastel,
            }
        }}
            onClick={()=>{
                cria_mensagem(props.ligacao_BD,props.mensagem,props.muda_lista,props.lista);
            }}
        />
    );
};
function atualizar_mensagem(ligacao_BD,muda_lista){
    ligacao_BD
    .from('mensagens')
    .select('*')
    .then(({data})=>{
        muda_lista(data);
    });
}