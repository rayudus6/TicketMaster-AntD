import React,{Component} from 'react';
import axios from 'axios';
import { Table } from 'antd';

const columns = [
  {
    title: 'App Name',
    width: 100,
    dataIndex: 'appName',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Subject',
    width: 200,
    dataIndex: 'subject',
    key: 'subject',
    fixed: 'left',
  },
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
    width: 150,
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
    width: 150,
  },
  {
    title: 'Priority',
    dataIndex: 'priority',
    key: 'priority',
    width: 150,
  },
  {
    title: ' Description',
    dataIndex: 'description',
    key: 'description',
    width: 150,
  },
  {
    title: 'Status',
    dataIndex: 'status',    
    key: 'status',
    width: 150,
  },
];

class AllTickets extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/tickets').then((ticket) =>{
            this.setState({
                data:ticket.data
            })
            console.log(this.state.data);
        });
    }
    render(){
        return(
            <div>
                <Table columns={columns} dataSource={this.state.data} scroll={{ x: 1500, y: 300 }} />
            </div>
        )
    }
}


export default AllTickets;
