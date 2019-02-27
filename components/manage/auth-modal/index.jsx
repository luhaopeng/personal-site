import React from 'react'
import { Modal } from 'antd'
import AuthCode from './auth-code'

class Authorize extends React.Component {
    render() {
        return (
            <Modal
                title="授权登录"
                visible={this.props.visible}
                closable={false}
                footer={null}
                keyboard={false}
                maskClosable={false}
            >
                <p>请输入动态密码</p>
                <AuthCode
                    onComplete={this.props.onComplete}
                    error={this.props.error}
                />
            </Modal>
        )
    }
}

export default Authorize
