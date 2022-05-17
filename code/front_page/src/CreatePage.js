import React, { useState, useEffect } from 'react'
import CreateSider from './CreateSider.js'
import CreateHeader from './CreateHeader'
import CreateContent from './CreateContent'
import './CreatePage.css'
import { LoadingOutlined } from '@ant-design/icons';

import IntroJs from 'intro.js'
import 'intro.js/introjs.css';

const CreatePage = () => {
    const [c, setC] = useState("")
    useEffect(async () => {
        if (!localStorage.getItem('intro')) {
            IntroJs().start();
            localStorage.setItem('intro', true);
        }

        setInterval(() => {
            setC(localStorage.getItem("cutDis"))
        }, 2000)
    }, [])
    // if (localStorage.getItem('tip') === 'false'&&localStorage.getItem('intro')) {
    //     localStorage.setItem('tip', true);
    //     window.location.reload();
    // }
    // localStorage.getItem("cutDis")
    return (
        <div>
            {
                localStorage.getItem('furniture') ?
                    <div>
                        <div className='createpage' style={{ opacity: 1 }}>
                            <CreateHeader></CreateHeader>
                            <div className='create_content'>
                                {c == "flex" ? <div></div> : <CreateSider></CreateSider>}
                                <CreateContent></CreateContent>

                            </div>

                        </div>
                        <div id="loading">
                            <LoadingOutlined style={{ fontSize: 20, marginRight: 4 }} />
                            loading
                        </div>
                    </div>

                    :
                    <div>
                        <div className='createpage' style={{ opacity: 1 }}>
                            <CreateHeader></CreateHeader>
                            <div className='create_content'>
                                {c == "flex" ? <div></div> : <CreateSider></CreateSider>}
                                {/* {localStorage.getItem("cutDis") == "flex" ? <div></div> : <CreateSider></CreateSider>} */}
                                <CreateContent></CreateContent>

                            </div>

                        </div>
                    </div>
            }
        </div>

    )
}

export default CreatePage
