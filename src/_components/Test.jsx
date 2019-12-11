import React from "react";
import { Layout, Header, Main, Center } from "../Layout";
import { max } from "moment";

const Characters = [
  {
    name: "Name",
    lastname: "Freeman",
    age: 88
  },
  {
    name: "Name2",
    lastname: "Apellido",
    age: 90
  },
  {
    name: "Name3",
    lastname: "33",
    age: 90
  }
];


function PersonalData({name, lastname,age}){
  return <div><p>{`${name} ${lastname} tiene esta edad: ${age}`}</p>  </div>
}

function MisPersonajes(){
    return Characters.map((element)=>(<PersonalData name={element.name} lastname={element.lastname} age={element.age}></PersonalData>))
}

export default function About() {
  return (
    <>
      <Layout noPadding>
        <Header>
          <Center>Test</Center>
        </Header>
        <Main>
          <MisPersonajes></MisPersonajes>
        </Main>
      </Layout>
    </>
  );
}