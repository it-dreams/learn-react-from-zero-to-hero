import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const useFetch = ({ newsDomain, newsType, country, apiKey, pageSize }) => {
    const { category } = useParams();
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState();

    const updateNews = async () => {
        fetch(`https://newsapi.org/v2/${newsType}?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`).then(response => {
            return response.json()
        }).then(json => {
            setLoading(false)
            setTotalResults(json.totalResults)
            setResult(json)
        })
    };

    useEffect(() => {
        updateNews();
    }, [category, page]);

    // Pagination
    const updatePage = (type) => setPage(page + Number(`${type === 'inc' ? 1 : -1}`));

    return [loading, result, page, updatePage, totalResults ]
};

export default useFetch;