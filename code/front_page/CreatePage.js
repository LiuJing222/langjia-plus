import React, { useState } from 'react'
import CreateSider from './CreateSider.js'
import CreateHeader from './CreateHeader'
import CreateContent from './CreateContent'
import './CreatePage.css'
import {LoadingOutlined} from '@ant-design/icons';

const CreatePage = () => {
    // if (localStorage.getItem('tip') === 'false') {
    //     localStorage.setItem('tip', true);
    //     window.location.reload();
    // }
    return (
        <div>
            {/* {
                localStorage.getItem('furniture') ?
                    <div>
                        <div className='createpage'>
                            <CreateHeader></CreateHeader>
                            <CreateContent></CreateContent>
                            <CreateSider></CreateSider>
                        </div>
                        <div id="loading">
                            <LoadingOutlined style={{fontSize:20,marginRight:4}}/>
                            loading
                        </div>
                    </div>

                    : */}
                    <div>
                        <div className='createpage' style={{opacity:1}}>
                            <CreateHeader></CreateHeader>
                            <div>
                                <CreateContent></CreateContent>
                                <CreateSider></CreateSider> 
                            </div>
                            
                        </div>
                    </div>
            {/* } */}
        </div>

    )
}

export default CreatePage
