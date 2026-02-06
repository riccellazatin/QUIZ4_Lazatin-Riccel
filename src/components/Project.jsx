import React, {useState} from 'react'
import Accordion from 'react-bootstrap/Accordion'

function Project() {
  return (
    <>
    <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Project #1</Accordion.Header>
            <Accordion.Body>
                description
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
            <Accordion.Header>Project #2</Accordion.Header>
            <Accordion.Body>
                Project Description
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
            <Accordion.Header>Project #3</Accordion.Header>
            <Accordion.Body>
                Project Description
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
            <Accordion.Header>Project #4</Accordion.Header>
            <Accordion.Body>
                Project Description
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </>
  )
}

export default Project;