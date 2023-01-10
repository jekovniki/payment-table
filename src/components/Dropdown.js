import styled from "styled-components";
import React from "react";

const Dropdown = ({ options, onChange = () => {}, isDisabled = false }) => {
    const data = options?.data ? options.data : options;
    
    return (
        <DropdownContainer disabled={isDisabled} onChange={onChange}>
            {(() => {
                const options = [];
                let i = 1;
                for(const option in data) {
                    options.push(<Option key={i}>{ data[option] }</Option>);

                    i++;
                }

                return options;

            })()}
        </DropdownContainer>
    )
}

const DropdownContainer = styled.select`
    flex: 1;
    padding: 0.8rem;
    border: none;
    border-radius: 20px;
`;

const Option = styled.option`
    border-radius: 20px;
`;

export default Dropdown;