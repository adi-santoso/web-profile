
export default function Project() {
    return (
        <div className="container-xl h-screen pe-20 ps-20"
             style={{
                 backgroundColor: "#100E0E",
             }}>
            <div className="mb-14" style={{width: 'max-content'}}>
                <h1 style={{fontSize: '55px'}}>
                    <b>Selected Projects</b>
                </h1>
                <div id="rectangle"
                     style={{backgroundColor: "#5364FF", width: '100%', height: '20px'}}></div>
            </div>
            <table className="h-screen table-fixed">
                <tbody>
                <tr>
                    <td width={'50%'} style={{verticalAlign:'top', padding:'10px', marginRight:'10%'}}>
                        <div className="border border-solid border-white"
                             style={{
                                 borderColor:"#5364FF",
                                 paddingLeft:'2.5rem',
                                 paddingBottom:'5rem',
                                 paddingRight:'2.5rem',
                                 paddingTop:'2.5rem'}}
                        >
                            <div className="mb-5 ps-20">
                                <h1 style={{fontSize: '30px', textTransform: 'uppercase'}}>
                                    <b>POS TANJIDOR (POINT OF SALE)</b>
                                </h1>
                                <div id="rectangle"
                                     style={{backgroundColor: "#5364FF", width: '100%', height: '5px'}}></div>
                            </div>
                            <p className={'text-xl'}>
                                An internal application that aims to record sales transactions in several stores. The application consists of a Web Control Panel which includes product management, stock recording, and an Android Mobile which has features such as a cashier application
                            </p>
                        </div>
                    </td>
                    <td width={'50%'} style={{verticalAlign: 'top', padding:'10px', marginLeft:'10%'}}>
                        <div className="border border-solid border-white p-10"
                             style={{
                                 borderColor:"#5364FF",
                                 paddingLeft:'2.5rem',
                                 paddingBottom:'5rem',
                                 paddingRight:'2.5rem',
                                 paddingTop:'2.5rem'}}
                        >
                            <div className="mb-5 ps-20">
                                <h1 style={{fontSize: '30px', textTransform: 'uppercase'}}>
                                    <b>POS TANJIDOR (POINT OF SALE)</b>
                                </h1>
                                <div id="rectangle"
                                     style={{backgroundColor: "#5364FF", width: '100%', height: '5px'}}></div>
                            </div>
                            <p className={'text-xl'}>
                                A special application on request from Jababeka Golf Cikarang that makes it easier for users to make cashless tee time and driving range bookings at golf courses. Consists of 4 Applications : Backend (Laravel), Front End (Laravel for WCP, Flutter for staff and player). available on Android and IOS platforms and has been downloaded by more than 200people.
                            </p>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    );
}