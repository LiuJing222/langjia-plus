import React, { useState } from 'react'
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

const AddIns = () => {
    const email = localStorage.getItem('email');
    const cancelAdd = () => {
        document.getElementsByClassName('designer_page_addIns_outside')[0].style.display = 'none';
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
            area: values.area+' ㎡',
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

    return (
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
    )
}

export default AddIns
