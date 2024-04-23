import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate for redirection

const NewPostForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        date: new Date().toISOString().slice(0, 10), // Pre-fill date on creation
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const navigate = useNavigate(); // Utilize useNavigate hook

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/CreatePost/', formData);
            console.log('New post created:', response.data);
            // Reset form fields after successful submission
            setFormData({
                title: '',
                content: '',
                date: new Date().toISOString().slice(0, 10), // Reset date
            });
            // Handle success, such as showing a confirmation message
            alert('Post created successfully!');
            // Redirect after successful creation (optional)
            navigate('/'); // Redirect to the home page (replace with desired path)
        } catch (error) {
            console.error('Error creating new post:', error);
            // Handle error, such as displaying an error message to the user
            alert('Error creating new post. Please try again later.');
        }
    };

    return (
        <div className="container d-flex flex-column align-items-center">
            <h2 className="text-center mt-3">Blog Post Form</h2>
            <form onSubmit={handleSubmit} className="w-50">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea className="form-control" id="content" name="content" value={formData.content} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Link to="/" className="btn btn-secondary mt-3">Back</Link> {/* Use Link component */}
        </div>
    );
};

export default NewPostForm;
