import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {EditSurplusModal} from './EditSurplusModal';


let url='http://localhost:53535/api/';

export class Surplus extends Component{

    constructor(props){
        super(props);
        this.state={invs:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(url+'surplus')
        .then(response=>response.json())
        .then(data=>{
            this.setState({invs:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteInv(TagNumber){
        if(window.confirm('Are you sure?')){
            fetch(url+'surplus/'+TagNumber,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {invs, TagNumber, Description, BelongedTo, SerialNumber}=this.state;
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Tag Number</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Belonged To</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invs.map(inv=>
                            <tr key={inv.TagNumber}>
                                <td>{inv.TagNumber}</td>
                                <td>{inv.Description}</td>
                                <td>{inv.Date}</td>
                                <td>{inv.BelongedTo}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        TagNumber:inv.TagNumber,
        Description:inv.Description,
        BelongedTo:inv.BelongedTo,
        Date:inv.Date,
        SerialNumber:inv.SerialNumber
        })}>
            View/Edit
        </Button>

        <Button className="mr-2" variant="danger"
        onClick={()=>this.deleteInv(inv.TagNumber)}>
            Delete
        </Button>

        <EditSurplusModal show={this.state.editModalShow}
        onHide={editModalClose}
        TagNumber={TagNumber}
        Description={Description}
        BelongedTo={BelongedTo}
        Date={inv.Date}
        SerialNumber={SerialNumber}
        />
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

            </div>
        )
    }
}