import {Avatar, Card, CardHeader, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import DraftsIcon from "@mui/icons-material/Drafts";
import {red} from "@mui/material/colors";
import {LinkedIn, Mail, WhatsApp} from "@mui/icons-material";
import {width} from "@mui/system";

export default function Contact() {
    return (
        <div>
            <div className="container-contact contact-lower-bg ">

            </div>

            <div className="container-contact contact-upper-bg">

            </div>

            <div className="container-contact contact-main">
                <div className="mb-14 title" style={{width: 'max-content'}}>
                    <h1 style={{fontSize: '55px'}}>
                        <b>Contacts</b>
                    </h1>
                    <div id="rectangle"
                         style={{backgroundColor: "#5364FF", width: '100%', height: '20px'}}></div>
                </div>
                <div className="flex justify-center contact-item">
                    <div className="text-center me-5" style={{width:'30%'}}>
                        <Card sx={{bgcolor: '#606060', borderRadius:3}}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{bgcolor: '#9f9696'}}>
                                        <Mail></Mail>
                                    </Avatar>
                                }
                                title="adisantoso.developer@gmail.com"
                                titleTypographyProps={{color: 'white', fontWeight: 'bolder', fontSize: 16}}
                            />
                        </Card>
                    </div>
                    <div className="text-center ms-5" style={{width:'30%'}}>
                        <Card sx={{bgcolor: '#606060', borderRadius:3}}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{bgcolor: '#9f9696'}}>
                                        <WhatsApp/>
                                    </Avatar>
                                }
                                title="085727042754"
                                titleTypographyProps={{color: 'white', fontWeight: 'bolder', fontSize: 16}}
                            />
                        </Card>
                    </div>
                </div>

                <div className="flex justify-center contact-item mt-5">
                    <div className="text-center mx-auto" style={{width:'30%'}}>
                        <Card sx={{bgcolor: '#606060', borderRadius:3}}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{bgcolor: '#9f9696'}}>
                                        <LinkedIn/>
                                    </Avatar>
                                }
                                title="085727042754"
                                titleTypographyProps={{color: 'white', fontWeight: 'bolder', fontSize: 16}}
                            />
                        </Card>
                    </div>
                </div>

            </div>
        </div>

    );
}