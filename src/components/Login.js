import React from "react";
import styled from "styled-components"

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`;

const Login =()=> {
    return(
        <div style={{textAlign:'center'}}>
            <h4>Login</h4>
            <Container>
                ID <input id="id" name="id" placeholder="ID" />
                PASSWORD <input id="password" name="password" placeholder="PASSWORD" />
            </Container>
            <button onClick={()=>{('id'===null)?alert("아이디를 입력해주세요"):alert("로그인")}}>로그인</button>
        </div>
    );
}

export default Login;