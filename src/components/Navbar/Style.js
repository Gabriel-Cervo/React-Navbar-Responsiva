import styled from 'styled-components';

export const Nav = styled.nav`
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    
    .logo {
        padding: 15px 0;
    }
`;

export const StyledBurger = styled.div`
    width: 25px;
    height: 25px;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none;
   
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
   
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ isOpen }) => isOpen ? '#ccc' : '#333'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
        transform: ${({ isOpen }) => isOpen ? 'rotate(35deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
        transform: ${({ isOpen }) => isOpen ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ isOpen }) => isOpen ? 0 : 1};
        }
        &:nth-child(3) {
        transform: ${({ isOpen }) => isOpen ? 'rotate(-35deg)' : 'rotate(0)'};
        }
    }
`;


export const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
   
   li {
      padding: 18px 10px;
    }

    a {
        color: #000000;
        text-decoration: none;

        &:hover {
          opacity: 0.4;
        }
      }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #000000;
        position: fixed;
        transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        
        li {
            margin: 0 auto;
        }

        a {
          color: #fff;
        }
    }
`;