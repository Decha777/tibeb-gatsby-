import React from "react"
import styled from 'styled-components';

const StyledTitle = styled.div`
.section-tilte{
  color: ${props => props.tColor ? props.tColor : ''};
  background-color: ${props => props.bgColor ? props.bgColor : ''};
}
`;



const Title = ({ title , ...restProps}) => {
  return (
    <StyledTitle {...restProps}>
      <div className="section-title">
        <h2>{title || "default title"}</h2>
      </div>
    </StyledTitle>
  )
}

export default Title
