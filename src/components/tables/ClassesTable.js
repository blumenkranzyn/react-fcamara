import React, { useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import { Grid } from "@material-ui/core";
import TableCustom from "./TableCustom";
import { ClassConfig } from "./ClassConfig";
import { Fade } from 'react-reveal';
import * as actions from "../../store/actions";
import EditClass from "../dialogs/EditClass";

const ClassTable = () => {
    const refCustomTable = useRef(null);
    const dispatch = useDispatch()
    const data = [{
        "description": "Tools",
        "supplier": "Pixope",
        "project": "VENTURE LABS",
        "amount": "36660.46",
        "dueDate": "07/01/2019"
    }, {
        "description": "Books",
        "supplier": "DabZ",
        "project": "DILIGENTE",
        "amount": "79340.86",
        "dueDate": "29/05/2019"
    }, {
        "description": "Clothing",
        "supplier": "Skivee",
        "project": "DATARAIN",
        "amount": "74197.34",
        "dueDate": "06/06/2019"
    }, {
        "description": "Movies",
        "supplier": "Oyonder",
        "project": "X.CASH",
        "amount": "54978.08",
        "dueDate": "03/11/2019"
    }, {
        "description": "Automotive",
        "supplier": "Brightdog",
        "project": "VENTURE LABS",
        "amount": "70835.09",
        "dueDate": "26/09/2019"
    }, {
        "description": "Garden",
        "supplier": "Dabjam",
        "project": "X.CASH",
        "amount": "25091.59",
        "dueDate": "23/02/2019"
    }, {
        "description": "Baby",
        "supplier": "Topicstorm",
        "project": "X.CASH",
        "amount": "94322.00",
        "dueDate": "11/05/2019"
    }, {
        "description": "Outdoors",
        "supplier": "Edgetag",
        "project": "HELPIE",
        "amount": "26734.04",
        "dueDate": "05/05/2019"
    }, {
        "description": "Beauty",
        "supplier": "Trudeo",
        "project": "X.CASH",
        "amount": "70218.27",
        "dueDate": "06/06/2019"
    }, {
        "description": "Beauty",
        "supplier": "Mynte",
        "project": "X.CASH",
        "amount": "82411.82",
        "dueDate": "15/09/2019"
    }, {
        "description": "Sports",
        "supplier": "Brainbox",
        "project": "DILIGENTE",
        "amount": "68221.77",
        "dueDate": "22/03/2019"
    }, {
        "description": "Books",
        "supplier": "Twitterworks",
        "project": "PAKMAN",
        "amount": "29411.85",
        "dueDate": "09/12/2019"
    }, {
        "description": "Automotive",
        "supplier": "Twiyo",
        "project": "HELPIE",
        "amount": "60538.07",
        "dueDate": "13/12/2019"
    }, {
        "description": "Kids",
        "supplier": "Brainsphere",
        "project": "PAKMAN",
        "amount": "51581.54",
        "dueDate": "27/08/2019"
    }, {
        "description": "Books",
        "supplier": "Nlounge",
        "project": "DILIGENTE",
        "amount": "44706.54",
        "dueDate": "02/04/2019"
    }, {
        "description": "Shoes",
        "supplier": "Mybuzz",
        "project": "X.CASH",
        "amount": "71252.76",
        "dueDate": "09/12/2019"
    }, {
        "description": "Books",
        "supplier": "Zoozzy",
        "project": "X.CASH",
        "amount": "88769.95",
        "dueDate": "11/06/2019"
    }, {
        "description": "Clothing",
        "supplier": "Quatz",
        "project": "DATARAIN",
        "amount": "78203.84",
        "dueDate": "20/12/2019"
    }, {
        "description": "Tools",
        "supplier": "Jaloo",
        "project": "PAKMAN",
        "amount": "59515.65",
        "dueDate": "13/04/2019"
    }, {
        "description": "Music",
        "supplier": "Twitterbeat",
        "project": "HELPIE",
        "amount": "35979.30",
        "dueDate": "07/08/2019"
    }, {
        "description": "Industrial",
        "supplier": "Wordware",
        "project": "HELPIE",
        "amount": "35866.05",
        "dueDate": "01/08/2019"
    }, {
        "description": "Kids",
        "supplier": "Cogidoo",
        "project": "DILIGENTE",
        "amount": "58677.89",
        "dueDate": "06/08/2019"
    }, {
        "description": "Baby",
        "supplier": "Jamia",
        "project": "DILIGENTE",
        "amount": "64927.04",
        "dueDate": "02/10/2019"
    }, {
        "description": "Sports",
        "supplier": "Trudeo",
        "project": "DILIGENTE",
        "amount": "86123.11",
        "dueDate": "23/10/2019"
    }, {
        "description": "Electronics",
        "supplier": "Feedmix",
        "project": "PAKMAN",
        "amount": "93213.05",
        "dueDate": "02/02/2019"
    }, {
        "description": "Books",
        "supplier": "Meedoo",
        "project": "DATARAIN",
        "amount": "27065.59",
        "dueDate": "10/08/2019"
    }, {
        "description": "Home",
        "supplier": "Kayveo",
        "project": "VENTURE LABS",
        "amount": "92692.43",
        "dueDate": "07/06/2019"
    }, {
        "description": "Jewelery",
        "supplier": "Zoovu",
        "project": "HELPIE",
        "amount": "72695.64",
        "dueDate": "05/07/2019"
    }, {
        "description": "Shoes",
        "supplier": "Photofeed",
        "project": "VENTURE LABS",
        "amount": "76413.96",
        "dueDate": "23/11/2019"
    }, {
        "description": "Games",
        "supplier": "Rhynyx",
        "project": "PAKMAN",
        "amount": "54007.69",
        "dueDate": "26/08/2019"
    }, {
        "description": "Grocery",
        "supplier": "Mynte",
        "project": "DATARAIN",
        "amount": "87857.48",
        "dueDate": "24/06/2019"
    }, {
        "description": "Computers",
        "supplier": "Roomm",
        "project": "HELPIE",
        "amount": "34601.36",
        "dueDate": "11/08/2019"
    }, {
        "description": "Music",
        "supplier": "Youspan",
        "project": "HELPIE",
        "amount": "37052.11",
        "dueDate": "19/02/2019"
    }, {
        "description": "Sports",
        "supplier": "Devpulse",
        "project": "DATARAIN",
        "amount": "56857.27",
        "dueDate": "15/11/2019"
    }, {
        "description": "Baby",
        "supplier": "Thoughtstorm",
        "project": "DATARAIN",
        "amount": "71377.36",
        "dueDate": "30/06/2019"
    }, {
        "description": "Jewelery",
        "supplier": "Meeveo",
        "project": "PAKMAN",
        "amount": "69246.03",
        "dueDate": "14/04/2019"
    }, {
        "description": "Automotive",
        "supplier": "Fiveclub",
        "project": "HELPIE",
        "amount": "84399.54",
        "dueDate": "12/12/2019"
    }, {
        "description": "Automotive",
        "supplier": "Fadeo",
        "project": "HELPIE",
        "amount": "93131.11",
        "dueDate": "31/01/2019"
    }, {
        "description": "Shoes",
        "supplier": "Topiclounge",
        "project": "VENTURE LABS",
        "amount": "83457.73",
        "dueDate": "05/02/2019"
    }, {
        "description": "Shoes",
        "supplier": "Aivee",
        "project": "VENTURE LABS",
        "amount": "28579.10",
        "dueDate": "14/12/2018"
    }, {
        "description": "Garden",
        "supplier": "Youfeed",
        "project": "VENTURE LABS",
        "amount": "33934.38",
        "dueDate": "30/11/2019"
    }, {
        "description": "Music",
        "supplier": "Jaxspan",
        "project": "PAKMAN",
        "amount": "41999.25",
        "dueDate": "04/08/2019"
    }, {
        "description": "Home",
        "supplier": "Rhynyx",
        "project": "HELPIE",
        "amount": "56875.71",
        "dueDate": "26/01/2019"
    }, {
        "description": "Music",
        "supplier": "Wordpedia",
        "project": "X.CASH",
        "amount": "67127.24",
        "dueDate": "28/08/2019"
    }, {
        "description": "Outdoors",
        "supplier": "Wordware",
        "project": "DILIGENTE",
        "amount": "92316.99",
        "dueDate": "03/03/2019"
    }, {
        "description": "Books",
        "supplier": "Skilith",
        "project": "VENTURE LABS",
        "amount": "46983.58",
        "dueDate": "03/08/2019"
    }, {
        "description": "Grocery",
        "supplier": "Tambee",
        "project": "DATARAIN",
        "amount": "72371.64",
        "dueDate": "15/04/2019"
    }, {
        "description": "Jewelery",
        "supplier": "Zoombeat",
        "project": "X.CASH",
        "amount": "60891.92",
        "dueDate": "07/03/2019"
    }, {
        "description": "Electronics",
        "supplier": "Oyonder",
        "project": "DATARAIN",
        "amount": "98386.13",
        "dueDate": "15/11/2019"
    }, {
        "description": "Beauty",
        "supplier": "Brainverse",
        "project": "DATARAIN",
        "amount": "47078.33",
        "dueDate": "12/04/2019"
    }, {
        "description": "Automotive",
        "supplier": "Avavee",
        "project": "DILIGENTE",
        "amount": "86275.67",
        "dueDate": "04/12/2019"
    }, {
        "description": "Toys",
        "supplier": "Topiczoom",
        "project": "X.CASH",
        "amount": "40898.24",
        "dueDate": "02/09/2019"
    }, {
        "description": "Computers",
        "supplier": "Skyble",
        "project": "PAKMAN",
        "amount": "54858.27",
        "dueDate": "13/02/2019"
    }, {
        "description": "Jewelery",
        "supplier": "Riffpedia",
        "project": "DATARAIN",
        "amount": "57126.13",
        "dueDate": "27/08/2019"
    }, {
        "description": "Kids",
        "supplier": "Wordpedia",
        "project": "DILIGENTE",
        "amount": "57353.03",
        "dueDate": "18/03/2019"
    }, {
        "description": "Computers",
        "supplier": "Ozu",
        "project": "X.CASH",
        "amount": "72623.06",
        "dueDate": "22/03/2019"
    }, {
        "description": "Shoes",
        "supplier": "Bubblemix",
        "project": "VENTURE LABS",
        "amount": "45798.60",
        "dueDate": "22/12/2019"
    }, {
        "description": "Jewelery",
        "supplier": "Feednation",
        "project": "HELPIE",
        "amount": "92005.15",
        "dueDate": "27/11/2019"
    }, {
        "description": "Shoes",
        "supplier": "Avamm",
        "project": "VENTURE LABS",
        "amount": "70525.87",
        "dueDate": "13/08/2019"
    }, {
        "description": "Games",
        "supplier": "Twitternation",
        "project": "HELPIE",
        "amount": "91872.74",
        "dueDate": "26/12/2018"
    }, {
        "description": "Movies",
        "supplier": "Vipe",
        "project": "X.CASH",
        "amount": "39226.25",
        "dueDate": "24/10/2019"
    }, {
        "description": "Industrial",
        "supplier": "Thoughtmix",
        "project": "HELPIE",
        "amount": "22503.48",
        "dueDate": "07/09/2019"
    }, {
        "description": "Music",
        "supplier": "Skyndu",
        "project": "PAKMAN",
        "amount": "80538.57",
        "dueDate": "02/04/2019"
    }, {
        "description": "Kids",
        "supplier": "Tekfly",
        "project": "DILIGENTE",
        "amount": "75114.36",
        "dueDate": "16/04/2019"
    }, {
        "description": "Kids",
        "supplier": "Ozu",
        "project": "X.CASH",
        "amount": "66207.25",
        "dueDate": "20/05/2019"
    }, {
        "description": "Health",
        "supplier": "Fatz",
        "project": "DILIGENTE",
        "amount": "72298.33",
        "dueDate": "04/03/2019"
    }, {
        "description": "Movies",
        "supplier": "Eamia",
        "project": "VENTURE LABS",
        "amount": "46161.92",
        "dueDate": "29/06/2019"
    }, {
        "description": "Industrial",
        "supplier": "Flipstorm",
        "project": "PAKMAN",
        "amount": "62259.66",
        "dueDate": "14/04/2019"
    }, {
        "description": "Toys",
        "supplier": "Thoughtsphere",
        "project": "DATARAIN",
        "amount": "74275.55",
        "dueDate": "13/12/2019"
    }, {
        "description": "Tools",
        "supplier": "Devpulse",
        "project": "VENTURE LABS",
        "amount": "84981.27",
        "dueDate": "11/12/2018"
    }, {
        "description": "Home",
        "supplier": "Yacero",
        "project": "X.CASH",
        "amount": "47843.90",
        "dueDate": "14/05/2019"
    }, {
        "description": "Garden",
        "supplier": "Brainsphere",
        "project": "X.CASH",
        "amount": "74775.83",
        "dueDate": "09/02/2019"
    }, {
        "description": "Automotive",
        "supplier": "Ooba",
        "project": "PAKMAN",
        "amount": "51065.62",
        "dueDate": "20/12/2018"
    }, {
        "description": "Industrial",
        "supplier": "Eabox",
        "project": "DATARAIN",
        "amount": "69023.97",
        "dueDate": "23/11/2019"
    }, {
        "description": "Grocery",
        "supplier": "Flipbug",
        "project": "PAKMAN",
        "amount": "63985.55",
        "dueDate": "27/10/2019"
    }, {
        "description": "Outdoors",
        "supplier": "Topicshots",
        "project": "VENTURE LABS",
        "amount": "51025.87",
        "dueDate": "14/05/2019"
    }, {
        "description": "Tools",
        "supplier": "Leenti",
        "project": "HELPIE",
        "amount": "49728.00",
        "dueDate": "25/08/2019"
    }, {
        "description": "Jewelery",
        "supplier": "Realblab",
        "project": "PAKMAN",
        "amount": "96469.88",
        "dueDate": "08/05/2019"
    }, {
        "description": "Baby",
        "supplier": "Zoomlounge",
        "project": "PAKMAN",
        "amount": "82663.91",
        "dueDate": "17/12/2018"
    }, {
        "description": "Automotive",
        "supplier": "Camido",
        "project": "DATARAIN",
        "amount": "49269.75",
        "dueDate": "07/11/2019"
    }, {
        "description": "Movies",
        "supplier": "Linklinks",
        "project": "DILIGENTE",
        "amount": "32245.94",
        "dueDate": "12/01/2019"
    }, {
        "description": "Kids",
        "supplier": "Buzzdog",
        "project": "DILIGENTE",
        "amount": "52563.20",
        "dueDate": "16/05/2019"
    }, {
        "description": "Computers",
        "supplier": "Skimia",
        "project": "DILIGENTE",
        "amount": "38472.05",
        "dueDate": "08/09/2019"
    }, {
        "description": "Kids",
        "supplier": "Wikivu",
        "project": "DILIGENTE",
        "amount": "83255.79",
        "dueDate": "07/12/2018"
    }, {
        "description": "Movies",
        "supplier": "Kwideo",
        "project": "PAKMAN",
        "amount": "51860.42",
        "dueDate": "10/12/2018"
    }, {
        "description": "Computers",
        "supplier": "Realcube",
        "project": "VENTURE LABS",
        "amount": "36844.95",
        "dueDate": "07/06/2019"
    }, {
        "description": "Outdoors",
        "supplier": "Camido",
        "project": "X.CASH",
        "amount": "65769.60",
        "dueDate": "15/03/2019"
    }, {
        "description": "Sports",
        "supplier": "Kaymbo",
        "project": "DATARAIN",
        "amount": "40702.59",
        "dueDate": "25/02/2019"
    }, {
        "description": "Outdoors",
        "supplier": "Kazio",
        "project": "PAKMAN",
        "amount": "24321.21",
        "dueDate": "28/07/2019"
    }, {
        "description": "Beauty",
        "supplier": "Blogtag",
        "project": "DILIGENTE",
        "amount": "59000.73",
        "dueDate": "08/01/2019"
    }, {
        "description": "Kids",
        "supplier": "Yodoo",
        "project": "DILIGENTE",
        "amount": "79170.21",
        "dueDate": "03/01/2019"
    }, {
        "description": "Music",
        "supplier": "Shuffletag",
        "project": "X.CASH",
        "amount": "54096.16",
        "dueDate": "13/03/2019"
    }, {
        "description": "Automotive",
        "supplier": "Aimbu",
        "project": "DILIGENTE",
        "amount": "75129.68",
        "dueDate": "07/02/2019"
    }, {
        "description": "Baby",
        "supplier": "Zoomdog",
        "project": "DATARAIN",
        "amount": "59303.79",
        "dueDate": "06/10/2019"
    }, {
        "description": "Tools",
        "supplier": "Cogidoo",
        "project": "HELPIE",
        "amount": "77482.12",
        "dueDate": "10/09/2019"
    }, {
        "description": "Beauty",
        "supplier": "Miboo",
        "project": "PAKMAN",
        "amount": "58802.43",
        "dueDate": "28/12/2019"
    }, {
        "description": "Games",
        "supplier": "Thoughtbeat",
        "project": "DATARAIN",
        "amount": "96963.23",
        "dueDate": "12/03/2019"
    }, {
        "description": "Sports",
        "supplier": "Photobean",
        "project": "PAKMAN",
        "amount": "48297.41",
        "dueDate": "03/02/2019"
    }, {
        "description": "Jewelery",
        "supplier": "Lazz",
        "project": "DILIGENTE",
        "amount": "72209.32",
        "dueDate": "22/04/2019"
    }, {
        "description": "Kids",
        "supplier": "Dazzlesphere",
        "project": "DATARAIN",
        "amount": "73145.18",
        "dueDate": "24/12/2019"
    }]

    const EditClasses = (data, ref) => {
        dispatch(actions.openDialog({
            children: (
                <EditClass closeDialog={() => dispatch(actions.closeDialog())} dataClass={data} refCustomTable={ref} />
            )
        }))
    }
    return (

        <Grid item xs={12} className={"p-8"}>
            <Fade delay={400}>
                <TableCustom
                    config={ClassConfig((rowData) => EditClasses(rowData, refCustomTable))}
                    data={data}
                    style={{ boxShadow: "0px 0px 2px 0px", borderRadius: 0 }}
                    showDateFilter={true}
                />
            </Fade>
        </Grid>
    )
}

export default ClassTable