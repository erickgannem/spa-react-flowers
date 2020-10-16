import React from 'react';
import './index.css';

import { Jumbotron } from 'react-bootstrap';

function About() {
  return (
    <Jumbotron as="div" className="app-jumbotron">
      <h3>El Jardin de Mamá</h3>
      <hr className="app-separator" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque rerum natus iusto commodi obcaecati consequuntur recusandae placeat molestias, molestiae tempora aliquid eaque, cupiditate iste delectus repellendus dolores similique? Consequuntur, laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia ipsa assumenda itaque quo inventore aliquam animi quibusdam quisquam aperiam! Aut ipsam magni hic praesentium eaque tempore officiis? Molestias, veniam?
      </p>
    </Jumbotron>

  );
}

export default About;
