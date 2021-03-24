import axios from "axios";

const hmacConfig = {
    username: 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF',
    algorithm: 'hmac-sha1',
    headers: 'x-date',
    signature: 'R1G77mCPcLDrb4iTcG3ULfEbgt0='
}

axios.defaults.baseURL = 'https://ptx.transportdata.tw/MOTC/v2/Tourism'
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers.common['Authorization'] = hmacConfig

