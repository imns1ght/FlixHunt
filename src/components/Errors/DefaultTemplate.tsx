import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Section } from '../Containers'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomText from '../CustomText'
import { CustomButton } from '../Buttons'
import { colors } from '~/styles'

export type DefaultTemplateType = {
  iconName: string
  message: string
  actionTitle?: string
  action?: () => void
}

const DefaultTemplate = ({ iconName, message, actionTitle, action }: DefaultTemplateType) => {
  return (
    <Section centered>
      <View style={styles.container}>
        <Icon name={iconName} size={80} color={colors.white} />
        <CustomText type='paragraph' style={styles.message}>
          {message}
        </CustomText>
        {action && actionTitle && (
          <CustomButton title={actionTitle} onPress={action} type='rounded' />
        )}
      </View>
    </Section>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 10,
  },
  message: {
    textAlign: 'center',
  },
})

export default DefaultTemplate
