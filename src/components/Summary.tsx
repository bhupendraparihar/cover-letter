import React, { useContext } from 'react';
import AppState from '../Store';

function Summary() {
  const { orgName, role } = useContext(AppState);
  return (
    <div className="preview" contentEditable="true">
      <p>Hi,</p>

      <p>
        I am writing to express my keen interest in the {role} role at {orgName}
        , as advertised on LinkedIn. With over 14 years of experience in the
        field of Full Stack Development and a strong foundation in Computer
        Science, I am excited about the opportunity to contribute my expertise
        to your esteemed team.
      </p>

      <p>
        Thank you for considering my application. I am eager to discuss how my
        skills and experience align with your requirements in more detail.
        Please feel free to contact me at 9008008084 or
        bhupendrasparihar@gmail.com . I look forward to the opportunity to
        demonstrate how I can contribute to the success of {orgName}.
      </p>

      <p>Sincerely,</p>
      <p>Bhupendra Parihar</p>
    </div>
  );
}

export default Summary;
