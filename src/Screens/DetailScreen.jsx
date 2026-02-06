import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import axios from 'axios'

function DetailScreen() {
    const {id} = useParams()
    const [project, setProject] = useState([])

    useEffect(() => {
        async function fetchProjects() {
            const { data } = await axios.get(`http://127.0.0.1:8000/api/projects/${id}`)
            setProject(data)
        }
        fetchProjects()
    }, [])

  return (
    <>
    <div>
        <Row>
            <Col md={3}>
                <ListGroup>
                    <ListGroup.Item>
                        <h3>{project.project_name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h3>{project.project_description}</h3>
                    </ListGroup.Item>
                </ListGroup>
            </Col>

            <Col md={3}>
                <ListGroup>
                    <ListGroup.Item>
                        <h3>{project.status}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h3>{project.hours_consumed}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h3>{project.start_date}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h3>{project.end_da}</h3>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default DetailScreen