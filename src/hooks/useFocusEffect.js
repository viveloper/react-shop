import React from 'react';

export default () => {
  const ref = React.useRef();

  React.useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return ref;
};
