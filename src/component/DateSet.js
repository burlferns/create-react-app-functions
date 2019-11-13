import React from 'react';
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import dateIcon from '../images/calendar.png';

const boxLength="300px";
const boxHeight="30px;"


const DivEntryBox = styled.div`
  border:1px solid grey;
  border-radius:5px;
  width:${boxLength};
  height:${boxHeight};
  display: flex;
  align-items: center;
  justify-content: left;
`;

const DivMsgBox = styled.div`
  // border:1px solid grey;
  border-radius:5px;
  width:${boxLength};
  height:${boxHeight};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDatePic = styled(DatePicker)`
  font-size:16px;
  font-family: 'Muli', sans-serif;
  border:none;
`;

const Img = styled.img`
  width:20px;
  margin-right:3px;
  // border:1px solid grey;
`;


export default function DateSet({date, handleDateChange, errors, touched}) {
  return (
    <div>
      <DivEntryBox>
        <Img src={dateIcon} alt="Date Icon" />
        <StyledDatePic 
        	selected={date} 
        	onChange={handleDateChange} 
        	placeholderText="Please enter a date"
        />
      </DivEntryBox>
      <DivMsgBox>
        {touched && errors && (<p>{errors}</p>)}
      </DivMsgBox>
    </div>
  );
}