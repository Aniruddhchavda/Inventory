import React from "react";
import { Input, Segment} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import {Button,ButtonToolbar,ToggleButton } from 'react-bootstrap';


let url='http://localhost:53535/api/';

export class Certification extends React.Component {
    refreshList(){
      fetch(url+'certification')
      .then(response=>response.json())
      .then(data1=>{
          this.setState({
              originalData:data1,
              isLoggedIn : this.props.isLoggedIn
            });
      });
    }

  constructor(props) {
    super(props);
    this.state = {
      data: this.originalData,
      columns: [],
      searchInput: "",
    };
  }

  
  componentDidMount() {
    this.refreshList();


    let columns = [
      {
            Header: "InventoryID",
            accessor: "InventoryID",
            width: 30,
            show: false,
            displayValue: "InventoryID"
      },
      {
        Header: "TagNumber",
        accessor: "TagNumber",
        width: 90,
        show: true,
        displayValue: "TagNumber"
      },
      {
        Header: "SerialNumber",
        accessor: "SerialNumber",
        width: 100,
        show: true,
        displayValue: "SerialNumber"
      },
      {
        Header: "Make",
        accessor: "Make",
        width: 100,
        show: true,
        displayValue: "Make"
      },
      {
        Header: "Model",
        accessor: "Model",
        width: 100,
        show: true,
        displayValue: "Model"
      },
      {
        Header: "Description",
        accessor: "Description",
        width: 200,
        show: true,
        displayValue: "Description "
      },
      {
        Header: "Certification",
        accessor: "Certification",
        width: 100,
        show: false,
        displayValue: "Certification "
      },
      {
        Header: 'Actions',
        id: 'actions',
        width: 330,
        Cell: ({ row }) => {
          return (
         <div>
        <Button className="mr-2" variant="info"
    onClick={()=>
        this.certify(row.TagNumber,'Verified')
         }>
            Certify
        </Button>

        <Button className="mr-2" variant="info"
    onClick={()=>
        this.certify(row.TagNumber,'Missing')
         }>
            Missing
        </Button>

        <Button className="mr-2" variant="info"
    onClick={()=>
        this.certify(row.TagNumber,'Pending')
         }>
            Start Over
        </Button>

        <Button className="mr-2" variant=
        {row.Certification=='Verified' && "success" || 
        row.Certification=='Pending' && "warning" || 
        row.Certification=='Missing' && "danger"}
        >
            {row.Certification}
        </Button>
        </div>
          );
        },
      }
    ];
    this.setState({ columns });
  }

  componentDidUpdate(){
    this.refreshList();
}

certify(TagNumber,Val)
{
  let concati = Val+','+TagNumber;
  console.log(concati);
    if(window.confirm('Are you sure?')){
        fetch(url+'certification/'+concati,{
            method:'DELETE',
            header:{'Accept':'application/json',
            'Content-Type': 'application/json'
          },
    })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert(error);
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
    return (
      <div>
        <br />
              <Segment inverted>
            <Input
                inverted placeholder='Search...'
                 name="searchInput"
                 value={searchInput || ""}
                 onChange={this.handleChange}
                 onRefresh={this.handleChange}
                 size='small'
             />
             <br/>
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


