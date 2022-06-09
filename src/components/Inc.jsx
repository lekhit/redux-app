import { UploadOutlined } from '@ant-design/icons';
import { Button, Popconfirm,Input, Space, Upload } from 'antd';
import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../state/index';
const App = () => 
  {
    const dispatch=useDispatch();
    const {depositMoney,withdrawMoney}=bindActionCreators(actionCreators,dispatch)
    const amount=useSelector(state=>state.amount)
return(
  
  <Space>

    <Button type="primary" onClick={()=>{depositMoney(100)}}>decrement </Button>
   <Input  value={amount
   } style={{minWidth:100}} ></Input>
    <Button type="primary" onClick={()=>{withdrawMoney(100)}}>increment</Button>
  </Space>
);}

export default App;