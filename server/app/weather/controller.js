const axios = require('axios')
exports.getCity = (req,res,next)=>{
    const city = req.params.city
    axios.get(`https://www.metaweather.com/api/location/search/?query=${city}`).then(response=>
    res.send({
        success:true,
        data:response.data[0]
    })
    )
}

exports.getWeather = (req,res)=>{
    const id = req.params.wid
    axios.get(`https://www.metaweather.com/api/location/${id}`).then(response=>
    res.send({
        success:'true',
        data:response.data.consolidated_weather
    })
    )
}