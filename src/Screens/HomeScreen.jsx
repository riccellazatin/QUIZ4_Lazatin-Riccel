import React from 'react'
import '../bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion'
import Project from '../components/Project.jsx'

function Homescreen() {
  return (
    <>
    <div>
    <h1>testing screen</h1>
    <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Project #1</Accordion.Header>
            <Accordion.Body>
                <Project />
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
            <Accordion.Header>Project #2</Accordion.Header>
            <Accordion.Body>
                <Project />
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
            <Accordion.Header>Project #3</Accordion.Header>
            <Accordion.Body>
                <Project />
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
            <Accordion.Header>Project #4</Accordion.Header>
            <Accordion.Body>
                <Project />
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </div>
    </>
  )
}

export default Homescreen;