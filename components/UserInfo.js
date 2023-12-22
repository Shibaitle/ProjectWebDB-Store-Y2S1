/* eslint-disable @next/next/no-html-link-for-pages */
import styled from "styled-components";

const Section = styled.section`
  height: auto;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const ProfileFlex = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 2%;
`;

const OptionFlex = styled.div`
  display: flex;
  padding: 5%;
  width: 30%;
  height: auto;
  box-sizing: unset;
`;

const OptionBox = styled.div`
  width: 100%;
  height: 45vh;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.5vw;
    color: black;
    text-decoration: none;
    width: 100%;
    height: 10vh;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

const UserInfoo = styled.div`
  width: 100%;
  display: flex;
  height: 15vh;
`;

const EmailBox = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  h2 {
    font-size: 1.5vw;
    width: fit-content;
    height: auto;
    word-wrap: break-word;
    margin: 0;
  }
`;

const DisplayFlex = styled.div`
  display: flex;
  padding: 5%;
  width: 50%;
  height: 100%;
  box-sizing: unset;
  flex-direction: column;
  text-align: center;
`;

const DisplayBox = styled.div`
  width: 100%;
  height: auto;
  h1 {
    padding-bottom: 5vh;
    font-size: 2vw;
  }
`;

const Form = styled.form``;

const ChangeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    font-size: 1.5vw;
    font-weight: bold;
    margin: 2vh 0vw 1vh 0vw;
  }
  input {
    width: 75%;
    margin: 0vh 0vw 2vh 0vw;
    height: 5vh;
    font-size: 1vw;
    padding: 0.5vh;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const SubmitHolder = styled.div`
  margin: 2vh 0vw 0vh 0vw;
  display: flex;
  justify-content: center;
  input {
    width: 25%;
    height: 5vh;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2vw;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #45a049;
    }
  }
`;

export default function UserInfo(/*userPic, userName, userEmail*/) {
  return (
    <Section>
      <ProfileFlex>
        <OptionFlex>
          <OptionBox>
            <UserInfoo>
              <EmailBox>
                <h2>บัญชีของฉัน</h2>
                <h2>SupaKarl</h2>
                <h2>kunbenorsortor@gmail.com</h2>
              </EmailBox>
            </UserInfoo>
            <a href="history">รายการชำระเงิน</a>
            <a href="/cart">ตะกร้า</a>
            <a href="#">ล็อกเอาต์</a>
          </OptionBox>
        </OptionFlex>
        <DisplayFlex>
          <DisplayBox>
            <h1>เปลี่ยนข้อมูลส่วนตัว</h1>
            <Form>
              <ChangeBox>
                <label htmlFor="user-change">ชื่อ</label>
                <input
                  type="text"
                  id="user-change"
                  name="user-change"
                  placeholder="บัญชีของฉัน"
                />
              </ChangeBox>
              <ChangeBox>
                <label htmlFor="email-Change">อีเมล</label>
                <input
                  type="text"
                  id="email-Change"
                  name="email-Change"
                  placeholder="อีเมลของฉัน"
                />
              </ChangeBox>
              <SubmitHolder>
                <input type="submit" value="บันทึกการเปลี่ยนแปลง" />
              </SubmitHolder>
            </Form>
          </DisplayBox>
        </DisplayFlex>
      </ProfileFlex>
    </Section>
  );
}
