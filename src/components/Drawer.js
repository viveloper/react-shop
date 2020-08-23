import React from 'react';
import PropTypes from 'prop-types';

export default class Drawer extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    component: PropTypes.elementType.isRequired,
  };

  open() {
    document.body.style.transform = 'translateX(-320px)';
  }

  close() {
    document.body.style.transform = 'none';
  }

  componentDidMount() {
    document.body.style.transition = 'all 0.25s ease-out';
    if (this.props.isOpen) {
      this.open();
    } else {
      this.close();
    }
  }

  shouldComponentUpdate(nextProps) {
    nextProps.isOpen ? this.open() : this.close();
    return true;
  }

  render() {
    const { component: Component } = this.props;
    return (
      <React.Fragment>
        <div className="drawer">
          <Component {...this.props} />
        </div>
        <style jsx>
          {`
            .drawer {
              position: fixed;
              width: 320px;
              right: -320px;
              top: 0;
              bottom: 0;
              max-width: 95%;
              z-index: 10;
              color: #333;
              background-color: #fff;
              border-left: none;
              box-shadow: 0 0px 36px 0 rgba(0, 0, 0, 0.1);
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

// import React from 'react';
// import PropTypes from 'prop-types';

// function Drawer(props) {
//   const open = () => {
//     document.body.style.transition = 'translateX(-320px)';
//   }

//   const close = () => {
//     document.body.style.transition = 'translateX(0)';
//   }

//   return (
//     <React.Fragment>
//       <div className="drawer"></div>
//       <style jsx global>
//         {`
//           body {
//             transition: all 0.25s ease-out;
//           }
//         `}
//       </style>
//     </React.Fragment>
//   );
// }

// Drawer.propTypes = {
//   isOpen:
// };

// export default Drawer;
