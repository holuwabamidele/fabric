import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [fabricData, setFabricData] = useState([]);

  const getFabricData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setFabricData(res.data));
  };

  useEffect(() => {
    getFabricData();
  }, []);
  // console.log(fabricData);
  return (
    <Container>
      <Wrapper>
        <h1>All Fabrics</h1>
        <CardHolder>
          {fabricData.map((data, index) => (
            <Card key={index}>
              <main>
                <img src={data.image} alt="" />
              </main>
              <h3>{data.title}</h3>
              <p>{data.category}</p>
              <span>{data.price}</span>
            </Card>
          ))}
        </CardHolder>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  font-family: Montserrat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
const CardHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  text-align: center;
  margin: 10px 30px;
  main {
    background-color: #e9e9ea;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    img {
      margin: 30px;
      width: 150px;
      height: 150px;
      cursor: pointer;
      margin: 0;
    }
  }
  h3 {
    font-size: 10px;
    /* background-color: red; */
    width: 200px;
    white-space: nowrap;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    font-weight: 500;
    font-size: 10px;
    cursor: pointer;
    margin: 0;
  }
  span {
    font-weight: 500;
    font-size: 8px;
    cursor: pointer;
    margin: 0;
  }
`;
