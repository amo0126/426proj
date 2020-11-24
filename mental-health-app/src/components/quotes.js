import React from "react";

// Thanks to https://theysaidso.com/api/ for the API

export class Quotes extends React.Component {
  state = {
    loading: true,
    quote: null
  };

  async componentDidMount() {
    const url = "https://quotes.rest/qod?category=life&language=en&api_key=q4SBTpgbwGNgBbfRxuV0FgeF";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ quote: data.contents.quotes[0], loading: false });
    console.log(data.contents.quotes[0]);
  }

  render() {
    if (this.state.loading) {
      return <div></div>;
    }

    return (
      <div class='quote'>
          <div >{this.state.quote.quote}</div>
          <div>-{this.state.quote.author}</div>
      </div>
    );
  }
}

export default Quotes;