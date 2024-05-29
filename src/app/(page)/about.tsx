
export default function About() {
    return (
        <div className="container-xl h-screen pe-20 ps-20"
             style={{
                 backgroundColor:"#100E0E",
                 backgroundImage:'url("bg_about.png")',
                 backgroundRepeat:'no-repeat',
                 backgroundSize:'contain',
        }}>
            <table className="h-screen table-fixed">
                <tbody>
                <tr>
                    <td width={'40%'}>
                    </td>
                    <td width={'60%'}>
                        <div className="mb-5" style={{width:'max-content'}}>
                            <h1 style={{fontSize: '55px', textTransform: 'uppercase'}}>
                                <b>ABOUT ME</b>
                            </h1>
                            <div id="rectangle"
                                 style={{backgroundColor: "#C4BBAF", width: '100%', height: '20px'}}></div>
                        </div>
                        <p className={'text-xl'}>
                            Experienced Mobile and web programmer with more than 3 years professional experience in
                            developing and maintaining mobile or web applications.
                            <br/>Accustomed to analyzing a system and designing it into an application that can work
                            properly and precisely. expert in programming languages Dart (Flutter), PHP (Laravel),
                            Javascript, Java, Java Native. Experienced in leading a project with a team scale of 4-8
                            people, accommodating and resolving complaints with clients directly
                        </p>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    );
}