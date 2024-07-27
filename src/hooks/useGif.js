import React, { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;
const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
    async function fetchData() {
        setLoading(true);
        const { data } = await axios.get(tag ? `${URL}&tag=${tag}` : URL);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
        // console.log(imageSource);
    }
    useEffect(() => {
        fetchData();
    }, []);
    return { gif, loading, fetchData };
};
export default useGif;