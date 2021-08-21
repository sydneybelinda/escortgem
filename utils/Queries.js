import fetch from "isomorphic-unfetch";

import Config from "../config"

const API = Config.api;


export const getAllEscorts = async (ctx) => {
    const res = await fetch(`${API}/escorts/getall`);
    let escorts = await res.json();
    return escorts;
  };

  export const getData = async (url,value) => {
    const res = await fetch(`${API}${url}`);
    let data = await res.json();
    return data;
  };

  export const getEscort = async (username) => {
    const res = await fetch(`${API}/escort/${username}`);
    let a = await res.json();
    return a;
  };

  export const getUser = async (username) => {
    const res = await fetch(`${API}/user/${username}`);
    let u = await res.json();
    return u;
  };

  export const getEmail = async (email) => {
    const res = await fetch(`${API}/email/${email}`);
    let u = await res.json();
    return u;
  };

  export const getSelect = async (type) => {
    const res = await fetch(`${API}/select/${type}`);
    let u = await res.json();
    return u;
  };
  
  export const getAgency = async (username) => {
    const res = await fetch(`${API}/agency/${username}`);
    let escorts = await res.json();
    return escorts;
  };

  export const getAgencyEscorts = async (username) => {
    const res = await fetch(`${API}/agency/escorts/${username}`);
    let escorts = await res.json();
    return escorts;
  };

  export const deleteFile = async (name,config) => {

  
    try {
      const response = await fetch(`${API}/file/delete`, {
        method: "POST",
  
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name })
      });
      if (response.status === 200) {
        // Router.push('/dashboard')
        return { status: "Success" };
      } else {
        console.log("Delete failed.");
        // https://github.com/developit/unfetch#caveats
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    } catch (error) {
      console.error(
        "You have an error in your code or there are Network issues.",
        error
      );
    }
  };

  export const uploadFile = async (files, username) => {

  
    try {
      const response = await fetch(`${API}/file/upload`, {
        method: "POST",
  
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ files })
      });
      if (response.status === 200) {
        // Router.push('/dashboard')
        return { status: "Success" };
      } else {
        console.log("Delete failed.");
        // https://github.com/developit/unfetch#caveats
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    } catch (error) {
      console.error(
        "You have an error in your code or there are Network issues.",
        error
      );
    }
  };



  export const updateAgency = async (data) => {

    const res = await fetch(`${API}/agency/update`, {
      method: "POST",

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });

    
    return res;
  };

  export const updateEscort = async (data) => {

    const res = await fetch(`${API}/escort/update`, {
      method: "POST",

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });

    
    return res;
  };

  export const updateEscortProfpic = async (data) => {

    const res = await fetch(`${API}/escort/update`, {
      method: "POST",

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });

    
    return res;
  };



  export const getEscortsByCity = async (city) => {
    const res = await fetch(`${API}/escorts/city/${city}`);
    let escorts = await res.json();
    return escorts;
  };

  export const getServices = async () => {
    const res = await fetch(`${API}/services`);
    let s = await res.json();
    return s;
  };

  export const getServicesSeo = async (cat) => {
    const res = await fetch(`${API}/seoservices/${cat}`);
    let s = await res.json();
    return s;
  };

  export const getOtherSeo = async (cat) => {
    const res = await fetch(`${API}/seoother/${cat}`);
    let s = await res.json();
    return s;
  };
  export const getHairSeo = async (cat) => {
    const res = await fetch(`${API}/seohair/${cat}`);
    let s = await res.json();
    return s;
  };

  export const getEyesSeo = async (cat) => {
    const res = await fetch(`${API}/seoeyes/${cat}`);
    let s = await res.json();
    return s;
  };

  export const getAllServices = async () => {
   
    const eyes = await fetch(`${API}/seoeyes/get`);
    let e = await eyes.json();
    const hair = await fetch(`${API}/seohair/get`);
    const h = await hair.json();
    const other = await fetch(`${API}/seoother/get`);
    const o = await other.json();
    const services = await fetch(`${API}/seoservices/get`);
    let s = await services.json();


    let serv = {
      hair:h, 
      eyes:e,
      other:o,
      services:s
    }
  

    //let s = await serv.json();
    return serv;
  };

  export const getLocals = async () => {
    const res = await fetch(`${API}/local`);
    let s = await res.json();
    return s;
  };

  export const getLocal = async (city) => {
    const res = await fetch(`${API}/local/${city}`);
    let s = await res.json();
    return s;
  };

  export const getCity = async (city) => {
    const res = await fetch(`${API}/cities/${city}`);
    let s = await res.json();
    return s;
  };

  export const getCities = async (city) => {
    const res = await fetch(`${API}/cities`);
    let s = await res.json();
    return s;
  };






  export const getToday = () => {
  
    var today = [];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    const date = d.setHours(d.getHours()-5);
    today.number  = d.getDay(d.getHours()-5)
    today.day = days[today.number]

    return today;
  }
  
  export const getDay = (day) => {
 
    var today = []
    var d = new Date();
    var weekday = new Array(7);
    weekday["Sunday"] = 0;
    weekday["Monday"] = 1;
    weekday["Tuesday"] = 2;
    weekday["Wednesday"] = 3;
    weekday["Thursday"] = 4;
    weekday["Friday"] = 5;
    weekday["Saturday"] = 6;
  
    var n = weekday[day];

  

    return n;
  }

