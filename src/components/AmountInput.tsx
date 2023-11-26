import { NumericFormat, NumericFormatProps } from 'react-number-format';
import React from 'react';
import { CustomTextField } from './CustomMUIComponents';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value
            }
          });
        }}
        color="#0277bd"
        thousandSeparator
        valueIsNumericString
        decimalScale={2}
        prefix="₴"
      />
    );
  }
);

type AmountInputProps = {
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  label: string,
  width?: string
}

export function AmountInput(props: AmountInputProps) {
  const {value, onChange,  label, width} = props;
  return         <>
    <CustomTextField
      sx={{ width: width }}
      variant="outlined"
      InputProps={{
        inputComponent: NumericFormatCustom as any,
        style: {height: "56px", fontSize: "1rem", borderRadius: "8px"}
      }}
      value={value}
      onChange={onChange}
      placeholder={label}
      
    />
  </>
}