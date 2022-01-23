import React, { Component } from 'react'
import axios from 'axios'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

class Componentss extends Component {

    state = {
		componentItems : []
	}

	componentDidMount() {
		axios.get('js/data.json').then( res => { this.setState ({componentItems: res.data.componentsItems}) } )
	}

    render() {
        const {componentItems} = this.state;
		const componentItemsList = componentItems.map ( componentItem => {
			return(
                <Col xs={6} sm={6} lg={3} key={componentItem.id}>
                    <img className="card-img-top" src = {componentItem.image}/>
                </Col>
    )
		})
        return (
            <div id = 'ComponentssContainer'>
                <h4>LiLi Robot Educational Game consists of:</h4>
                <Container>
                    <Row>
                        {componentItemsList}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Componentss
