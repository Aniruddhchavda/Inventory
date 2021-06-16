import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
let url='http://localhost:53535/api/';

export class AddInvModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(url+'inventory',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                TagNumber:event.target.TagNumber.value,
                SerialNumber:event.target.SerialNumber.value,
                Make:event.target.Make.value,
                Model:event.target.Model.value,
                Description:event.target.Description.value,
                BelongsTo:event.target.BelongsTo.value,
                Room:event.target.Room.value,
                Missing:event.target.Missing.value,
                DateAcquired:event.target.DateAcquired.value,
                Cost:event.target.Cost.value,
                PO:event.target.PO.value,
                Doc:event.target.Doc.value,
                Type:event.target.Type.value,
                OriginalTag:event.target.OriginalTag.value,
                Condition:event.target.Condition.value
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
            Add Inventory
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

                <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="TagNumber">
                        <Form.Label>Tag Number</Form.Label>
                        <Form.Control type="text" name="TagNumber" required 
                        placeholder="TagNumber"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="SerialNumber">
                        <Form.Label>Serial Number</Form.Label>
                        <Form.Control type="text" name="SerialNumber" required 
                        placeholder="SerialNumber"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Make">
                        <Form.Label>Make</Form.Label>
                        <Form.Control type="text" name="Make" required 
                        placeholder="Make"/>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="Model">
                        <Form.Label>Model</Form.Label>
                        <Form.Control type="text" name="Model" required 
                        placeholder="Model"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="Description" required 
                        placeholder="Description"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="BelongsTo">
                        <Form.Label>BelongsTo</Form.Label>
                        <Form.Control type="text" name="BelongsTo" required 
                        placeholder="BelongsTo"/>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="Room">
                        <Form.Label>Room</Form.Label>
                        <Form.Control type="text" name="Room" required 
                        placeholder="Room"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Missing">
                        <Form.Label>Missing</Form.Label>
                        <Form.Control type="text" name="Missing" required 
                        placeholder="Missing"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="DateAcquired">
                        <Form.Label>DateAcquired</Form.Label>
                        <Form.Control type="text" name="DateAcquired" required 
                        placeholder="DateAcquired"/>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="Cost">
                        <Form.Label>Cost</Form.Label>
                        <Form.Control type="text" name="Cost" required 
                        placeholder="Cost"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="PO">
                        <Form.Label>Purchase Order</Form.Label>
                        <Form.Control type="text" name="PO" required 
                        placeholder="PO"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Type">
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" name="Type" required 
                        placeholder="Type"/>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="OriginalTag">
                        <Form.Label>OriginalTag</Form.Label>
                        <Form.Control type="text" name="OriginalTag" required 
                        placeholder="OriginalTag"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Condition">
                        <Form.Label>Condition</Form.Label>
                        <Form.Control type="text" name="Condition" required 
                        placeholder="Condition"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Doc">
                        <Form.Label>Document Upload</Form.Label>
                        <Form.Control type="text" name="Doc" required 
                        placeholder="Doc"/>
                    </Form.Group>
                    </Form.Row>

                    <Form.Group>
                        <Button variant="primary" type="submit" onClick={this.props.onHide}>
                            Add Inventory
                        </Button>
                    </Form.Group>
                </Form>
         
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}