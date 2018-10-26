function mySettings(props) {
  return (
    <Page>
      <Section title={<Text bold align="center">Token Key</Text>}>
        <TextInput
          title="Paste key here"
          label="TOTP token key (hex)"
          settingsKey="setting_tokenKey"
          action="Save Key"
         />
      </Section>
    </Page>     
  );
}

registerSettingsPage(mySettings);