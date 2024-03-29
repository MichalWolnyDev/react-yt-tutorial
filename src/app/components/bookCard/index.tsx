import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Marginer } from "../../components/marginer"
import { Button } from "../../components/button";
import styled from "styled-components";
import tw from "twin.macro";

const CardContainer = styled.div`
    min-height: 4.3em;
    box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, .4);
    ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pl-9
        md:pr-9
    `}
`;

const ItemContainer = styled.div`
    ${tw`
     flex
    `}
`;

const Icon = styled.span`
    ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `}
`;

const Name = styled.div`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
  `}  
`;

const LineSeparator = styled.span`
    width: 2px;
    height: 45%;
    
    ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
    `}
`

export function BookCard(){

    return <CardContainer>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt}/>
            </Icon>
            <Name>Wybierz datę</Name>
        </ItemContainer>
        <LineSeparator/>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt}/>
            </Icon>
            <Name>Return date</Name>
        </ItemContainer>
        <Marginer direction="horizontal" margin="2em"/>
        <Button text="Zarezerwuj jazdę"/>
    </CardContainer>

}