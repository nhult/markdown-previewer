var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.onInputChange = function (e) {
      _this.setState({ input: e.target.value /* , () => { console.log(this.state.input) } */ });
    };

    _this.state = {
      input: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(InputField, { onInputChange: this.onInputChange, value: this.state.input }),
        React.createElement(Preview, { markdown: this.state.input })
      );
    }
  }]);

  return App;
}(React.Component);

var InputField = function InputField(_ref, props) {
  var onInputChange = _ref.onInputChange;

  return React.createElement('textarea', { id: 'markdown-input', rows: '4', cols: '50', onChange: onInputChange, value: props.value });
};
var Preview = function Preview(props) {

  var createMarkup = function createMarkup() {
    return { __html: marked(props.markdown) };
  };

  return React.createElement('div', { id: 'markdown-preview', dangerouslySetInnerHTML: createMarkup() });
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));