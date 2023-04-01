import styled from "styled-components";

export const StyledHeader = styled.header`
    position: relative;
    padding: 1rem 0;

.navbar{
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

li a{
    text-decoration: none;
    color: #fff;
    font-size: 2.7rem;
}

li a:hover{
        color: #726565;
    transition: .5s;
}

.navbar .links{
    display: flex;
    gap: 2rem;
}



.navbar .toggle_btn{
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    display: none;
    padding: 0 1rem;
}

/*RESPONSIVE DESIGN*/
@media(max-width: 992px){
    .navbar .links{
        display: none;
    }

    .navbar .toggle_btn{
        display: block;
    }
}

`