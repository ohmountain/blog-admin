import React, { Component } from 'react';
import SimpleMDE from 'simplemde';
import marked from 'marked'
import highlight from 'highlight.js'
import { Input, Icon, Select, Divider, Row, Col, Button } from 'antd';

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
    }

    render() {
        return <div className='editor-wrapper'>
            <Input placeholder='标题'/>
            <Divider>选择分类</Divider>
            <Select showSearch style={{ width: '100%' }} placeholder="请选择分类">
                <Select.Option value="1">1</Select.Option>
                <Select.Option value="2">2</Select.Option>
                <Select.Option value="3">3</Select.Option>
                <Select.Option value="4">4</Select.Option>
            </Select>

            <Divider>请下下方输入文章内容</Divider>
            <textarea ref={ this.editor } />
            <Divider />
            <Row gutter={24}>
                <Col span={6} offset={9}><Button type="primary" size="large">保存</Button></Col>
            </Row>
        </div>;
    }
}


export default Editor;
