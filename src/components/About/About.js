import React from 'react';
import Perk from '../../Images/perks.jpg';

function About() {
  return <div>
    <h2>About us</h2>
    <p> We are a small company that speicalise is selling Perk A Colas</p>
    <p> We have been established since 2024 and are currently setting up partnerships</p>
    <p>with Social Media creators to not only promote us butto also promote our products</p>
    <p>But that's enough about us</p>
    <br/>
    <br/>
    <h3>What are Perk a Colas?</h3>
    <img src={Perk} width="560" height="315"/>
    <br/>
    <br/>
    <p>The effects of the perks are varied and can make your best build in Call of Duty: Black Ops 6 even better.</p>
    <p> The stacks will stay until you die, but, if you meet certain conditions and your teammates revive you before a certain point, </p>
    <p> you can keep those perks.</p>
  </div>;
}

export default About;
