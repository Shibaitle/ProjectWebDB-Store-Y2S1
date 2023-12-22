import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledFooter = styled.footer`
  background-color: #B6BBC4; /* Black background color */
  color: black; /* White text color */
  width: 100%;
  margin-top: 100px; /* Adjust the margin-top as needed */
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* Adjust the height as needed */
  padding: 20px;
`;

const ColumnsWrapper = styled.div`
  text-align: center;
`;

const Column = styled.div`
  display: inline-block;
  margin: 0 15px;
`;

const Footer = () => {
  const current_year = new Date().getFullYear();

  return (
    <StyledFooter>
      <Wrapper>
        <ColumnsWrapper>
          <Column>
            <Link href="/" target="_blank" className="btn btn-link">
              Privacy
            </Link>
            <span> | </span>
            <Link href="/" target="_blank" className="btn btn-link">
              Terms
            </Link>
            <span> | </span>
            <Link href="/" className="btn btn-link">
              Contact
            </Link>
          </Column>
          <Column>
            <p>
              Copyright © {current_year}, (DEV)CD-Keys. All Rights Reserved.
            </p>
          </Column>
        </ColumnsWrapper>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
