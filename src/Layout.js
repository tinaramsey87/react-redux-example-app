import React from 'react';
import { Link } from 'react-router-dom';
import { Layout as AntLayout, Menu } from 'antd';


const { Header, Footer, Sider, Content } = AntLayout;
function Layout(props) {
  return (
      <AntLayout>
            <Header><div className='App-text'>Matt is butts</div></Header>
            
            <AntLayout>
                <Sider>
                    <div>
                        <Menu theme="dark">
                            <Menu.Item key="0" ><Link to='/'>HOME</Link></Menu.Item>
                            <Menu.Item key="1" ><Link to='/counter'>COUNTER</Link></Menu.Item>
                            <Menu.Item key="2" ><Link to='/asynclist'>ASYNC LIST</Link></Menu.Item>
                            <Menu.Item key="3" ><Link to='/whatdo'>WHAT DO</Link></Menu.Item>
                            <Menu.Item key="4" ><Link to='/stupidform'>STUPID FORM</Link></Menu.Item>
                            <Menu.Item key="5" ><Link to='/login'>LOGIN</Link></Menu.Item>
                        </Menu>
                    </div>
                </Sider>

                <Content>
                    {props.children}
                </Content>
            </AntLayout>

            <Footer>footer</Footer>
      </AntLayout>
  );
}

export default Layout;
