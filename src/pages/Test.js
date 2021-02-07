import React,{useState, useEffect} from 'react'
import './Test.css';
import { Button } from 'antd';
import styled from 'styled-components' // 下面style.div样式插件
  
export const Styles = styled.div` // Styles是样式的name  div是要包裹的父元素的标签，可以是div sapn 什么都行
   padding: 100px;
   margin: 0 auto;
   width: 500px;
   height: 100px;
   background: #999;
`
// 使用是要把Nb当作组件一样 把其他元素放在这里

 
 
const Test  = ()=>{
   const [count,setcount] = useState(1) // 这个就是 this.state

   useEffect(() => { // useEffect 就是生命周期 它等于 componentDidMOUNT..... 等一堆

   },[])

   const handleClick = () => {
      setcount( count + 1 ) // this.setState({ count + 1 })
   }
 
   return(
      <div>
         <Styles style={{color: 'red'}}>
            <Button onClick={ handleClick }>{ count }</Button> 
         </Styles>
         {/* <div className="nb">
            <Button onClick={ handleClick }>{ count }</Button> 
         </div> */}
      </div>
   )
}
// const test  = connect(({ }) => ({  }))(test View)
export default Test