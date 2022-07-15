import ICON_NAMES from '../../data/icons.names.json';
import {
  ExitForm,
  IconPickerContainer,
  IconPickerOverlay,
  IconsList,
  IconsListItem
} from './IconPicker.styles';

const IconPicker = ({ isOpen, itemsColor, setCategoryData, setIsOpen }) => {
  const handleClick = e => {
    const iconName = e.target.closest('li').dataset.name;

    setCategoryData(prevData => ({ ...prevData, icon: iconName }));
    setIsOpen(false);
  };

  const handleExit = () => setIsOpen(false);

  return (
    <IconPickerOverlay open={isOpen} overlayRadius setOpen={setIsOpen}>
      <IconPickerContainer>
        <ExitForm onClick={handleExit}>&#10005;</ExitForm>
        <IconsList>
          {ICON_NAMES.map((icon, index) => (
            <IconsListItem
              bgColor={itemsColor}
              data-name={icon}
              key={index}
              onClick={handleClick}
            >
              <img alt={`${icon} icon`} src={`/assets/icons/${icon}.svg`} />
            </IconsListItem>
          ))}
        </IconsList>
      </IconPickerContainer>
    </IconPickerOverlay>
  );
};

export default IconPicker;
