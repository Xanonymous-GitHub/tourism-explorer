import axios from "axios";
import {username, hashAlgorithm, k} from "./config";
import {getSignature} from "./signature";
import {Option, some, none} from "fp-ts/es6/Option";
import {ScenicSpotTourismInfo} from "../types";

interface AuthorizationHeader {
    'Authorization': string
    'X-Date': string
}

const getAuthorizationHeader = async (): Promise<Readonly<AuthorizationHeader>> => {
    const xDate = new Date().toUTCString()
    const algorithm = 'hmac-' + (hashAlgorithm.replace('-', '').toLowerCase())
    const signature = await getSignature(k, 'x-date: ' + xDate, hashAlgorithm)
    const Authorization =
        'hmac ' +
        'username="' + username + '", ' +
        'algorithm="' + algorithm + '", ' +
        'headers="x-date", ' +
        'signature="' + signature + '"'
    return {
        Authorization,
        'X-Date': xDate
    }
}

axios.defaults.baseURL = 'https://ptx.transportdata.tw/MOTC/v2/Tourism'
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8'

export const getScenicSpots = async (top?: number, skip?: number): Promise<Option<ScenicSpotTourismInfo>> => {
    try {
        const {data} = await axios.get('/ScenicSpot', {
            headers: await getAuthorizationHeader(),
            params: {
                ...(top && {top}),
                ...(skip && {skip})
            }
        })
        return some(data)
    } catch (e) {
        console.warn(e)
        return none
    }
}
