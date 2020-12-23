module.exports = {
    *beforeSendRequest(requestData) {
        // console.log('requestData', requestData)
        if(requestData.url.indexOf('huodong.m.taobao.com/act/yibo.html') > -1) {
            const originURL = requestData.url
            const newRequestOptions = requestData.requestOptions
            requestData.protocol = 'http'
            newRequestOptions.hostname = 'localhost'
            newRequestOptions.port = '8888'
            newRequestOptions.path = '/dist/index-pre.html'
            console.log(
                '\x1b[32m%s\x1b[0m',
                `${originURL}-->${requestData.protocol}://${newRequestOptions.hostname}:${newRequestOptions.port}${newRequestOptions.path}`
            )
        }
        
        return requestData
    },

    *beforeSendResponse(requestDetail, responseDetail) {
        const newResponse = responseDetail.response
        if(newResponse) {
            newResponse.header['Access-Control-Allow-Origin'] = '*'
        }
        
        return {
            response: newResponse
        }
    },

    *beforeDealHttpsRequest(requestDetail) {
        return true
    }
}