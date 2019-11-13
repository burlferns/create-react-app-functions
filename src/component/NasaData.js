import React from "react";
import {connect} from 'react-redux';
import styled from "styled-components";

const StylDiv = styled.div`
  max-width:800px;
  margin:30px auto;
`;

const StylImg = styled.img`
  max-width:800px;
  margin:10px auto;
`;

const StylH2 = styled.h2`
  text-align:center;
  margin: 10px auto;
`;

const StylP = styled.p`
  margin:10px auto;
`;

function NasaData(props) {
  const {hdurl,title,explanation} = props.nasaData;
  const {date,error,isFetching} = props;
  // console.log("In NasaData. title:",title,"  isFetching:",isFetching,"  error:",error);

  if(title!=="" && !error && !isFetching) {
    return (
      <StylDiv>
        <StylH2>{date}</StylH2>
        <StylImg alt="Nasa's astronomy picture" src={hdurl} />
        <StylH2>{title}</StylH2>
        <StylP>{explanation}</StylP>
      </StylDiv>  
    );
  }

  if(title==="" && !error && !isFetching) {
    return ( <></>  );
  }
  
  if(isFetching && !error ) {
    return ( 
      <StylDiv>
        <StylH2>{`Getting data for ${date}, please wait...`}</StylH2>
      </StylDiv>  
    );
  }
  
  if(error) {
    return ( 
      <StylDiv>
        <StylH2>{`No data for ${date}, try another date.`}</StylH2>
      </StylDiv>  
    );
  }

}

function mapStateToProps(state) {
  return {
    nasaData: state.nasaData,
    date: state.date,
    error: state.error,
    isFetching: state.isFetching,
  };
}

export default connect(mapStateToProps,{})(NasaData);