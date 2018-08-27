import React from 'react';

import PageTitle from 'component/page-title/index.jsx';

class Home extends React.Component{
    render(){
        return (
            <div id="page-wrapper">
                <PageTitle title="首页" />  
                <button className="bth bth-default">test</button>
            </div>
        );
    }
}
export default Home;
