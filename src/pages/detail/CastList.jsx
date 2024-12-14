import React, { useState, useEffect } from 'react';
import Button from '../../components/button/Button';
import { useParams } from 'react-router';
import Badge from 'react-bootstrap/Badge';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const CastList = props => {

    const {category} = useParams();

    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const res = await tmdbApi.credits(category, props.id);
            setCasts(res.cast.slice(0, 5));
        }
        getCredits();
    }, [category, props.id]);
    return (
        <>
        <div className="casts">
            {
                casts.map((item, i) => (
                    <div key={i} className="casts__item">
                        <div>
                        <div className="casts__item__img" style={{backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`}}></div>
                        </div>
                    </div>
                ))
            }
        </div>
        <br></br>
        <div className='btns'>
        <Button>Book</Button>
        </div>
        </>
                
    );
}


export default CastList;
