import React from 'react';
import styled from 'styled-components';


const Group = styled.optgroup`

`;


const OptGroup = ({items, ...props}) => {
    const itemsGroup = items.map((e, i) => {
        return (
            <option key={i}>
                {e.title}
             </option>
        )
    })
    return (
        <Group label={props.label}> 
            {itemsGroup}
        </Group>
    )
}

export default OptGroup;
