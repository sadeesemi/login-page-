import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const usePasswordToggle = () => {
  const [visible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(visibility => !visibility);
  };

  const InputType = visible ? 'text' : 'password';
  const Icon = (
    <FontAwesomeIcon
      icon={visible ? 'eye-slash' : 'eye'}
      onClick={toggleVisibility}
    />
  );

  return [InputType, Icon];
};

export default usePasswordToggle;


