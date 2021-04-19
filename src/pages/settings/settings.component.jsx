import React from 'react';

import {
  SettingsContainer,
  SettingsTitle,
  SettingsGroupTitle,
  SettingsGroup,
} from './settings.styles';

const Settings = () => (
  <SettingsContainer>
    <SettingsTitle>Settings</SettingsTitle>
    <SettingsGroup>
      <SettingsGroupTitle>User</SettingsGroupTitle>
    </SettingsGroup>
    <SettingsGroup>
      <SettingsGroupTitle>Data</SettingsGroupTitle>
    </SettingsGroup>
    <SettingsGroup>
      <SettingsGroupTitle>Danger Zone</SettingsGroupTitle>
    </SettingsGroup>
  </SettingsContainer>
);

export default Settings;
