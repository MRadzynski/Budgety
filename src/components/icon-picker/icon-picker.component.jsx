import { IconPickerOverlay, IconPickerContainer, ExitForm, IconsList, IconsListItem } from './icon-picker.styles'

import iconsNames from '../../icons.names';

const IconPicker = ({ setCategoryData, setIsOpen, isOpen, itemsColor }) => {
  const handleClick = (e) => {
    const iconName = e.target.closest('li').dataset.name;

    setCategoryData(prevData => { return { ...prevData, icon: iconName } })
    setIsOpen(false);
  }

  const handleExit = () => setIsOpen(false);

  return (
    <IconPickerOverlay setOpen={setIsOpen} open={isOpen}>
      <IconPickerContainer>
        <ExitForm onClick={handleExit}>&#10005;</ExitForm>
        <IconsList>
          {iconsNames.map((icon, index) =>
            <IconsListItem key={index} data-name={icon} onClick={handleClick} bgColor={itemsColor}>
              <img src={`/assets/icons/${icon}.svg`} alt={`${icon} icon`} />
            </IconsListItem>)}
        </IconsList>
      </IconPickerContainer>
    </IconPickerOverlay>
  )
}

export default IconPicker;