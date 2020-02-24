import React,{Component} from 'react';
import { Layout } from 'antd';
import DeveloperImg from '../assets/images/developer.png';

const { Content } = Layout;

class Home extends Component{
    render(){
        return(
            <div>
            <Layout>
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="home-content">
                    <h1>Ticket-Master</h1>
                    <img src={DeveloperImg} alt="Ticket-Master" />
                </div>
                </Content>
            </Layout>
            </div>
        )
    }
}

export default Home;