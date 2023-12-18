import styled from "styled-components";



const Profile_flex =styled.div `
    display: flex;
    padding: 5%;
    width: 50%;
    height: auto;
    box-sizing: unset;
`;

const Opt_Flex=styled.div `
    display: flex;
    padding: 5%;
    width: 50%;
    height: 100%;
    box-sizing: unset;
    flex-direction: column;
    text-align: center;
`;

const option_box =styled.div `
    width: 100%;
    height: 45vh;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 1.5vw;
        color: black;
        text-decoration: none;
        width: 100%;
        height: 10vh;
    }
`;

const user_info =styled.div `
    width: 100%;
    display: flex;
    height: 15vh;
`;

const prof_pic =styled.div `
    width: 45%;
    height: 100%;
    object-fit: fill;
    justify-content: center;
    align-items: center;
    display: flex;
    img{
        max-width: 70%;
        max-height: 70%;
        object-fit: fill;
        border-radius: 180px;
    }
`;


const email_box =styled.div `
    display: flex;
    width: 100%;
    height: 100vh;
    padding:2%;
    h2{
        padding: 1vh 0vw;
        font-size: 1vw;
        width: fit-content;
        height: auto;
        word-wrap: break-word;
    }
`;


const Form = styled.form``;


export default function UserInfo(){
    return(
            <Profile_flex>
                <Opt_Flex>
                    <option_box>
                        <prof_pic>
                            <img src="https://cdn.shopify.com/s/files/1/0309/2113/0119/files/C2C2CFF8-55E4-4A98-9402-D904B79D26E6_480x480.jpg?v=1621947904" alt=""></img>
                        </prof_pic>
                        <email_box>
                            <h2>บัญชีของฉัน</h2>
                            <h2>Placeobo</h2>
                            <h2>Placebobo@gmail.com</h2>
                        </email_box>
                        <a href="#">รายการชำระเงิน</a>
                        <a href="/cart">ตะกร้า</a>
                        <a href="#">ล็อกเอาต์</a>
                    </option_box>
                </Opt_Flex>
            </Profile_flex>
    );
}