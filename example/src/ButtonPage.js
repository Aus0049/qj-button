/**
 * Created by Aus on 2017/11/23.
 */
import React from 'react';
import Button from '../../lib/Button';
import '../../style/common.scss';

const ButtonPage = () => {
    return (
        <div className="page button">
            <div className="button-box">
                <h1 className="title">Button</h1>
                <Button>default 按钮</Button>
                <Button disabled>disabled 按钮</Button>
                <Button type="primary">primary 按钮</Button>
                <Button type="primary" disabled>primary disabled 按钮</Button>
                <Button type="ghost">幽灵 按钮</Button>
                <Button type="ghost" disabled>disabled 幽灵 按钮</Button>
                <Button type="primary" loading>loading 按钮</Button>
                <Button type="primary" onClick={()=>{alert('click')}}>点击事件</Button>
            </div>

            <div className="button-box button-group">
                <Button type="primary" group>登录</Button>
                <Button type="ghost" group>注册</Button>
            </div>

            <div className="button-box button-group">
                <Button type="primary" group>左</Button>
                <Button type="ghost" group>中</Button>
                <Button group>右</Button>
            </div>
        </div>
    )
};

export default ButtonPage;