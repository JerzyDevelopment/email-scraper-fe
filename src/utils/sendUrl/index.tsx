import axios from 'axios'

const sendUrl = async (url:string) => {

let api = "";

    const response = await axios({method: "get", url:`${api}/${url}`})

    console.log(response)
}

export default sendUrl