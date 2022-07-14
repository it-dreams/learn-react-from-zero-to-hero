import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const useFetch = (url) => {
    const { category } = useParams();
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);
    const [page, setPage] = useState(1);

    const updateNews = async () => {
        fetch(url).then(response => {
                return response.json()
        }).then(json => {
                console.log(json)
                setLoading(false)
                setResult(json)
        })

        // const topHeadlines = `https://newsapi.org/v2/${newsType}?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
        // const allNewsUrl = `https://newsapi.org/v2/${newsType}?domains=${newsDomain}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
        // setLoading(true);
        // let data = await fetch(url);
        // let parseData = await data.json();
        // console.log(parseData);
        // setResult(parseData);
        // setArticles(parseData.articles);
        // setTotalResults(parseData.totalResults);
    };

    useEffect(() => {
        updateNews();
    }, [category]);

    const updatePage = (page) => setPage(page + 1);

    return { loading, result, updatePage }
};

export default useFetch;