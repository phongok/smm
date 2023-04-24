import React, { useEffect, useState } from "react";
import axios from "axios"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Supersmm() {

    const [apikey, setapikey] = useState('')
    const [ids, setids] = useState('')

    const [data, setdata] = useState([])



    const getData = async (key = apikey, id = ids) => {
        let data = '';

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://supersmm.net/adminapi/v2/orders?apikey=${key}&ids=${id}`,
            headers: {},
            data: data
        };


        axios.request(config)
            .then((response) => {
                if (response.status === 200) {
                    alert("Call thành công")
                   
                    setdata(response.data.data.list)
                    console.log(data)
                }
                else {

                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        getData()
    }, [])

    const submit = async()=>{
        const key =  apikey;
        const id = ids
        getData(key, id)
    }

    return (

        <div>
            <div className="header" style={{ display: 'flex', paddingTop: 30, justifyContent: "center" }}>
                <TextField id="outlined-basic" label="API Key" onChange={event => setapikey(event.target.value)} variant="outlined" style={{ marginLeft: 30 }} />
                <TextField id="outlined-basic" label="IDS" onChange={event => setids(event.target.value)} variant="outlined" style={{ marginLeft: 30 }} />

                <Button style={{ marginLeft: 30 }} variant="contained" onClick={submit}>Submit</Button>
            </div>
            <div>
                <table style={{ width: '100%', border: '1px' }}>
                    <tr>
                        <th>Id</th>
                        <th>status</th>
                        <th>ticket id</th>
                        <th>action</th>
                    </tr>
              
                    
                            {
                                data?.map((Item, index) => {
                                    return (
                                        <tr>
                                            <th>{Item.id}</th>
                                            <th>{Item.id}</th>
                                            <th></th>
                                            <th>
                                                <Button variant="contained" color="success">
                                                    Update
                                                </Button>
                                                <Button variant="outlined" color="error" style={{ marginLeft: 10 }}>
                                                    Delete
                                                </Button>
                                            </th>


                                        </tr>
                                    )
                                })

                            }
                     

                        <tr>

                        </tr>
                

                </table>
            </div>
        </div>


    )
}
export default Supersmm