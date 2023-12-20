import styled from "styled-components";


const Section =styled.section `
    height: auto;
    box-sizing: border-box;
    margin:0;
    padding:0;
`;

const Profile_flex =styled.div `
    display: flex;
    width: 100%;
    height: 100vh;
    padding:2%;
`;

const Option_flex=styled.div `
    display: flex;
    padding: 5%;
    width: 30%;
    height: auto;
    box-sizing: unset;
`;

const Option_box =styled.div `
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

const User_info =styled.div `
    width: 100%;
    display: flex;
    height: 15vh;
`;

/* No picture need, obsolete
const Prof_pic =styled.div `
    width: 45%;
    height: 100%;
    object-fit: fill;
    justify-content: center;
    align-items: center;
    display: flex;
    img{
        max-width: 80%;
        max-height: 80%;
        object-fit: fill;
        border-radius: 180px;
    }
`;
*/

const Email_box =styled.div `
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    h2{
        font-size: 1vw;
        width: fit-content;
        height: auto;
        word-wrap: break-word;
    }
`;

const Display_flex =styled.div `
    display: flex;
    padding: 5%;
    width: 50%;
    height: 100%;
    box-sizing: unset;
    flex-direction: column;
    text-align: center;
    `;

const Display_box =styled.div `
    width: 100%;
    height: auto;
    h1{
        padding-bottom: 5vh;
        font-size: 2vw;
    }
    `;

const Form =styled.form `

    `;

const Change_box =styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    label{
        font-size: 1.5vw;
        font-weight: bold;
        padding: 2vh 0vw 5vh 2vw;
    }
    input{
        width: 75%;
        margin: 0vh 0vw 0vh 5vw;
        height: 5vh;
        font-size: 1vw;
    }
    `;

const Submit_holder =styled.div `
    margin: 3vh 0vw 0vh 0vw;
    display: flex;
    justify-content: center;
    }
    input{
        width: 25%;
        height: 5vh;
    }
`;


export default function UserInfo(/*userPic, userName, userEmail*/){
    return(
        <Section>
            <Profile_flex>
                <Option_flex>
                    <Option_box>
                        <User_info>
                            <Email_box>
                                <h2>บัญชีของฉัน</h2>
                                <h2>SupaKarl</h2>
                                <h2>kunbenorsortor@gmail.com</h2>
                            </Email_box>
                        </User_info>
                        <a href="history">รายการชำระเงิน</a>
                        <a href="/cart">ตะกร้า</a>
                        <a href="#">ล็อกเอาต์</a>
                        
                    </Option_box>
                </Option_flex>
            <Display_flex>
                <Display_box>
                    <h1>เปลี่ยนข้อมูลส่วนตัว</h1>
                    <Form>
                        <Change_box>
                            <label for="user-change">ชื่อ</label>
                            <input type="text" id="user-change" name="user-change" placeholder="บัญชีของฉัน"/>
                        </Change_box>
                        <Change_box>
                            <label for="email-Change">อีเมล</label>
                            <input type="text" id="email-Change" name="email-Change" placeholder="อีเมลของฉัน"/>
                        </Change_box>
                        <Submit_holder>
                            <input type="submit"/>
                        </Submit_holder>
                    </Form>
                </Display_box>
            </Display_flex>
            </Profile_flex>
        </Section>
    );
}