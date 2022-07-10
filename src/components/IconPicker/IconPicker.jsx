import {
  IconPickerOverlay,
  IconPickerContainer,
  ExitForm,
  IconsList,
  IconsListItem
} from './IconPicker.styles';

import iconsNames from '../../data/icons.names.json';

const IconPicker = ({ setCategoryData, setIsOpen, isOpen, itemsColor }) => {
  const handleClick = e => {
    const iconName = e.target.closest('li').dataset.name;

    setCategoryData(prevData => {
      return { ...prevData, icon: iconName };
    });
    setIsOpen(false);
  };

  const handleExit = () => setIsOpen(false);

  return (
    <IconPickerOverlay setOpen={setIsOpen} open={isOpen} overlayRadius>
      <IconPickerContainer>
        <ExitForm onClick={handleExit}>&#10005;</ExitForm>
        <IconsList>
          {iconsNames.map((icon, index) => (
            <IconsListItem
              key={index}
              data-name={icon}
              onClick={handleClick}
              bgColor={itemsColor}
            >
              <img src={`/assets/icons/${icon}.svg`} alt={`${icon} icon`} />
            </IconsListItem>
          ))}
        </IconsList>
      </IconPickerContainer>
    </IconPickerOverlay>
  );
};

export default IconPicker;
