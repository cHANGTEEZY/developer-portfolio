import Button, { ButtonText, ButtonIcon } from "./Button"

export type {
  ButtonBehavior,
  ButtonIconProps,
  ButtonTextProps,
} from "./Button"

export {
  compositionButtonVariants,
  type CompositionButtonVariantProps,
} from "./button-styles"

type ButtonCompoundComponent = typeof Button & {
  Text: typeof ButtonText
  Icon: typeof ButtonIcon
}

const CompoundButton = Button as ButtonCompoundComponent

CompoundButton.Text = ButtonText
CompoundButton.Icon = ButtonIcon

export default CompoundButton
