import React from 'react'
import { Button } from '@mui/material'
function BlogItem() {
    return (
        <>
            <div style={{ display: "flex", width: "100%" }}>
                <div style={{ width: "30%", background: "white" }}>
                    <img src='./images/Blog.png' alt='blog-img'/>
                </div>
                <div style={{ width: "70%", textAlign: "left" }}>
                    <ul>
                        <li>
                            <h6> Lorem ipsum, dolor sit amet consectetur ad
                            sit amet consectetur ad</h6>
                           
                        </li>
                        <li>
                            <h6>  Author: Avinash Jha</h6>
                          
                        </li>
                        <li>
                            Posted On : 2022-09-02
                        </li>
                        <li>
                            <div spacing={5} style={{ textAlign: "right" }}>
                                <Button variant="contained" size='small'>edit</Button>
                                <Button variant="contained" size='small' sx={{ ml: '20px', background: 'red' }}>delete</Button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default BlogItem