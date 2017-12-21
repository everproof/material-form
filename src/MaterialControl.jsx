// @flow
import React from 'react'
import { FormControlLabel, FormHelperText } from 'material-ui/Form'
import { withStyles } from 'material-ui/styles'
import type { ElementType } from 'react'

export type Props = {
  label: string,
  meta?: { error?: string, touched?: boolean, warning?: string },
  style?: Object,
}

export default withStyles(({ spacing }: { spacing: { unit: number } }) => ({
  control: { margin: spacing.unit },
  helperText: { marginLeft: spacing.unit * 4.5, minHeight: 0 },
}))(
  ({
    className,
    classes: { control, helperText },
    control: Control,
    label,
    meta: { error, touched, warning } = {},
    style,
    ...props
  }: {
    className?: string,
    classes: { control: string, helperText: string },
    control: ElementType | Function,
  } & Props) => {
    const errorText = touched && (error || warning)

    return (
      <div
        className={className ? `${className} ${control}` : control}
        style={style}
      >
        <FormControlLabel control={<Control {...props} />} label={label} />
        <FormHelperText
          className={helperText}
          error={Boolean(errorText)}
          style={errorText ? {} : { margin: 0 }}
        >
          {errorText}
        </FormHelperText>
      </div>
    )
  },
)
