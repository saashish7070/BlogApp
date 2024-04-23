import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchItems = async () => {    
        try {
          const response = await axios.get(`http://localhost:8000/api/Posts/${id}`);
          setPost(response.data);
          console.log(post)
          console.log("Empty")
        } catch (error) {
          console.log(error.message);
        }
      };
    const handleBack = () => {
        navigate(-1); // Navigate back one step in history
    };
    useEffect(() => {
        fetchItems();
    }, []);
    

    return (
        <div className="container py-4">
            <h1 className="text-center mb-4">Post Detail</h1>
            {post ? (
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title mb-4">{post.title}</h2>
                        <p className="card-text text-muted">Published on: {new Date(post.date).toLocaleDateString()}</p>
                        <p className="card-text">{post.content}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <button onClick={handleBack} className="btn btn-secondary mt-3">Back</button>
        </div>
    );
};

export default PostDetail;
