import styled from "styled-components";

export const HeroStyle = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }

  #container {
    height: 100%;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 999px) {
      width: 100%;
    }

    @media only screen and (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .left-side {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;

      @media only screen and (max-width: 999px) {
        flex: 1;
        margin-left: 0.5rem;
      }

      @media only screen and (max-width: 768px) {
        align-items: center;
      }

      h1 {
        font-size: 4.5rem;

        @media only screen and (max-width: 999px) {
          font-size: 2.5rem;
        }

        @media only screen and (max-width: 768px) {
          text-align: center;
        }
      }

      .whatIDo {
        display: flex;
        align-items: center;
        gap: 1rem;

        .line {
          height: 5px;
        }

        h2 {
          color: var(--zimablue);
        }
      }

      .description {
        font-size: 24px;
        color: lightgray;

        @media only screen and (max-width: 999px) {
          font-size: 1rem;
        }

        @media only screen and (max-width: 768px) {
          padding: 20px;
          text-align: center;
        }
      }
    }
    .right-side {
      flex: 3;
      position: relative;

      @media only screen and (max-width: 999px) {
        flex: 2;
      }

      @media only screen and (max-width: 768px) {
        flex: 1;
        width: 100%;
      }

      .moon {
        width: 800px;
        height: 600px;
        object-fit: contain;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: animate 2s infinite ease alternate;

        @media only screen and (max-width: 999px) {
          width: 100%;
          height: 500px;
        }

        @media only screen and (max-width: 768px) {
          width: 100%;
          height: 600px;
        }
      }

      @keyframes animate {
        100% {
          transform: translateY(20px);
        }
      }
    }
  }
`;
