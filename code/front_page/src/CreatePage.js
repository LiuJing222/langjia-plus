import React, { useState,useEffect } from 'react'
import CreateSider from './CreateSider.js'
import CreateHeader from './CreateHeader'
import CreateContent from './CreateContent'
import './CreatePage.css'
import {LoadingOutlined} from '@ant-design/icons';

import IntroJs from 'intro.js'
import 'intro.js/introjs.css';

const CreatePage = () => {

    
    useEffect(async ()=>{
if(!localStorage.getItem('intro')){
            IntroJs().start();
            localStorage.setItem('intro',true);

        }
    },[])
    
    // if (localStorage.getItem('tip') === 'false'&&localStorage.getItem('intro')) {
    //     localStorage.setItem('tip', true);
    //     window.location.reload();
    // }
    return (
        <div>
            {
                localStorage.getItem('furniture') ?
                    <div>
                        <div className='createpage' style={{opacity:1}}>
                            <CreateHeader></CreateHeader>
                            <div className='create_content'>
                                <CreateSider></CreateSider> 
                                <CreateContent></CreateContent>     
                                
                            </div>
                            
                        </div>
                        <div id="loading">
                            <LoadingOutlined style={{fontSize:20,marginRight:4}}/>
                            loading
                        </div>
                    </div>

                    :
                    <div>
                        <div className='createpage' style={{opacity:1}}>
                            <CreateHeader></CreateHeader>
                            <div className='create_content'>
                                <CreateSider></CreateSider> 
                                <CreateContent></CreateContent>     
                                
                            </div>
                            
                        </div>
                    </div>
            }
        </div>

    )
}

export default CreatePage
