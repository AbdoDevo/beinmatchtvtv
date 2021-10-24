import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

 
    display: flex;
    flex-direction: column;
    margin: 5px 10px;
    align-items: center;
    min-height: 80vh;



`

const TodayMatch =styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

        
`

const TextWrapper =styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;

        background-color: #ccc;
        font-family: Arial;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    padding: 8px 10px;
    float: right;
`

const Title = styled.span`
width: 100%;
        text-align: center;

`
const Description = styled.div`
   margin: 5px 15px;
    border: 1px #ccc solid;
    border-radius: 10px;
    padding: 15px 20px;
    display: flex;
    flex-direction: column;

`
const Text=styled.span`
    font-size: 14px;
    text-align: center;
    font-family: Tahoma,Verdana,Segoe,sans-serif;
    font-weight: bold;
    margin: 5px 15px;
   
`
const Advertiser = () => {
  return (
    <Container> 
        

                    <TodayMatch>
                        <TextWrapper>
                        
                            <Title>لإعلاناتكم على موقعنا</Title>
                           
                        </TextWrapper>
                        <Description>
                        <Text>لإعلانتكم على موقعنا يرجى مراسلتنا على العنوان الإلكتروني الظاهر تحت</Text>

                        <Text><a href="mailto:beinmatchmedia@gmail.com">beinmatchmedia@gmail.com</a></Text>


                 </Description>
                    </TodayMatch>


       
    </Container>
  )
}

export default Advertiser;
