import styled from "styled-components";

import { BaseButton, GoogleSignInButton, InvertedButton } from "../button/button.styles";
export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
        margin-top: auto;
    }
`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    /* 定义滚动条样式 */
    &::-webkit-scrollbar {
        width: 10px; //定义滚动条宽度
        height: 10px; //定义滚动条高度
        border-radius: 10px; //定义滚动条圆角
        background-color: rgba(240, 240, 240, 0.1); //定义滚动条颜色
    }

    /*定义滚动条轨道 内阴影+圆角*/
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 0px rgba(240, 240, 240, 0.5); //定义轨道阴影
        border-radius: 10px; //定义轨道圆角
        background-color: #fff; //定义轨道颜色
    }

    /*定义滑块 内阴影+圆角*/
    &::-webkit-scrollbar-thumb {
        border-radius: 10px; //定义滑块圆角
        box-shadow: inset 0 0 0px rgba(240, 240, 240, 0.5); //定义滑块阴影
        background-color: rgba(2, 33, 54, 0.3); //定义滑块颜色
    }
`;
