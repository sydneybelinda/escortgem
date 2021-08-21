const env = process.env.NODE_ENV || "development";



const Config =  {
    "development": {
        phone: "0492 141 346",
        email: "info@lnbsydneyescorts.com.au",
        address: "York St \r\n  Sydney NSW 2000",
        twitter: "https://twitter.com/lnbsydney",
        url: "http://localhost:2000",
        api: "http://localhost:2000/api",
        privatekey: "wowwow",
      },
      "test": {
        phone: "0492 141 346",
        address: "York St \r\n  Sydney NSW 2000",
        email: "info@lnbsydneyescorts.com.au",
        twitter: "https://twitter.com/lnbsydney",
        url: "http://localhost:2000",
        api: "http://localhost:2000/api",
        privatekey: "wowwow",
      },
      "production": {
        phone: "0492 141 346",
        address: "York St \r\n  Sydney NSW 2000",
        email: "info@lnbsydneyescorts.com.au",
        twitter: "https://twitter.com/lnbsydney",    
        url: "https://www.lnbsydneyescorts.com.au",
        api: "http://www.lnbsydneyescorts.com.au:2000/api",
        privatekey: "wowwow",
      },



}

export default Config[env];