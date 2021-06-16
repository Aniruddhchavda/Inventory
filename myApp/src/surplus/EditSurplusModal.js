import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
let url='http://localhost:53535/api/';

export class EditSurplusModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(url+'surplus',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                TagNumber:event.target.TagNumber.value,
                Description:event.target.Description.value,
                BelongedTo:event.target.BelongedTo.value,
                Date:event.target.Date.value,
                SerialNumber:event.target.SerialNumber.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Edit Surplus
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="TagNumber">
                        <Form.Label>Tag Number</Form.Label>
                        <Form.Control type="text" name="TagNumber" required
                        defaultValue={this.props.TagNumber} 
                        placeholder={this.props.TagNumber}/>
                    </Form.Group>

                    <Form.Group controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="Description" required 
                        defaultValue={this.props.Description}
                        placeholder={this.props.Description}/>
                    </Form.Group>

                    <Form.Group controlId="Date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="text" name="Date" required 
                        defaultValue={this.props.Date}
                        placeholder={this.props.Date} />
                    </Form.Group>

                    <Form.Group controlId="BelongedTo">
                        <Form.Label>BelongedTo</Form.Label>
                        <Form.Control type="text" name="BelongedTo" required 
                        defaultValue={this.props.BelongedTo}
                        placeholder={this.props.BelongedTo} />
                    </Form.Group>

                    <Form.Group controlId="SerialNumber">
                        <Form.Label>SerialNumber</Form.Label>
                        <Form.Control type="text" name="SerialNumber" required 
                        defaultValue={this.props.SerialNumber}
                        placeholder={this.props.SerialNumber} />
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Surplus
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}