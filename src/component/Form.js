import React, { useEffect } from 'react';
import { Form, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import {connect} from 'react-redux';

import SubmitBtn from './SubmitBtn';
import DateSet from './DateSet';

import {getData} from '../actions';

const FormCtrDiv = styled.div`
  margin-top:50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;



const DateForm = (props) => {
  const {values,errors,touched,status,setFieldValue,setFieldTouched,getData} = props;
  // const [data, setData] = useState({});
  
  // useEffect(() => {
  //   if(status) {
  //     let date = status.dateState;

  //     let dateString = (date.getMonth()+1)<10 ? "0"+(date.getMonth()+1) : ""+(date.getMonth()+1);
  //     dateString = dateString + "-" + (date.getDate()<10 ? "0"+date.getDate() : date.getDate());
  //     dateString = dateString + "-" + date.getFullYear();

  //     setData({ "dateString": dateString });
  //   }

  // }, [status]);

  useEffect(() => {
    if(status) {
      let date = status.dateState;
      console.log("In useEffect in Form.js and date is:",date);

      let month = (date.getMonth()+1)<10 ? "0"+(date.getMonth()+1) : ""+(date.getMonth()+1);
      let day = (date.getDate()<10 ? "0"+date.getDate() : date.getDate());
      let year = date.getFullYear();
      let dateString = ""+year+"-"+month+"-"+day;

      console.log("In useEffect in Form.js and dateString is:",dateString);

      getData(dateString);
    }

  }, [status]);


  function handleDateChange(date) {
    if(date) {
      console.log("In handleDateChange in Form.js and date is:",date);
      setFieldValue("dateState",date,true);
      setFieldTouched("dateState",true,true);

    } else {

      setFieldValue("dateState","",true);

    }
    
  }

  return (
    <>
      <FormCtrDiv>
        <Form>

          {/* This is for last communication date */}
          <DateSet date={values.dateState} handleDateChange={handleDateChange} errors={errors.dateState} touched={touched.dateState}/>

          

          <SubmitBtn textDisplay={"Get Picture"}/>
          
        </Form>
        
      </FormCtrDiv>


      {/* The following code is for testing purposes only */}
      {/* comment out in customer version of the code */}
      {/* <p>{`The date is: ${data.dateString}`}</p> */}

    </>

  );
    
 
 } //End of DateForm function
 
 
 
const FormikDateForm = withFormik({
  
  mapPropsToValues({ dateState }) {
    return {
      dateState: dateState || "",
    };
  },

  validationSchema: Yup.object().shape({
    dateState: Yup.mixed().required("Please set a date")
  }),
  
  handleSubmit(values, { setStatus, resetForm }) {

    resetForm();
    setStatus(values);

    //I don't need the if statements here, as it seems Formik will not execute handleSubmit until
    //touched is true and there are no errors
    
  },
  
  
})(DateForm); 
  
export default connect(null,{getData})(FormikDateForm);



