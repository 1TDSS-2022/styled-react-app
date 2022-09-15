import styled from "styled-components";


export const DivLista = styled.div`
 
    width: 100%;
    min-height: 85vh;
    padding: 20px;
    background-color: #ccc;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

`

export const DivTarefa = styled.div`
    background-color : #ffb;
    border:  2px solid #333;
    box-shadow: 5px 5px 5px #333;
    padding: 20px;
    text-align: center;
    width: 350px;
    height: 200px;
    margin: 10px;
    position: relative;
    h2,p{padding-bottom: 10px;}
    button{position:absolute;top:10px; right:10px}
`

export const DivForm = styled.div`
    width:100%;
    padding:20px;
    background-color:#993;

    form{width:50%; margin:auto;}
    form input, form textarea{padding:5px; width:80%;}
    for textarea{height:80px;}
    form button{padding:10px; background: #3c3; color:#fff}
    `

export const DivHome = styled.div`
    width:100%;
    height:85vh;
    background: #bbf;
    h1, p{padding:20px;}
    `

export const NavMenu = styled.nav`
    background: #999; height:15vh;
    display:felx; justify-content: center;

    ul{display: flex;}

    ul li{list-style: none;}
    ul li a{display: inline-block; text-decoration: none;
    padding: 20px; color: #fff; font-size: 1.5em; }
    `

export const DivApp = styled.div`
    h1{text-align: center};
    font-weight: bold;
    `