import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
let url='http://localhost:53535/api/';

export class SurplusModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(url+'surplus',{
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
                BelongedTo:event.target.BelongedTo.value,
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

        fetch(url+'inventory/'+this.props.InventoryID,{
            method:'DELETE',
            header:{'Accept':'application/json',
        'Content-Type':'application/json'}
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
            Move to Surplus
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        
                <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                <Form.Group as={Col} controlId="TagNumber">
                        <Form.Label>Tag Number</Form.Label>
                        <Form.Control type="text" name="TagNumber" required 
                        defaultValue={this.props.TagNumber}
                        placeholder={this.props.Tagnumber}/>
                </Form.Group>

                    <Form.Group as={Col} controlId="SerialNumber">
                        <Form.Label>Serial Number</Form.Label>
                        <Form.Control type="text" name="SerialNumber" required 
                        defaultValue={this.props.SerialNumber}
                        placeholder={this.props.SerialNumber}/>
                    </Form.Group>
              
           
                    <Form.Group as={Col} controlId="Make">
                        <Form.Label>Make</Form.Label>
                        <Form.Control type="text" name="Make" required 
                        defaultValue={this.props.Make}
                        placeholder={this.props.Make}/>
                    </Form.Group>
                </Form.Row>


                <Form.Row>
                    <Form.Group as={Col} controlId="Model">
                        <Form.Label>Model</Form.Label>
                        <Form.Control type="text" name="Model" required 
                        defaultValue={this.props.Model}
                        placeholder={this.props.Model}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="Description" required 
                        defaultValue={this.props.Description}
                        placeholder={this.props.Description}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="BelongedTo">
                        <Form.Label>BelongedTo</Form.Label>
                        <Form.Control type="text" name="BelongsTo" required 
                        defaultValue={this.props.BelongsTo}
                        placeholder={this.props.BelongsTo}/>
                    </Form.Group>
                    </Form.Row>

                    <Form.Row>
                    <Form.Group as={Col} controlId="Room">
                        <Form.Label>Room</Form.Label>
                        <Form.Control type="text" name="Room" required 
                        defaultValue={this.props.Room}
                        placeholder={this.props.Room}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Missing">
                        <Form.Label>Missing</Form.Label>
                        <Form.Control type="text" name="Missing" required 
                        defaultValue={this.props.Missing}
                        placeholder={this.props.Missing}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="DateAcquired">
                        <Form.Label>DateAcquired</Form.Label>
                        <Form.Control type="text" name="DateAcquired" required 
                        defaultValue={this.props.DateAcquired}
                        placeholder={this.props.DateAcquired}/>
                    </Form.Group>
                    </Form.Row>

                    <Form.Row>
                    <Form.Group as={Col} controlId="Cost">
                        <Form.Label>Cost</Form.Label>
                        <Form.Control type="text" name="Cost" required 
                        defaultValue={this.props.Cost}
                        placeholder={this.props.Cost}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="PO">
                        <Form.Label>PO</Form.Label>
                        <Form.Control type="text" name="PO" required 
                        defaultValue={this.props.PO}
                        placeholder={this.props.PO}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Type">
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" name="Type" required 
                        defaultValue={this.props.Type}
                        placeholder={this.props.Type}/>
                    </Form.Group>
                    </Form.Row>

                    <Form.Row>
                    <Form.Group as={Col} controlId="OriginalTag">
                        <Form.Label>OriginalTag</Form.Label>
                        <Form.Control type="text" name="OriginalTag" required 
                        defaultValue={this.props.OriginalTag}
                        placeholder={this.props.OriginalTag}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Condition">
                        <Form.Label>Condition</Form.Label>
                        <Form.Control type="text" name="Condition" required 
                        defaultValue={this.props.Condition}
                        placeholder={this.props.Condition}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Doc">
                        <Form.Label>Document</Form.Label>
                        <Form.Control type="text" name="Condition" required 
                        defaultValue={this.props.Doc}
                        placeholder={this.props.Doc}/>
                    </Form.Group>
                    </Form.Row>

                    <Form.Group>
                        <Button variant="primary" type="submit" onClick={this.props.onHide}>
                            Move to Surplus
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