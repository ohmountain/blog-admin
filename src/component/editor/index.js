import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleMDE from 'simplemde';
import marked from 'marked'
import highlight from 'highlight.js'
import { Input, Icon, Select, Divider, Row, Col, Button, Spin } from 'antd';

import { get_category } from '../../action/posts.js';

class Editor extends Component {

    constructor(props) {
        super(props);
        this.editor = React.createRef();
    }

    componentDidMount() {
        let editor = new SimpleMDE({
            element: this.refs.editor,
            autofocus: true,
            autosave: true,
            initialValue: this.props.content,
            placeholder: "Text your great idea here",
            previewRender: function(plainText) {
                return marked(plainText,{
                    renderer: new marked.Renderer(),
                    gfm: true,
                    pedantic: false,
                    sanitize: false,
                    tables: true,
                    breaks: true,
                    smartLists: true,
                    smartypants: true,
                    highlight: function (code) {
                        return highlight.highlightAuto(code).value;
                    }
                });
            },
        })

        setTimeout(() => {
            this.props.dispatch(get_category());
        }, 2000);
    }

    renderCategory() {
        return this.props.category.map((c, i) => {
            return (<Select.Option key={i} value={c.id}>{c.title}</Select.Option>);
        });
    }

    isSpinning() {
        return this.props.category.size < 1;
    }

    render() {

        return <Spin spinning={ this.isSpinning() }  tip="获取分类中"><div className='editor-wrapper'>
            <Input placeholder='标题'/>
            <Divider>选择分类</Divider>
            <Select showSearch style={{ width: '100%' }} placeholder="请选择分类">{ this.renderCategory() }</Select>

            <Divider>请下下方输入文章内容</Divider>
            <textarea ref={ this.editor } />
            <Divider />
            <Row gutter={24}>
                <Col span={6} offset={9}><Button type="primary" size="large">保存</Button></Col>
            </Row>
        </div></Spin>;
    }
}

const mapStateToProps = state => {
    return {
        category: state.category
    }
}

const mapDispatchToProps = dispatch => {
    return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
