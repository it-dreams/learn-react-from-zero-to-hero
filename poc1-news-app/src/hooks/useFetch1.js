import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useFetch = ({newsDomain, newsType, country, apiKey, pageSize}) => {
    const { category } = useParams();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const updateNews = async () => {
        const topHeadlines = `https://newsapi.org/v2/${newsType}?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
        const allNewsUrl = `https://newsapi.org/v2/${newsType}?domains=${newsDomain}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

        let data = await fetch(topHeadlines);
        let parseData = await data.json();
        console.log(parseData);
        setData(parseData);
    }

    useEffect(() => {
        updateNews();
    }, [category, page])

    console.log(category);

    const updatePage = (page) => setPage(page + 1);

    return [data, updatePage];
};

export default useFetch;