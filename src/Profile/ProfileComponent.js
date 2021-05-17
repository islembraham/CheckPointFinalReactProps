import React from 'react'
import { Button, Card } from 'react-bootstrap';
import PropTypes from "prop-types";

const ProfileComponent = ({
  data,
  handelName,children}) => {
    
    return (
    
      <div>
        <Card style={{ width: "18rem" }}>
          
          <Card.Body>
            {children}
            <Card.Title>{data.fullName}</Card.Title>
            <Card.Text>
              {data.bio}
            </Card.Text>
            { console.log(data)}
            <Card.Text>
              {data.profession}
            </Card.Text>
            <Button variant="primary" onClick={() => handelName(data.fullName)}>Say Hi</Button>
          </Card.Body>
        </Card>
      </div>
    );

    
}

ProfileComponent.propTypes = {
  data: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
  }),

  handelName: PropTypes.func.isRequired,
};

ProfileComponent.defaultProps = {
  profession: "No Profession found",
};



export default ProfileComponent
