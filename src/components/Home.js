import React,{useState} from 'react'
import { Button } from 'antd';
import styled from 'styled-components'
 
export const Styles = styled.div`
    color: red;
    padding: 40px;
`
 
const Home  = ()=>{
   const [count,setcount] = useState(1) // 这个就是 this.state
   const handleClick = () => {
    setcount( count + 1 ) 
   }
 
   return(
      <>
        <Styles>
            <div style={{ paddingBottom: '20px' }}>首页数字{count}</div>
            <Button onClick={ handleClick }>按钮</Button> 
        </Styles>
      </>
   )
}
// const Home  = connect(({ }) => ({  }))(Home View)
export default Home 