import React from 'react';
import {Icon, TabBar} from "@ant-design/react-native";


const Navbar = props => {
    return (
        <div>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="#f5f5f5"
            >
                <TabBar.Item
                    title="Home"
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon name="ordered-list" />}
                    title="Login"
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon name="like" />}
                    title="Friend"
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon name="user" />}
                    title="My App"
                >
                </TabBar.Item>
            </TabBar>
        </div>
    );
};
export default Navbar;
