import styled from "styled-components";

export const StyledQuestion = styled.div`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 2.4rem;

  & + .question {
    margin-top: 8px;
  }

  &.highlighted {
    background-color: #f4f0ff;
    border: 1px solid #835afd;

    footer .user-info span {
      color: #29292e;
    }
  }

  &.answered {
    background-color: #dbdcdd;
  }

  p {
    color: #29292e;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.4rem;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 50%;
      }

      span {
        margin-left: 0.8rem;
        color: #737380;
        font-size: 1.4rem;
      }
    }

    > div {
      display: flex;
      gap: 1.6rem;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: #737380;
        gap: 0.8rem;

        &.liked {
          color: #835afd;

          svg path {
            stroke: #835afd;
          }
        }
      }

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
