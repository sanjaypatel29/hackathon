import React, { Component } from "react";
import axios from "axios";

export default class AllDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {},
    };
  }

  componentDidMount() {
    // This is placed inside
    
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.revvsales.com/api/docstemplate/?page_num=1&status=ACTIVE",
        {
          headers: {
            AccessToken:
            "eyJraWQiOiIyWm1yRW1rdHpJamxCQTlhTzE0MzhBUWxmcmZOV3ROYTV0RXJ4WHJTTlB3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhNGU5MTIzMC1lMWQ2LTRhMDctYTA4NC1lN2MxZDdjNGNiNGUiLCJldmVudF9pZCI6IjkxMGIzNzY4LThlYmYtNGE5ZC1hYWI1LTgzODY1N2Y3MzdiMyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MDA0MDMzNjcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2Z0MWRTOTZTYyIsImV4cCI6MTYwMDQwNjk2NywiaWF0IjoxNjAwNDAzMzY3LCJqdGkiOiI1YmQ2OGE4Yi1hOTQ3LTQ4MTgtYjg3Zi02NTBlZGVjMzFlZjkiLCJjbGllbnRfaWQiOiI3dDd0OHBjNGZjOWIwZm50OWFrOW5zMzg1NiIsInVzZXJuYW1lIjoiYTRlOTEyMzAtZTFkNi00YTA3LWEwODQtZTdjMWQ3YzRjYjRlIn0.XVe2Qj0yR1-eCgsegYqZE267PhRfI8cfB5NsA6wuF6FQPtvqpSP5TouCjB9JIJaAOyIlzUpZbhLbotl_tjMbF-GBMbV7F-FvBipIW6BsbHljUH_s5CdE1rxNByDlnyqU6R7Kn-kQrCFLVXkPvK_A07yJsayrfr1XiNpxmCPAlALq5tykMoqfLqRWyvOsEmlcAdEgVOknwmY-lDKF9_ev7vkl8o-FUMD0jNVv27aHMG-eylERdZXVrVr1SmFQCMo9BcKAcnte7hU8cS5oWYleVtjMbrvbwLKZMgA-hcvJcqBfzl6lwIHA34JRXpuCPTecZ97Z5F4UbH8egLsQgcLn5g"
          },
        }
      )
      .then((res) => {
        const data = res.data.Templates;
        console.log("hii: " + data);
        this.setState({
          obj: data,
          error: false,
        });
      })
      .catch((error) =>
        this.setState({
          error: true,
          errorMessage: error,
        })
      );
  }

  render() {
    console.log("1");
    const { obj } = this.state;
    const data = obj;
    const thumbnail = [];
    // let k = 0;
    const title = [];
    for (let i = 0; i < data.length; i++) {
      console.log( data[i].title )
      title.push(data[i].title);
      thumbnail.push(
        <div>
          <img
            alt="logo"
            height="200px"
            width="150px"
            style={{ margin: "10px" }}
            src={data[i].thumbnail}
          />
          <p
            style={{
              padding: "5px",
              width: "90px",
              textAlign: "center",
              margin: "10px",
            }}
          >
            {data[i].title}
          </p>
        </div>
      );
    }
    console.log(thumbnail);
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          {thumbnail}
          {/* {title} */}
        </div>
      </>
    );
  }
}
