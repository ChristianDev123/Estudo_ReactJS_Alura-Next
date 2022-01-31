import { Box, Image, Text, TextField } from "@skynexui/components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import paleta_cores from "../paleta_cores.json";


export default function home_page() {
    const [login_usuario, set_login_usuario] = useState('');
    const [imagem_usuario, set_imagem_usuario] = useState('');
    const roteamento = useRouter();
    useEffect(() => {
        set_imagem_usuario(`https://github.com/${login_usuario}.png`);
    }, [login_usuario]);
    return (
        <>
            <Box
                as="section"
                styleSheet={{
                    backgroundColor: paleta_cores.section.roxo_escuro_pastel,
                    width: '60vw',
                    height: '40vh',
                    borderRadius: '15px',
                    padding: '10px',
                    display: "flex",
                    margin: 'auto',
                    marginTop: '150px',
                    textAlign: 'center',
                    boxShadow: '5px 5px 10px black'
                }}>
                <Box
                    styleSheet={{
                        width: '100%',
                        marginTop: '20px'
                    }}>
                    <Apresentacao_input set_usuario={set_login_usuario} usuario={login_usuario} rota={roteamento} />
                </Box>
                <Box
                    styleSheet={{
                        width: '100%',
                    }}>
                    <Imagem_dinamica imagem_usuario={imagem_usuario} />
                </Box>
            </Box>
        </>
    );
};
function Apresentacao_input(props) {
    return (
        <>
            <Box className="apresentacao">
                <Text tag='h2' styleSheet={{ color: 'white' }}>Olá bem Vindo</Text>
                <Text tag='p' styleSheet={{ color: 'white' }}>Insira seu usuário do Github:</Text>
            </Box>
            <Box className='input'>
                <form onSubmit={(evento) => {
                    evento.preventDefault()
                    props.rota.push(`/prox_page?usuario=${props.usuario}`)
                }
                }>
                    <TextField
                        value={props.usuario}
                        onChange={(evento) => props.set_usuario(evento.target.value)}
                        styleSheet={{ backgroundColor: 'whitesmoke', color: paleta_cores.cor_inputs.roxo_escuro_pastel, border: `1px solid purple`, width: '70%', margin: 'auto' }}
                    />
                    <input type='submit' value='Entrar'/>
                    <style jsx>{`
                        input{
                            background:whitesmoke;
                            padding:10px;
                            font-size:18px;
                            font-family:times;
                            border:1px solid ${paleta_cores.div_imagem.Roxo_escuro};
                            border-radius:15px;
                        }
                        input:hover{
                            background:${paleta_cores.div_imagem.Roxo_escuro};
                            color:white;
                            transition:.7s;
                        }`}</style>
                </form>
            </Box>
        </>
    );
};
function Imagem_dinamica(props) {
    return (
        <>
            <Box
                styleSheet={{
                    backgroundColor: paleta_cores.div_imagem.Roxo_escuro,
                    width: '60%',
                    height: '70%',
                    padding: '10px',
                    textAlign: 'center',
                    margin: 'auto',
                    marginTop: '20px',
                    borderRadius: '10px',
                }}
            >
                {props.imagem_usuario.length > 25 && <Image src={props.imagem_usuario} styleSheet={{
                    width: '60%',
                    height: '90%',
                    borderRadius: '10px',
                    margin: 'auto',
                    marginTop: '5px'
                }} />}
            </Box>
        </>
    );
};