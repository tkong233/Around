import React from 'react';
import { Tabs, Button, Spin } from 'antd';
import { GEO_OPTIONS } from '../constants';

const TabPane = Tabs.TabPane;



export class Home extends React.Component {
    state = {
        isLoadingGeoLocation: false,
        error: '',
    }

    componentDidMount() {
        if ("geolocation" in navigator) {
            /* geolocation is available */
            this.setState({ isLoadingGeoLocation: true, error: ''});
            navigator.geolocation.getCurrentPosition(
                this.onSuccessLoadGeoLocation,
                this.onFailedLoadGeoLocation,
                GEO_OPTIONS
            );
        } else {
            this.setState({ isLoadingGeoLocation: false, error: 'Load geo location failed' })
            /* geolocation IS NOT available */
        }
    }

    onSuccessLoadGeoLocation = (position) => {
        this.setState({ isLoadingGeoLocation: false, error: 'Load geo location failed' });
        console.log(position);
    }

    onFailedLoadGeoLocation = () => {
        this.setState({ isLoadingGeoLocation : false });
        console.log('Failed to load geo location');
    }

    getImagePost = () => {
        const{error, isLoadingGeoLocation} = this.state;
        if(error) {
            return <div>{error}</div>;
        } else if(isLoadingGeoLocation) {
            return <Spin tip="is loading geo location..."/>;
        } else {
            return 'content of tab 1'
        }
}

    render() {
        const operations = <Button type="primary">Create New Post</Button>;
        return (
            <Tabs tabBarExtraContent={operations} className="main-tabs">
                <TabPane tab="Image Posts" key="1">
                    {this.getImagePost()}
                </TabPane>
                <TabPane tab="Video Posts" key="2">Content of tab 2</TabPane>
                <TabPane tab="Map" key="3">Content of tab 3</TabPane>
            </Tabs>

        );
    }
}
