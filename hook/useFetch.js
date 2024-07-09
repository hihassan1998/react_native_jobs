import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    

    const options = {
        method: 'GET',
        hostname: 'jsearch.p.rapidapi.com',
        port: null,
        path: '/search?query=developer%20in%20Stockholm%2C%20SWEDEN&page=1&num_pages=1&date_posted=all',
        headers: {
            'x-rapidapi-key': '82e0dce41emsh34e0d22e81aed3dp1cfebcjsndd8fc680f66b',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
    };
    






}

export default useFetch
