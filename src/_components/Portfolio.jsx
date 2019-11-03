import React from "react";
import styled from "styled-components";
import Modal from "react-responsive-modal";

import { Layout, Header, Main, BottomMenu, Left, Center } from "../Layout";
import PathfindersBack from "../_components/images/path.jpg";
import ManuBack from "../_components/images/manu.jpg";

const PortContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "1 2";
  height: 15rem;
  width: 100%;
`;

const BackgroundSmall = styled.div`
  width: 100%;
  height: 100%;
`;

const PathfindersSmall = styled(BackgroundSmall)`
  background: url(${PathfindersBack});
  background-position: center top;
`;

const Pathfinders = styled.div`
  width: 18rem;
  height: 60vh;
  background: url(${PathfindersBack});
  background-position: center top;
`;

const ManuSmall = styled(BackgroundSmall)`
  background: url(${ManuBack});
  background-position: right top;
`;

const Manu = styled.div`
  width: 18rem;
  height: 60vh;
  background: url(${ManuBack});
  background-position: center top;
`;

export default class Portfolio extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onOpenModalManu = () => {
    this.setState({ openManu: true });
  };

  onCloseModalManu = () => {
    this.setState({ openManu: false });
  };

  render() {
    const { open } = this.state;
    const { openManu } = this.state;
    const { open3 } = this.state;

    return (
      <>
        <Layout noPadding>
          <Header>
            <Left>
              <button onClick={() => this.props.history.goBack()}>Back</button>
            </Left>
            <Center>Portfolio</Center>
          </Header>

          <Main noPadding>
            <PortContainer>
              <>
                <PathfindersSmall onClick={this.onOpenModal}></PathfindersSmall>
                <Modal open={open} onClose={this.onCloseModal} center>
                  <h3>Pathfinders</h3>
                  <Pathfinders />
                </Modal>
              </>
              <>
                <ManuSmall onClick={this.onOpenModalManu}></ManuSmall>
                <Modal open={openManu} onClose={this.onCloseModalManu} center>
                  <h3>Manu</h3>
                  <Manu />
                </Modal>
              </>
            </PortContainer>
            <PortContainer></PortContainer>
          </Main>
        </Layout>
        <BottomMenu current2 />
      </>
    );
  }
}
