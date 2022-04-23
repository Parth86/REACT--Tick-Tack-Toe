function App() {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("h1", null, "Tick-Tack-Toe Game"), /*#__PURE__*/
    React.createElement(Game, null)));


}

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement(Board, null));

  }}


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      next: 'X' };

  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (squares[i] || calculateWinner(this.state.squares)) return;
    squares[i] = this.state.next;
    this.setState({
      squares: squares,
      next: this.state.next === 'X' ? 'O' : 'X' });

  }
  renderSquare(i) {
    return /*#__PURE__*/(
      React.createElement(Square, {
        value: this.state.squares[i],
        onClick: () => this.handleClick(i) }));


  }

  render() {
    const winner = calculateWinner(this.state.squares); // 'X' or 'O' or null
    let status;
    if (winner) status = 'Winner: ' + winner;else
    status = `Next Player: ${this.state.next}`;
    return /*#__PURE__*/(
      React.createElement("div", { className: "board" }, /*#__PURE__*/
      React.createElement("div", { className: "status" }, status), /*#__PURE__*/
      React.createElement("div", { className: "board-row" },
      this.renderSquare(0),
      this.renderSquare(1),
      this.renderSquare(2)), /*#__PURE__*/

      React.createElement("div", { className: "board-row" },
      this.renderSquare(3),
      this.renderSquare(4),
      this.renderSquare(5)), /*#__PURE__*/

      React.createElement("div", { className: "board-row" },
      this.renderSquare(6),
      this.renderSquare(7),
      this.renderSquare(8))));



  }}


class Square extends React.Component {
  render() {
    const { value, onClick } = this.props;
    return /*#__PURE__*/(
      React.createElement("button", { onClick: onClick, className: "square" }, value));

  }}


function calculateWinner(squares) {
  const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#root'));
//App -> Game -> Board -> Square