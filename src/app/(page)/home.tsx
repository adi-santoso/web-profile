export default function HomePage() {
    return (
        // <div className="container h-screen place-content-center" style={{backgroundImage:'url("https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/01/satoru_gojo_jujutsu_kaisen_manga.jpg")', backgroundRepeat:'no-repeat'}}>
        <div className="container-xl h-screen place-content-center"
             style={{
                 backgroundImage:"url('bg_home.png')",
                 backgroundRepeat:'no-repeat',
                 backgroundSize:'cover',
        }}>
            <table className="h-screen table-fixed">
                <tbody>
                <tr>
                    <td width={'50%'} style={{padding:'100px', backgroundColor:"rgba(0,0,0,0.53)", height:"100%"}}>
                        <h1 style={{fontSize: '55px', textTransform: 'uppercase'}}>
                            <b>Hi, I&apos;m ADI!</b>
                            <br/><span><b className="me-5">Flutter</b></span>
                            <span style={{color: "#0CC0DF"}}><b className="is-visible">Developer</b></span>
                        </h1>
                        <p className={'text-end text-3xl'}>
                            yet, still in learning React!
                        </p>
                    </td>
                    <td width={'50%'}>

                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    );
}