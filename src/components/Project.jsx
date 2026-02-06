import React from 'react'
import {Card} from 'react-bootstrap'

function Project({ project }) {
  return (
    <>
    <Card className='my-3 p-3 rounded border-1'>
        <Card.Body>
                <Card.Title as="div">
                    <strong>Project Name</strong>
                </Card.Title>

        </Card.Body>
    </Card>
    </>
  );
}

export default Project