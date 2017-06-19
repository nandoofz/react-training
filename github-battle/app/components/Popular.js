var React = require('react');

class Popular extends React.Component {
  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];


    return (
      <div>
        {
          languages.map((lang) => {
            return (
              <li>
                {lang}
              </li>
            )
          })
        }
      </div>
    )
  }
}

module.exports = Popular;