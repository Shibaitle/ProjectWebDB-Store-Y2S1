import styled from "styled-components";


const Section =styled.section `
    height: auto;
`;

const Txn_box = styled.div`
    display: flex;
    height: 80vh;
    padding:2%;
    justify-content: center;
`;

const Txn_info = styled.div`
    border: 2px solid black;
    width: 50%;
    background-color: white;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    img{
        width: 100%;
        height: 40vh;
        object-fit: contain;
    }
`;


const Info_box = styled.div`
    height: 80%;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;


const Option_Box = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-around;
    
    button {
        &:hover {
            cursor: pointer;
        }
    }
`;

const Confirm_btn = styled.button`
    font-weight: bold;
    font-size: 1.5vw;
    margin-top: 5vh;
    width: 20vw;
    border: 3px solid black;
    background-color: rgb(136, 250, 95);
`;

const Cancel_btn = styled.button`
    font-weight: bold;
    font-size: 1.5vw;
    margin-top: 5vh;
    width: 20vw;
    border: 3px solid black;
    background-color: rgb(245, 17, 17);
`;




export default function Payment(){
    return(
        <Section>
            <Txn_box>
                <Txn_info>
                    <Info_box>
                        <h1>Kunbe</h1>
                        <h2>ชื่อเกม : Local Defensive</h2>
                        <h3>ราคา : 5.99$</h3>
                    </Info_box>
                    <Option_Box>
                        <Cancel_btn type="submit">ยกเลิก</Cancel_btn>
                        <Confirm_btn type="submit">ยืนยัน</Confirm_btn>
                    </Option_Box>
                </Txn_info>
            </Txn_box>
        </Section>
    );
}