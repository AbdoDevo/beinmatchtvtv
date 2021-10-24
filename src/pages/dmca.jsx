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
const DMCA = () => {
  return (
    <Container> 
        

                    <TodayMatch>
                        <TextWrapper>
                        
                            <Title>DMCA</Title>
                           
                        </TextWrapper>
                        <Description>
                        <Text>All the video content found on the Be in Match is not hosted on our servers nor is created or uploaded by us </Text>

                        <Text>Be in Match simply acts as a search engine that finds videos from websites like YouTube, DailyMotion, Metacafe and other video portals</Text>

                        <Text>Be in Match is not responsible for external websites content</Text>

                        <Text>If you find that some of the content violates your rights you may request for that content to be brought down at the host that is responsible for the content</Text>

                        <Text>That will ensure that the content is removed from Be in Match and other search engines that may have indexed the content</Text>


                 </Description>
                    </TodayMatch>


       
    </Container>
  )
}

export default DMCA;
