import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6); // Number of posts per page
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/Posts/')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    const handleBack = () => {
        navigate('/post');
    };

    const handlePageReload = () => {
        window.location.reload(); // Reload the page
    };

    // Function to delete a post
    // Function to delete a post
    const deletePost = async (postId) => {
        // Confirm deletion with the user
        const confirmDelete = window.confirm('Are you sure you want to delete this post?');
        if (!confirmDelete) return; // If user cancels, exit function

        try {
            await axios.delete(`http://localhost:8000/api/Posts/${postId}/`);
            setPosts(posts.filter(post => post.id !== postId)); // Remove the deleted post from state
            console.log('Post deleted successfully');
            handlePageReload(); // Reload the page after deleting a post
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container py-4">
            <h1 className="text-center mb-4">Your Blog Posts List</h1>
            <div className="d-flex justify-content-end mb-3">
                <button onClick={handleBack} className="btn btn-primary">
                   + Create New Post
                </button>
            </div>
            <div className="row">
                {currentPosts.map(post => (
                    <div key={post.id} className="col-lg-4 mb-4">
                        <div className="card h-100 shadow-sm rounded border">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h2 className="card-title">{post.title}</h2>
                                    <p className="card-text text-muted">Published on: {new Date(post.date).toLocaleDateString()}</p>
                                    <p className="card-text">{post.content.split(' ').slice(0, 20).join(' ')}</p>
                                </div>
                                <div className="mt-auto text-center">
                                    <Link to={`/post/${post.id}`} className="btn btn-dark text-white mr-2">Read more</Link>
                                    <button className="btn btn-danger" onClick={() => deletePost(post.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>                
                ))}
            </div>
            {posts.length > postsPerPage && (
                <div className="d-flex justify-content-center mt-4">
                    <Pagination>
                        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map((_, index) => (
                            <Pagination.Item key={index} onClick={() => paginate(index + 1)} active={index + 1 === currentPage}>
                                {index + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                </div>
            )}
        </div>
    );
};

export default Posts;
