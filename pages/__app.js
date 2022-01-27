function GeralStyle(){
    return (
        <style jsx>{`
            *{
                margin:0;
                padding:0;
                box-sizing:border-box;
                background:whitesmoke;
                font-family:"Times New Roman", Times, serif;
            }
        `}</style>
    );
};

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GeralStyle />
            <Component {...pageProps} />
        </>
    );
}