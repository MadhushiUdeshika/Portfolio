
import React from 'react'
import styled from 'styled-components'

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`
const CareerSubtitle = styled.p`
  font-style: italic;
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 4px;
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`
const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`
const Role = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 4px;
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  margin-top: 2px;
`;

const Modules = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Module = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;


const CareerCard = ({ career }) => {
    return (
        <Card>
            <Top>
                <Image src={career?.img} />
                <Body>
                    <Title>{career?.title}</Title>
                    {career?.subtitle && <CareerSubtitle>{career.subtitle}</CareerSubtitle>}
                    {career?.role && <Role>{career.role}</Role>} {/* optional role */}
                    {career?.date && <Date>{career.date} {career?.location && `· ${career.location}`}</Date>}
                </Body>
            </Top>

            <Description>
                {career?.desc && <Span>{career.desc}</Span>}
                {career?.highlights && career.highlights.length > 0 && (
                    <Modules>
                        {career.highlights.map((item, index) => (
                            <Module key={index}>• {item}</Module>
                        ))}
                    </Modules>
                )}
            </Description>

            {career?.link && (
                <a
                    href={career.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: '#854CE6', fontWeight: '600', marginTop: '6px', display: 'inline-block' }}
                >
                    Read more
                </a>
            )}
        </Card>
    );
};


export default CareerCard;