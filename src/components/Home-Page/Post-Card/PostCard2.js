import React from 'react';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import EventNoteTwoToneIcon from '@material-ui/icons/EventNoteTwoTone';
import { Card, CardHeader, CardContent, CardFooter, Link, Row, Col } from 'framework7-react';




export default function PostCard2(props) {
    const post = props.post;
    return (
        <Card style={{ margin: '0 0 20px 20px', border: '1px solid black', width: '75%' }
        }>

            <CardHeader style={{ backgroundColor: '#8ebfde' }}>
                <Row>
                    <Col>
                        <div ><img src={post.photoURL} width="34" height="34" alt="Profile Picture" /><span style={{ padding: '15px' }}>{post.author}</span></div>
                    </Col>
                    <Col ><div style={{ textAlign: 'center', fontSize: 20 }} >{post.header}</div></Col>
                    <Col style={{ textAlign: 'end' }}><EventNoteTwoToneIcon />{post.createdAt.date}<br />{post.createdAt.time}</Col>
                </Row>
            </CardHeader>


            <CardContent>
                <Row style={{ position: 'relative', left: '15px' }}>
                    <Col style={{ padding: '10px' }}>{post.content}</Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col width="7">
                        <img src={"https://cdn.framework7.io/placeholder/nature-1000x700-8.jpg"} width="100%" alt="Uploaded Picture" />
                    </Col>
                    <Col></Col>
                </Row>
                {/* <p style={{ padding: '10px 0 0 10px' }}>{post.content}</p> */}
                {/* <img style={{ paddingLeft: '120px' }} src={"https://cdn.framework7.io/placeholder/nature-1000x700-8.jpg"} width="80%" /> */}
                <Row>
                    <Col>
                        <p style={{ padding: '10px 0 0 10px' }}><ThumbUpAlt />  112 &nbsp;&nbsp; <TextsmsOutlinedIcon /> 43</p>
                    </Col>
                </Row>
            </CardContent>


            <CardFooter className="no-border">
                <Link>Like</Link>
                <Link>Comment</Link>
            </CardFooter>

        </Card >
    )
}
