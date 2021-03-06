import React from "react";
import { Input, Segment} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import {Button,ButtonToolbar,ToggleButton } from 'react-bootstrap';
import {AddInvModal} from './AddInvModal';
import {EditInvModal} from './EditInvModal';
import { SurplusModal } from './SurplusModal'

let url='http://localhost:53535/api/';



export class Inventory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.originalData,
      columns: [],
      searchInput: "",
      invs:[], 
      addModalShow:false, 
      editModalShow:false, 
      surplusModalShow:false,
      isLoggedIn:this.props.isLoggedIn,
      checkboxChecked: false,
    };
  }

    refreshList(){
        fetch(url+'inventory')
        .then(response=>response.json())
        .then(data1=>{
            this.setState({
                originalData:data1});
        });
    }

 
  checkLogin()
  {
    return this.props.isLoggedIn;
  }

  checkWidth()
  {
    let {isLoggedIn} = this.state;
    let width = 112;
    if(this.checkLogin()){
      width = 80;
    }
   return width;
  }

  checkActionWidth()
  {
    let {isLoggedIn} = this.state;
    let width = 80;
    if(this.checkLogin()){
      width = 250;
    }
   return width;
  }
  
  componentDidMount() {
    this.refreshList();
    let editModalClose=()=>this.setState({editModalShow:false});
    let surplusModalClose=()=>this.setState({surplusModalShow:false});

    let columns = [
      {
             Header: () => (
              <div
               style={{
               textAlign:"left"
               }}
            >Inventory ID</div>),
            accessor: "InventoryID",
            width: 30,
            show: false,
            displayValue: "InventoryID"
      },
      {
        Header: () => (
          <div
           style={{
           textAlign:"left"
           }}
        >Tag Number</div>),
        accessor: "TagNumber",
        width: this.checkWidth(),
        show: true,
        displayValue: "TagNumber"
      },
      {
        Header: () => (
          <div
           style={{
           textAlign:"left"
           }}
        >Serial Number</div>),
        accessor: "SerialNumber",
        width: this.checkWidth(),
        show: true,
        displayValue: "SerialNumber"
      },
      {
        Header: () => (
          <div
           style={{
           textAlign:"left"
           }}
        >Make</div>),
        accessor: "Make",
        width: this.checkWidth(),
        show: true,
        displayValue: "Make"
      },
      {
        Header: () => (
          <div
           style={{
           textAlign:"left"
           }}
        >Model</div>),
        accessor: "Model",
        width: this.checkWidth(),
        show: true,
        displayValue: "Model"
      },
      {
        Header: () => (
          <div
           style={{
           textAlign:"left"
           }}
        >Room</div>),
        accessor: "Room",
        width: this.checkWidth(),
        show: true,
        displayValue: "Room"
      },
      {
        Header: () => (
          <div
           style={{
           textAlign:"left"
           }}
        >Missing</div>),
        accessor: "Missing",
        width: this.checkWidth(),
        show: true,
        displayValue: "Missing",
        Cell: row => <div><span style={{color: "blue"}} title=
        {row.value=="M" && "Missing" || 
        row.value=="N" && "Not Missing" ||
        row.value=="MI" && "Missing Information"}
        >{row.value}</span></div>
      },
      {
        Header: () => (
          <div
           style={{
           textAlign:"left"
           }}
        >Description</div>),
        accessor: "Description",
        width: this.checkWidth()+50,
        show: true,
        displayValue: "Description "
      },

      {
        Header: () => (
          <div
           style={{
           textAlign:"left"
           }}
        >Certification</div>),
        accessor: "Certification",
        width: 100,
        show: false,
        displayValue: "Certification "
      },
      {
        Header: () => (
          <div
           style={{
           textAlign:"left"
           }}
        >Belongs To</div>),
        accessor: "BelongsTo",
        width: this.checkWidth()+70,
        show: true,
        displayValue: "BelongsTo "
      },
      {
        Header: "DateAcquired",
        accessor: "DateAcquired",
        width: 150,
        show: false,
        displayValue: " DateAcquired "
      },
      {
        Header: "Cost",
        accessor: "Cost",
        width: 150,
        show: false,
        displayValue: " Cost "
      },
      {
        Header: "PO",
        accessor: "PO",
        width: 150,
        show: false,
        displayValue: " PO "
      },
      {
        Header: "Type",
        accessor: "Type",
        width: 150,
        show: false,
        displayValue: "Type "
      },
      {
        Header: "OriginalTag",
        accessor: "OriginalTag",
        width: 150,
        show: false,
        displayValue: "OriginalTag "
      },
      {
        Header: "Condition",
        accessor: "Condition",
        width: 150,
        show: false,
        displayValue: "Condition "
      },
      {
        Header: "Doc",
        accessor: "Doc",
        width: 150,
        show: false,
        displayValue: "Doc "
      },
      {
        Header: "Actions",
        id: 'actions',
        width: this.checkActionWidth(),
        Cell: ({ row }) => {
          return (
            <div>
        <Button className="mr-2" variant="outline-info"
        onClick={()=>this.setState({
        editModalShow:true,
        InventoryID:row.InventoryID,
        TagNumber:row.TagNumber,
        SerialNumber:row.SerialNumber,
        Make:row.Make,
        Model:row.Model,
        Room:row.Room,
        Missing:row.Missing,
        Description:row.Description,
        BelongsTo:row.BelongsTo,
        DateAcquired:row.DateAcquired,
        Cost:row.Cost,
        PO:row.PO,
        Type:row.Type,
        OriginalTag:row.OriginalTag,
        Condition:row.Condition,
        Doc:row.Doc,
        isLoggedIn:this.state.isLoggedIn
        })}>
            {this.checkLogin() &&
             "View/Edit"
            }
            {!this.checkLogin() &&
             "View"
            }
        </Button>


{ this.checkLogin() && 
        <Button className="mr-2" variant="outline-info"
    onClick={()=>this.setState({surplusModalShow:true,
      InventoryID:row.InventoryID,
      TagNumber:row.TagNumber,
      SerialNumber:row.SerialNumber,
      Make:row.Make,
      Model:row.Model,
      Room:row.Room,
      Missing:row.Missing,
      Description:row.Description,
      BelongsTo:row.BelongsTo,
      DateAcquired:row.DateAcquired,
      Cost:row.Cost,
      PO:row.PO,
      Type:row.Type,
      OriginalTag:row.OriginalTag,
      Condition:row.Condition,
      Doc:row.Doc
        })}>
            Surplus
        </Button>}
    
        { this.state.isLoggedIn && 
        <Button className="mr-2" variant="outline-danger"
    onClick={()=>this.deleteInv(row.InventoryID)}>
            Delete
        </Button>
        }

        <SurplusModal show={this.state.surplusModalShow}
        onHide={surplusModalClose}
        InventoryID={this.state.InventoryID}
        TagNumber={this.state.TagNumber}
        SerialNumber={this.state.SerialNumber}
        Make={this.state.Make}
        Model={this.state.Model}
        Room={this.state.Room}
        Missing={this.state.Missing}
        Description={this.state.Description}
        BelongsTo={this.state.BelongsTo}
        DateAcquired={this.state.DateAcquired}
        Cost={this.state.Cost}
        PO={this.state.PO}
        Type={this.state.Type}
        OriginalTag={this.state.OriginalTag}
        Condition={this.state.Condition}
        Doc={this.state.Doc}
        />

        <EditInvModal show={this.state.editModalShow}
        onHide={editModalClose}
        InventoryID={this.state.InventoryID}
        TagNumber={this.state.TagNumber}
        SerialNumber={this.state.SerialNumber}
        Make={this.state.Make}
        Model={this.state.Model}
        Room={this.state.Room}
        Missing={this.state.Missing}
        Description={this.state.Description}
        BelongsTo={this.state.BelongsTo}
        DateAcquired={this.state.DateAcquired}
        Cost={this.state.Cost}
        PO={this.state.PO}
        Type={this.state.Type}
        OriginalTag={this.state.OriginalTag}
        Condition={this.state.Condition}
        Doc={this.state.Doc}
        isLoggedIn={this.state.isLoggedIn}
        />


            </div>
          );
        },
      },
      {
        Header: () => (
          <div
           style={{
           textAlign:"left"
           }}
        >Status</div>),
        id: 'Status',
        width: this.checkWidth(),
        show: this.checkLogin(),
        accessor: "Status",
        Cell: ({ row }) => {
          return (
            <div>
            { this.state.isLoggedIn && 
              <Button className="mr-2" variant=
                      {row.Certification=='Verified' && "success" || 
                      row.Certification=='Pending' && "warning" || 
                      row.Certification=='Missing' && "danger"}
                      value={row.Certification}>
                  {row.Certification}
              </Button>
              }
           </div>
          )
        }
      }
    ];
    this.setState({ columns });
    
  }

  componentDidUpdate(){
    this.refreshList();
}

deleteInv(TagNumber)
{
    if(window.confirm('Are you sure?')){
        fetch(url+'inventory/'+TagNumber,{
            method:'DELETE',
            header:{'Accept':'application/json',
        'Content-Type':'application/json'}
        })
    }
}

  handleChange = event => {
    this.setState({ searchInput: event.target.value }, () => {
      this.globalSearch();
    });
  };

  globalSearch = () => {
    let { searchInput,originalData } = this.state;
    let filteredData = originalData.filter(value => {
      return (
        value.Description.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
        value.BelongsTo.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
        value.Make.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
        value.Model.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
        value.Room.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
        value.Missing.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
        value.SerialNumber.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
        value.TagNumber
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );
    });
    this.setState({ data: filteredData });
  };


  render() {
    let {originalData, data, columns, searchInput }=this.state;
         let addModalClose=()=>this.setState({addModalShow:false});
    return (
      <div>
          
        <br />
              <Segment inverted>
              <div className="d-flex justify-content-between">
              <ButtonToolbar>
                {this.state.isLoggedIn && 
                <Button variant='outline-light' size='md'
                 onClick={()=>this.setState({addModalShow:true})}>
                 Add Inventory</Button>
                }

                 <AddInvModal show={this.state.addModalShow}
                onHide={addModalClose}/>
            </ButtonToolbar>
            <Input
                inverted placeholder='Search...'
                 name="searchInput"
                 value={searchInput || ""}
                 onChange={this.handleChange}
                 size='small'
             />

              </div>
             </Segment>

        <ReactTable
          data={data || originalData}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
          style={{
            borderColor: '#a5a4a4',
            borderRadius: '5px',
            borderStyle: 'outset',
          }}
          defaultSorted={[
            {
              id: "TagNumber",
              desc: false
            }
          ]}
        />
        
      </div>
    );



  }

}


