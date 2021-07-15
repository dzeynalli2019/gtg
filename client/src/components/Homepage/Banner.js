import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {getHomeDB} from '../../actions/home';

import { Container } from 'react-bootstrap';

 
const Banner = ({getHomeDB, home: { home } }) => {

    useEffect(() => {
        getHomeDB();
      }, [getHomeDB]);
      

    return (
        <Container>
        Hello 
        {home
          ? Object.entries(home)
            .filter(([_, value]) => value)
            .map(([key, value]) => (
                  <div key={key}>
                    <h6>
                        {value.title}
                    </h6>
                    <h6>
                        {value.text1}
                    </h6>
                    <h6>
                        {value.text2}
                    </h6>
                    <h6>
                        {value.text3}
                    </h6>
                  </div>

              ))
              
          : null}

          <Image>
              hello
          </Image>
          
        </Container>
    )
}

Banner.propTypes = {
    getHomeDB: PropTypes.func.isRequired,
    home: PropTypes.object.isRequired
};
  
const mapStateToProps = (state) => ({
   home: state.home
});
  
export default connect(mapStateToProps, { getHomeDB })(Banner);

const Image = styled.div`
    width: 100px;
    background-color: red;
    color: white;
    margin: 10px;
    border-radius: 50%;
    overflow: hidden;
    transition-duration: 5s;
    transition-property: transform;

    :hover {
        transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    }
`;