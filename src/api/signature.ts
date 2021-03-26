import hmac from 'js-crypto-hmac'
import {HashTypes} from "js-crypto-hmac/dist/params"
import {fromUint8Array} from 'js-base64'

export const getSignature = async (key: string, msg: string, hash: HashTypes) => {
    const encoder = new TextEncoder()
    const uKey = encoder.encode(key)
    const uMsg = encoder.encode(msg)
    const hmacResult = await hmac.compute(uKey, uMsg, hash)
    return fromUint8Array(hmacResult)
}