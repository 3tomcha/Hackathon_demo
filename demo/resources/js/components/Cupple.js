import React from 'react';
import { CardGroup, Card, Image } from 'react-bootstrap';

function Cupple(props) {
    return (
        <div className="contents">
            <a href={props.linkUrl}>
                <CardGroup >
                    <Card className="text-center">
                        <Card.Body>
                    <Card className="text-center">
                        <Image variant="top" src={props.user1_image ? props.user1_image : '/img/test.jpg'} thumbnail/>
                        <Card.Footer>
                            <small className="text-muted">{props.user1_name ? props.user1_name : '上村莉奈'}</small>
                        </Card.Footer>
                    </Card>
                    <Card className="text-center">
                        <Image variant="top" src={props.user2_image ? props.user2_image : '/img/test.jpg'} thumbnail/>
                        <Card.Footer>
                            <small className="text-muted">{props.user2_name ? props.user2_name : '上村莉奈'}</small>
                        </Card.Footer>
                    </Card>
                        </Card.Body>
                        <Card.Footer>{props.memorial_time}</Card.Footer>
                    </Card>
                </CardGroup>
            </a>
        </div>
    );
}

export default Cupple;
