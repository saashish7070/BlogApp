import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'; // Import Link
import { useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
    });

    const fetchPost = async () => {    
        try {
            const response = await axios.get(`http://localhost:8000/api/Posts/${id}`);
            setPost(response.data);
            setFormData({
                title: response.data.title,
                content: response.data.content,
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/api/Posts/${id}/`, formData);
            console.log('Post updated successfully'); 
            fetchPost(); // Fetch the updated post data
        } catch (error) {
            console.log('Error updating post:', error);
        }
    };

    useEffect(() => {
        fetchPost();
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
            <Link to="#" onClick={() => navigate(-1)} className="btn btn-secondary mt-3">Back</Link> {/* Use Link component */}
            <div className="mt-4">
                <h2 className="mb-3">Update Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea className="form-control" id="content" name="content" value={formData.content} onChange={handleInputChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    );
};

export default PostDetail;
