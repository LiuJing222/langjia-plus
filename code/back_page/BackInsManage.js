import React, { useState, useEffect } from 'react'
import BackLeftNav from './BackLeftNav'
import returnicon from './images/returnicon.png'
import {
    Form,
    Input,
    Button,
    Dialog,
    TextArea,
    Selector,
    Stepper,
} from 'antd-mobile'
import './AddIns.css'

import "./BackInsManage.css"
const BackInsManage = () => {
    const [inss, setInss] = useState([])
    const [insDetail, setInsDetail] = useState({})
    const [addIns, setAddIns] = useState(false)
    const [delIns, setDelIns] = useState('')

    useEffect(() => {
        var addIns = document.getElementById("back_addins")
        fetch('https://api.qasdwer.xyz:2019/inspiredatas')
            .then(res => res.json())
            .then(json => {
                json.sort(function (x, y) { return x.inspire_id - y.inspire_id });
                json && setInss(json)
                console.log(json[0])
            }).catch(err => {
                alert(err);
            })
    }, [])

    const getInsDetail = (token) => {
        console.log(token)
        setInsDetail(token)
    }
    const pushIns = () => {
        setAddIns(true)
    }

    // ========================================添加灵感==========================================

    const email = localStorage.getItem('email');
    const cancelAdd = () => {
        // document.getElementsByClassName('designer_page_addIns_outside')[0].style.display = 'none';
        setAddIns(false)
    }
    const onFinish = (values) => {
        // Dialog.alert({
        //     content: <pre>{JSON.stringify(values, null, 2)}</pre>,
        // })
        const data = {
            title: values.title,
            type: values.bedroom + '室' + values.livingroom + '厅' + values.kitchen + '厨' + values.toilet + '卫',
            tag: values.tag.join('、'),
            detail: values.detail,
            area: values.area + ' ㎡',
            message: values.message,
            vedio: values.vedio
        }
        fetch('https://api.qasdwer.xyz:2019/addinspiration/' + email, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(dat => {
            window.location.reload();
        })
    }

    const delInspiration = (id) => {
        setDelIns(id);
    }
    const onLeftClick = () => {
        setDelIns('');
    }
    const onRightClick = () => {
        fetch('https://api.qasdwer.xyz:2019/delinspiration/' + delIns, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json;charset=utf-8;"
            }
        })
            .then(res => res.json())
            .then(json => {
                json.sort(function (x, y) { return x.inspire_id - y.inspire_id });
                json && setInss(json)
                alert('删除成功！');
            }).catch(err => {
                alert('删除失败！', err);
            })
        setDelIns('');
    }

    return (
        <div className='back_ins_manage'>
            <div className='back_home_leftnav'>
                <BackLeftNav></BackLeftNav>
            </div>
            <div className="back_ins_manage_con">
                <h3>灵感管理</h3>
                <div className='add_ins_button' onClick={() => pushIns()}>添加灵感</div>
                <div className='back_ins_con'>
                    <div className='ins_con'>
                        <div className='ins_con_id' style={{ fontWeight: "bold" }}>灵感id</div>
                        <div className='ins_con_owner' style={{ fontWeight: "bold" }}>灵感发布者</div>
                        <div className='ins_con_title' style={{ fontWeight: "bold" }}>灵感标题</div>
                        <div className='ins_con_type' style={{ fontWeight: "bold" }}>灵感类型</div>
                        <div className='ins_con_tag' style={{ fontWeight: "bold" }}>灵感所带标签</div>
                        <div className='ins_con_op' style={{ fontWeight: "bold" }}>操作</div>
                    </div>
                    {inss[0] ? inss.map(token => {
                        return <div className='ins_con'>
                            <div className='ins_con_id'>{token.inspire_id}</div>
                            <div className='ins_con_owner'>{token.user_id}</div>
                            <div className='ins_con_title'>{token.title}</div>
                            <div className='ins_con_type'>{token.type}</div>
                            <div className='ins_con_tag'>{token.tag}</div>
                            <div className='ins_con_op'>
                                <button onClick={() => getInsDetail(token)}>详情</button>
                                <button onClick={() => delInspiration(token.inspire_id)}>删除</button>
                            </div>
                        </div>
                    })
                        : <div></div>}
                    {insDetail.inspire_id ?
                        <div className='ins_detail_mask'>
                            <div className='ins_detail_con'>
                                <p>{insDetail.inspire_id}</p>
                                <p>{insDetail.title}</p>
                                <p>{insDetail.create}</p>
                                <p>{insDetail.type}</p>
                                <p>{insDetail.detail}</p>
                                <p>{insDetail.area}</p>
                                <p>{insDetail.message}</p>
                                <p>{insDetail.vedio}</p>
                                <button onClick={() => setInsDetail({})}>关闭</button>
                            </div>
                        </div>
                        : <div></div>}
                </div>
            </div>
            {
                addIns ?
                    <div className="back_addIns">
                        <div className="designer_page_addIns_box">
                            <div className="designer_page_addIns_title">灵感发布</div>
                            <div className="designer_page_addIns_close"><img onClick={() => cancelAdd()} src={returnicon} /><div className="close_tag">关闭</div></div>
                            {/* inspire_id  title  create-time  type  tag  detail  area  message vedio */}
                            <div className="designer_page_addIns_content">
                                <div className="designer_page_addIns_text">请完善灵感内容</div>
                                <Form
                                    name='form'
                                    onFinish={onFinish}
                                    footer={
                                        <Button block type='submit' color='primary' size='large'>
                                            提交
                                        </Button>
                                    }
                                >
                                    <Form.Item name='title' label='标题' rules={[{ required: true }]}>
                                        <Input placeholder='请输入标题' />
                                    </Form.Item>
                                    <Form.Item name='detail' label='简单描述'>
                                        <Input placeholder='请输入简单描述' />
                                    </Form.Item>
                                    <Form.Item name='area' label='面积' rules={[{ required: true }]}>
                                        <Input placeholder='请输入面积' />
                                    </Form.Item>
                                    <Form.Item name='tag' label='标签' rules={[{ required: true }]}>
                                        <Selector
                                            columns={9}
                                            multiple
                                            options={[
                                                { label: '北欧', value: '北欧' },
                                                { label: '混搭', value: '混搭' },
                                                { label: '轻奢', value: '轻奢' },
                                                { label: '工业风', value: '工业风' },
                                                { label: '日式', value: '日式' },
                                                { label: '家族', value: '家族' },
                                                { label: '现代简约', value: '现代简约' },
                                                { label: '新中式', value: '新中式' },
                                                { label: '家装', value: '家装' },
                                            ]}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        initialValue={0}
                                        rules={[
                                            {
                                                min: 0,
                                                type: 'number',
                                            },
                                        ]}
                                        name='bedroom'
                                        label='室数'
                                    >
                                        <Stepper />
                                    </Form.Item>
                                    <Form.Item
                                        initialValue={0}
                                        rules={[
                                            {
                                                min: 0,
                                                type: 'number',
                                            },
                                        ]}
                                        name='livingroom'
                                        label='厅数'
                                    >
                                        <Stepper />
                                    </Form.Item>
                                    <Form.Item
                                        initialValue={0}
                                        rules={[
                                            {
                                                min: 0,
                                                type: 'number',
                                            },
                                        ]}
                                        name='kitchen'
                                        label='厨数'
                                    >
                                        <Stepper />
                                    </Form.Item>
                                    <Form.Item
                                        initialValue={0}
                                        rules={[
                                            {
                                                min: 0,
                                                type: 'number',
                                            },
                                        ]}
                                        name='toilet'
                                        label='卫数'
                                    >
                                        <Stepper />
                                    </Form.Item>
                                    <Form.Item name='message' label='详细信息' rules={[{ required: true }]}>
                                        <TextArea
                                            placeholder='请输入信息'
                                            rows={6}
                                            showCount
                                        />
                                    </Form.Item>
                                    <Form.Item name='vedio' label='视频'>
                                        <Input placeholder='请输入视频链接' />
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                    : <div></div>
            }
            {
                delIns ?
                    <div className='ins_del_mask'>
                        <div className="ins_del_box">
                            <h3 className="ins_del_title">请确认是否删除该灵感</h3>
                            <div className="ins_del_desc">灵感编号：{delIns}</div>
                            <div className="ins_del_btns">
                                <button className="ins_del_btn" onClick={()=>onLeftClick()}>取消删除</button>
                                <button className="ins_del_btn" onClick={()=>onRightClick()}>确认删除</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div></div>

            }
        </div >
    )
}

export default BackInsManage